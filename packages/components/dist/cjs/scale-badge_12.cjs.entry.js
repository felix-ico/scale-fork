'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');
const statusNote = require('./status-note-dceee5a3.js');
const utils = require('./utils-e9c3b953.js');

const badgeCss = ":host{--background-color-circle:var(--telekom-color-primary-standard);--color-circle:var(--telekom-color-text-and-icon-inverted-standard);--font-size-circle:var(--telekom-typography-font-size-badge);--font-weight-circle:bold;--border-radius-circle:var(--telekom-radius-circle);--font-color-label:var(--telekom-color-text-and-icon-standard);--_display-circle:flex;display:flex}:host([no-dot]){--_display-circle:none}:host::part(base){display:inline-flex;position:relative;align-items:center}:host::part(circle){display:var(--_display-circle);position:absolute;align-items:center;justify-content:center;font-size:var(--font-size-circle);font-weight:var(--font-weight-circle);border-radius:var(--border-radius-circle);background-color:var(--background-color-circle);color:var(--color-circle)}:host::part(circle has-count){padding:0 2px;top:-8px;right:-5px;height:14px;min-width:10px}:host::part(circle no-count){top:-4px;right:-2px;height:8px;min-width:8px}:host::part(label){margin-left:8px;font-weight:400;font-size:12px;color:var(--font-color-label);display:flex;align-items:center}:host::part(visually-hidden){clip-path:inset(100%);clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}";

const Badge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** a11y text for getting meaningful value. */
    this.ariaLabelTranslation = '$label - $count item';
    this.formatter = new Intl.NumberFormat('en', {
      // @ts-ignore
      notation: 'compact',
    });
  }
  connectedCallback() {
    statusNote.statusNote({ source: this.hostElement, tag: 'beta' });
  }
  getAriaLabel() {
    const filledText = this.ariaLabelTranslation
      .replace(/\$count/g, `${this.count}`)
      .replace(/\$label/g, `${this.label}`);
    return filledText;
  }
  render() {
    return (index.h(index.Host, null, index.h("span", { part: "base", "aria-label": this.count ? this.getAriaLabel() : this.label }, index.h("slot", null), index.h("span", { "aria-hidden": "true", part: index$1.classnames(`circle`, this.count ? `has-count` : 'no-count') }, !this.count ? '' : this.formatter.format(this.count)), index.h("span", { "aria-hidden": "true", id: "raw-count", part: "visually-hidden" }, this.count)), index.h("span", { id: "label", part: index$1.classnames('label', this.labelVisuallyHidden && 'visually-hidden'), "aria-hidden": "true" }, this.label)));
  }
  get hostElement() { return index.getElement(this); }
};
Badge.style = badgeCss;

const iconCss$1 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMenu = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M14.335 16.055a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h9.585zM19.25 10.5a1.25 1.25 0 01.128 2.494L19.25 13H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h14.5zm0-5.5a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494L4.75 5h14.5z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M14.75 16.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L14.75 18H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h10.5zm5-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 11h15.5zm0-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L19.75 7H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 5.5h15.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ActionMenu.style = iconCss$1;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileUser = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M8.9 16.5l3.1 3.1 3.1-3.1h2.25a4.73 4.73 0 014.656 3.73l.044.22.2 1.05H1.8l.15-1.05a4.73 4.73 0 014.474-3.945l.226-.005H8.9zM12 2c3.5 0 6 2.5 6 6 0 3.4-2.4 7-6 7s-6-3.6-6-7c0-3.5 2.5-6 6-6z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M8.9 16.5l3.1 3.1 3.1-3.1h2.25a4.73 4.73 0 014.656 3.73l.044.22.2 1.05H1.8l.15-1.05a4.73 4.73 0 014.474-3.945l.226-.005H8.9zM12 2c3.5 0 6 2.5 6 6 0 3.4-2.4 7-6 7s-6-3.6-6-7c0-3.5 2.5-6 6-6zm0 1.5C9.4 3.5 7.5 5.4 7.5 8c0 2.65 1.8 5.5 4.5 5.5s4.5-2.85 4.5-5.5c0-2.6-1.9-4.5-4.5-4.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
UserFileUser.style = iconCss;

