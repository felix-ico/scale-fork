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
  tag: 'scale-icon-device-mobile-phone-insurance',
  styleUrl: '../../icon/icon.css'
})
export class DeviceMobilePhoneInsurance {
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
            {this.selected ? (<g><path d="M16 .5a3 3 0 012.995 2.824L19 3.5v1.955L9.03 11l4.05 2.19-3.785 2.31.81 1.275 6-3.675-3.94-2.1L19 7.17V20.5a3 3 0 01-2.824 2.995L16 23.5H8a3 3 0 01-2.995-2.824L5 20.5v-17A3 3 0 017.824.505L8 .5h8zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zm2-16.5h-4v1h4v-1z" fill-rule="evenodd"></path></g>) : (<g><path d="M16 .5a3.01 3.01 0 012.995 2.824L19 3.5v17a3.01 3.01 0 01-2.824 2.995L16 23.5H8a3.01 3.01 0 01-2.995-2.824L5 20.5v-17A3.01 3.01 0 017.824.505L8 .5h8zM10 2H8c-.8 0-1.423.576-1.493 1.352L6.5 3.5v17c0 .8.576 1.423 1.352 1.493L8 22h8c.8 0 1.423-.576 1.493-1.352l.007-.148V7.9L12.2 11l3.95 2.1-6.05 3.7-.8-1.3 3.8-2.35L9.05 11l8.45-4.8V3.5c0-.8-.576-1.423-1.352-1.493L16 2h-2v1.5h-4V2zm2 16.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
