import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const tabPanelCss = ":host{--spacing-top:var(--telekom-spacing-composition-space-08)}.tab-panel{margin-top:var(--spacing-top)}";

let i = 0;
const TabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
TabPanel.style = tabPanelCss;

export { TabPanel as scale_tab_panel };
