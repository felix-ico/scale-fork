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
  tag: 'scale-icon-device-device-ethernet',
  styleUrl: '../../icon/icon.css'
})
export class DeviceDeviceEthernet {
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
            {this.selected ? (<g><path d="M18 3v6.5h-3l-5-1.511V7H6.75a3.254 3.254 0 00-3.25 3.25c0 1.73 1.36 3.15 3.066 3.245l.184.005H14c2.206 0 4 1.794 4 4a4.005 4.005 0 01-3.8 3.995l-.2.005H3.75a.75.75 0 01-.102-1.493L3.75 20H14c1.379 0 2.5-1.122 2.5-2.5a2.503 2.503 0 00-2.336-2.495L14 15H6.75A4.756 4.756 0 012 10.25a4.756 4.756 0 014.533-4.745L6.75 5.5H10v-.989L15 3h3zm4 1v4.5h-2.5V4H22z" fill-rule="evenodd"></path></g>) : (<g><path d="M18 3v6.5h-3l-5-1.511V7H6.75a3.254 3.254 0 00-3.25 3.25c0 1.73 1.36 3.15 3.066 3.245l.184.005H14c2.206 0 4 1.794 4 4a4.005 4.005 0 01-3.8 3.995l-.2.005H3.75a.75.75 0 01-.102-1.493L3.75 20H14c1.379 0 2.5-1.122 2.5-2.5a2.503 2.503 0 00-2.336-2.495L14 15H6.75A4.756 4.756 0 012 10.25a4.756 4.756 0 014.533-4.745L6.75 5.5H10v-.989L15 3h3zm4 1v4.5h-2.5V4H22z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
