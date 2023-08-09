import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BubbleChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 600;
    const height = 400;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3
      .forceSimulation(data)
      .force("x", d3.forceX(width / 2))
      .force("y", d3.forceY(height / 2))
      .force(
        "collide",
        d3.forceCollide((d) => d.r + 2)
      )
      .on("tick", () => {
        circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      });

    const circles = svg
      .selectAll(".bubble")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => color(d.group));

    circles.on("mouseover", function (event, d) {
      d3.select(this).attr("stroke", "black");
    });

    circles.on("mouseout", function (event, d) {
      d3.select(this).attr("stroke", "none");
    });
  }, [data]);

  return <svg ref={svgRef} width={600} height={400}></svg>;
};

export default BubbleChart;
