var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
export class MyElement extends LitElement {
    constructor() {
        super();
        this.#myProperty_accessor_storage = "property value";
        this.render = () => html `
    <p>${this.myProperty}</p>
    <button @click=${this.updateProperty}>Update</button>
  `;
        this.updateProperty = () => {
            this.myProperty = "new value";
            const event = new CustomEvent("my-event", {
                bubbles: true,
                composed: true,
                detail: { message: "Hello World!" },
            });
            this.dispatchEvent(event);
        };
        // for testing a custom event on component
        this.addEventListener("my-event", (e) => {
            console.log("my-event");
        });
    }
    #myProperty_accessor_storage;
    // attribute is used to define a custom attribute name associated with this property
    // reflect is used to establish a two-way data binding between the property and the attribute
    get myProperty() { return this.#myProperty_accessor_storage; }
    set myProperty(value) { this.#myProperty_accessor_storage = value; }
}
__decorate([
    property({ attribute: "attribute", type: String, reflect: true })
], MyElement.prototype, "myProperty", null);
