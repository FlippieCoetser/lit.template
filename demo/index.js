import { Calculator } from "calculator";
console.log(`Import module: Calculator`);
console.log(`Use module: 1 + 2 = ${Calculator.Add(1, 2)}`);

import { MyElement } from "../lib/lit.example.js";
customElements.define("my-element", MyElement);