const telekomHeaderCss = ":host{--shadow:0px 2px 9px rgba(0, 0, 0, 0.15);--background:var(--telekom-color-background-surface);--background-logo:var(--telekom-color-primary-standard);--transition-common-scrolled:height var(--telekom-motion-duration-immediate)\n      var(--telekom-motion-easing-standard),\n    width var(--telekom-motion-duration-immediate),\n    margin var(--telekom-motion-duration-immediate);--font-size-app-name:var(--telekom-typography-font-size-body);--line-height-app-name:var(--telekom-typography-line-spacing-tight);--font-weight-app-name:var(--telekom-typography-font-weight-extra-bold);--_height:60px;--_height-logo-svg:36px;--_height-bottom-bar:60px;--_height-top-bar:0;--_display-bottom-app-name:none;--_display-top-app-name:none;--_display-main-nav:none;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_max-width-container:none;--_spacing-x-container:var(--telekom-spacing-composition-space-06);--_column-gap-container:var(--telekom-spacing-composition-space-10);--_grid-template-columns-container:auto;--_grid-column-body:auto;--_spacing-left-body:0;--_spacing-right-top-app-name:var(--telekom-spacing-composition-space-10);--_spacing-right-bottom-app-name:var(--telekom-spacing-composition-space-10);--_left-logo:0;--_justify-content-bottom-body:end;--_animation-name:toggle;--scl-telekom-header-height:var(--_height)}@media screen and (min-width: 640px){:host{--_display-bottom-app-name:block;--_spacing-left-body:74px}}@media screen and (min-width: 1040px){:host,:host([scrolled-back]){--_height:84px;--_height-logo-svg:44px;--_height-top-bar:30px;--_height-bottom-bar:54px;--_display-main-nav:block;--_display-meta-nav:block;--_display-meta-nav-external:block;--_display-lang-switcher:block;--_display-top-app-name:block;--_display-bottom-app-name:none;--_grid-template-columns-container:repeat(16, minmax(0, 1fr));--_grid-column-body:3 / span 14;--_spacing-left-body:0;--_spacing-right-bottom-app-name:52px;--_spacing-x-container:var(--telekom-spacing-composition-space-08);--_justify-content-bottom-body:space-between;--scl-telekom-header-height:var(--_height)}:host([type='slim']){--_animation-name:none;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-07\n    )}:host([type='slim'][scrolled]){--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-07\n    )}:host([type='slim']),:host([scrolled]){--_height:72px;--_height-logo-svg:40px;--_height-top-bar:0;--_height-bottom-bar:72px;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_display-top-app-name:none;--_display-bottom-app-name:block;--_spacing-left-body:var(--telekom-spacing-composition-space-06);--scl-telekom-header-height:var(--_height)}:host([scrolled]){--_spacing-left-body:0}:host([type='slim']),:host([scrolled][app-name]){--_grid-column-body:2 / span 15}}@media screen and (min-width: 1296px){:host,:host([scrolled-back]){--_height:96px;--_height-logo-svg:48px;--_height-top-bar:30px;--_height-bottom-bar:66px;--scl-telekom-header-height:var(--_height)}:host([type='slim']){--_height:84px;--_height-logo-svg:44px;--_height-top-bar:0;--_height-bottom-bar:84px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-14\n    );--_spacing-left-body:4px}:host([type='slim'][scrolled]){--_height:72px;--_height-logo-svg:40px;--_height-top-bar:0;--_height-bottom-bar:72px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-15\n    );--_spacing-left-body:0}}@media screen and (min-width: 1680px){:host,:host([scrolled-back]){--_height:120px;--_height-logo-svg:60px;--_height-top-bar:30px;--_height-bottom-bar:90px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-12\n    );--_left-logo:var(--_spacing-x-container);--scl-telekom-header-height:var(--_height)}:host{--_max-width-container:var(--scl-grid-max-width, 1504px)}:host([type='slim']){--_height:96px;--_height-logo-svg:48px;--_height-top-bar:0;--_height-bottom-bar:96px;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_display-top-app-name:none;--_display-bottom-app-name:block;--_spacing-left-body:24px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-14\n    );--scl-telekom-header-height:var(--_height);--scl-telekom-header-bottom-spacing:36px}:host([type='slim'][scrolled]){--_height:72px;--_height-logo-svg:40px;--_height-top-bar:0;--_height-bottom-bar:72px;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_display-top-app-name:none;--_display-bottom-app-name:block;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-12\n    );--scl-telekom-header-height:var(--_height)}}:host([type='subtle']){--shadow:none;--background:transparent}slot[name='logo']{position:absolute;top:0;left:var(--_left-logo);display:flex;align-items:center;justify-content:center;height:var(--_height);width:var(--_height);background:var(--background-logo);transition:var(--transition-common-scrolled)}[part~='meta-nav-external']{display:var(--_display-meta-nav-external);flex:1}[part~='meta-nav-external']{display:var(--_display-meta-nav);}[part~='lang-switcher']{display:var(--_display-lang-switcher);}slot[name='main-nav']{display:var(--_display-main-nav);flex:1}slot[name='functions']{display:block;}[part~='base']{height:var(--_height);width:100%;transition:var(--transition-common-scrolled)}[part~='fixed-wrapper']{position:fixed;z-index:99;width:100%;height:var(--_height);background-color:var(--background);box-shadow:var(--shadow);transition:var(--transition-common-scrolled)}[part~='container']{box-sizing:content-box;display:grid;grid-template-columns:var(--_grid-template-columns-container);column-gap:var(--_column-gap-container);position:relative;max-width:var(--_max-width-container);margin-left:auto;margin-right:auto;padding-left:var(--_spacing-x-container);padding-right:var(--_spacing-x-container);transition:var(--transition-common-scrolled)}[part~='app-logo']{height:var(--_height);width:var(--_height);display:flex;align-items:center;justify-content:center;transition:var(--transition-common-scrolled)}:host::part(logo-svg){height:var(--_height-logo-svg);transition:var(--transition-common-scrolled);margin-top:4px}:host::part(logo){height:calc(var(--_height) - 6px);width:calc(var(--_height) - 6px);display:flex;align-items:center;justify-content:center;transition:var(--transition-common-scrolled)}[part~='body']{display:block;grid-column:var(--_grid-column-body);flex:1;margin-left:var(--_spacing-left-body);transition:var(--transition-common-scrolled)}[part~='top-bar']{height:var(--_height-top-bar);display:flex;align-items:end;width:100%;transition:var(--transition-common-scrolled)}[part~='top-app-name']{display:var(--_display-top-app-name);margin-right:var(--_spacing-right-top-app-name)}[part~='top-body']{display:inline-flex;flex:1;transition:var(--transition-common-scrolled)}[part~='bottom-bar']{display:flex;justify-content:space-between;align-items:center;transition:var(--transition-common-scrolled)}[part~='bottom-app-name']{display:var(--_display-bottom-app-name);margin-right:var(--_spacing-right-bottom-app-name);animation-duration:var(--telekom-motion-duration-animation);min-width:108px}@media screen and (min-width: 1040px){:host([scrolled]) [part~='bottom-app-name']{animation-name:var(--_animation-name);animation-timing-function:var(--telekom-motion-easing-enter)}:host([scrolled-back]) [part~=' bottom-app-name']{animation-name:var(--_animation-name);animation-direction:reverse;animation-timing-function:var(--telekom-motion-easing-exit)}}[part~='bottom-body'],[part~='main-nav']{justify-content:var(--_justify-content-bottom-body);height:var(--_height-bottom-bar);display:inline-flex;flex:1;transition:var(--transition-common-scrolled)}[part~='app-name-text']{font-size:var(--font-size-app-name);font-weight:var(--font-weight-app-name);line-height:var(--line-height-app-name);color:var(--telekom-color-text-and-icon-primary-standard);letter-spacing:0.02em;text-decoration:none}@media screen and (min-width: 1040px){:host{--font-size-app-name:var(--telekom-typography-font-size-small)}}[part~='app-name-text']:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}[part~='app-name-text']:active{color:var(--telekom-color-text-and-icon-primary-pressed)}@keyframes toggle{from{opacity:0;transform:translate3d(\n      var(--translate-x),\n      var(--translate-y),\n      var(--translate-z)\n    )}}";

const TelekomHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.type = '';
    this.metaNavAriaLabel = 'Meta navigation';
    this.metaNavExternalAriaLabel = 'External meta navigation';
    this.langSwitcherAriaLabel = 'Language switcher';
    this.mainNavAriaLabel = 'Main navigation';
    this.scrolledBack = false;
    this.pageYOffset = 0;
  }
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
    this.scrolledBack =
      this.pageYOffset !== window.pageYOffset && window.pageYOffset <= 0;
    this.pageYOffset = pageYOffset;
  }
  render() {
    return (index.h(index.Host, { scrolled: this.type !== 'subtle' && this.scrolled, "scrolled-back": this.type !== 'subtle' && this.scrolledBack }, index.h("header", { part: index$1.classnames('base', this.type, {
        scrolled: this.type !== 'subtle' && this.scrolled,
        'scrolled-back': this.type !== 'subtle' && this.scrolledBack,
      }) }, index.h("div", { part: "fixed-wrapper" }, index.h("div", { part: "container" }, index.h("slot", { name: "logo" }, index.h("scale-logo", { part: "app-logo", variant: "white", href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle })), index.h("div", { part: "body" }, index.h("div", { part: "top-bar" }, this.appName ? (index.h("div", { part: "top-app-name" }, this.appNameLink ? (index.h("a", { part: "app-name-text", onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (index.h("span", { part: "app-name-text" }, this.appName)))) : null, index.h("div", { part: "top-body" }, index.h("nav", { part: "meta-nav-external", "aria-label": this.metaNavExternalAriaLabel }, index.h("slot", { name: "meta-nav-external" })), index.h("nav", { part: "meta-nav", "aria-label": this.metaNavAriaLabel }, index.h("slot", { name: "meta-nav" })), index.h("nav", { part: "lang-switcher", "aria-label": this.langSwitcherAriaLabel }, index.h("slot", { name: "lang-switcher" })))), index.h("div", { part: "bottom-bar" }, this.appName ? (index.h("div", { part: "bottom-app-name" }, this.appNameLink ? (index.h("a", { part: "app-name-text", onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (index.h("span", { part: "app-name-text" }, this.appName)))) : null, index.h("div", { part: "bottom-body" }, index.h("nav", { part: "main-nav", "aria-label": this.mainNavAriaLabel }, index.h("slot", { name: "main-nav" })), index.h("slot", { name: "functions" })))))))));
  }
  get hostElement() { return index.getElement(this); }
};
TelekomHeader.style = telekomHeaderCss;

const telekomMegaMenuCss = ".scale-telekom-mega-menu{--spacing-y:var(--telekom-spacing-composition-space-18);--column-gap:var(--telekom-spacing-composition-space-10);--max-width-container:var(--scl-grid-max-width, 1504px);--spacing-x:var(--telekom-spacing-composition-space-08);--grid-template-columns:repeat(16, minmax(0, 1fr));display:block;padding-left:var(--spacing-x);padding-right:var(--spacing-x);margin-left:auto;margin-right:auto;max-width:var(--max-width-container)}.scale-telekom-mega-menu-container{box-sizing:border-box;display:grid;grid-template-columns:var(--grid-template-columns);grid-column:auto;column-gap:var(--column-gap);padding-top:var(--spacing-y);padding-bottom:var(--spacing-y);font-size:var(--telekom-typography-font-size-body);line-height:var(--telekom-typography-line-spacing-standard)}.scale-telekom-mega-menu :where(ul,ol){list-style:none;margin:0;padding:0}.scale-telekom-mega-menu :where(a){display:inline-block;color:var(--telekom-color-text-and-icon-standard);text-decoration:none}.scale-telekom-mega-menu :where(ul a){width:100%}.scale-telekom-mega-menu .scale-icon{width:20px;height:20px}.scale-telekom-mega-menu :where(a):hover{color:var(--telekom-color-text-and-icon-primary-hovered)}.scale-telekom-mega-menu :where(a):active{color:var(--telekom-color-text-and-icon-primary-pressed)}.scale-telekom-mega-menu :where(a):focus-visible{outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:1px;border-radius:var(--telekom-radius-small)}.scale-telekom-mega-menu :where(li+li){margin-top:var(--telekom-spacing-composition-space-07)}@media screen and (min-width: 1040px){.scale-telekom-mega-menu{--spacing-x:var(--telekom-spacing-composition-space-08)}}";

const TelekomMegaMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** :) */
    this.childrenTooMany = false;
  }
  connectedCallback() {
    if (this.hostElement.children.length > 4) {
      this.childrenTooMany = true;
    }
  }
  render() {
    return (index.h(index.Host, { class: "scale-telekom-mega-menu", "children-too-many": this.childrenTooMany }, index.h("div", { class: "scale-telekom-mega-menu-container" }, index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
TelekomMegaMenu.style = telekomMegaMenuCss;

const telekomMegaMenuColumnCss = ":host{--spacing-x-icon:1ch;grid-column:auto / span 3}:host(:first-child){grid-column:3 / span 3}:host-context([children-too-many]):host(:first-child){grid-column:2 / span 3}@media screen and (min-width: 1680px){:host-context([children-too-many]):host(:first-child){grid-column:1 / span 3}}[part~='base']{display:flex;flex-direction:column}[part~='icon']{transform:translateY(-0.125ch)}@media screen and (min-width: 1296px){[part~='base']{flex-direction:row}[part~='icon'] ::slotted(*){padding-right:var(--spacing-x-icon)}}[part~='heading']{display:flex;align-items:flex-start;height:calc(var(--telekom-typography-line-spacing-standard) * 2rem);font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-tight)}[part~='heading-has-link'] [part~='heading']:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}[part~='heading-has-link'] [part~='heading']:active{color:var(--telekom-color-text-and-icon-primary-pressed)}[part~='icon-arrow-right']{margin-top:0.5ch;margin-left:0.5ch}";

const TelekomMegaMenuColumn = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.headingLevel = 2;
    this.headingHasLink = false;
  }
  connectedCallback() {
    if (this.hostElement.querySelector('a[slot="heading"]')) {
      this.headingHasLink = true;
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { part: index$1.classnames({
        base: true,
        'heading-has-link': this.headingHasLink,
      }) }, index.h("div", { part: "icon", "aria-hidden": "true" }, index.h("slot", { name: "icon" })), index.h("div", { part: "body" }, index.h("div", { part: "heading", role: "heading", "aria-level": this.headingLevel }, index.h("slot", { name: "heading" }), index.h("scale-icon-navigation-right", { part: "icon-arrow-right", size: 11, selected: true })), index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
};
TelekomMegaMenuColumn.style = telekomMegaMenuColumnCss;

const telekomMobileFlyoutCanvasCss = ":host{display:block;height:100%;overflow-y:auto;--max-width:572px;--spacing:var(--telekom-spacing-composition-space-07)\n    var(--telekom-spacing-composition-space-06)\n    var(--telekom-spacing-composition-space-14);background:var(--telekom-color-background-surface)}[part='base']{padding:var(--spacing);display:flex;justify-content:center;flex-direction:column;margin:0 auto;max-width:var(--max-width)}[part~='header']{display:flex;justify-content:space-between;align-items:flex-start}[part~='heading']{margin:0;font-size:var(--font-size-app-name);font-weight:var(--font-weight-app-name);line-height:var(--line-height-app-name);color:var(--telekom-color-text-and-icon-primary-standard);letter-spacing:0.02em;text-decoration:none}[part~='close-button']{position:absolute;right:var(--telekom-spacing-composition-space-06);color:var(--telekom-color-text-and-icon-standard)}[part~='close-button']:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}[part~='close-button']:active{color:var(--telekom-color-text-and-icon-primary-pressed)}[part~='body'],slot[name='row']::slotted(*){margin-top:var(--telekom-spacing-composition-space-08)}:host([type='subtle']) [part~='body']{margin-top:var(--telekom-spacing-composition-space-06)}:host([type='subtle']) [part~='meta']{margin-top:var(--telekom-spacing-composition-space-05)}";

const TelekomMobileFlyoutCanvas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scaleCloseNavFlyout = index.createEvent(this, "scale-close-nav-flyout", 7);
    this.closeButtonLabel = 'Close';
    this.closeButtonTitle = null;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { part: "base" }, index.h("div", { part: "header" }, index.h("slot", { name: "heading" }, index.h("h2", { part: "heading" }, this.appName)), index.h("a", { href: "javascript:void(0)", onClick: (event) => {
        event.preventDefault();
        utils.emitEvent(this, 'scaleCloseNavFlyout', {
          originalEvent: event,
        });
      }, title: this.closeButtonTitle, "aria-label": this.closeButtonLabel, part: "close-button" }, index.h("slot", { name: "close-icon" }, index.h("scale-icon-action-close", { decorative: true, size: 20 })))), index.h("div", { part: "body" }, index.h("slot", { name: "row" }, index.h("slot", { name: "mobile-before-main-nav" }), index.h("slot", { name: "mobile-main-nav" }), index.h("slot", { name: "mobile-after-main-nav" }), index.h("div", { part: "meta" }, index.h("div", null, index.h("slot", { name: "mobile-meta-nav-external" }), index.h("slot", { name: "mobile-meta-nav" })), index.h("div", null, index.h("slot", { name: "mobile-lang-switcher" }))), index.h("slot", { name: "mobile-bottom" }))))));
  }
  get hostElement() { return index.getElement(this); }
};
TelekomMobileFlyoutCanvas.style = telekomMobileFlyoutCanvasCss;

const telekomMobileMenuCss = ":host{--spacing:var(--telekom-spacing-composition-space-06);--background:var(--telekom-color-background-surface);--max-width:572px;--spacing-close-button:var(--telekom-spacing-composition-space-04);--radius-close-button:var(--telekom-radius-standard);--transition-close-button:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--box-shadow-close-button-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-primary-hovered);--color-active:var(--telekom-color-primary-pressed)}:host::part(base){margin:0 auto;background:var(--background);display:flex;justify-content:center;flex-direction:column;max-width:var(--max-width)}:host::part(back-button){display:flex;align-items:center;border:none;background:transparent;color:var(--color);font:var(--telekom-text-style-lead-text);width:100%;height:72px;cursor:pointer;padding:0}scale-icon-navigation-left{margin-right:12px}:host::part(nav){padding:var(--spacing) 0;max-width:var(--max-width);width:100%}:host::part(links-top){display:flex}[part~='app-name']>*{font-size:var(--font-size-app-name);font-weight:var(--font-weight-app-name);line-height:var(--line-height-app-name);color:var(--telekom-color-text-and-icon-primary-standard);letter-spacing:0.02em;text-decoration:none}[part~='app-name']>*:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}[part~='app-name']>*:active{color:var(--telekom-color-text-and-icon-primary-pressed)}";

function elementDepth(el) {
  let depth = 0;
  while (null !== el.parentElement) {
    el = el.parentElement;
    depth++;
  }
  return depth;
}
const TelekomMobileMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scaleCloseNavFlyout = index.createEvent(this, "scale-close-nav-flyout", 7);
    this.backButtonTitle = 'Back';
    this.setLevelAttributeForAllItems = () => {
      const offset = Math.min(...Array.from(this.menuItems).map((x) => elementDepth(x)));
      Array.from(this.menuItems).forEach((item) => {
        const level = elementDepth(item) - offset;
        item.setAttribute('level', String(level));
      });
    };
    this.back = () => {
      Array.from(this.openItems).forEach((element) => {
        if (element.getAttribute('level') === String(+this.currentLevel - 1)) {
          element.setAttribute('active', '');
          // @ts-ignore
          element.open = false;
          return element.removeAttribute('open');
        }
      });
      this.currentLevel = String(+this.currentLevel - 1);
      Array.from(this.menuItems).forEach((element) => {
        element.setAttribute('current-level', this.currentLevel);
      });
    };
  }
  handleSetMenuItemActive(e) {
    this.menuItems.forEach((element) => element.removeAttribute('active'));
    e.target.setAttribute('active', '');
    if (e.target.parentElement.tagName === 'SCALE-TELEKOM-MOBILE-MENU-ITEM') {
      e.target.parentElement.setAttribute('active', '');
    }
  }
  handleSetMenuItemOpen(e) {
    e.target.setAttribute('open', '');
    this.currentLevel = String(+e.target.getAttribute('level') + 1);
    Array.from(this.menuItems).forEach((element) => {
      element.setAttribute('current-level', this.currentLevel);
    });
  }
  connectedCallback() {
    this.setLevelAttributeForAllItems();
    this.currentLevel = this.activeItem
      ? String(+this.activeItem.getAttribute('level'))
      : '0';
    Array.from(this.menuItems).forEach((element) => {
      element.setAttribute('current-level', this.currentLevel);
    });
  }
  componentWillRender() { }
  get menuItems() {
    return this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item');
  }
  get activeItem() {
    return Array.from(this.menuItems).find((element) => 
    // @ts-ignore
    element.hasAttribute('active') || element.active);
  }
  get openItems() {
    return Array.from(this.menuItems).filter((element) => 
    // @ts-ignore
    element.hasAttribute('open') || element.open);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { part: "base" }, index.h("nav", { part: "nav" }, +this.currentLevel > 0 ? (index.h("button", { part: "back-button", onClick: () => {
        this.back();
      } }, index.h("scale-icon-navigation-left", { size: 20 }), this.backButtonTitle)) : null, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
};
TelekomMobileMenu.style = telekomMobileMenuCss;

const telekomMobileMenuItemCss = ":host{--height:72px;--max-width:572px;--font-bold:var(--telekom-text-style-heading-5);--font-thin:var(--telekom-text-style-lead-text);--color:var(--telekom-color-text-and-icon-standard);--color-active:var(--telekom-color-primary-standard);--border-color:var(--telekom-color-ui-faint);--_box-shadow-active:none;--_spacing-level:0px;--_font:var(--font-thin);--_color:var(--color);position:relative}:host::part(level-0){--_spacing-level:0px;--_font:var(--font-bold)}:host::part(level-0 active){--_spacing-level:0px}:host::part(level-0 open){--_spacing-level:36px}:host::part(level-1),:host::part(level-2),:host::part(level-3),:host::part(level-4){--_spacing-level:36px}:host::part(level-1 current-level-2),:host::part(level-2 current-level-3),:host::part(level-3 current-level-4){--_font:var(--font-bold)}:host::part(active),:host::part(level-0 current-level-0 active),:host::part(level-1 current-level-1 active),:host::part(level-2 current-level-2 active),:host::part(level-3 current-level-3 active){--_color:var(--color-active);--_box-shadow-active:2px 0px 0px 0px var(--color-active) inset}:host::part(level-0 current-level-1),:host::part(level-1 current-level-2),:host::part(level-2 current-level-3),:host::part(level-3 current-level-4){--_color:var(--color)}:host::part(active-indicator){box-shadow:var(--_box-shadow-active);min-height:28px;min-width:2px}:host::part(base){font:var(--_font);max-width:var(--max-width)}::slotted(a){position:absolute;display:flex;align-items:center;height:var(--height);width:calc(100% - var(--_spacing-level));max-width:572px;padding-left:var(--_spacing-level);color:var(--_color);text-decoration:none}:host::part(header){height:var(--height);border-style:solid;border-width:0 0 1px 0;border-color:var(--border-color);display:flex;width:100%;align-items:center;justify-content:flex-end;border-style:solid;border-width:0 0 1px 0;border-color:var(--border-color)}:host::part(hidden){display:none}:host::part(icon-right-container){display:flex;align-items:center}";

const TelekomMobileMenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scaleSetMenuItemActive = index.createEvent(this, "scale-set-menu-item-active", 7);
    this.scaleSetMenuItemOpen = index.createEvent(this, "scale-set-menu-item-open", 7);
    this.scaleCloseNavFlyout = index.createEvent(this, "scale-close-nav-flyout", 7);
    this.open = false;
    this.active = false;
    this.level = '0';
    this.currentLevel = '0';
    this.handleClick = (e) => {
      e.stopImmediatePropagation();
      const hasLink = !(e.target.getAttribute('href') || '').includes('javascript:void(0)');
      const hasLinkNoChildren = hasLink && !this.children.length;
      if (hasLinkNoChildren) {
        utils.emitEvent(this, 'scaleCloseNavFlyout', e);
        return utils.emitEvent(this, 'scaleSetMenuItemActive', e.detail);
      }
      const hasLinkAndChildrenAndOpen = hasLink && this.children.length && this.open;
      if (hasLinkAndChildrenAndOpen) {
        utils.emitEvent(this, 'scaleCloseNavFlyout', e);
        return utils.emitEvent(this, 'scaleSetMenuItemActive', e.detail);
      }
      // EITHER hos link and children - ready to expand children without firing the link click
      // OR no link but has children
      e.preventDefault();
      this.toggleChildrenVisibility(true);
      return utils.emitEvent(this, 'scaleSetMenuItemOpen', e.detail);
    };
  }
  openChanged(newValue) {
    this.toggleChildrenVisibility(newValue);
  }
  toggleChildrenVisibility(show) {
    this.children.forEach((element) => {
      show && element.getAttribute('level') === String(+this.level + 1)
        ? element.removeAttribute('hidden')
        : element.setAttribute('hidden', '');
    });
  }
  get children() {
    return this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item');
  }
  get openChildren() {
    return Array.from(this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item')).filter((element) => element.hasAttribute('open') || element.open);
  }
  render() {
    return (index.h(index.Host, { onClick: this.handleClick }, index.h("nav", { part: index$1.classnames('base', `level-${this.level}`, `current-level-${this.currentLevel}`, {
        open: this.open,
        active: this.active,
        hidden: !this.open && this.level !== this.currentLevel,
      }) }, index.h("div", { part: index$1.classnames('header', {
        hidden: !!this.openChildren.length,
      }) }, index.h("slot", null), index.h("div", { part: "icon-right-container" }, !!this.children.length && !this.open && (index.h("scale-icon-navigation-right", { size: 20, color: this.active
        ? 'var(--telekom-color-primary-standard)'
        : 'var(--telekom-color-text-and-icon-standard)' })))), index.h("slot", { name: "children" }))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["openChanged"]
  }; }
};
TelekomMobileMenuItem.style = telekomMobileMenuItemCss;

const telekomNavFlyoutCss = ":host{--top:var(--scl-telekom-header-height, 0);--left:0;--width:100vw;--height:auto;--position:fixed;--background:var(--telekom-color-background-surface);--background-variant-mobile:var(--telekom-color-background-canvas);--background-backdrop:var(--telekom-color-background-canvas);--shadow:none;--z-index:7;--duration:0;--duration-backdrop-in:0;--duration-backdrop-out:0;--translate-x:0;--translate-y:0;--translate-z:0;display:contents}[part~='variant-mobile']{--height:100vh;--top:0;--background:var(--background-variant-mobile)}:host([debug]) [part~='base']{outline:1px dotted gold}[part~='base']{display:none;position:var(--position);z-index:var(--z-index);top:var(--top);left:var(--left);width:var(--width);height:var(--height);min-height:25vh;background:var(--background);box-shadow:var(--shadow);animation-duration:var(--duration);border-top:1px solid var(--telekom-color-ui-faint)}[part~='base'][part~='expanded']{display:block}[part~='backdrop']{display:none;position:var(--position);background-color:var(--telekom-color-background-backdrop);top:var(--top);left:var(--left);width:var(--width);height:100vh;animation-duration:var(--duration)}[part~='backdrop'][part~='expanded']:not([part~='variant-mobile']){display:block}[part~='backdrop'][part~='expanded'][part~='in']{animation-duration:var(--duration-backdrop-in)}[part~='backdrop'][part~='expanded'][part~='out']{animation-duration:var(--duration-backdrop-out)}@keyframes toggle{from{opacity:0;transform:translate3d(\n      var(--translate-x),\n      var(--translate-y),\n      var(--translate-z)\n    )}}[part~='in']{animation-name:toggle;animation-timing-function:var(--telekom-motion-easing-enter)}[part~='out']{animation-name:toggle;animation-fill-mode:forwards;animation-direction:reverse;animation-timing-function:var(--telekom-motion-easing-exit)}";

const TelekomNavItem$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scaleExpanded = index.createEvent(this, "scale-expanded", 7);
    /** Open the flyout menu */
    this.expanded = false;
    /** (optional) Variant ("mobile" gives it a fixed height of `100vh`) */
    this.variant = null;
    /** (optinal) Whether the flyout should open on hover (needs better name!) */
    this.hover = false;
    this.isExpanded = this.expanded;
    this.handleSpaceOrEnterForHover = (event) => {
      if (this.isExpanded) {
        return;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        this.expanded = true;
        this.show();
      }
    };
    this.handleTriggerClick = (event) => {
      if (event.ctrlKey) {
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      this.expanded = !this.expanded;
      this.parentElement.removeEventListener('mouseleave', this.handlePointerOut);
    };
    this.handlePointerIn = () => {
      if (this.isExpanded) {
        return;
      }
      this.expanded = true;
      this.parentElement.addEventListener('mouseleave', this.handlePointerOut);
    };
    this.handlePointerOut = () => {
      this.expanded = false;
      this.parentElement.removeEventListener('mouseleave', this.handlePointerOut);
    };
  }
  handleWindowKeydown(event) {
    if (!this.isExpanded) {
      return;
    }
    if (event.key === 'Escape') {
      this.expanded = false;
      try {
        this.triggerElement.focus();
      }
      catch (err) { }
    }
  }
  handleScaleCloseNavFlyout() {
    this.expanded = false;
  }
  handleDocumentClick(event) {
    if (!this.isExpanded) {
      return;
    }
    const { target } = event;
    const isNotTrigger = () => target !== this.triggerElement && !this.triggerElement.contains(target);
    const isNotWithin = () => !this.hostElement.contains(target);
    if (isNotTrigger() && isNotWithin()) {
      this.expanded = false;
    }
  }
  expandedChanged(newValue) {
    newValue ? this.show() : this.hide();
  }
  connectedCallback() {
    this.parentElement = this.hostElement.parentElement;
    if (this.triggerElement == null) {
      return;
    }
    this.triggerElement.setAttribute('aria-haspopup', 'true');
    this.triggerElement.setAttribute('aria-expanded', String(this.expanded));
    if (this.hover) {
      this.triggerElement.addEventListener('mouseenter', this.handlePointerIn);
      this.triggerElement.addEventListener('keypress', this.handleSpaceOrEnterForHover);
    }
    else {
      this.triggerElement.addEventListener('click', this.handleTriggerClick);
    }
  }
  disconnectedCallback() {
    this.triggerElement.removeEventListener('click', this.handleTriggerClick);
    this.triggerElement.removeEventListener('mouseenter', this.handlePointerIn);
    this.triggerElement.removeEventListener('keypress', this.handleSpaceOrEnterForHover);
  }
  async show() {
    this.isExpanded = true;
    this.animationState = 'in';
    requestAnimationFrame(async () => {
      await utils.animationsFinished(this.hostElement.shadowRoot);
      this.animationState = undefined;
      this.triggerElement.setAttribute('aria-expanded', 'true');
      utils.emitEvent(this, 'scaleExpanded', { expanded: true });
    });
  }
  async hide() {
    this.animationState = 'out';
    requestAnimationFrame(async () => {
      await utils.animationsFinished(this.hostElement.shadowRoot);
      this.animationState = undefined;
      this.isExpanded = false;
      this.triggerElement.setAttribute('aria-expanded', 'false');
      utils.emitEvent(this, 'scaleExpanded', { expanded: false });
    });
  }
  /**
   * Get the trigger element "on demand".
   * Either query by `trigger-selector` or
   * get the previous sibling.
   */
  get triggerElement() {
    if (this.triggerSelector) {
      return this.hostElement.ownerDocument.querySelector(this.triggerSelector);
    }
    return this.hostElement.previousElementSibling;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { part: index$1.classnames('base', this.animationState, `variant-${this.variant}`, {
        expanded: this.isExpanded,
      }) }, index.h("slot", null)), index.h("div", { part: index$1.classnames('backdrop', this.animationState, `variant-${this.variant}`, {
        expanded: this.isExpanded,
      }), onClick: () => (this.expanded = false) })));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "expanded": ["expandedChanged"]
  }; }
};
TelekomNavItem$1.style = telekomNavFlyoutCss;

