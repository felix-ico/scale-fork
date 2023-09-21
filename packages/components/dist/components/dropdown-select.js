import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { s as statusNote } from './status-note.js';
import { c as computePosition } from './floating-ui.dom.esm.js';
import { e as emitEvent, g as generateUniqueId } from './utils.js';
import { d as defineCustomElement$7 } from './helper-text.js';
import { d as defineCustomElement$6 } from './action-checkmark.js';
import { d as defineCustomElement$5 } from './action-success.js';
import { d as defineCustomElement$4 } from './alert-error.js';
import { d as defineCustomElement$3 } from './alert-information.js';
import { d as defineCustomElement$2 } from './navigation-collapse-down.js';
import { d as defineCustomElement$1 } from './navigation-collapse-up.js';

const dropdownSelectCss = ":host{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-composition-space-13);--color:var(--telekom-color-text-and-icon-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--background-hover:var(--telekom-color-ui-state-fill-hovered);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border-invalid:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-hovered);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--spacing-x:var(--telekom-spacing-composition-space-05);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--spacing-x-for-helper-text:var(--telekom-spacing-composition-space-03);--transition-combobox:var(--transition);--background-combobox:var(--telekom-color-ui-state-fill-standard);--spacing-combobox:1.125rem\n    calc(2rem - var(--telekom-spacing-composition-space-01)) 0.25rem\n    calc(0.75rem - var(--telekom-spacing-composition-space-01));--spacing-y-meta:var(--telekom-spacing-composition-space-03);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:20px;--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--transform-label:translate(var(--spacing-x), 0.875rem);--transform-label-animated:translate(\n    var(--spacing-x),\n    calc(0.25rem + var(--telekom-spacing-composition-space-01))\n  );--background-listbox:var(--telekom-color-background-surface);--box-shadow-listbox:0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    0 4px 16px 0 rgba(0, 0, 0, 0.1);--max-height-listbox:300px;--z-index-listbox:99}[part='combobox-container'] *,[part='combobox-container'] *::before,[part='combobox-container'] *::after{box-sizing:border-box}[part='combobox-container']{display:block;position:relative}[part='combobox']{width:100%;height:var(--height);margin:0;display:flex;align-items:center;outline:none;padding:var(--spacing-combobox);z-index:1;box-sizing:border-box;transition:var(--transition-combobox);font:var(--telekom-text-style-body);border-radius:var(--radius);border:var(--border);box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-combobox);color:var(--color)}[part~='select']:not([part~='disabled']) [part='combobox']:hover~[part='icon']{color:var(--color-icon-hover)}[part~='select']:not([part~='disabled']) [part='combobox']:active~[part='icon']{color:var(--color-icon-active)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:hover{border-color:var(--border-color-hover);background-color:var(--background-hover)}[part~='select']:not([part~='disabled'])[part~='invalid'] [part='combobox']:hover{background-color:var(--background-hover)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:focus{border-color:var(--border-color-focus)}[part~='select']:not([part~='disabled']):not([part~='steal-focus']) [part='combobox']:focus{outline:var(--focus-outline);outline-offset:1px}[part~='invalid'] [part='combobox']{border:var(--border-invalid)}[part~='transparent'] [part='combobox']{background-color:transparent}[part~='disabled'] [part='combobox']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='combobox_value']{width:calc(100%);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}[part='meta']{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}[part='icon']{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}[part~='disabled'] [part='icon']{color:var(--color-disabled)}[part='label']{width:calc(100% - 44px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;top:0;left:0;color:var(--color-label);display:inline-block;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font:var(--telekom-text-style-ui);transform:var(--transform-label)}[part~='animated'] [part='label']{font:var(--telekom-text-style-small-bold);transform:var(--transform-label-animated)}[part~='disabled'] [part='label']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part~='hide-label'] [part='combobox']{padding-top:0.3125rem}[part~='hide-label'] [part='label']{visibility:hidden}[part='listbox']{position:relative}[part='listbox-scroll-container']{max-height:var(--max-height-listbox);overflow-y:auto}[part='listbox-pad']{background:var(--background-listbox);box-shadow:var(--box-shadow-listbox);border-radius:var(--radius);padding:var(--radius) 0;margin-top:var(--telekom-spacing-composition-space-03);left:0;position:absolute;top:100%;width:100%;z-index:var(--z-index-listbox);display:none}[part~='open'] [part='listbox-pad']{display:block}[part~='strategy-fixed'] [part='listbox-pad']{position:fixed}[part~='transparent'] [part='listbox']{background-color:transparent}[part~='option']{color:var(--color)}[part~='option']:hover{background-color:var(--background-hover)}[part~='option'][part~='current']{outline:var(--focus-outline);outline-offset:-2px;border-radius:var(--radius)}[part~='option'][aria-selected='true']{padding-right:30px;position:relative}[part~='option'][aria-selected='true'] scale-icon-action-checkmark{position:absolute;right:var(--telekom-spacing-composition-space-05);top:var(--telekom-spacing-composition-space-05)}[part~='option'] scale-dropdown-select-item::part(base){padding:var(--telekom-spacing-composition-space-05)}[part~='has-helper-text'] [part~='combobox-container']{margin-bottom:var(--spacing-x-for-helper-text)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.hcm-disabled{display:none}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='listbox-pad']{outline:var(--focus-outline);outline-offset:-2px;border-radius:var(--radius)}.hcm-disabled{display:block}}";

