import React, { useState } from "react";
import { extent, max } from "@visx/vendor/d3-array";
import * as allCurves from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";

type CurveType = keyof typeof allCurves;

// Assuming DateValue structure for consistency
type DateValue = { date: Date; value: number };

// Hardcode 40 values within the specified range
const generateHardcodedData = (): DateValue[] => {
  let data: DateValue[] = [];
  const startDate = new Date();
  for (let i = 0; i < 40; i++) {
    const date = new Date(startDate.getTime() + i * 1000 * 60 * 60 * 24); // Increment by day for each point
    const value = 400 + Math.random() * (950 - 400); // Generate value in the range of 400 to 950
    data.push({ date, value });
  }
  return data.sort((a, b) => a.date.getTime() - b.date.getTime()); // Ensure sorted by date
};

const series = [generateHardcodedData()]; // Wrap in an array to match the expected structure
const allData = series.flat(); // Flatten the array for processing

// data accessors
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
  const [curveType, setCurveType] = useState<CurveType>("curveNatural");
  const svgHeight = showControls ? height - 10 : height;

  // Scales setup
  const xScale = scaleTime<number>({
    domain: extent(allData, getX) as [Date, Date],
    range: [0, width],
  });
  const yScale = scaleLinear<number>({
    domain: [0, max(allData, getY) as number],
    range: [svgHeight, 0],
  });

  return (
    <div className="visx-curves-demo">
      <svg width={width} height={svgHeight}>
        {/* Markers setup remains unchanged */}
        <rect width={width} height={svgHeight} fill="#efefef" rx={14} ry={14} />
        {series.map((lineData, i) => (
          <Group key={`line-${i}`}>
            {lineData.map((d, j) => (
              <circle
                key={`point-${i}-${j}`}
                r={3}
                cx={xScale(getX(d))}
                cy={yScale(getY(d))}
                stroke="rgba(33,33,33,0.5)"
                fill="transparent"
              />
            ))}
            <LinePath<DateValue>
              curve={allCurves[curveType]}
              data={lineData}
              x={(d) => xScale(getX(d)) ?? 0}
              y={(d) => yScale(getY(d)) ?? 0}
              stroke="#333"
              strokeWidth={2}
              strokeOpacity={0.6}
              shapeRendering="geometricPrecision"
              markerMid="url(#marker-circle)"
            />
          </Group>
        ))}
      </svg>
    </div>
  );
}