const telekomNavItemCss = "@media screen and (max-width: 1039px){.scl-hide-on-mobile{display:none}}@media screen and (min-width: 1040px){.scl-hide-on-desktop{display:none}}.scale-telekom-nav-item{--_spacing-top-slotted-top:var(--telekom-spacing-composition-space-07);--_spacing-bottom-slotted-bottom:var(--telekom-spacing-composition-space-07);--_font-size-main-nav:var(--telekom-typography-font-size-body);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--color:var(--telekom-color-text-and-icon-standard);color:var(--color)}@media screen and (min-width: 640px){.scale-telekom-nav-item{--_spacing-bottom-slotted-bottom:var(\n      --telekom-spacing-composition-space-07\n    )}}@media screen and (min-width: 1040px){.scale-telekom-nav-item{--_spacing-top-slotted-top:var(--telekom-spacing-composition-space-05);--_spacing-bottom-slotted-bottom:var(\n      --telekom-spacing-composition-space-06\n    )}[scrolled] .scale-telekom-nav-item{--_spacing-bottom-slotted-bottom:var(\n      --telekom-spacing-composition-space-08\n    )}[type='slim'] .scale-telekom-nav-item,[type='slim'][scrolled] .scale-telekom-nav-item{--_spacing-bottom-slotted-bottom:var(\n      --telekom-spacing-composition-space-08\n    )}}@media screen and (min-width: 1296px){.scale-telekom-nav-item{--_spacing-top-slotted-top:var(--telekom-spacing-composition-space-05);--_spacing-bottom-slotted-bottom:var(\n      --telekom-spacing-composition-space-08\n    )}[type='slim'] .scale-telekom-nav-item{--_spacing-bottom-slotted-bottom:calc(\n      var(--telekom-spacing-composition-space-10) - 2px\n    )}}@media screen and (min-width: 1680px){.scale-telekom-nav-item{--_spacing-top-slotted-top:var(--telekom-spacing-composition-space-05);--_spacing-bottom-slotted-bottom:var(\n      --telekom-spacing-composition-space-10\n    );--_font-size-main-nav:var(--telekom-typography-font-size-callout)}[type='slim'] .scale-telekom-nav-item,[type='slim'][scrolled-back] .scale-telekom-nav-item{--_spacing-bottom-slotted-bottom:calc(\n      var(--telekom-spacing-composition-space-11)\n    )}[type='slim'][scrolled] .scale-telekom-nav-item{--_spacing-bottom-slotted-bottom:calc(\n      var(--telekom-spacing-composition-space-08)\n    )}}.scale-telekom-nav-item[debug]{border:1px dotted cyan}.scale-telekom-nav-item>:where(a,button){box-sizing:border-box;display:flex;align-items:flex-end;height:100%;position:relative;font:inherit;color:inherit;background:none;appearance:none;padding:0;border:none;text-decoration:none;cursor:pointer;transition:padding-bottom var(--telekom-motion-duration-immediate)\n    var(--telekom-motion-easing-standard)}.scale-telekom-nav-item>:where(a,button):hover,.scale-telekom-nav-item>:where(button[aria-expanded='true']){color:var(--telekom-color-text-and-icon-primary-hovered)}.scale-telekom-nav-item>:where(a,button):active{color:var(--telekom-color-text-and-icon-primary-pressed)}.scale-telekom-nav-item>:where(a,button):focus{outline:var(--focus-outline)}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(a,button),.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(a,button),.scale-telekom-nav-list[variant='main-nav']>scale-menu-flyout>.scale-telekom-nav-item>:where(a,button){font-size:var(--_font-size-main-nav);line-height:var(--telekom-typography-line-spacing-loose);font-weight:var(--telekom-typography-font-weight-extra-bold);padding-bottom:var(--_spacing-bottom-slotted-bottom)}@media screen and (min-width: 1680px){.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(a,button),.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(a,button){line-height:var(--telekom-typography-line-spacing-extra-tight);line-height:1.2}}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item[active]>:where(a,button),.scale-telekom-nav-list[variant='main-nav']>scale-menu-flyout>.scale-telekom-nav-item[active]>:where(a,button){color:var(--telekom-color-text-and-icon-primary-standard)}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(a,button):hover:after,.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(button[aria-expanded='true']):after,.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(a,button):hover:after,.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(button[aria-expanded='true']):after,.scale-telekom-nav-list[variant='main-nav']>scale-menu-flyout>.scale-telekom-nav-item>:where(a,button):hover:after{content:'';width:100%;height:var(--telekom-spacing-composition-space-02);background:var(--telekom-color-text-and-icon-primary-hovered);display:block;position:absolute;bottom:0;left:0}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(a,button):has(scale-badge[label]):hover:after,.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(button[aria-expanded='true']):has(scale-badge[label]):after,.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(a,button):has(scale-badge[label]):hover:after,.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(button[aria-expanded='true']):has(scale-badge[label]):after{width:24px}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(a,button):active:after,.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item>:where(button[aria-expanded='true']):after,.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(a,button):active:after,.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item>:where(button[aria-expanded='true']):after,.scale-telekom-nav-list[variant='main-nav']>scale-menu-flyout>.scale-telekom-nav-item>:where(a,button):active:after{content:'';width:100%;height:var(--telekom-spacing-composition-space-02);background:var(--telekom-color-text-and-icon-primary-pressed);display:block;position:absolute;bottom:0;left:0}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item[active]>:where(a,button):after,.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item[active]>:where(a,button):after,.scale-telekom-nav-list[variant='main-nav']>scale-menu-flyout>.scale-telekom-nav-item[active]>:where(a,button):after{content:'';width:100%;height:var(--telekom-spacing-composition-space-03);background:var(--telekom-color-text-and-icon-primary-standard);display:block;position:absolute;bottom:0;left:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item[active]>:where(a,button),.scale-telekom-nav-list[variant='functions']>.scale-telekom-nav-item[active]>:where(a,button),.scale-telekom-nav-list[variant='main-nav']>scale-menu-flyout>.scale-telekom-nav-item[active]>:where(a,button){border-bottom:2px solid hsl(0, 0%, 100%)}}.scale-telekom-nav-list[variant='meta-nav-external']>.scale-telekom-nav-item>:where(a,button),.scale-telekom-nav-list[variant='meta-nav']>.scale-telekom-nav-item>:where(a,button),.scale-telekom-nav-list[variant='lang-switcher']>.scale-telekom-nav-item>:where(a,button){font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-tight);font-weight:var(--telekom-typography-font-weight-regular);padding-top:var(--_spacing-top-slotted-top)}.scale-telekom-nav-list[variant='meta-nav-external']>.scale-telekom-nav-item>:where(a,button){display:flex;align-items:center}.scale-telekom-nav-list[variant='meta-nav-external']>.scale-telekom-nav-item>:where(a,button)>*{margin-inline-start:0.5ch}.scale-telekom-nav-list[variant='lang-switcher']>.scale-telekom-nav-item>a,.scale-telekom-nav-list[variant='meta-nav-external']>.scale-telekom-nav-item>a{font-size:var(--telekom-typography-font-size-body)}.scale-telekom-nav-list[variant='lang-switcher']>.scale-telekom-nav-item>:where(a,button):where([aria-current='true']){font-weight:var(--telekom-typography-font-weight-extra-bold)}.scale-telekom-nav-list[slot='mobile-meta-nav-external']>.scale-telekom-nav-item>a,.scale-telekom-nav-list[slot='mobile-meta-nav']>.scale-telekom-nav-item>a{font-size:var(--telekom-typography-font-size-body)}@media screen and (min-width: 1040px){.scale-telekom-nav-list[variant='meta-nav']{margin-right:var(--telekom-spacing-composition-space-10)}.scale-telekom-nav-list[variant='lang-switcher']>.scale-telekom-nav-item>a,.scale-telekom-nav-list[variant='meta-nav-external']>.scale-telekom-nav-item>a{font-size:var(--telekom-typography-font-size-small)}}.scale-telekom-nav-list[variant='functions'] .scale-icon{height:20px;width:20px}@media screen and (min-width: 1680px){.scale-telekom-nav-list[variant='functions'] .scale-icon{height:24px;width:24px}}scale-telekom-mobile-flyout-canvas .scale-telekom-nav-list[variant='meta-nav-external'] .scale-icon{height:12px;width:12px}[slot='mobile-meta-nav'] .scale-telekom-nav-item,[slot='mobile-meta-nav-external'] .scale-telekom-nav-item{--_font-size-main-nav:16px;line-height:var(--telekom-typography-line-spacing-standard)}.scale-telekom-nav-list>scale-menu-flyout::part(trigger){height:100%}";

