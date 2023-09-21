'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomePowerSocket = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M12 19a7 7 0 110-14 7 7 0 010 14zM2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2zm12.5 11.25a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5zm-5 0a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5zm3.25-6.693V8.5h-1.5V6.557C8.573 6.925 6.5 9.223 6.5 12c0 2.777 2.072 5.075 4.75 5.443V15.5h1.5v1.943c2.678-.368 4.75-2.666 4.75-5.443 0-2.777-2.072-5.075-4.75-5.443z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M14.5 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-5 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.75-6.693V8.5h1.5V6.557c2.678.368 4.75 2.666 4.75 5.443 0 2.777-2.072 5.075-4.75 5.443V15.5h-1.5v1.943C8.573 17.075 6.5 14.777 6.5 12c0-2.777 2.072-5.075 4.75-5.443zM12 19a7 7 0 100-14 7 7 0 000 14zm8.5 0c0 .827-.672 1.5-1.5 1.5H5c-.827 0-1.5-.673-1.5-1.5V3.5h17V19zM2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
HomePowerSocket.style = iconCss;

exports.scale_icon_home_power_socket = HomePowerSocket;
