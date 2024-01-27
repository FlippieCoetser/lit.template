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
        super(...arguments);
        this.#myProperty_accessor_storage = "property value";
        this.render = () => html `<p>${this.myProperty}</p>`;
    }
    #myProperty_accessor_storage;
    get myProperty() { return this.#myProperty_accessor_storage; }
    set myProperty(value) { this.#myProperty_accessor_storage = value; }
}
__decorate([
    property()
], MyElement.prototype, "myProperty", null);
