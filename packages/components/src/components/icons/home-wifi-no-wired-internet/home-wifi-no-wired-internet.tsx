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
  tag: 'scale-icon-home-wifi-no-wired-internet',
  styleUrl: '../../icon/icon.css'
})
export class HomeWifiNoWiredInternet {
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
            {this.selected ? (<g><path d="M18.75 20.25a.875.875 0 110 1.75.875.875 0 010-1.75zm0-2.625c1.225 0 2.302.634 2.928 1.59l.105.172-1.021.88a2.19 2.19 0 00-2.012-1.33 2.19 2.19 0 00-1.944 1.186l-.068.144-1.021-.88a3.5 3.5 0 013.033-1.762zM19.5 4v10.04a7.076 7.076 0 00-4.625 1.11 7.182 7.182 0 00-2.323 2.469l-.149.276L14.42 19.5H4.5a3 3 0 01-2.995-2.824L1.5 16.5V4h18zm-.75 11a6.12 6.12 0 014.895 2.45l.148.206-1.002.863a4.81 4.81 0 00-4.04-2.206c-1.613 0-3.04.799-3.914 2.02l-.127.186-1.002-.863A6.12 6.12 0 0118.75 15zm-6.28-5.53a.75.75 0 011.133.976l-.073.085-1.97 1.969 1.97 1.97a.75.75 0 01-.976 1.133l-.085-.073-1.969-1.97-1.97 1.97a.75.75 0 01-1.133-.976l.073-.085L9.44 12.5l-1.97-1.97a.75.75 0 01.976-1.133l.084.073 1.97 1.97 1.97-1.97zM7.5 4.874a.625.625 0 100 1.25.625.625 0 000-1.25zm-2 0a.625.625 0 100 1.25.625.625 0 000-1.25zm-2 0a.625.625 0 100 1.25.625.625 0 000-1.25z" fill-rule="evenodd"></path></g>) : (<g><path d="M18.75 20.25a.875.875 0 110 1.75.875.875 0 010-1.75zm0-2.625c1.225 0 2.302.634 2.928 1.59l.105.172-1.021.88a2.19 2.19 0 00-2.012-1.33 2.19 2.19 0 00-1.944 1.186l-.068.144-1.021-.88a3.5 3.5 0 013.033-1.762zM19.5 4v9.54a6.96 6.96 0 00-1.251-.021L18 13.54V7H3v9.5c0 .778.596 1.42 1.356 1.493L4.5 18h7.31l1.74 1.5H4.5a3 3 0 01-2.995-2.824L1.5 16.5V4h18zm-.75 11a6.12 6.12 0 014.895 2.45l.148.206-1.002.863a4.81 4.81 0 00-4.04-2.206c-1.613 0-3.04.799-3.914 2.02l-.127.186-1.002-.863A6.12 6.12 0 0118.75 15zm-6.28-5.53a.75.75 0 011.133.976l-.073.085-1.97 1.969 1.97 1.97a.75.75 0 01-.976 1.133l-.085-.073-1.969-1.97-1.97 1.97a.75.75 0 01-1.133-.976l.073-.085L9.44 12.5l-1.97-1.97a.75.75 0 01.976-1.133l.084.073 1.97 1.97 1.97-1.97zM7.5 4.874a.625.625 0 100 1.25.625.625 0 000-1.25zm-2 0a.625.625 0 100 1.25.625.625 0 000-1.25zm-2 0a.625.625 0 100 1.25.625.625 0 000-1.25z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
