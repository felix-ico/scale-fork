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
  tag: 'scale-icon-user-file-draft-file',
  styleUrl: '../../icon/icon.css'
})
export class UserFileDraftFile {
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
            {this.selected ? (<g><path d="M22.5 3.5v17a3 3 0 01-2.824 2.995l-.176.005h-10a3 3 0 01-2.49-1.33L6.906 22H19.5a1.5 1.5 0 001.493-1.356L21 20.5V5h-2V3.5h3.5zm-5-3v17a3 3 0 01-2.824 2.995l-.176.005h-10a3 3 0 01-2.995-2.824L1.5 17.5V7h4a2.5 2.5 0 002.492-2.302L8 4.5v-4h9.5zM7 .5v4a1.5 1.5 0 01-1.356 1.493L5.5 6h-4L7 .5z" fill-rule="evenodd"></path></g>) : (<g><path d="M22.5 3.5v17a3.003 3.003 0 01-2.824 2.995l-.176.005h-10a2.995 2.995 0 01-2.492-1.336L6.905 22H19.5c.776 0 1.42-.598 1.493-1.356L21 20.5V5h-2V3.5h3.5zm-5-3v17a3.003 3.003 0 01-2.824 2.995l-.176.005h-10a3.003 3.003 0 01-2.995-2.824L1.5 17.5v-12l5-5h11zM16 2H7.5v3c0 .781-.593 1.42-1.355 1.493L6 6.5H3v11c0 .776.598 1.42 1.356 1.493L4.5 19h10c.776 0 1.42-.598 1.493-1.356L16 17.5V2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
