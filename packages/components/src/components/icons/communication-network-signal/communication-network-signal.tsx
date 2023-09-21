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
  tag: 'scale-icon-communication-network-signal',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationNetworkSignal {
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
            {this.selected ? (<g><path d="M18.75 3.58c.69 0 1.25.56 1.25 1.25V20.5h-2.5V4.83c0-.69.56-1.25 1.25-1.25zm-4.5 3.615c.69 0 1.25.56 1.25 1.25V20.5H13V8.445c0-.69.56-1.25 1.25-1.25zm-4.5 4.1c.69 0 1.25.559 1.25 1.25V20.5H8.5v-7.955c0-.691.56-1.25 1.25-1.25zm-4.5 3.585c.69 0 1.25.559 1.25 1.25v4.37H4v-4.37c0-.691.56-1.25 1.25-1.25z" fill-rule="evenodd"></path></g>) : (<g><path d="M18.75 3.58c.69 0 1.25.56 1.25 1.25V20.5h-2.5V4.83c0-.69.56-1.25 1.25-1.25zm-4.5 3.615c.69 0 1.25.56 1.25 1.25V20.5H13V8.445c0-.69.56-1.25 1.25-1.25zm-4.5 4.1c.69 0 1.25.559 1.25 1.25V20.5H8.5v-7.955c0-.691.56-1.25 1.25-1.25zm-4.5 3.585c.69 0 1.25.559 1.25 1.25v4.37H4v-4.37c0-.691.56-1.25 1.25-1.25z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
