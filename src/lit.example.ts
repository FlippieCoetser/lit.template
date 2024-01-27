import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { query } from "lit/decorators/query.js";

export class MyElement extends LitElement {
  // attribute is used to define a custom attribute name associated with this property.
  // if attribute is not specified, the property name lowercase is used.
  // reflect is used to establish a two-way data binding between the property and the attribute
  // changing the property will update the attribute and vice versa.
  @property({ attribute: "attribute", type: String, reflect: true })
  accessor myProperty = "property value";

  render = () => html`
    <p>${this.myProperty}</p>
    <button @click=${this.updateProperty}>Update</button>
  `;

  updateProperty = () => {
    this.myProperty = "new value";
    const event = new CustomEvent("my-event", {
      bubbles: true,
      composed: true,
      detail: { message: "Hello World!" },
    });
    this.dispatchEvent(event);
  };
}
