import { MyElement } from "../src/lit.example.js";

describe("D3.Example", () => {
  it("should run", () => {
    customElements.define("my-element", MyElement);
    const element = document.createElement("my-element");
  });
});
