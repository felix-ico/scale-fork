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
  tag: 'scale-icon-user-file-contracts',
  styleUrl: '../../icon/icon.css'
})
export class UserFileContracts {
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
            {this.selected ? (<g><path d="M3 .5v19a3 3 0 003 3h7.5v-1.88a2.25 2.25 0 112.5 0v1.88h2a3 3 0 003-3V.5H3zm13 13H8A.75.75 0 118 12h8a.75.75 0 110 1.5zm0-3H8A.75.75 0 118 9h8a.75.75 0 110 1.5zm0-3H8A.75.75 0 118 6h8a.75.75 0 110 1.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M14.75 16.5c1.25 0 2.25 1 2.25 2.25 0 .692-.34 1.342-.865 1.752L16 20.6v2.9l-1.25-.5-1.25.5v-2.9c-.6-.4-1-1.05-1-1.85 0-1.25 1-2.25 2.25-2.25zM21 .5v19a3.01 3.01 0 01-2.824 2.995L18 22.5h-.5V21h.5c.8 0 1.423-.576 1.493-1.352l.007-.148V2h-15v17.5c0 .8.576 1.423 1.352 1.493L6 21h6v1.5H6a3.01 3.01 0 01-2.995-2.824L3 19.5V.5h18zM16 12c.4 0 .75.35.75.75a.772.772 0 01-.651.743L16 13.5H8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L8 12h8zm0-3c.4 0 .75.35.75.75a.772.772 0 01-.651.743L16 10.5H8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L8 9h8zm0-3c.4 0 .75.35.75.75a.772.772 0 01-.651.743L16 7.5H8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L8 6h8z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
