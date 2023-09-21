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
  tag: 'scale-icon-t-product-2fa-telekom-app',
  styleUrl: '../../icon/icon.css'
})
export class TProduct2FaTelekomApp {
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
            {this.selected ? (<g><path d="M15.115 7.5v2.556h-.447v-.075c0-1.203-.671-1.955-1.94-1.955h-.074v5.414c0 .751.298 1.052 1.044 1.052h.224v.527h-3.879v-.527h.224c.746 0 1.044-.3 1.044-1.052V8.026h-.074c-1.268 0-1.94.752-1.94 1.955v.075H8.85V7.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67zM12.002 21a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-2-17.5h4V2h-4v1.5zm6-3h-8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 18.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.115-11v2.556h-.447v-.075c0-1.146-.609-1.882-1.762-1.95l-.177-.005h-.075v5.414c0 .705.262 1.013.91 1.049l.134.003h.224v.527h-3.879v-.527h.224c.7 0 1.005-.264 1.04-.917l.004-.135V8.026h-.074c-1.208 0-1.874.682-1.935 1.786l-.004.17v.074H8.85V7.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67zM17.5 20.5c0 .827-.674 1.5-1.5 1.5H8c-.827 0-1.5-.673-1.5-1.5v-17C6.5 2.673 7.172 2 8 2h2v1.5h4V2h2c.826 0 1.5.673 1.5 1.5v17zM16 .5H8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
