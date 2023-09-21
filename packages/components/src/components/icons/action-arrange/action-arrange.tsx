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
  tag: 'scale-icon-action-arrange',
  styleUrl: '../../icon/icon.css'
})
export class ActionArrange {
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
            {this.selected ? (<g><path d="M5.25 1l3.6 5.5H6.5V17h2.35l-3.6 5.5-3.6-5.5H4V6.5H1.65L5.25 1zm15.499 15.52a1.25 1.25 0 01.128 2.494l-.128.007H11v-2.5h9.749zM11 10.477l9.753.034a1.25 1.25 0 01.123 2.494l-.132.006L11 12.976v-2.5zM20.749 4.5a1.25 1.25 0 01.128 2.493L20.749 7H11V4.5h9.749z" fill-rule="evenodd"></path></g>) : (<g><path d="M22 5.75a.75.75 0 00-.75-.75H11v1.5h10.25a.75.75 0 00.75-.75zM8.85 6.5L5.25 1l-3.6 5.5H4.5V17H1.65l3.6 5.5 3.6-5.5H6V6.5h2.85zm12.4 4.5H11v1.5h10.25a.75.75 0 100-1.5zm0 6H11v1.5h10.25a.75.75 0 100-1.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
