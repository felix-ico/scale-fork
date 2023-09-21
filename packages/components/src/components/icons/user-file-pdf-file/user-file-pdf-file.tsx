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
  tag: 'scale-icon-user-file-pdf-file',
  styleUrl: '../../icon/icon.css'
})
export class UserFilePdfFile {
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
            {this.selected ? (<g><path d="M21 17.5L15.5 23v-4a1.5 1.5 0 011.356-1.493L17 17.5h4zM21 1v15.5h-4a2.5 2.5 0 00-2.495 2.336L14.5 19v4H6a3 3 0 01-2.995-2.824L3 20V1h18zM8.545 6.877L8.4 6.88H6.605v4.845h.975v-1.63h.82A1.5 1.5 0 0010 8.5a1.5 1.5 0 00-1.455-1.623zm3.83.003H10.69v4.845h1.685c1.26 0 2.05-.845 2.05-2.42 0-1.51-.726-2.353-1.895-2.42l-.155-.005zm5.625 0h-2.805v4.845h1V9.79h1.73v-.91h-1.73V7.79H18v-.91zm-5.7.91c.7 0 1.11.48 1.11 1.53 0 .988-.385 1.445-.993 1.495l-.117.005h-.63V7.79h.63zm-3.965 0A.635.635 0 019 8.5a.635.635 0 01-.556.681l-.109.004H7.58V7.79h.755z" fill-rule="evenodd"></path></g>) : (<g><path d="M21 1v17l-5 5H6a3.003 3.003 0 01-2.995-2.824L3 20V1h18zm-1.5 1.5h-15V20c0 .776.598 1.42 1.356 1.493L6 21.5h9v-3c0-.781.593-1.42 1.355-1.493L16.5 17h3V2.5zM8.315 7.05c.94 0 1.6.58 1.6 1.61 0 .973-.589 1.535-1.446 1.595l-.154.005H7.5v1.63h-.98V7.05h1.795zm3.885 0c1.26 0 2.05.845 2.05 2.42 0 1.505-.726 2.348-1.895 2.416l-.155.004h-1.68V7.05h1.68zm5.59-.005v.91h-1.795v1.09h1.73v.91h-1.73v1.935h-.98V7.045h2.775zm-5.665.91h-.63v3.03h.63c.675 0 1.11-.45 1.11-1.515 0-1.002-.385-1.46-.993-1.51l-.117-.005zm-3.875 0h-.755v1.4h.755c.365 0 .65-.245.65-.695 0-.418-.231-.659-.551-.699l-.099-.006z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
