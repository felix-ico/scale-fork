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
  tag: 'scale-icon-alert-compliance',
  styleUrl: '../../icon/icon.css'
})
export class AlertCompliance {
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
            {this.selected ? (<g><path d="M10.97 14H8a.75.75 0 110-1.5h4.06a7.865 7.865 0 011.89-1.5H8a.75.75 0 110-1.5h8a.74.74 0 01.725.575A7.535 7.535 0 0121 10.72V1H3v19a3 3 0 003 3h6.06a7.725 7.725 0 01-1.09-9zM8 6.5h8A.75.75 0 1116 8H8a.75.75 0 010-1.5zm12.895 9.035a.745.745 0 00-1.06 0L17 18.355l-1.41-1.41A.75.75 0 0014.545 18L17 20.5l3.88-3.88a.755.755 0 00.015-1.085zM17.75 11.5a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zm0 11a4.75 4.75 0 110-9.5 4.75 4.75 0 010 9.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M17.75 11.5c3.45 0 6.25 2.8 6.25 6.25S21.2 24 17.75 24s-6.25-2.8-6.25-6.25 2.8-6.25 6.25-6.25zM21 1v9.72a7.65 7.65 0 00-1.188-.436l-.312-.079V2.5h-15V20c0 .776.598 1.42 1.356 1.493L6 21.5h4.97c.24.436.525.843.844 1.222l.246.278H6a3.003 3.003 0 01-2.995-2.824L3 20V1h18zm-.105 14.535a.744.744 0 00-.975-.073l-.085.073-2.82 2.82-1.41-1.41a.745.745 0 00-1.06 0 .744.744 0 00-.073.975l.073.085 2.47 2.47 3.88-3.88a.754.754 0 000-1.06zM12.06 12.5c-.336.364-.64.757-.902 1.178L10.97 14H8a.749.749 0 01-.102-1.493L8 12.5h4.06zm3.94-3a.74.74 0 01.725.575 7.655 7.655 0 00-2.491.772L13.95 11H8a.749.749 0 01-.102-1.493L8 9.5h8zm0-3a.749.749 0 01.102 1.493L16 8H8a.749.749 0 01-.102-1.493L8 6.5h8z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
