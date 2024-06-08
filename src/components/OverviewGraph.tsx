import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    monthNo: "1",
    month: "January",
    morningWeight: 60,
    eveningWeight: 60.5,
  },
  {
    monthNo: "2",
    month: "February",
    morningWeight: 55,
    eveningWeight: 55.5,
  },
  {
    monthNo: "3",
    month: "March",
    morningWeight: 50,
    eveningWeight: 50.5,
  },
  {
    monthNo: "4",
    month: "April",
    morningWeight: 45,
    eveningWeight: 45.5,
  },
  {
    monthNo: "5",
    month: "May",
    morningWeight: 40,
    eveningWeight: 40.5,
  },
  {
    monthNo: "6",
    month: "June",
    morningWeight: 35,
    eveningWeight: 35.5,
  },
  {
    monthNo: "7",
    month: "July",
    morningWeight: 20,
    eveningWeight: 20.5,
  },
  {
    monthNo: "8",
    month: "August",
    morningWeight: 30,
    eveningWeight: 30.5,
  },
  {
    monthNo: "9",
    month: "September",
    morningWeight: 40,
    eveningWeight: 40.5,
  },
  {
    monthNo: "10",
    month: "October",
    morningWeight: 50,
    eveningWeight: 50.5,
  },
  {
    monthNo: "11",
    month: "November",
    morningWeight: 55,
    eveningWeight: 55.5,
  },
  {
    monthNo: "12",
    month: "December",
    morningWeight: 60,
    eveningWeight: 60.5,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer className="bg-white p-4" width="100%" height="40%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
          <XAxis dataKey="monthNo" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="morningWeight"
            stroke="#4271fa"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="eveningWeight"
            stroke="#40c9ff"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
