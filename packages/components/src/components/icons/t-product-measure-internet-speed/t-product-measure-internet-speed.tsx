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
  tag: 'scale-icon-t-product-measure-internet-speed',
  styleUrl: '../../icon/icon.css'
})
export class TProductMeasureInternetSpeed {
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
            {this.selected ? (<g><path d="M12 2.5c6.05 0 11 4.95 11 11 0 2.6-.95 5.1-2.6 7.1-.3.35-.575.625-.819.85l-.277.248-.354.302H5l-.319-.273-.247-.222a8.717 8.717 0 01-.884-.955C1.9 18.55 1 16.1 1 13.5c0-6.05 4.95-11 11-11zm6.45 8.5c.222-.133.484-.03.645.136l.055.064.03.081a.654.654 0 01-.112.554L19 11.9l-4.5 3.7A2.487 2.487 0 0112 18c-1.4 0-2.5-1.1-2.5-2.5S10.6 13 12 13c.333 0 .632.07.896.208l.154.092 5.4-2.3zM12 6c2.507 0 4.735 1.255 6.102 3.183l.148.217-1.4.6C15.75 8.5 14 7.5 12 7.5c-3.225 0-5.877 2.579-5.996 5.776L6 13.5H4.5C4.5 9.35 7.85 6 12 6z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 2.5c6.05 0 11 4.95 11 11 0 2.6-.95 5.1-2.6 7.1-.3.35-.575.625-.819.85l-.277.248-.354.302H5l-.319-.273-.247-.222a8.717 8.717 0 01-.884-.955C1.9 18.55 1 16.1 1 13.5c0-6.05 4.95-11 11-11zM12 4c-5.25 0-9.5 4.25-9.5 9.5a9.404 9.404 0 002.864 6.78l.236.22h12.8c2-1.8 3.1-4.35 3.1-7C21.5 8.25 17.25 4 12 4zm6.45 7c.222-.133.484-.03.645.136l.055.064.03.081a.654.654 0 01-.112.554L19 11.9l-4.5 3.7A2.487 2.487 0 0112 18c-1.4 0-2.5-1.1-2.5-2.5S10.6 13 12 13c.333 0 .632.07.896.208l.154.092 5.4-2.3zM12 6c2.507 0 4.735 1.255 6.102 3.183l.148.217-1.4.6C15.75 8.5 14 7.5 12 7.5c-3.225 0-5.877 2.579-5.996 5.776L6 13.5H4.5C4.5 9.35 7.85 6 12 6z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
