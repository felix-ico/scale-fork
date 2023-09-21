import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationCallOutgoing = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M5.9 3.5l3.4 5.95-1.7 1.7c-.25.25-.3.7-.05 1l.423.512.34.4.387.438.43.466a23.96 23.96 0 00.954.955l.466.43.438.385.584.494.328.27a.76.76 0 00.92.019l.08-.069 1.6-1.65 5.95 3.35-.043.442-.042.338c-.172 1.231-.63 2.95-2.165 3.92-.8.5-1.7.65-2.5.65a6.477 6.477 0 01-1.458-.183l-.326-.082-.466-.135C11.15 22.3 8.5 20.5 6 18c-2.45-2.5-4.25-5.15-5.1-7.5l-.077-.262-.06-.228L.7 9.744C.487 8.75.337 7.137 1.2 5.75c.962-1.462 2.574-1.947 3.768-2.138l.344-.05.16-.02L5.9 3.5zm16.55-1.9L21 8.5l-2.2-2.2-5.65 5.65c-.15.15-.35.2-.55.2-.2 0-.4-.05-.55-.2a.722.722 0 01-.074-.965l.074-.085 5.7-5.65-2.2-2.2 6.9-1.45z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M5.9 3.5l3.4 5.95-1.7 1.7c-.25.25-.3.7-.05 1l.423.512.34.4.387.438.43.466a23.96 23.96 0 00.954.955l.466.43.438.385.584.494.328.27a.76.76 0 00.92.019l.08-.069 1.6-1.65 5.95 3.35-.043.442-.042.338c-.172 1.231-.63 2.95-2.165 3.92-.8.5-1.7.65-2.5.65a6.477 6.477 0 01-1.458-.183l-.326-.082-.466-.135C11.15 22.3 8.5 20.5 6 18c-2.45-2.5-4.25-5.15-5.1-7.5l-.077-.262-.06-.228L.7 9.744C.487 8.75.337 7.137 1.2 5.75c.962-1.462 2.574-1.947 3.768-2.138l.344-.05.16-.02L5.9 3.5zm-.75 1.6c-1.25.2-2.15.7-2.6 1.45-.522.815-.49 1.822-.364 2.562l.054.281.059.246L2.4 10c.7 2.15 2.4 4.6 4.7 6.9 2.35 2.35 4.8 4.05 6.9 4.75l.238.073.221.057.127.03.28.054c.74.127 1.769.158 2.584-.364.7-.42 1.182-1.232 1.406-2.355l.044-.245-4.05-2.3-.9.9c-.8.8-2.1.85-3 .15l-.324-.25a19.79 19.79 0 01-.178-.142l-.386-.32-.419-.362-.444-.403a25.7 25.7 0 01-.463-.44L8.5 15.5l-.475-.512-.443-.493-.592-.683-.64-.762a2.225 2.225 0 01.035-2.876l.115-.124.95-.9-2.3-4.05zm17.3-3.5L21 8.5l-2.2-2.2-5.65 5.65c-.15.15-.35.2-.55.2-.2 0-.4-.05-.55-.2a.722.722 0 01-.074-.965l.074-.085 5.7-5.65-2.2-2.2 6.9-1.45z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
CommunicationCallOutgoing.style = iconCss;

export { CommunicationCallOutgoing as scale_icon_communication_call_outgoing };