// TODO maybe we want to add the <scale-icon-navigation-external-link size="11"> icon
// automatically when inside variant="meta-nav-external"?
// TODO? turn into util
function toggleAriaCurrent(element, value, attrValue = 'page') {
  if (value) {
    element.setAttribute('aria-current', attrValue);
  }
  else {
    element.removeAttribute('aria-current');
  }
}
const TelekomNavItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
    this.variant = 'main-nav';
    this.role = 'none';
    this.hideOnMobile = false;
    this.hideOnDesktop = false;
  }
  activeChanged(newValue) {
    if (this.linkElement == null) {
      return;
    }
    if (this.variant === 'lang-switcher' || this.variant === 'main-nav') {
      toggleAriaCurrent(this.linkElement, newValue, this.active ? 'true' : 'false');
    }
  }
  connectedCallback() {
    this.activeChanged(this.active);
  }
  componentDidLoad() {
    const child = Array.from(this.hostElement.children).find((el) => el.matches('a, button'));
    const parentRole = this.hostElement.parentElement.getAttribute('role');
    if (parentRole === 'menu') {
      child.setAttribute('role', 'menuitem');
    }
  }
  get linkElement() {
    return this.hostElement.querySelector('a, button');
  }
  render() {
    return (
    // The `scale-telekom-nav-item` class is used to avoid coupling styles to the tagname
    // (which can be different based on who defines it)
    index.h(index.Host, { class: {
        'scale-telekom-nav-item': true,
        'scl-hide-on-mobile': this.hideOnMobile,
        'scl-hide-on-desktop': this.hideOnDesktop,
      } }, index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["activeChanged"],
    "variant": ["activeChanged"]
  }; }
};
TelekomNavItem.style = telekomNavItemCss;

