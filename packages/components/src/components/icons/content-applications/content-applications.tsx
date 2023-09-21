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
  tag: 'scale-icon-content-applications',
  styleUrl: '../../icon/icon.css'
})
export class ContentApplications {
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
            {this.selected ? (<g><path d="M9 13a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a2 2 0 012-2h5zm11 0a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5a2 2 0 012-2h5zM9 2a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5zm11 0a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V4a2 2 0 012-2h5z" fill-rule="evenodd"></path></g>) : (<g><path d="M8.5 13a2.473 2.473 0 012.495 2.333L11 15.5v4a2.473 2.473 0 01-2.333 2.495L8.5 22h-4a2.473 2.473 0 01-2.495-2.333L2 19.5v-4a2.473 2.473 0 012.333-2.495L4.5 13h4zm11 0a2.473 2.473 0 012.495 2.333L22 15.5v4a2.473 2.473 0 01-2.333 2.495L19.5 22h-4a2.473 2.473 0 01-2.495-2.333L13 19.5v-4a2.473 2.473 0 012.333-2.495L15.5 13h4zm-11 1.5h-4c-.51 0-.935.388-.993.884L3.5 15.5v4c0 .51.388.935.884.993l.116.007h4c.51 0 .935-.388.993-.884L9.5 19.5v-4c0-.51-.388-.935-.884-.993L8.5 14.5zm11 0h-4c-.51 0-.935.388-.993.884l-.007.116v4c0 .51.388.935.884.993l.116.007h4c.51 0 .935-.388.993-.884l.007-.116v-4c0-.51-.388-.935-.884-.993L19.5 14.5zM8.5 2a2.473 2.473 0 012.495 2.333L11 4.5v4a2.473 2.473 0 01-2.333 2.495L8.5 11h-4a2.473 2.473 0 01-2.495-2.333L2 8.5v-4a2.473 2.473 0 012.333-2.495L4.5 2h4zm11 0a2.473 2.473 0 012.495 2.333L22 4.5v4a2.473 2.473 0 01-2.333 2.495L19.5 11h-4a2.473 2.473 0 01-2.495-2.333L13 8.5v-4a2.473 2.473 0 012.333-2.495L15.5 2h4zm-11 1.5h-4c-.51 0-.935.388-.993.884L3.5 4.5v4c0 .51.388.935.884.993L4.5 9.5h4c.51 0 .935-.388.993-.884L9.5 8.5v-4c0-.51-.388-.935-.884-.993L8.5 3.5zm11 0h-4c-.51 0-.935.388-.993.884L14.5 4.5v4c0 .51.388.935.884.993l.116.007h4c.51 0 .935-.388.993-.884L20.5 8.5v-4c0-.51-.388-.935-.884-.993L19.5 3.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
