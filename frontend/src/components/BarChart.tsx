import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface BarChartProps {
  data: { closed_fiscal_quarter: string; acv: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(chartRef.current)
      .attr("width", 500)
      .attr("height", 300);

    svg.selectAll("*").remove();

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.closed_fiscal_quarter))
      .range([0, 480])
      .padding(0.4);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.acv) ?? 0])
      .nice()
      .range([250, 0]);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.closed_fiscal_quarter)!)
      .attr("y", d => yScale(d.acv))
      .attr("width", xScale.bandwidth())
      .attr("height", d => 250 - yScale(d.acv))
      .attr("fill", "steelblue");
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default BarChart;