const telekomNavListCss = ".scale-telekom-nav-list{--width:100%;--height:100%;--spacing-x-start:0;--flex-direction:row;--_spacing-x-slotted:var(--_spacing-x-slotted-main-nav, 24px);--_spacing-x-slotted-meta-nav-external:var(\n    --telekom-spacing-composition-space-07\n  );--_spacing-x-slotted-meta-nav:var(--telekom-spacing-composition-space-07);--_spacing-x-slotted-lang-switcher:var(\n    --telekom-spacing-composition-space-04\n  );--_spacing-x-slotted-main-nav:var(--telekom-spacing-composition-space-10);--_spacing-x-slotted-functions:var(--telekom-spacing-composition-space-08);display:flex;align-items:stretch;flex-direction:var(--flex-direction);width:var(--width);height:var(--height);margin-inline-start:var(--spacing-x-start)}.scale-telekom-nav-list[debug]{border:1px dotted gold}@media screen and (min-width: 1296px){.scale-telekom-nav-list{--_spacing-x-slotted-main-nav:var(--telekom-spacing-composition-space-14);--_spacing-x-slotted-meta-nav:var(--telekom-spacing-composition-space-07);--_spacing-x-slotted-meta-nav-external:var(\n      --telekom-spacing-composition-space-07\n    )}.scale-telekom-nav-list[debug]{border:1px dotted cyan}}@media screen and (min-width: 1680px){.scale-telekom-nav-list{--_spacing-x-slotted-main-nav:var(--telekom-spacing-composition-space-16)}.scale-telekom-nav-list[debug]{border:1px dotted magenta}}.scale-telekom-nav-list[variant='meta-nav-external']{--_spacing-x-slotted:var(--_spacing-x-slotted-meta-nav-external)}.scale-telekom-nav-list[variant='meta-nav']{--_spacing-x-slotted:var(--_spacing-x-slotted-meta-nav)}.scale-telekom-nav-list[variant='lang-switcher']{--_spacing-x-slotted:var(--telekom-spacing-composition-space-08)}@media screen and (min-width: 1040px){.scale-telekom-nav-list[variant='lang-switcher']{--_spacing-x-slotted:var(--telekom-spacing-composition-space-04)}}.scale-telekom-nav-list[variant='main-nav']{--_spacing-x-slotted:var(--_spacing-x-slotted-main-nav)}.scale-telekom-nav-list[variant='functions']{--_spacing-x-slotted:var(--_spacing-x-slotted-functions)}.scale-telekom-nav-list[alignment='left']{justify-content:flex-start}.scale-telekom-nav-list[alignment='right']{justify-content:flex-end}.scale-telekom-nav-list[alignment='center']{justify-content:center}.scale-telekom-nav-list[alignment='left']>*:not(:last-child){margin-inline-end:var(--_spacing-x-slotted)}.scale-telekom-nav-list[alignment='right']>*:not(:first-child){margin-inline-start:var(--_spacing-x-slotted)}.scale-telekom-nav-list[alignment='center']>*{margin-inline:calc(0.5 * var(--_spacing-x-slotted))}.scale-telekom-nav-list[slot='mobile-meta-nav'],.scale-telekom-nav-list[slot='mobile-meta-nav-external']{--flex-direction:column}";

