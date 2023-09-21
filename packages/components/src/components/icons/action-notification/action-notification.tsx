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
  tag: 'scale-icon-action-notification',
  styleUrl: '../../icon/icon.css'
})
export class ActionNotification {
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
            {this.selected ? (<g><path d="M22 16.95c-2.35-2.35-2.7-4.65-2.8-5.8L19 9.4c-.25-3.15-2.55-5.6-5.5-6.25V3c0-.85-.65-1.5-1.5-1.5s-1.5.65-1.5 1.5v.15C7.55 3.8 5.25 6.25 5 9.4l-.15 1.75c-.15 1.1-.5 3.4-2.85 5.8v3.55h7.05C9.3 21.9 10.5 23 12 23c1.5 0 2.7-1.1 2.95-2.5H22v-3.55z"></path></g>) : (<g><path d="M22 16.95c-2.35-2.35-2.7-4.65-2.8-5.8L19 9.4c-.25-3.15-2.55-5.6-5.5-6.25V3c0-.85-.65-1.5-1.5-1.5s-1.5.65-1.5 1.5v.15C7.55 3.8 5.25 6.25 5 9.4l-.15 1.75c-.15 1.1-.5 3.4-2.85 5.8v3.55h7.05C9.3 21.9 10.5 23 12 23c1.5 0 2.7-1.1 2.95-2.5H22v-3.55zM20.5 19h-17v-1.45c1.6-1.7 2.6-3.9 2.8-6.25l.15-1.75C6.75 6.65 9.1 4.5 12 4.5s5.25 2.15 5.5 5.05l.15 1.75c.2 2.35 1.2 4.55 2.8 6.25V19h.05z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
