import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentMediaFolder = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M7.5 2.5a3.755 3.755 0 012.74 1.18l.43.46c.216.228.516.358.83.36H23V19a3 3 0 01-3 3H4a3 3 0 01-3-3V2.5h6.5zm2 6.89v7.5l5.73-3.75L9.5 9.39z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M7.5 2.5a3.65 3.65 0 012.546 1.044l.154.156.45.45c.214.171.465.306.722.341l.128.009H23V19a3.01 3.01 0 01-2.824 2.995L20 22H4a3.01 3.01 0 01-2.995-2.824L1 19V2.5h6.5zm0 1.5h-5v15c0 .8.576 1.423 1.352 1.493L4 20.5h16c.8 0 1.423-.576 1.493-1.352L21.5 19V6h-10a2.578 2.578 0 01-1.759-.706L9.15 4.7a2.37 2.37 0 00-1.47-.693L7.5 4zm2 5.4l5.75 3.75L9.5 16.9V9.4z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-content-media-folder", {
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
  const components = ["scale-icon-content-media-folder"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-content-media-folder":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentMediaFolder);
      }
      break;
  } });
}

const ScaleIconContentMediaFolder = ContentMediaFolder;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconContentMediaFolder, defineCustomElement };
