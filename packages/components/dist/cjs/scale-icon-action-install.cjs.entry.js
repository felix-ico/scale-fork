'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionInstall = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M7.745 14l3 4.57a1.5 1.5 0 002.411.12l.089-.12 3-4.57H23.5v5a3 3 0 01-2.824 2.995L20.5 22h-17a3 3 0 01-2.995-2.824L.5 19v-5h7.245zM19 17h-2v2h2v-2zM12 .5c.647 0 1.18.492 1.244 1.122l.006.128V11h3.17L12 17.75 7.58 11h3.17V1.75c0-.69.56-1.25 1.25-1.25z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M7.755 14l.98 1.5H2V19c0 .776.598 1.42 1.356 1.493l.144.007h17c.776 0 1.42-.598 1.493-1.356L22 19v-3.5h-6.735l.98-1.5H23.5v5a3.003 3.003 0 01-2.824 2.995L20.5 22h-17a3.003 3.003 0 01-2.995-2.824L.5 19v-5h7.255zM19 17v2h-2v-2h2zM12 1c.38 0 .694.281.743.648l.007.102V11h3.67L12 17.75 7.58 11h3.67V1.75c0-.415.335-.75.75-.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ActionInstall.style = iconCss;

exports.scale_icon_action_install = ActionInstall;
