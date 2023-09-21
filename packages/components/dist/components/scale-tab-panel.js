import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { s as statusNote } from './status-note.js';

const tabPanelCss = ":host{--spacing-top:var(--telekom-spacing-composition-space-08)}.tab-panel{margin-top:var(--spacing-top)}";

let i = 0;
const TabPanel = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.generatedId = i++;
    /** True for smaller height and font size */
    /** @deprecated - no more size difference */
    this.small = false;
    /** (optional) size  */
    /** @deprecated  - no more size difference */
    this.size = 'small';
  }
  componentDidRender() {
    if (this.small !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated.',
        type: 'warn',
        source: this.el,
      });
    }
  }
  render() {
    return (h(Host, { id: `scale-tab-panel-${this.generatedId}`, role: "tabpanel", tabindex: "0" }, this.styles && h("style", null, this.styles), h("div", { part: "tab-panel", class: "tab-panel" }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return tabPanelCss; }
}, [1, "scale-tab-panel", {
    "small": [4],
    "size": [1],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-tab-panel"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-tab-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabPanel);
      }
      break;
  } });
}

const ScaleTabPanel = TabPanel;
const defineCustomElement = defineCustomElement$1;

export { ScaleTabPanel, defineCustomElement };
