import { run } from "../src/d3.example.js";

const configuration = {
  width: 500,
  height: 500,
};

describe("D3.Example", () => {
  it("should run", () => {
    run(configuration);
    let hasSvg = document.querySelector("svg");
    expect(hasSvg).toBeTruthy();
  });
});
