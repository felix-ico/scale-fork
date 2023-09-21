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
  tag: 'scale-icon-navigation-double-left',
  styleUrl: '../../icon/icon.css'
})
export class NavigationDoubleLeft {
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
            {this.selected ? (<g><path d="M19.814 18.28a1.249 1.249 0 00-.208-1.755l-5.735-4.523 5.735-4.522a1.249 1.249 0 10-1.547-1.963l-8.224 6.485 8.224 6.486a1.248 1.248 0 001.755-.208m-7.594.476c-.271 0-.544-.088-.773-.268l-8.223-6.486 8.223-6.485a1.25 1.25 0 011.548 1.963L7.26 12.002l5.734 4.523a1.25 1.25 0 01-.775 2.231" fill-rule="evenodd"></path></g>) : (<g><path d="M19.294 16.911l-6.22-4.91 6.22-4.913a.75.75 0 10-.928-1.178L10.652 12l7.712 6.088a.75.75 0 10.929-1.177m-6.69 0l-6.221-4.91 6.22-4.913a.751.751 0 00-.93-1.178L3.963 12l7.712 6.088a.748.748 0 001.054-.124.75.75 0 00-.124-1.053" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
