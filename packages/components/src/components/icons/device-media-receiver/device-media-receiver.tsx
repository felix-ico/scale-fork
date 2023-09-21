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
  tag: 'scale-icon-device-media-receiver',
  styleUrl: '../../icon/icon.css'
})
export class DeviceMediaReceiver {
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
            {this.selected ? (<g><path d="M23.5 13v5a3 3 0 01-2.824 2.995L20.5 21h-17a3 3 0 01-2.995-2.824L.5 18v-5h23zM19 16h-2v2h2v-2zm.175-11.53l1.06 1.06A11.42 11.42 0 0112.1 8.9a11.41 11.41 0 01-7.878-3.124L3.97 5.53l1.06-1.06A9.93 9.93 0 0012.1 7.4a9.935 9.935 0 006.838-2.699l.237-.231zm-2.83-2.83l1.06 1.06A7.44 7.44 0 0112.1 4.9a7.435 7.435 0 01-5.086-1.993L6.8 2.7l1.06-1.06A5.95 5.95 0 0012.1 3.4a5.96 5.96 0 004.043-1.566l.202-.194z" fill-rule="evenodd"></path></g>) : (<g><path d="M23.5 13v5a3.01 3.01 0 01-2.824 2.995L20.5 21h-17a3.01 3.01 0 01-2.995-2.824L.5 18v-5h23zM22 14.5H2V18c0 .8.576 1.423 1.352 1.493l.148.007h17c.8 0 1.423-.576 1.493-1.352L22 18v-3.5zM19 16v2h-2v-2h2zm.2-11.5l1.05 1.05C18.05 7.7 15.3 8.9 12.2 8.9c-2.98 0-5.777-1.11-7.899-3.106L4.05 5.55 5.1 4.5c1.85 1.9 4.4 2.95 7.05 2.95 2.54 0 4.941-.964 6.81-2.717l.24-.233zm-2.85-2.85L17.4 2.7c-1.4 1.4-3.3 2.2-5.3 2.2a7.49 7.49 0 01-5.086-1.995L6.8 2.7l1.05-1.05A5.935 5.935 0 0012.1 3.4a5.933 5.933 0 004.043-1.553l.207-.197z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
