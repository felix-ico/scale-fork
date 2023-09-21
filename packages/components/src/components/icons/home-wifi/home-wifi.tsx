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
  tag: 'scale-icon-home-wifi',
  styleUrl: '../../icon/icon.css'
})
export class HomeWifi {
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
            {this.selected ? (<g><path d="M12 17a2 2 0 110 4 2 2 0 010-4zm0-4.5a6.46 6.46 0 015.258 2.693l.142.207-1.45 1.5A4.435 4.435 0 0012 14.5c-1.626 0-3.07.915-3.848 2.22l-.102.18-1.45-1.5a6.458 6.458 0 015.4-2.9zM12 8a10.94 10.94 0 018.346 3.853l.204.247-1.4 1.45C17.5 11.4 14.95 10 12 10c-2.845 0-5.317 1.302-6.97 3.323l-.18.227-1.4-1.45C5.45 9.6 8.55 8 12 8zm0-4.5c4.562 0 8.605 1.978 11.445 5.066l.255.284-1.4 1.45C19.85 7.35 16.15 5.5 12 5.5c-4.024 0-7.625 1.74-10.074 4.535L1.7 10.3.3 8.85C3.15 5.6 7.3 3.5 12 3.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 17a2 2 0 110 4 2 2 0 010-4zm0-4.5a6.46 6.46 0 015.258 2.693l.142.207-1.45 1.5A4.435 4.435 0 0012 14.5c-1.626 0-3.07.915-3.848 2.22l-.102.18-1.45-1.5a6.458 6.458 0 015.4-2.9zM12 8a10.94 10.94 0 018.346 3.853l.204.247-1.4 1.45C17.5 11.4 14.95 10 12 10c-2.845 0-5.317 1.302-6.97 3.323l-.18.227-1.4-1.45C5.45 9.6 8.55 8 12 8zm0-4.5c4.562 0 8.605 1.978 11.445 5.066l.255.284-1.4 1.45C19.85 7.35 16.15 5.5 12 5.5c-4.024 0-7.625 1.74-10.074 4.535L1.7 10.3.3 8.85C3.15 5.6 7.3 3.5 12 3.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
