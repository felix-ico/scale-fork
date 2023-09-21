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
  tag: 'scale-icon-action-filter',
  styleUrl: '../../icon/icon.css'
})
export class ActionFilter {
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
            {this.selected ? (<g><path d="M12.25 16.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM8.19 18a4.205 4.205 0 00-.068 2.254l.068.246H2V18h6.19zM22 18v2.5h-5.685a4.295 4.295 0 00.066-2.255L16.315 18H22zM4.75 9.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM22 11v2.5H8.815a4.295 4.295 0 00.066-2.255L8.815 11H22zm-7.25-8.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM10.69 4a4.135 4.135 0 00-.19 1.25c0 .34.04.677.121 1.005l.069.245H2V4h8.69zM22 4v2.5h-3.185c.22-.725.244-1.492.073-2.226L18.815 4H22z" fill-rule="evenodd"></path></g>) : (<g><path d="M12.25 16.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm-4.18 2a4.144 4.144 0 00-.038 1.253L8.07 20H2v-1.5h6.07zm13.93 0V20h-5.57a4.144 4.144 0 00.038-1.253l-.038-.247H22zm-17.25-9a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm17.25 2V13H8.93a4.144 4.144 0 00.038-1.253L8.93 11.5H22zm-7.25-9a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm-4.18 2a4.144 4.144 0 00-.038 1.253L10.57 6H2V4.5h8.57zM22 4.5V6h-3.07a4.144 4.144 0 00.038-1.253L18.93 4.5H22z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
