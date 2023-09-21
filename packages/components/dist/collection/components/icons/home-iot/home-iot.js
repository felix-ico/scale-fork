/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, Prop, Host, Element, h } from '@stencil/core';
export class HomeIot {
  constructor() {
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return (h(Host, null,
      h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable),
        this.accessibilityTitle && h("title", null, this.accessibilityTitle),
        h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null,
          h("path", { d: "M15.25 10.5c.85 0 1.5.65 1.5 1.5 0 .825-.678 1.499-1.511 1.499l-.126-.005-.127-.016-.136-.028-3.6 3.6v3.15c.45.25.75.75.75 1.3 0 .85-.65 1.5-1.5 1.5S9 22.35 9 21.5c0-.45.2-.867.52-1.14l.11-.086.12-.074v-3.75l4.05-4.05c-.25-1 .5-1.9 1.45-1.9zm-.497-6.499A7.59 7.59 0 0120.1 10.4c2.1.45 3.65 2.3 3.65 4.55a4.587 4.587 0 01-4.174 4.58l-.215.015-.211.005h-6.411v-1.883l2.685-2.684A2.998 2.998 0 0018.24 12a2.958 2.958 0 00-3.332-2.968l-.168.025.01-5.051a.022.022 0 00.003-.005zM10.25 4l.01 3.083-3.964 3.964-.075-.001c-.786 0-1.525.305-2.082.858a2.998 2.998 0 00-.879 2.146 2.958 2.958 0 002.99 2.99c.667 0 1.314-.227 1.84-.636l.17-.143-.01 3.239h-2.4c-3.1 0-5.6-2.5-5.6-5.6 0-3 2.35-5.45 5.25-5.65a7.698 7.698 0 014.21-4.06l.268-.1.272-.09zM12.5.5c.85 0 1.5.65 1.5 1.5 0 .44-.192.848-.5 1.173l-.12.118-.13.109v5l-5.5 5.5c.1.9-.65 1.65-1.5 1.65s-1.5-.65-1.5-1.5c0-.887.682-1.514 1.47-1.514.1 0 .2.01.302.031l.153.039.125.044 4.95-4.95V3.3C11.3 3.05 11 2.55 11 2c0-.85.65-1.5 1.5-1.5z", "fill-rule": "evenodd" }))) : (h("g", null,
          h("path", { d: "M15.25 10.5c.85 0 1.5.65 1.5 1.5a1.51 1.51 0 01-1.764 1.478l-.136-.028-3.6 3.6v3.15c.45.25.75.75.75 1.3 0 .85-.65 1.5-1.5 1.5S9 22.35 9 21.5c0-.5.248-.959.631-1.226l.119-.074v-3.75l4.05-4.05c-.25-1 .5-1.9 1.45-1.9zm-.5-6.5c2.85.85 5 3.35 5.35 6.4 2.1.45 3.65 2.3 3.65 4.55a4.587 4.587 0 01-4.389 4.595l-.211.005h-6.4v-1.5h6.45c1.7 0 3.1-1.4 3.1-3.1 0-1.15-.6-2.1-1.5-2.65-.545-.327-1.012-.417-1.533-.46l-.617-.04-.003-.502A5.856 5.856 0 0018.4 9.6a6.192 6.192 0 00-3.414-3.9l-.236-.1V4zm-4.5 0v1.6c-1.4.55-2.5 1.55-3.2 2.9l-.08.185-.138.342-.283.772-.166-.016-.166-.008-.21-.002c-.038 0-.078 0-.12.002l-.262.014c-.369.029-.805.101-1.225.261-1.55.6-2.65 2.1-2.65 3.85 0 2.182 1.74 3.988 3.897 4.095L5.85 18h2.4v1.5h-2.4c-3.1 0-5.6-2.5-5.6-5.6 0-3 2.35-5.45 5.25-5.65a7.696 7.696 0 014.478-4.16L10.25 4zM12.5.5c.85 0 1.5.65 1.5 1.5 0 .495-.243.95-.62 1.29l-.13.11v5l-5.5 5.5c.1.9-.65 1.65-1.5 1.65s-1.5-.65-1.5-1.5c0-1.054.964-1.741 1.925-1.444l.125.044 4.95-4.95V3.3C11.3 3.05 11 2.55 11 2c0-.85.65-1.5 1.5-1.5z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-home-iot"; }
  static get originalStyleUrls() { return {
    "$": ["../../icon/icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../../icon/icon.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) The width and height in pixels"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "24"
    },
    "fill": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Sets the icon color via the `fill` attribute"
      },
      "attribute": "fill",
      "reflect": false,
      "defaultValue": "'currentColor'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Alias for `fill`"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'currentColor'"
    },
    "selected": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) If `true`, the icon changes visually"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "decorative": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) If `true` the SVG element will get `aria-hidden=\"true\"`"
      },
      "attribute": "decorative",
      "reflect": false,
      "defaultValue": "false"
    },
    "accessibilityTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) When using the icon standalone, make it meaningful for accessibility"
      },
      "attribute": "accessibility-title",
      "reflect": false
    },
    "focusable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) If `true` the icon can receive focus"
      },
      "attribute": "focusable",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
