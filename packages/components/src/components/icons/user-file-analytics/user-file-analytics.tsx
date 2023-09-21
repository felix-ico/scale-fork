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
  tag: 'scale-icon-user-file-analytics',
  styleUrl: '../../icon/icon.css'
})
export class UserFileAnalytics {
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
            {this.selected ? (<g><path d="M21 17.5L15.5 23v-4a1.5 1.5 0 011.356-1.493L17 17.5h4zM21 1v15.5h-4a2.5 2.5 0 00-2.495 2.336L14.5 19v4H6a3 3 0 01-2.995-2.824L3 20V1h18zm-3.654 6.01a.755.755 0 00-.634.16l-.082.08-3.465 3.95-3-2.5-3.935 4.56a.75.75 0 00.57 1.24.76.76 0 00.49-.188l.075-.077 2.965-3.44 3 2.5 4.435-5.05a.753.753 0 00-.42-1.234z" fill-rule="evenodd"></path></g>) : (<g><path d="M21 1v17l-5 5H6a3.01 3.01 0 01-2.995-2.824L3 20V1h18zm-1.5 1.5h-15V20c0 .8.576 1.423 1.352 1.493L6 21.5h9v-3c0-.8.576-1.423 1.352-1.493L16.5 17h3V2.5zm-2.85 4.75c.25-.3.75-.3 1.05-.05.273.227.298.661.112.964l-.062.086-4.45 5.05-3-2.5-2.95 3.45c-.15.15-.35.25-.55.25-.15 0-.35-.05-.45-.2-.32-.23-.348-.668-.157-.971l.057-.079L10.2 8.7l3 2.5 3.45-3.95z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
