import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentFeatures = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M9.725 3.925l9.695 9.695a2.88 2.88 0 01.129 3.927l-.129.138-5.42 5.42a2.885 2.885 0 01-3.932.129l-.138-.129L.235 13.41l1.22-8.26L4.5 4.695l5.225-.77zm2.835 7.17l-2 1.745-2.465-1.035 1.035 2.46-1.745 2 2.665-.22 1.365 2.275.61-2.605 2.595-.575-2.285-1.385.225-2.66zM9.5.16l12.035 5.375a2.365 2.365 0 011.29 2.926l-.075.194-1.915 4.28-.162-.192-.173-.188-.81-.785 1.67-3.725a.865.865 0 00-.34-1.09l-.095-.05L9.58 1.84l-1.425.795L4 3.255 9.5.16zm-3.975 7.7a.96.96 0 10-1.36 1.355.96.96 0 001.36-1.355z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M9.7 3.9l9.75 9.75c1.054 1.054 1.098 2.797.132 3.909l-.132.141-5.4 5.4c-.6.55-1.3.85-2.05.85a2.92 2.92 0 01-1.895-.706L9.95 23.1l-9.7-9.7 1.2-8.25L9.7 3.9zm-.5 1.6l-6.4 1-.95 6.4 9.2 9.15c.25.25.6.4.95.4.3 0 .6-.11.837-.3l.113-.1 5.4-5.45c.516-.469.548-1.29.097-1.843l-.097-.107L9.2 5.5zm3.4 5.55l-.25 2.7 2.3 1.35-2.6.65-.6 2.6-1.4-2.3-2.65.2 1.75-2L8.1 11.8l2.45 1 2.05-1.75zM9.5.15l12.05 5.4c1.1.478 1.651 1.78 1.26 2.986l-.06.164-1.9 4.3a2.352 2.352 0 00-.267-.316L19.7 11.8l1.65-3.75A.857.857 0 0021 6.951l-.1-.051L9.55 1.85l-1.4.8-4.15.6L9.5.15zm-5.35 7.7c.4-.35 1-.35 1.35 0 .35.35.35 1 0 1.35-.35.35-1 .35-1.35 0-.35-.35-.35-1 0-1.35z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-content-features", {
    "size": [514],
    "fill": [1],
    "color": [1],
    "selected": [516],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"],
    "focusable": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon-content-features"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-content-features":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentFeatures);
      }
      break;
  } });
}

const ScaleIconContentFeatures = ContentFeatures;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconContentFeatures, defineCustomElement };
