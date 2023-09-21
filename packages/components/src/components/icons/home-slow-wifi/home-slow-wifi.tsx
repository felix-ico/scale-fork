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
  tag: 'scale-icon-home-slow-wifi',
  styleUrl: '../../icon/icon.css'
})
export class HomeSlowWifi {
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
            {this.selected ? (<g><path d="M12 17a2 2 0 110 4 2 2 0 010-4zm-1.08-4.4c.15.683.394 1.33.723 1.925a4.495 4.495 0 00-3.503 2.163l-.11.195-1.437-1.49A6.495 6.495 0 0110.92 12.6zm7.018-7.225a5.694 5.694 0 015.687 5.688 5.694 5.694 0 01-5.688 5.687 5.694 5.694 0 01-5.687-5.688 5.694 5.694 0 015.688-5.687zm-6.501 2.641a7.124 7.124 0 00-.611 2.063 8.985 8.985 0 00-5.802 3.25l-.19.241-1.407-1.459a10.976 10.976 0 018.01-4.095zm7 .244v2.703h2.17v1h-3.17V8.26h1zM12 3.5c1.469 0 2.89.205 4.235.587a7.17 7.17 0 00-2.921 1.48 13.463 13.463 0 00-11.405 4.469l-.229.264L.287 8.855A15.459 15.459 0 0112 3.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 17a2 2 0 110 4 2 2 0 010-4zm-1.08-4.4c.15.683.394 1.33.723 1.925a4.495 4.495 0 00-3.503 2.163l-.11.195-1.437-1.49A6.495 6.495 0 0110.92 12.6zm7.018-7.225a5.694 5.694 0 015.687 5.688 5.694 5.694 0 01-5.688 5.687 5.694 5.694 0 01-5.687-5.688 5.694 5.694 0 015.688-5.687zm0 1.5a4.192 4.192 0 00-4.188 4.188 4.192 4.192 0 004.188 4.187 4.192 4.192 0 004.187-4.188 4.192 4.192 0 00-4.188-4.187zm-6.501 1.141a7.124 7.124 0 00-.611 2.063 8.985 8.985 0 00-5.802 3.25l-.19.241-1.407-1.459a10.976 10.976 0 018.01-4.095zm7 .244v2.703h2.17v1h-3.17V8.26h1zM12 3.5c1.469 0 2.89.205 4.235.587a7.17 7.17 0 00-2.921 1.48 13.463 13.463 0 00-11.405 4.469l-.229.264L.287 8.855A15.459 15.459 0 0112 3.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
