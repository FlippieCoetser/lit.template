import { MyElement } from "../src/lit.example.js";

describe("lit.Example", () => {
  beforeAll(() => {
    customElements.define("my-element", MyElement);
  });
  it("component should be attached to DOM", () => {
    const element = document.createElement("my-element");
    expect(element).toBeInstanceOf(MyElement);
  });
  it("custom event should fire on button click", () => {
    let flag = false;
    const element = document.createElement("my-element") as MyElement;
    element.addEventListener("my-event", (e) => (flag = true));
    element.updateProperty();
    expect(flag).toBe(true);
  });
});
