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
  tag: 'scale-icon-navigation-external-link',
  styleUrl: '../../icon/icon.css'
})
export class NavigationExternalLink {
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
            {this.selected ? (<g><path d="M13.355 3l2.585 2.585-6.835 6.835a1.75 1.75 0 002.35 2.589l.125-.114 6.835-6.835L21 10.645V18a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-2.995-2.824L3 18V3h10.355zm9.3-1.655L21 9.24l-2.585-2.595-7.54 7.54a.74.74 0 01-.53.22.726.726 0 01-.53-.22.745.745 0 01-.077-.97l.077-.09 7.54-7.53L14.76 3l7.895-1.655z" fill-rule="evenodd"></path></g>) : (<g><path d="M12.65 3l1.5 1.5H4.5V18c0 .8.576 1.423 1.352 1.493L6 19.5h12c.8 0 1.423-.576 1.493-1.352L19.5 18V9.85l1.5 1.5V18a3.01 3.01 0 01-2.824 2.995L18 21H6a3.01 3.01 0 01-2.995-2.824L3 18V3h9.65zM22.7 1.35l-1.65 7.9-2.6-2.6-7.55 7.55c-.15.15-.35.2-.55.2-.2 0-.4-.05-.55-.2a.722.722 0 01-.074-.965l.074-.085 7.55-7.55-2.6-2.6 7.95-1.65z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
