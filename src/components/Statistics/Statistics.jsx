import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
const Statistics = () => {
  const data = [
    {
      subject: "Assignment-1",
      marksGot: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-2",
      marksGot: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-3",
      marksGot: 59,
      fullMark: 60,
    },
    {
      subject: "Assignment-4",
      marksGot: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-5",
      marksGot: 53,
      fullMark: 60,
    },
    {
      subject: "Assignment-6",
      marksGot: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-7",
      marksGot: 60,
      fullMark: 60,
    },
    {
      subject: "Assignment-8",
      marksGot: 60,
      fullMark: 60,
    },
  ];

  return (
    <div className="container text-center">
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Tooltip> </Tooltip>
        <PolarRadiusAxis />
        <Radar
          name="Marks Got out of 60"
          dataKey="marksGot"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.5}
        />
      </RadarChart>
    </div>
  );
};

export default Statistics;
