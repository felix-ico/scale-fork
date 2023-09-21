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
  tag: 'scale-icon-action-copy-paste',
  styleUrl: '../../icon/icon.css'
})
export class ActionCopyPaste {
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
            {this.selected ? (<g><path d="M17 7v12.5a3 3 0 01-2.824 2.995L14 22.5H4.5a3 3 0 01-2.995-2.824L1.5 19.5V7H17zm5.5-5.5V14a3 3 0 01-2.824 2.995L19.5 17h-1v-1.5h1a1.5 1.5 0 001.493-1.356L21 14V3H8.5v2.5H7v-4h15.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M17 7v12.5a3.003 3.003 0 01-2.824 2.995L14 22.5H4.5a3.003 3.003 0 01-2.995-2.824L1.5 19.5V7H17zm-1.5 1.5H3v11c0 .776.598 1.42 1.356 1.493L4.5 21H14c.776 0 1.42-.598 1.493-1.356l.007-.144v-11zm7-7V14a3.003 3.003 0 01-2.824 2.995L19.5 17h-1v-1.5h1c.776 0 1.42-.598 1.493-1.356L21 14V3H8.5v2.5H7v-4h15.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
