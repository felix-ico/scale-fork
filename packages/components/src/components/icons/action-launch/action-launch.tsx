/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component, Prop, Host, Element, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-action-launch',
  styleUrl: '../../icon/icon.css'
})
export class ActionLaunch {
  @Element() hostElement: HTMLElement;

  /** (optional) The width and height in pixels */
  @Prop({ reflect: true }) size?: number = 24;
  /** (optional) Sets the icon color via the `fill` attribute */
  @Prop() fill?: string = 'currentColor';
  /** (optional) Alias for `fill` */
  @Prop() color?: string = 'currentColor';
  /** (optional) If `true`, the icon changes visually */
  @Prop({ reflect: true }) selected?: boolean = false;
  /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
  @Prop() decorative?: boolean = false;
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  @Prop() accessibilityTitle?: string;
  /** (optional) If `true` the icon can receive focus */
  @Prop() focusable?: boolean = false;

  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }

  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return (
      <Host>
        <svg class="scale-icon" xmlns="http://www.w3.org/2000/svg" width={this.size} height={this.size} viewBox="0 0 24 24" {...ariaHidden} {...focusable}>
          {this.accessibilityTitle && <title>{this.accessibilityTitle}</title>}
          <g fill={((this.fill === 'currentColor') ? this.color : this.fill)}>
            {this.selected ? (<g><path d="M12.96 3.968c2.485-2.485 6.36-3.125 9.88-2.808.317 3.517-.322 7.393-2.808 9.879-.882.882-1.915 1.785-2.953 2.632l-.52.42.241 1.538a5.225 5.225 0 01-1.538 4.585l-.18.166-3.026 2.663a.75.75 0 01-1.17-.235l-.04-.1-1.596-4.977-.886.379-2.475-2.475.38-.886-4.978-1.596a.75.75 0 01-.398-1.123l.064-.086L3.62 8.919a5.224 5.224 0 014.508-1.75l.243.032 1.538.24c.965-1.209 2.022-2.443 3.051-3.473zM4.814 16.571l.044-.019.009.12.03.234.037.218.057.262c.08.331.207.745.409 1.214.469.202.883.329 1.213.408l.263.057.217.038.286.034.068.004-.076.17-.1.19-.09.157-.113.176-.134.189-.158.2c-.733.88-2.14 1.924-4.569 1.57-.395-2.71.949-4.148 1.866-4.797l.183-.124.166-.101.146-.081.246-.12zm10.502-.71l-.111-.715-.75.563-.702.515-.842.605-1.08.752-.399.27-.469.313.962 2.996 2.164-1.905a3.731 3.731 0 001.256-3.17l-.029-.225zM8.14 8.683A3.731 3.731 0 004.9 9.745l-.155.165-1.905 2.165 2.996.962.689-1.022.769-1.098.791-1.092.451-.608.319-.422-.716-.112zM16.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill-rule="evenodd"></path></g>) : (<g><path d="M12.96 3.968c2.485-2.485 6.36-3.125 9.88-2.808.317 3.517-.322 7.393-2.808 9.879-.882.882-1.915 1.785-2.953 2.632l-.52.42.241 1.538a5.225 5.225 0 01-1.538 4.585l-.18.166-3.026 2.663a.75.75 0 01-1.17-.235l-.04-.1-1.596-4.977-.886.379-2.475-2.475.38-.886-4.978-1.596a.75.75 0 01-.398-1.123l.064-.086L3.62 8.919a5.224 5.224 0 014.508-1.75l.243.032 1.538.24c.965-1.209 2.022-2.443 3.051-3.473zM4.814 16.571l.044-.019.009.12.03.234.037.218.057.262c.08.331.207.745.409 1.214.469.202.883.329 1.213.408l.263.057.217.038.286.034.068.004-.076.17-.1.19-.09.157-.113.176-.134.189-.158.2c-.733.88-2.14 1.924-4.569 1.57-.395-2.71.949-4.148 1.866-4.797l.183-.124.166-.101.146-.081.246-.12zm10.502-.71l-.111-.715-.75.563-.702.515-.842.605-1.08.752-.399.27-.469.313.962 2.996 2.164-1.905a3.731 3.731 0 001.256-3.17l-.029-.225zm6.117-12.982v-.312l-.488.005-.384.014a15.29 15.29 0 00-.207.012l-.442.035c-1.756.164-4.204.709-5.891 2.396a35.533 35.533 0 00-2.037 2.247l-.5.604-.487.606-.472.602-.672.879-.418.56-.573.782-.779 1.093-.34.491 3.364 3.364.684-.477.657-.468.756-.549.546-.404.572-.43.59-.454.602-.472.303-.243.605-.494.6-.503a33.947 33.947 0 001.949-1.784c1.687-1.688 2.235-4.138 2.399-5.894l.034-.44.02-.405.009-.36zM8.139 8.683A3.731 3.731 0 004.9 9.745l-.155.165-1.905 2.165 2.996.962.689-1.022.769-1.098.791-1.092.451-.608.319-.422-.716-.112zM16.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
