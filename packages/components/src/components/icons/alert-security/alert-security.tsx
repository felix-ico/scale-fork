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
  tag: 'scale-icon-alert-security',
  styleUrl: '../../icon/icon.css'
})
export class AlertSecurity {
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
            {this.selected ? (<g><path d="M12 1l9.5 2.1v8c0 3.05-1.1 5.95-3 8.2-1.807 2.218-3.884 3.289-5.51 3.877l-.414.144-.39.123L12 23.5l-.267-.07-.23-.067-.412-.133c-.1-.035-.206-.073-.316-.115l-.346-.136A12.802 12.802 0 015.85 19.75a12.774 12.774 0 01-3.344-8.226L2.5 11.15v-8L12 1zm3.3 7.95c.3-.3.75-.3 1.05 0 .273.273.298.67.074.965L16.35 10l-5.05 5.05-3.15-3.15c-.3-.3-.3-.75 0-1.05a.722.722 0 01.965-.074l.085.074 2.15 2.05 3.95-3.95z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 1l9.5 2.1v8c0 3.05-1.1 5.95-3 8.2-1.807 2.218-3.884 3.289-5.51 3.877l-.414.144-.39.123L12 23.5l-.267-.07-.23-.067-.412-.133c-.1-.035-.206-.073-.316-.115l-.346-.136A12.802 12.802 0 015.85 19.75a12.774 12.774 0 01-3.344-8.226L2.5 11.15v-8L12 1zm0 1.5L4 4.35v6.8c0 4.95 3.3 9.35 8 10.8 4.606-1.421 7.867-5.675 7.996-10.504L20 11.15v-6.8L12 2.5zm3.3 6.45c.3-.3.75-.3 1.05 0 .273.273.298.67.074.965L16.35 10l-5.05 5.05-3.15-3.15c-.3-.3-.3-.75 0-1.05a.722.722 0 01.965-.074l.085.074 2.15 2.05 3.95-3.95z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
