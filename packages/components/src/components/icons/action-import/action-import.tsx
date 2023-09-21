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
  tag: 'scale-icon-action-import',
  styleUrl: '../../icon/icon.css'
})
export class ActionImport {
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
            {this.selected ? (<g><path d="M21 7v13a3 3 0 01-2.824 2.995L18 23H6a3 3 0 01-2.995-2.824L3 20V7h7.25v3.5H5.568L12 20.326l6.432-9.826h-4.683L13.746 7H21zm-9-5a.75.75 0 01.743.648l.007.102v8.75h3.832L12 18.5l-4.582-7h3.832V2.75A.75.75 0 0112 2z" fill-rule="evenodd"></path></g>) : (<g><path d="M8.5 7v1.5h-4V20c0 .778.596 1.42 1.356 1.493L6 21.5h12c.778 0 1.42-.596 1.493-1.356L19.5 20V8.5h-4V7H21v13a3 3 0 01-2.824 2.995L18 23H6a3 3 0 01-2.995-2.824L3 20V7h5.5zM12 2a.75.75 0 01.743.648l.007.102v8.75h3.832L12 18.5l-4.582-7h3.832V2.75A.75.75 0 0112 2z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