const isDirectChild = (parent, child) => [...parent.children].includes(child);
const TelekomNavList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.role = 'menu';
    this.alignment = 'left';
    this.variant = 'main-nav';
  }
  handleScaleExpanded(event) {
    if (event.detail.expanded) {
      this.closeExpandedFlyoutSiblings(event.target);
    }
  }
  closeExpandedFlyoutSiblings(target) {
    const siblingItems = [...this.hostElement.children].filter((x) => !x.contains(target));
    siblingItems.forEach((item) => {
      const flyout = item.querySelector('scale-telekom-nav-flyout');
      if (isDirectChild(item, flyout) && flyout.expanded) {
        flyout.expanded = false;
      }
    });
  }
  connectedCallback() {
    [...this.hostElement.children].forEach((el) => {
      el.setAttribute('variant', this.variant);
    });
  }
  render() {
    return (index.h(index.Host, { class: "scale-telekom-nav-list" }, index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};
TelekomNavList.style = telekomNavListCss;

exports.scale_badge = Badge;
exports.scale_icon_action_menu = ActionMenu;
exports.scale_icon_user_file_user = UserFileUser;
exports.scale_telekom_header = TelekomHeader;
exports.scale_telekom_mega_menu = TelekomMegaMenu;
exports.scale_telekom_mega_menu_column = TelekomMegaMenuColumn;
exports.scale_telekom_mobile_flyout_canvas = TelekomMobileFlyoutCanvas;
exports.scale_telekom_mobile_menu = TelekomMobileMenu;
exports.scale_telekom_mobile_menu_item = TelekomMobileMenuItem;
exports.scale_telekom_nav_flyout = TelekomNavItem$1;
exports.scale_telekom_nav_item = TelekomNavItem;
exports.scale_telekom_nav_list = TelekomNavList;
