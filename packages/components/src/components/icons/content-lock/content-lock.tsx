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
  tag: 'scale-icon-content-lock',
  styleUrl: '../../icon/icon.css'
})
export class ContentLock {
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
            {this.selected ? (<g><path d="M18.5 9.5v-2a6.5 6.5 0 10-13 0v2H3V19a3 3 0 003 3h12a3 3 0 003-3V9.5h-2.5zM13 16.11V18h-2v-1.89a1.5 1.5 0 112 0zm4-6.61H7v-2a5 5 0 0110 0v2z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 1a6.486 6.486 0 016.496 6.266l.004.234v2H21V19a3.01 3.01 0 01-2.824 2.995L18 22H6a3.01 3.01 0 01-2.995-2.824L3 19V9.5h2.5v-2C5.5 3.9 8.4 1 12 1zm7.5 10h-15v8c0 .8.576 1.423 1.352 1.493L6 20.5h12c.8 0 1.423-.576 1.493-1.352L19.5 19v-8zM12 13.5c.85 0 1.5.65 1.5 1.5 0 .4-.158.76-.404 1.011L13 16.1V18h-2v-1.9c-.3-.25-.5-.65-.5-1.1 0-.85.65-1.5 1.5-1.5zm0-11c-2.678 0-4.881 2.133-4.995 4.784L7 7.5v2h10v-2c0-2.75-2.25-5-5-5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
