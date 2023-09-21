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
  tag: 'scale-icon-device-dongle',
  styleUrl: '../../icon/icon.css'
})
export class DeviceDongle {
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
            {this.selected ? (<g><g fill-rule="evenodd"><path d="M17.501 15.5h4.5v-7h-4.5v7zm-7.275 1.142l-1.12-.995a5.466 5.466 0 000-7.295l1.12-.994A6.964 6.964 0 0112.001 12a6.964 6.964 0 01-1.775 4.642zm-2.24-1.99l-1.125-.999A2.48 2.48 0 007.501 12c0-.636-.247-1.212-.64-1.653l1.125-.999A3.977 3.977 0 019.001 12a3.977 3.977 0 01-1.015 2.652zM5.001 13a1 1 0 110-2 1 1 0 010 2zm12.5-6V5h-14a3 3 0 00-3 3v8a3 3 0 003 3h14v-2h6V7h-6z"></path><path d="M19.001 11h1.5V9.5h-1.5zm0 3.5h1.5V13h-1.5z"></path></g></g>) : (<g><path d="M7.986 14.652a3.976 3.976 0 000-5.304l-1.125 1c.393.44.639 1.016.639 1.652a2.48 2.48 0 01-.639 1.653l1.125 1zm2.239 1.99a6.959 6.959 0 000-9.284l-1.119.994A5.475 5.475 0 0110.5 12c0 1.4-.53 2.675-1.394 3.647l1.119.995zM5 13a1 1 0 100-2 1 1 0 000 2zm14 1.5h1.5V13H19v1.5zm0-3.5h1.5V9.5H19V11zm-1.5 4.5H22v-7h-4.5v7zm-1.5 2H3.5c-.827 0-1.5-.674-1.5-1.5V8c0-.827.673-1.5 1.5-1.5H16v11zM17.5 7V5h-14a3 3 0 00-3 3v8a3 3 0 003 3h14v-2h6V7h-6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
