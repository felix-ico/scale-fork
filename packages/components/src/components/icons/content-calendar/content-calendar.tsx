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
  tag: 'scale-icon-content-calendar',
  styleUrl: '../../icon/icon.css'
})
export class ContentCalendar {
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
            {this.selected ? (<g><path d="M17.5 3.5v-2H16v2H8v-2H6.5v2H2V19a3 3 0 003 3h14a3 3 0 003-3V3.5h-4.5zm-10 14a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2zm4.5 4.5a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2zm4.5 4.5a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2z" fill-rule="evenodd"></path></g>) : (<g><path d="M8 1.5v2h8v-2h1.5v2H22V19a3.01 3.01 0 01-2.824 2.995L19 22H5a3.01 3.01 0 01-2.995-2.824L2 19V3.5h4.5v-2H8zM20.5 8h-17v11c0 .8.576 1.423 1.352 1.493L5 20.5h14c.8 0 1.423-.576 1.493-1.352L20.5 19V8zm-13 7.5a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm-9-4.5a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
