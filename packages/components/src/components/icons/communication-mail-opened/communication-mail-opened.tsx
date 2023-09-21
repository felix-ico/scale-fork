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
  tag: 'scale-icon-communication-mail-opened',
  styleUrl: '../../icon/icon.css'
})
export class CommunicationMailOpened {
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
            {this.selected ? (<g><path d="M15 7.47H9a.75.75 0 000 1.5h6a.75.75 0 000-1.5zm-3 9.607L.5 10.717v9.753c0 1.655 1.345 3 3 3h17c1.654 0 3-1.345 3-3v-9.753L12 17.077zM5.5 4.97h13v6.799l4.929-2.726L20 6.115V3.47h-3.096l-2.38-2.034a3.871 3.871 0 00-5.048 0L7.095 3.47H4v2.645L.571 9.043 5.5 11.769V4.97zm9.5 5.5H9a.75.75 0 000 1.5h6a.75.75 0 000-1.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M20 6.144V3.5h-3.096l-2.38-2.034a3.869 3.869 0 00-5.048 0L7.096 3.5H4v2.644L.5 9.134V20.5c0 1.654 1.345 3 3 3h17c1.654 0 3-1.346 3-3V9.134L20 6.144zM5.5 5h13v6.799L12 15.393l-6.5-3.595V5zM22 20.5c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-8.923l10 5.53 10-5.53V20.5zM9 9h6a.75.75 0 100-1.5H9A.75.75 0 109 9zm6.75 2.25a.75.75 0 00-.75-.75H9A.75.75 0 109 12h6a.75.75 0 00.75-.75z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
