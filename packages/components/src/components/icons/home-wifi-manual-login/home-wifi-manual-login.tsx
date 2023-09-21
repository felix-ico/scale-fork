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
  tag: 'scale-icon-home-wifi-manual-login',
  styleUrl: '../../icon/icon.css'
})
export class HomeWifiManualLogin {
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
            {this.selected ? (<g><path d="M12.006 18a2 2 0 110 4 2 2 0 010-4zm-1.08-4.399c.15.682.394 1.329.722 1.924a4.494 4.494 0 00-3.502 2.163l-.11.195L6.6 16.394a6.49 6.49 0 014.326-2.793zm7.018-7.226a5.687 5.687 0 110 11.375 5.687 5.687 0 010-11.375zm.512 7.069v1.153h-1.154v-1.153h1.154zm-7.013-4.428a7.118 7.118 0 00-.611 2.062 8.985 8.985 0 00-5.802 3.251l-.189.241-1.408-1.46a10.98 10.98 0 018.01-4.094zm6.517.312c.92 0 1.645.61 1.645 1.514 0 .552-.265.88-.546 1.147l-.309.283c-.16.152-.291.304-.33.495l-.012.132h-1.059v-.16c0-.529.289-.816.578-1.058l.212-.176c.203-.174.366-.35.366-.613 0-.351-.219-.546-.545-.546-.3 0-.502.17-.563.508l-.015.118h-1.099c.024-.887.618-1.644 1.677-1.644zM12.006 4.5c1.469 0 2.889.205 4.236.588a7.16 7.16 0 00-2.922 1.479 13.465 13.465 0 00-11.404 4.47l-.229.263L.293 9.854A15.464 15.464 0 0112.006 4.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M12.006 18a2 2 0 110 4 2 2 0 010-4zm-1.08-4.399c.15.682.394 1.329.722 1.924a4.494 4.494 0 00-3.502 2.163l-.11.195L6.6 16.394a6.49 6.49 0 014.326-2.793zm7.018-7.226a5.687 5.687 0 110 11.375 5.687 5.687 0 010-11.375zm0 1.5a4.193 4.193 0 00-4.188 4.187 4.193 4.193 0 004.188 4.188 4.192 4.192 0 004.187-4.188 4.192 4.192 0 00-4.187-4.187zm.512 5.569v1.153h-1.154v-1.153h1.154zm-7.013-4.428a7.118 7.118 0 00-.611 2.062 8.985 8.985 0 00-5.802 3.251l-.189.241-1.408-1.46a10.98 10.98 0 018.01-4.094zm6.517.312c.92 0 1.645.61 1.645 1.514 0 .552-.265.88-.546 1.147l-.309.283c-.16.152-.291.304-.33.495l-.012.132h-1.059v-.16c0-.529.289-.816.578-1.058l.212-.176c.203-.174.366-.35.366-.613 0-.351-.219-.546-.545-.546-.3 0-.502.17-.563.508l-.015.118h-1.099c.024-.887.618-1.644 1.677-1.644zM12.006 4.5c1.469 0 2.889.205 4.236.588a7.16 7.16 0 00-2.922 1.479 13.465 13.465 0 00-11.404 4.47l-.229.263L.293 9.854A15.464 15.464 0 0112.006 4.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
