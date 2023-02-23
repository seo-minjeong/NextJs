import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "2.23",
    red: 2500,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 4908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2.18",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 2490,
    pv: 2300,
    amt: 2100,
  },
  {
    uv: 1490,
    pv: 5300,
    amt: 2100,
  },
  {
    uv: 3490,
    pv: 6300,
    amt: 2100,
  },
  {
    name: "2.13",
    uv: 1490,
    pv: 2300,
    amt: 2100,
  },
  {
    uv: 490,
    pv: 2300,
    amt: 2100,
  },
  {
    uv: 2490,
    pv: 7300,
    amt: 2100,
  },
  {
    uv: 1490,
    pv: 3300,
    amt: 2100,
  },
  {
    uv: 8490,
    pv: 2300,
    amt: 2100,
  },
  {
    name: "2.8",
    uv: 890,
    pv: 1300,
    amt: 2100,
  },
  {
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="red" stackId="a" fill="#CA1415" width="10px" />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" width="10px" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" width="10px" />
      </BarChart>
    </div>
  );
}

const BarContainer = styled.div`
  background: gray;
`;
