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
  tag: 'scale-icon-t-product-telekom-1t1',
  styleUrl: '../../icon/icon.css'
})
export class TProductTelekom1T1 {
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
            {this.selected ? (<g><path d="M22.002 2v17a3 3 0 01-2.824 2.995L19 22H5a3 3 0 01-2.994-2.824L2 19V2h20zm-5.435 4.5H7.4v3.74h.655v-.11c0-1.76.982-2.86 2.837-2.86h.11v7.92c0 1.1-.437 1.54-1.529 1.54h-.327v.77h5.675v-.77h-.328c-1.091 0-1.528-.44-1.528-1.54V7.27h.11c1.855 0 2.837 1.1 2.837 2.86v.11h.655V6.5zm0 4.889h-2.445v2.444h2.445V11.39zm-6.723 0H7.4v2.444h2.444V11.39z" fill-rule="evenodd"></path></g>) : (<g><path d="M16.567 6.5v3.74h-.655v-.11c0-1.76-.982-2.86-2.837-2.86h-.11v7.92c0 1.1.437 1.54 1.528 1.54h.328v.77H9.146v-.77h.327c1.092 0 1.528-.44 1.528-1.54V7.27h-.109c-1.855 0-2.837 1.1-2.837 2.86v.11H7.4V6.5h9.167zm0 4.889v2.444h-2.445V11.39h2.445zm-6.723 0v2.444H7.4V11.39h2.444zM2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2zm18.5 17c0 .827-.673 1.5-1.5 1.5H5c-.827 0-1.5-.673-1.5-1.5V3.5h17V19z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
