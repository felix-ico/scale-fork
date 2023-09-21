'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationMessage = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M1.5 3.5V16a3 3 0 003 3H6v2.275A1.75 1.75 0 009 22.5l3.5-3.5h7a3 3 0 003-3V3.5h-21zm15 10h-9a.75.75 0 110-1.5h9a.75.75 0 110 1.5zm0-3.5h-9a.75.75 0 010-1.5h9a.75.75 0 110 1.5z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M22.45 3.5v12.55a3.01 3.01 0 01-2.824 2.995l-.176.005h-7l-3.5 3.5c-.35.35-.75.5-1.2.5-.855 0-1.665-.632-1.744-1.595L6 21.3V19H4.5a3.01 3.01 0 01-2.995-2.824L1.5 16V3.5h20.95zM21 5H3v11c0 .8.576 1.423 1.352 1.493l.148.007h3.05v3.8c0 .188.14.234.21.246l.04.004c.037 0 .075-.028.112-.063L11.9 17.5h7.6c.8 0 1.423-.576 1.493-1.352L21 16V5zm-4.5 7c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-9c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L7.5 12h9zm0-3.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L16.5 10h-9c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L7.5 8.5h9z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
CommunicationMessage.style = iconCss;

exports.scale_icon_communication_message = CommunicationMessage;
