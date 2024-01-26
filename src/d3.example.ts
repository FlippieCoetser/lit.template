import * as d3 from "d3";

// Functional Style Programming: all d3 code is executed in block sequence

const createSvg = ({ width, height }) =>
  d3.select("body").append("svg").attr("width", width).attr("height", height);

const addText = (svg, text) =>
  svg.append("text").attr("x", 100).attr("y", 100).text(text);

const addCircle = (svg, radius) =>
  svg.append("circle").attr("r", radius).attr("cx", 60).attr("cy", 50);

export const run = ({ width, height }) => {
  const svg = createSvg({ width, height });

  addText(svg, "Hello d3js");
  addCircle(svg, 30);
};
