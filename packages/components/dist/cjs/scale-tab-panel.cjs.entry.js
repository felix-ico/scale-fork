'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const statusNote = require('./status-note-dceee5a3.js');

const tabPanelCss = ":host{--spacing-top:var(--telekom-spacing-composition-space-08)}.tab-panel{margin-top:var(--spacing-top)}";

let i = 0;
const TabPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      statusNote.statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated.',
        type: 'warn',
        source: this.el,
      });
    }
  }
  render() {
    return (index.h(index.Host, { id: `scale-tab-panel-${this.generatedId}`, role: "tabpanel", tabindex: "0" }, this.styles && index.h("style", null, this.styles), index.h("div", { part: "tab-panel", class: "tab-panel" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
TabPanel.style = tabPanelCss;

exports.scale_tab_panel = TabPanel;
