import React, { useState } from "react";
import { extent, max, min } from "@visx/vendor/d3-array";
import * as allCurves from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";
import { billRecords, UtilityRecord } from "@/mockdata/bills";

type CurveType = keyof typeof allCurves;

type DateValue = { date: Date; value: number };

const transformData = (records: UtilityRecord[]): DateValue[] => {
  return records.map(record => ({
    date: new Date(record.date * 1000),
    value: record.consumption,
  })).sort((a, b) => a.date.getTime() - b.date.getTime());
};

const series = [transformData(billRecords)];
const allData = series.flat();

const getX = (d: DateValue) => d.date;
const getY = (d: DateValue) => d.value;

export default function Graph({
  width,
  height,
  showControls = true,
}: {
  width: number;
  height: number;
  showControls?: boolean;
}) {
  const [curveType, setCurveType] = useState<CurveType>("curveMonotoneX");
  const svgHeight = showControls ? height - 10 : height;

  // Add padding to the domain
  const minValue = min(allData, getY) as number;
  const maxValue = max(allData, getY) as number;
  const padding = (maxValue - minValue) * 0.05; // 5% padding

  const xScale = scaleTime<number>({
    domain: extent(allData, getX) as [Date, Date],
    range: [0, width],
  });
  const yScale = scaleLinear<number>({
    domain: [minValue - padding, maxValue + padding], // Adjust domain to add padding
    range: [svgHeight, 0],
  });

  return (
    <div className="visx-curves-demo">
      <svg width={width} height={svgHeight}>
        <rect width={width} height={svgHeight} fill="#efefef" rx={14} ry={14} />
        {series.map((lineData, i) => (
          <Group key={`line-${i}`}>
            {lineData.map((d, j) => (
              <circle
                key={`point-${i}-${j}`}
                r={2} // Smaller radius for cleaner look
                cx={xScale(getX(d))}
                cy={yScale(getY(d))}
                stroke="rgba(33,33,33,0.5)"
                fill="transparent"
                strokeOpacity={0.8} // Slightly higher opacity for visibility
              />
            ))}
            <LinePath<DateValue>
              curve={allCurves[curveType]}
              data={lineData}
              x={(d) => xScale(getX(d)) ?? 0}
              y={(d) => yScale(getY(d)) ?? 0}
              stroke="#333"
              strokeWidth={1.5} // Thinner line for a cleaner look
              strokeOpacity={0.8}
              shapeRendering="geometricPrecision"
            />
          </Group>
        ))}
      </svg>
    </div>
  );
}
