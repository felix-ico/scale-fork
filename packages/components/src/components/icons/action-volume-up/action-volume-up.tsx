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
  tag: 'scale-icon-action-volume-up',
  styleUrl: '../../icon/icon.css'
})
export class ActionVolumeUp {
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
            {this.selected ? (<g><path d="M13 3.5v17h-2l-4.5-4H5a3 3 0 01-2.995-2.824L2 13.5v-3a3 3 0 012.824-2.995L5 7.5h1.5l4.5-4h2zm6 4.75a.75.75 0 01.743.648L19.75 9v2.25H22a.75.75 0 01.102 1.493L22 12.75h-2.25V15a.75.75 0 01-1.493.102L18.25 15v-2.25H16a.75.75 0 01-.102-1.493L16 11.25h2.25V9a.75.75 0 01.75-.75z" fill-rule="evenodd"></path></g>) : (<g><path d="M13 3.5v17h-2l-4.5-4H5a3.003 3.003 0 01-2.995-2.824L2 13.5v-3a3.003 3.003 0 012.824-2.995L5 7.5h1.5l4.5-4h2zm-1.5 1.56L7.07 9H5c-.776 0-1.42.598-1.493 1.356L3.5 10.5v3c0 .776.598 1.42 1.356 1.493L5 15h2.07l4.43 3.94V5.06zM19 8.25c.38 0 .694.281.743.648L19.75 9v2.25H22a.749.749 0 01.102 1.493L22 12.75h-2.25V15a.749.749 0 01-1.493.102L18.25 15v-2.25H16a.749.749 0 01-.102-1.493L16 11.25h2.25V9c0-.415.335-.75.75-.75z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
