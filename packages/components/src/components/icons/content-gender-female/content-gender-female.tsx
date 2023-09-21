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
  tag: 'scale-icon-content-gender-female',
  styleUrl: '../../icon/icon.css'
})
export class ContentGenderFemale {
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
            {this.selected ? (<g><path d="M6 8.5c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6m14.5 0C20.5 3.813 16.687 0 12 0 7.313 0 3.5 3.813 3.5 8.5c0 4.261 3.155 7.79 7.25 8.398v1.665H8.693a1.25 1.25 0 100 2.5h2.057v1.664a1.25 1.25 0 002.5 0v-1.664h2.057a1.25 1.25 0 100-2.5H13.25v-1.665c4.095-.608 7.25-4.137 7.25-8.398" fill-rule="evenodd"></path></g>) : (<g><path d="M5.5 8.5C5.5 4.916 8.418 2 12 2c3.584 0 6.5 2.916 6.5 6.5S15.584 15 12 15a6.508 6.508 0 01-6.5-6.5m14.5 0a8 8 0 00-8-8 8 8 0 00-.75 15.962V19h-2.5a.75.75 0 000 1.5h2.5V23a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.538C16.816 16.083 20 12.665 20 8.5" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
