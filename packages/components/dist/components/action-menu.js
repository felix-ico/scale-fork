import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMenu = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M14.335 16.055a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h9.585zM19.25 10.5a1.25 1.25 0 01.128 2.494L19.25 13H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h14.5zm0-5.5a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494L4.75 5h14.5z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M14.75 16.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L14.75 18H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h10.5zm5-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 11h15.5zm0-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L19.75 7H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 5.5h15.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-menu", {
    "size": [514],
    "fill": [1],
    "color": [1],
    "selected": [516],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"],
    "focusable": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon-action-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionMenu);
      }
      break;
  } });
}

export { ActionMenu as A, defineCustomElement as d };
