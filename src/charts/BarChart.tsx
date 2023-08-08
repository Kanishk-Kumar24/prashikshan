import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Approval level 1 Pendency", 4.94, "#b87333", null],
  ["Approval level 2 Pendency", 12.49, "silver", null],
  ["Rejected", 3, "gold", null],
  ["Accepted", 8, "color: #e5e4e2", null],
];

export const options = {
  title: "Status of Materials requested in %",
  width: 1100,
  height: 550,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};

export default function BarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
