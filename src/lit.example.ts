import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export class MyElement extends LitElement {
  @property()
  accessor myProperty = "property value";

  render = () => html`<p>${this.myProperty}</p>`;
}
