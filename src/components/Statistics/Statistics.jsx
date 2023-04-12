import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
const Statistics = () => {
    const data = useLoaderData()
  return (
    <div className="container text-center ">
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
