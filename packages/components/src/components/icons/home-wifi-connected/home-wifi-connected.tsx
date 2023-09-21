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
  tag: 'scale-icon-home-wifi-connected',
  styleUrl: '../../icon/icon.css'
})
export class HomeWifiConnected {
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
            {this.selected ? (<g><path d="M12 18a2 2 0 110 4 2 2 0 010-4zm-1.08-4.4a7.15 7.15 0 00.723 1.925A4.495 4.495 0 008.14 17.69l-.11.194-1.436-1.49A6.496 6.496 0 0110.92 13.6zm7.018-7.226a5.688 5.688 0 11-.002 11.376 5.688 5.688 0 01.002-11.376zm-6.5 2.642a7.08 7.08 0 00-.612 2.062 8.992 8.992 0 00-5.802 3.25l-.19.241-1.406-1.459a10.977 10.977 0 018.01-4.094zm8.395 1.031l-2.565 2.564-1.282-1.28a.683.683 0 00-.965.964l2.247 2.247 3.53-3.53a.681.681 0 10-.965-.965zM12 4.5c1.469 0 2.89.205 4.236.588a7.148 7.148 0 00-2.921 1.481A13.602 13.602 0 0012 6.5a13.463 13.463 0 00-10.091 4.537l-.228.263L.287 9.855A15.459 15.459 0 0112 4.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 18a2 2 0 110 4 2 2 0 010-4zm-1.08-4.4a7.15 7.15 0 00.723 1.925A4.495 4.495 0 008.14 17.69l-.11.194-1.436-1.49A6.496 6.496 0 0110.92 13.6zm7.018-7.226a5.688 5.688 0 11-.002 11.376 5.688 5.688 0 01.002-11.376zm.006 1.501a4.193 4.193 0 00-4.188 4.187 4.193 4.193 0 004.188 4.188 4.192 4.192 0 004.187-4.188 4.192 4.192 0 00-4.187-4.187zm-6.506 1.141a7.08 7.08 0 00-.612 2.062 8.992 8.992 0 00-5.802 3.25l-.19.241-1.406-1.459a10.977 10.977 0 018.01-4.094zm8.395 1.031l-2.565 2.564-1.282-1.28a.683.683 0 00-.965.964l2.247 2.247 3.53-3.53a.681.681 0 10-.965-.965zM12 4.5c1.469 0 2.89.205 4.236.588a7.148 7.148 0 00-2.921 1.481A13.602 13.602 0 0012 6.5a13.463 13.463 0 00-10.091 4.537l-.228.263L.287 9.855A15.459 15.459 0 0112 4.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
