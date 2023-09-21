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
  tag: 'scale-icon-action-logout',
  styleUrl: '../../icon/icon.css'
})
export class ActionLogout {
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
            {this.selected ? (<g><path d="M13.25 2.75v7.5h-6a1.5 1.5 0 00-.144 2.993l.144.007h6v7.5h-7.5a3 3 0 01-2.995-2.824l-.005-.176v-12a3 3 0 012.824-2.995l.176-.005h7.5zm3.25 4.58l6.75 4.42-6.75 4.42V12.5H7.25a.75.75 0 01-.102-1.493L7.25 11h9.25V7.33z" fill-rule="evenodd"></path></g>) : (<g><path d="M14 2v5h-1.5V3.5H5.75a2.24 2.24 0 00-2.245 2.095L3.5 5.75v12a2.24 2.24 0 002.095 2.245L5.75 20h6.75v-3.5H14v5H5.75c-1.984 0-3.64-1.592-3.745-3.553L2 17.75v-12c0-1.984 1.592-3.64 3.553-3.745L5.75 2H14zm2.5 5.35l6.75 4.4-6.75 4.4V12.5H7.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L7.25 11h9.25V7.35z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
