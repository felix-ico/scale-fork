import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionShowPassword = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 4c4.108 0 6.987 2.283 9.1 4.68l.364.425.35.423.334.421.476.62.726.981.35.45-.35.45-.726.981-.314.411-.327.419-.342.422c-.059.07-.117.142-.177.212l-.365.424C18.987 17.717 16.11 20 12 20c-4.108 0-6.987-2.283-9.1-4.68l-.364-.425-.35-.423-.334-.421-.476-.62-.726-.981L.3 12l.35-.45.726-.981.314-.411.327-.419.342-.422c.059-.07.117-.142.177-.212L2.9 8.68C5.013 6.283 7.89 4 12 4zm0 3c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 1.5c-1.95 0-3.5 1.55-3.5 3.5s1.55 3.5 3.5 3.5 3.5-1.55 3.5-3.5-1.55-3.5-3.5-3.5z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12 4c4.108 0 6.987 2.283 9.1 4.68l.364.425.35.423.334.421.476.62.726.981.35.45-.35.45-.726.981-.314.411-.327.419-.342.422c-.059.07-.117.142-.177.212l-.365.424C18.987 17.717 16.11 20 12 20c-4.108 0-6.987-2.283-9.1-4.68l-.364-.425-.35-.423-.334-.421-.476-.62-.726-.981L.3 12l.35-.45.726-.981.314-.411.327-.419.342-.422c.059-.07.117-.142.177-.212L2.9 8.68C5.013 6.283 7.89 4 12 4zm0 1.5c-3.713 0-6.234 2.042-8.435 4.722l-.396.494-.391.506-.386.516L2.2 12l.578.778.39.506.397.494.404.48C6.076 16.698 8.512 18.5 12 18.5c3.488 0 5.924-1.802 8.03-4.242l.405-.48.396-.494.391-.506.386-.516L21.8 12l-.578-.778-.39-.506-.397-.494C18.234 7.542 15.713 5.5 12 5.5zM12 7c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 1.5c-1.95 0-3.5 1.55-3.5 3.5s1.55 3.5 3.5 3.5 3.5-1.55 3.5-3.5-1.55-3.5-3.5-3.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionShowPassword.style = iconCss;

export { ActionShowPassword as scale_icon_action_show_password };
