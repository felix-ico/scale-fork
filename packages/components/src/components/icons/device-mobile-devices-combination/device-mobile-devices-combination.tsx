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
  tag: 'scale-icon-device-mobile-devices-combination',
  styleUrl: '../../icon/icon.css'
})
export class DeviceMobileDevicesCombination {
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
            {this.selected ? (<g><path d="M10 6a2.5 2.5 0 012.495 2.336l.005.164v13a2.5 2.5 0 01-2.336 2.495L10 24H4a2.5 2.5 0 01-2.492-2.302L1.5 21.5v-13a2.5 2.5 0 012.336-2.495L4 6h6zM7 19.75a1 1 0 100 2 1 1 0 000-2zM19.5 0a3 3 0 012.995 2.824L22.5 3v14.5a3 3 0 01-2.824 2.995l-.176.005H14V19h5.5a1.5 1.5 0 001.493-1.356L21 17.5V3a1.5 1.5 0 00-1.356-1.493L19.5 1.5H10a1.5 1.5 0 00-1.493 1.356L8.5 3v1.5H7V3A3 3 0 019.824.005L10 0h9.5zm-4.75 16a1 1 0 110 2 1 1 0 010-2zM8.5 7.5h-3V9h3V7.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M10 6a2.473 2.473 0 012.495 2.333l.005.167v13a2.473 2.473 0 01-2.333 2.495L10 24H4a2.473 2.473 0 01-2.495-2.333L1.5 21.5v-13a2.473 2.473 0 012.333-2.495L4 6h6zM5.5 7.5H4c-.51 0-.935.388-.993.884L3 8.5v13c0 .51.388.935.884.993L4 22.5h6c.51 0 .935-.388.993-.884L11 21.5v-13c0-.51-.388-.935-.884-.993L10 7.5H8.5V9h-3V7.5zM7 19.75a1 1 0 110 2 1 1 0 010-2zM19.5 0a3.01 3.01 0 012.995 2.824L22.5 3v14.5a3.01 3.01 0 01-2.824 2.995l-.176.005H14V19h5.5c.8 0 1.423-.576 1.493-1.352L21 17.5V3c0-.8-.576-1.423-1.352-1.493L19.5 1.5H10c-.8 0-1.423.576-1.493 1.352L8.5 3v1.5H7V3A3.01 3.01 0 019.824.005L10 0h9.5zm-4.75 16a1 1 0 110 2 1 1 0 010-2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
