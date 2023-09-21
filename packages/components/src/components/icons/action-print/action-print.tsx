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
  tag: 'scale-icon-action-print',
  styleUrl: '../../icon/icon.css'
})
export class ActionPrint {
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
            {this.selected ? (<g><path d="M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5a3 3 0 01-2.824 2.995l-.176.005H20V12H4v6.5h-.5a3 3 0 01-2.995-2.824L.5 15.5V6h5V2h13zm1 7a1 1 0 100 2 1 1 0 000-2zM17 3.5H7V6h10V3.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5a3.003 3.003 0 01-2.824 2.995l-.176.005H20V17h.5c.776 0 1.42-.598 1.493-1.356L22 15.5v-8H2v8c0 .776.598 1.42 1.356 1.493L3.5 17H4v1.5h-.5a3.003 3.003 0 01-2.995-2.824L.5 15.5V6h5V2h13zm1 7a1 1 0 110 2 1 1 0 010-2zM17 3.5H7V6h10V3.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
