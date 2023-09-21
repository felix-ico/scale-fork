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
  tag: 'scale-icon-content-stopwatch',
  styleUrl: '../../icon/icon.css'
})
export class ContentStopwatch {
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
            {this.selected ? (<g><path d="M14.5 1v1.5h-1.75v1.538a9.45 9.45 0 015.144 2.024l.265.218 1.311-1.31 1.06 1.06-1.31 1.311A9.453 9.453 0 0121.5 13.5c0 5.238-4.262 9.5-9.5 9.5-5.239 0-9.5-4.262-9.5-9.5 0-2.232.778-4.283 2.072-5.906l.209-.253L3.47 6.03l1.06-1.06 1.311 1.31a9.453 9.453 0 015.048-2.207l.361-.035V2.5H9.5V1h5zM12 7a6.5 6.5 0 016.496 6.267l.004.233H12V7z" fill-rule="evenodd"></path></g>) : (<g><path d="M14.5 1v1.5h-1.75v1.538a9.45 9.45 0 015.144 2.024l.265.218 1.311-1.31 1.06 1.06-1.31 1.311A9.453 9.453 0 0121.5 13.5c0 5.238-4.262 9.5-9.5 9.5-5.239 0-9.5-4.262-9.5-9.5 0-2.232.778-4.283 2.072-5.906l.209-.253L3.47 6.03l1.06-1.06 1.311 1.31a9.453 9.453 0 015.048-2.207l.361-.035V2.5H9.5V1h5zM12 5.5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM12 7a6.5 6.5 0 016.496 6.267l.004.233H12V7z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