var Actions;
(function (Actions) {
  Actions["Close"] = "Close";
  Actions["CloseSelect"] = "CloseSelect";
  Actions["First"] = "First";
  Actions["Last"] = "Last";
  Actions["Next"] = "Next";
  Actions["Open"] = "Open";
  Actions["PageDown"] = "PageDown";
  Actions["PageUp"] = "PageUp";
  Actions["Previous"] = "Previous";
  Actions["Select"] = "Select";
  Actions["Type"] = "Type";
})(Actions || (Actions = {}));
const DEFAULT_ICON_SIZE = 20;
const isElementValue = (x) => typeof x.value === 'string';
const readValue = (element) => isElementValue(element) ? element.value : null;
const readOptions = (hostElement) => {
  return Array.from(hostElement.children).map((x) => {
    var _a;
    return ({
      label: x.textContent.trim(),
      value: (_a = x.getAttribute('value')) !== null && _a !== void 0 ? _a : readValue(x),
      ItemElement: h("span", { innerHTML: x.outerHTML }),
    });
  });
};
function getActionFromKey(event, open) {
  const { key, altKey, ctrlKey, metaKey } = event;
  if (!open && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(key)) {
    return Actions['Open'];
  }
  if (key === 'Home') {
    return Actions['First'];
  }
  if (key === 'End') {
    return Actions['Last'];
  }
  if (['Backspace', 'Clear'].includes(key) ||
    (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)) {
    return Actions['Type'];
  }
  if (!open) {
    return;
  }
  if (key === 'ArrowUp' && altKey) {
    return Actions['CloseSelect'];
  }
  if (key === 'ArrowDown' && !altKey) {
    return Actions['Next'];
  }
  switch (key) {
    case 'ArrowUp':
      return Actions['Previous'];
    case 'PageUp':
      return Actions['PageUp'];
    case 'PageDown':
      return Actions['PageDown'];
    case 'Escape':
      return Actions['Close'];
    case 'Enter':
      return Actions['CloseSelect'];
    case ' ':
      return Actions['CloseSelect'];
  }
}
function jumpToIndex(currentIndex, maxIndex, action) {
  const JUMP_SIZE = 10;
  switch (action) {
    case Actions['First']:
      return 0;
    case Actions['Last']:
      return maxIndex;
    case Actions['Previous']:
      return Math.max(0, currentIndex - 1);
    case Actions['Next']:
      return Math.min(maxIndex, currentIndex + 1);
    case Actions['PageUp']:
      return Math.max(0, currentIndex - JUMP_SIZE);
    case Actions['PageDown']:
      return Math.min(maxIndex, currentIndex + JUMP_SIZE);
    default:
      return currentIndex;
  }
}
function matchOptions(options = [], filter) {
  return options.filter((option) => option.toLowerCase().indexOf(filter.toLowerCase()) === 0);
}
function getIndexByChar(values, filter, startIndex = 0) {
  const sortedValues = [
    ...values.slice(startIndex),
    ...values.slice(0, startIndex),
  ];
  const firstHit = matchOptions(sortedValues, filter)[0];
  const allMatchingChars = (array) => array.every((char) => char === array[0]);
  if (firstHit) {
    return values.indexOf(firstHit);
  }
  if (allMatchingChars(filter.split(''))) {
    const hits = matchOptions(sortedValues, filter[0]);
    return values.indexOf(hits[0]);
  }
  return -1;
}
function keepInView(activeElement, scrollParent) {
  const { offsetHeight, offsetTop } = activeElement;
  const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;
  const isAboveParent = offsetTop < scrollTop;
  const isBelowParent = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
  if (isBelowParent) {
    return (scrollParent.scrollTop =
      offsetTop + offsetHeight - parentOffsetHeight);
  }
  if (isAboveParent) {
    return (scrollParent.scrollTop = offsetTop);
  }
}
function hasOverflow(element) {
  return element && element.clientHeight < element.scrollHeight;
}
function isInView(element) {
  const rect = element.getBoundingClientRect();
  const parentRect = {
    top: 0,
    left: 0,
    right: window.innerWidth || document.documentElement.clientWidth,
    bottom: window.innerHeight || document.documentElement.clientHeight,
  };
  return (rect.top >= parentRect.top &&
    rect.left >= parentRect.left &&
    rect.bottom <= parentRect.bottom &&
    rect.right <= parentRect.right);
}
const DropdownSelect = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleKeydown = createEvent(this, "scale-keydown", 7);
    this.comboboxId = 'combobox';
    this.helperText = '';
    this.invalid = false;
    this.variant = 'informational';
    /** @see {@url https://floating-ui.com/docs/computePosition#strategy} */
    this.floatingStrategy = 'absolute';
    /** (optional) to hide the label */
    this.hideLabelVisually = false;
    /** (optional) Screen reader text appended to the selected element */
    this.ariaLabelSelected = 'selected';
    /** (optional) Text displayed in high contrast mode only to indicate disabled state */
    this.hcmLabelDisabled = 'this field is disabled';
    this.options = '';
    this.open = false;
    this.currentIndex = -1;
    this.queryString = '';
    this.queryTimeout = null;
    this.ignoreBlur = false;
    this.hasFocus = false;
    this.selectOption = (index) => {
      this.currentIndex = index;
      this.value = readOptions(this.hostElement)[index].value;
      emitEvent(this, 'scaleChange', { value: this.value });
    };
    this.handleKeyDown = (event) => {
      const { key } = event;
      const max = readOptions(this.hostElement).length - 1;
      const action = getActionFromKey(event, this.open);
      emitEvent(this, 'scaleKeydown', event);
      switch (action) {
        case Actions['Last']:
        case Actions['First']:
          this.setOpen(true);
        case Actions['Next']:
        case Actions['Previous']:
        case Actions['PageUp']:
        case Actions['PageDown']:
          event.preventDefault();
          return this.handleOptionChange(jumpToIndex(this.currentIndex, max, action));
        case Actions['CloseSelect']:
          event.preventDefault();
          this.selectOption(this.currentIndex);
        case Actions['Close']:
          event.preventDefault();
          return this.setOpen(false);
        case Actions['Type']:
          return this.buildQueryString(key);
        case Actions['Open']:
          event.preventDefault();
          return this.setOpen(true);
      }
    };
    this.handleBlur = () => {
      if (this.ignoreBlur) {
        this.ignoreBlur = false;
        return;
      }
      this.setOpen(false);
      emitEvent(this, 'scaleBlur');
    };
    this.handleFocus = () => {
      emitEvent(this, 'scaleFocus');
    };
    this.handleClick = () => {
      this.setOpen(!this.open);
      const indexOfValue = readOptions(this.hostElement).findIndex(({ value }) => value === this.value);
      if (indexOfValue > -1) {
        setTimeout(() => {
          this.bringIntoView(indexOfValue);
        });
      }
    };
  }
  valueChange(newValue) {
    this.currentIndex = readOptions(this.hostElement).findIndex(({ value }) => value === newValue);
  }
  connectedCallback() {
    if (this.hostElement.closest('scale-tab-panel')) {
      this.ignoreBlur = true;
    }
    statusNote({ source: this.hostElement, tag: 'beta' });
    this.currentIndex =
      readOptions(this.hostElement).findIndex(({ value }) => value === this.value) || -1;
  }
  componentDidRender() {
    if (!this.open) {
      return;
    }
    if (this.floatingStrategy === 'fixed') {
      this.listboxPadEl.style.width = `${this.comboEl.getBoundingClientRect().width}px`;
    }
    computePosition(this.comboEl, this.listboxPadEl, {
      placement: 'bottom',
      strategy: this.floatingStrategy,
    }).then(({ x, y }) => {
      Object.assign(this.listboxPadEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
  handleOptionChange(index) {
    this.currentIndex = index;
    this.bringIntoView(index);
  }
  bringIntoView(index) {
    const options = this.listboxEl.querySelectorAll('[role=option]');
    if (hasOverflow(this.listboxEl)) {
      keepInView(options[index], this.listboxEl);
    }
    if (!isInView(options[index])) {
      options[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  setOpen(open) {
    if (this.open === open) {
      return;
    }
    if (this.disabled) {
      return;
    }
    this.open = open;
    if (!this.open) {
      this.comboEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      this.comboEl.focus();
      this.currentIndex = -1;
    }
  }
  handleOptionClick(event, index) {
    event.stopPropagation();
    this.handleOptionChange(index);
    this.selectOption(index);
    this.setOpen(false);
  }
  getSearchString(char) {
    if (typeof this.queryTimeout === 'number') {
      window.clearTimeout(this.queryTimeout);
    }
    this.queryTimeout = window.setTimeout(() => {
      this.queryString = '';
    }, 500);
    this.queryString += char;
    return this.queryString;
  }
  buildQueryString(char) {
    this.setOpen(true);
    const queryString = this.getSearchString(char);
    const queryIndex = getIndexByChar(readOptions(this.hostElement).map(({ label }) => label), queryString, this.currentIndex + 1);
    if (queryIndex >= 0) {
      this.handleOptionChange(queryIndex);
    }
    else {
      window.clearTimeout(this.queryTimeout);
      this.queryString = '';
    }
  }
  render() {
    const ValueElement = (readOptions(this.hostElement).find(({ value }) => value === this.value) ||
      {}).ItemElement;
    const hasEmptyValueElement = (readOptions(this.hostElement).find(({ value }) => value === this.value) || {}).value === ''
      ? true
      : false;
    const helperTextId = `helper-message-${generateUniqueId()}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return (h(Host, null, h("div", { part: this.getBasePartMap() }, h("div", { part: "combobox-container" }, h("label", { id: `${this.comboboxId}-label`, part: "label" }, this.label), h("div", Object.assign({ ref: (el) => (this.comboEl = el), "aria-controls": `${this.comboboxId}-listbox`, "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "listbox", "aria-labelledby": `${this.comboboxId}-label`, id: this.comboboxId, part: "combobox", role: "combobox", tabindex: "0", onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, (this.open
      ? {
        'aria-activedescendant': (readOptions(this.hostElement)[this.currentIndex] ||
          {}).value,
      }
      : {}), (this.helperText ? ariaDescribedByAttr : {}), (this.invalid ? { 'aria-invalid': 'true' } : {})), h("span", { part: "combobox-value" }, hasEmptyValueElement ? '' : ValueElement)), h("div", { part: "listbox-pad", ref: (el) => (this.listboxPadEl = el) }, h("div", { part: "listbox-scroll-container" }, h("div", { ref: (el) => (this.listboxEl = el), part: "listbox", role: "listbox", id: `${this.comboboxId}-listbox`, "aria-labelledby": `${this.comboboxId}-label`, tabindex: "-1" }, readOptions(this.hostElement).map(({ value, ItemElement }, index) => (h("div", Object.assign({ role: "option", part: `option${index === this.currentIndex ? ' current' : ''}`, id: value, onClick: (event) => {
        this.handleOptionClick(event, index);
      }, onMouseDown: () => {
        this.ignoreBlur = true;
      } }, (value === this.value
      ? { 'aria-selected': 'true' }
      : {})), ItemElement, value === this.value ? (h("div", null, h("scale-icon-action-checkmark", { size: 16 }), h("span", { class: "sr-only" }, this.ariaLabelSelected))) : null)))))), h("div", { part: "icon" }, this.open ? (h("scale-icon-navigation-collapse-up", { decorative: true, size: DEFAULT_ICON_SIZE })) : (h("scale-icon-navigation-collapse-down", { decorative: true, size: DEFAULT_ICON_SIZE })))), this.helperText && (h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant, id: helperTextId })), this.disabled && (h("div", { class: "hcm-disabled" }, this.hcmLabelDisabled)))));
  }
  getBasePartMap() {
    const animated = this.value != null && this.value !== '';
    return classnames('select', this.open && `open`, this.disabled && `disabled`, this.readonly && `readonly`, this.transparent && 'transparent', this.invalid && `invalid`, this.currentIndex > -1 && `steal-focus`, animated && 'animated', this.helperText && 'has-helper-text', this.floatingStrategy && `strategy-${this.floatingStrategy}`, this.hideLabelVisually && 'hide-label');
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "value": ["valueChange"]
  }; }
  static get style() { return dropdownSelectCss; }
}, [1, "scale-dropdown-select", {
    "comboboxId": [1, "combobox-id"],
    "label": [1],
    "name": [1],
    "helperText": [1, "helper-text"],
    "disabled": [4],
    "readonly": [4],
    "transparent": [4],
    "invalid": [4],
    "variant": [1],
    "value": [1544],
    "floatingStrategy": [1, "floating-strategy"],
    "hideLabelVisually": [4, "hide-label-visually"],
    "ariaLabelSelected": [1, "aria-label-selected"],
    "hcmLabelDisabled": [1, "hcm-label-disabled"],
    "options": [32],
    "open": [32],
    "currentIndex": [32],
    "queryString": [32],
    "queryTimeout": [32],
    "ignoreBlur": [32],
    "hasFocus": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-dropdown-select", "scale-helper-text", "scale-icon-action-checkmark", "scale-icon-action-success", "scale-icon-alert-error", "scale-icon-alert-information", "scale-icon-navigation-collapse-down", "scale-icon-navigation-collapse-up"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-dropdown-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownSelect);
      }
      break;
    case "scale-helper-text":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "scale-icon-action-checkmark":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "scale-icon-action-success":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "scale-icon-alert-error":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "scale-icon-alert-information":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-icon-navigation-collapse-down":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "scale-icon-navigation-collapse-up":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { DropdownSelect as D, defineCustomElement as d };
