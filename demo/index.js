import { Calculator } from "calculator";
console.log(`Import module: Calculator`);
console.log(`Use module: 1 + 2 = ${Calculator.Add(1, 2)}`);

import { run } from "../lib/d3.example.js";
const configuration = {
  width: 500,
  height: 500,
};
run(configuration);
