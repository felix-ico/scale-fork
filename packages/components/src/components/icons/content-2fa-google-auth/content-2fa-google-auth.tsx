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
  tag: 'scale-icon-content-2fa-google-auth',
  styleUrl: '../../icon/icon.css'
})
export class Content2FaGoogleAuth {
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
            {this.selected ? (<g><g fill-rule="evenodd"><path d="M9.501 10h1V9h-1v1zm-.5.5h2v-2h-2v2z"></path><path d="M16 9v1.5h-1.5V12H13v-1.5h1.5V9H13V7.5h3V9zm0 5v1.5h-3V14h1.5v-1.5H16V14zm-3.998 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM8 15.5V14h1.5v-1.5h3V14H11v1.5H8zm0-4h4v-4H8v4zm2-8h4V2h-4v1.5zm6-3H8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z"></path></g></g>) : (<g><path d="M9.001 10.5h2v-2h-2v2zm-1 1h4v-4h-4v4zm3 2.5h1.5v-1.5h-3V14h-1.5v1.5h3V14zm3.5 0h-1.5v1.5h3v-3h-1.5V14zm-1.5-2h1.5v-1.5h-1.5V12zm0-4.5V9h1.5v1.5h1.5v-3h-3zm-3.5 2.5h1V9h-1v1zm2.5 8.5a1.25 1.25 0 10-.002 2.498 1.25 1.25 0 00.002-2.498zm5.5 2c0 .827-.674 1.5-1.5 1.5h-8c-.827 0-1.5-.673-1.5-1.5v-17c0-.827.673-1.5 1.5-1.5h2v1.5h4V2h2c.826 0 1.5.673 1.5 1.5v17zm-1.5-20h-8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
