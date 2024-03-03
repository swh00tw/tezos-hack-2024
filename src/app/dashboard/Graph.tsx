import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleBand, scaleLinear } from "@visx/scale";
import { billRecords, UtilityRecord } from "@/mockdata/bills";
import { timeFormat } from "d3-time-format";

type DateValue = { date: Date; value: number };

const transformData = (records: UtilityRecord[]): DateValue[] => {
  return records
    .map((record) => ({
      date: new Date(record.date * 1000),
      value: record.consumption,
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};

const allData = transformData(billRecords);

const getX = (d: DateValue) => d.date;
const getY = (d: DateValue) => d.value;

export default function Graph({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  // Adjusted margins to allow space for axis labels
  const margin = { top: 20, bottom: 50, left: 50, right: 20 };

  // Define scales
  const xScale = scaleBand<Date>({
    range: [margin.left, width - margin.right],
    round: true,
    domain: allData.map(getX),
    padding: 0.4,
  });
  const yScale = scaleLinear<number>({
    range: [height - margin.bottom, margin.top],
    round: true,
    domain: [0, Math.max(...allData.map(getY))],
  });

  // Date formatter for the x-axis
  const formatDate = timeFormat("%b %d, '%y");

  return (
    <div className="visx-bar-graph-demo">
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="#efefef" />
        <Group>
          {allData.map((d, i) => {
            const barWidth = xScale.bandwidth();
            const barHeight = height - margin.bottom - (yScale(getY(d)) ?? 0);
            const barX = xScale(getX(d));
            const barY = height - margin.bottom - barHeight;
            return (
              <Bar
                key={`bar-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="#2C9A66"
              />
            );
          })}
        </Group>
        {/* Render the x-axis */}
        <AxisBottom
          top={height - margin.bottom}
          scale={xScale}
          tickFormat={formatDate}
          stroke={"#333"}
          tickStroke={"#333"}
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 9,
            textAnchor: "middle",
          })}
        />
        {/* Render the y-axis */}
        <AxisLeft
          left={margin.left}
          scale={yScale}
          stroke={"#333"}
          tickStroke={"#333"}
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 11,
            textAnchor: "end",
            dx: "-0.25em",
            dy: "0.25em",
          })}
        />
      </svg>
    </div>
  );
}
