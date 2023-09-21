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
export class ActionThumbsUp {
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
          h("path", { d: "M11.31 2.815c.535-1.06 1.62-1.545 2.7-1.21 1.1.34 1.76 1.41 1.605 2.6l-.525 4a.25.25 0 00.245.295h3.625c1.265 0 2.36.725 2.87 1.895.405.935.33 1.945-.175 2.735.37 1.07.105 2.195-.72 3.055.24 1.125-.215 2.32-1.185 3.06a2.451 2.451 0 01-.555 1.535c-.63.765-1.73 1.215-2.945 1.215L13.03 22h-.015c-2.33 0-3.905-.805-4.905-1.36-.495-.275-1.045-.43-1.61-.52v1.885H2v-11.5h3.565c1.9 0 3.145-1.93 4.425-4.83a74.449 74.449 0 011.013-2.244l.099-.202.1-.202.108-.212zM5 12H3.5v8.5H5V12z", "fill-rule": "evenodd" }))) : (h("g", null,
          h("path", { d: "M21.655 13.13c.505-.79.58-1.8.175-2.735-.51-1.17-1.605-1.895-2.87-1.895h-3.625a.25.25 0 01-.245-.295l.525-4c.155-1.19-.505-2.26-1.605-2.6-1.08-.335-2.165.15-2.7 1.21-.375.735-.56 1.135-1.32 2.86-1.28 2.9-2.525 4.83-4.425 4.83H2v11.5h4.5V20.12c.565.09 1.115.245 1.61.52 1 .555 2.575 1.36 4.905 1.36h.015l3.22-.005c1.215 0 2.315-.45 2.945-1.215.36-.44.55-.98.555-1.535.97-.74 1.425-1.935 1.185-3.06.825-.86 1.09-1.985.72-3.055zM20.3 14.315c-.11.62-.545.935-1.145 1.405.27.62.455.93.27 1.51-.12.37-.24.655-1.31 1.245.125.62.245.95-.085 1.355-.335.415-1.02.67-1.78.67l-3.22.005h-.01c-1.62 0-2.85-.435-4.175-1.18-.755-.42-1.545-.625-2.34-.725v-6.71c2.41-.545 3.77-3.15 4.855-5.615.755-1.71.925-2.075 1.285-2.79.3-.595.78-.495.92-.455.305.095.635.405.56.975L13.605 8c-.15 1.055.665 2 1.735 2h3.625c.785 0 1.285.51 1.495.99.51 1.18-.47 1.71-.57 1.91.285.56.505.895.41 1.415z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-action-thumbs-up"; }
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
