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
  tag: 'scale-icon-device-server',
  styleUrl: '../../icon/icon.css'
})
export class DeviceServer {
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
            {this.selected ? (<g><path d="M21.002 16v3.5a3 3 0 01-2.824 2.995L18 22.5H6a3.001 3.001 0 01-2.994-2.824L3 19.5V16h18zm-5 1.5a1 1 0 100 2 1 1 0 000-2zm5-8v5h-18v-5h18zm-5 1.5a1 1 0 100 2 1 1 0 000-2zm2-9.5a3 3 0 012.994 2.824l.006.176V8h-18V4.5a3.001 3.001 0 012.823-2.995l.176-.005h12zm-2 3a1 1 0 100 2 1 1 0 000-2z" fill-rule="evenodd"></path></g>) : (<g><path d="M18.002 1.5a3 3 0 012.995 2.824l.005.176v15a3 3 0 01-2.824 2.995l-.176.005h-12a3 3 0 01-2.995-2.824l-.005-.176v-15a3 3 0 012.823-2.995l.177-.005h12zm1.5 14.5h-15v3.5c0 .778.596 1.42 1.355 1.493l.145.007h12c.778 0 1.42-.596 1.493-1.356l.007-.144V16zm-3.5 1.5a1 1 0 110 2 1 1 0 010-2zm3.5-8h-15v5h15v-5zm-3.5 1.5a1 1 0 110 2 1 1 0 010-2zm2-8h-12c-.779 0-1.42.596-1.494 1.356l-.006.144V8h15V4.5c0-.827-.673-1.5-1.5-1.5zm-2 1.5a1 1 0 110 2 1 1 0 010-2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
