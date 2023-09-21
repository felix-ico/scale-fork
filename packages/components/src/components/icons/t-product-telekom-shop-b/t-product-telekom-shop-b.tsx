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
  tag: 'scale-icon-t-product-telekom-shop-b',
  styleUrl: '../../icon/icon.css'
})
export class TProductTelekomShopB {
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
            {this.selected ? (<g><path d="M21 1.5V5h.75c.902 0 1.67.722 1.744 1.609l.006.141V9H22v13.5H2V9H.5V6.75c0-.903.722-1.67 1.609-1.744L2.25 5H3V1.5h18zM15.12 11v2.55h-.446v-.075c0-1.2-.67-1.95-1.935-1.95h-.074v5.4c0 .75.297 1.05 1.041 1.05h.224v.525h-3.87v-.525h.224c.744 0 1.041-.3 1.041-1.05v-5.4h-.074c-1.265 0-1.935.75-1.935 1.95v.075H8.87V11h6.25zm0 3.333V16h-1.667v-1.667h1.667zm-4.583 0V16H8.87v-1.667h1.667zM19.5 3v2h-15V3h15z" fill-rule="evenodd"></path></g>) : (<g><path d="M21 1.5V5h.75c.902 0 1.67.722 1.744 1.609l.006.141V9H22v13.5H2V9H.5V6.75c0-.903.722-1.67 1.609-1.744L2.25 5H3V1.5h18zM20.5 9h-17v12h17V9zm-5.38 2v2.55h-.446v-.075c0-1.2-.67-1.95-1.935-1.95h-.074v5.4c0 .75.297 1.05 1.041 1.05h.224v.525h-3.87v-.525h.224c.744 0 1.041-.3 1.041-1.05v-5.4h-.074c-1.265 0-1.935.75-1.935 1.95v.075H8.87V11h6.25zm0 3.333V16h-1.667v-1.667h1.667zm-4.583 0V16H8.87v-1.667h1.667zM19.5 3v2h-15V3h15z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
