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
  tag: 'scale-icon-content-id',
  styleUrl: '../../icon/icon.css'
})
export class ContentId {
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
            {this.selected ? (<g><path d="M16.707 16.843v-3.729h.776c.829 0 1.365.553 1.365 1.864 0 1.312-.536 1.865-1.365 1.865h-.776zm3.39-1.864c0-1.934-.972-2.978-2.525-2.978h-2.069v5.958h2.069c1.552 0 2.525-1.044 2.525-2.98zm-6.967 2.98h1.204V12H13.13v5.958zm-5.376-2.905c1.206 0 2.083-1.226 2.083-2.492 0-1.265-.932-2.092-2.083-2.092-1.151 0-2.083.826-2.083 2.092s.877 2.492 2.083 2.492zm1.978.832h-.815L7.754 17.05l-1.162-1.162h-.817c-.804 0-1.492.573-1.638 1.363l-.134.72h7.5l-.133-.72a1.665 1.665 0 00-1.638-1.364zM22.001 19.5c0 .826-.674 1.5-1.5 1.5h-17c-.828 0-1.5-.674-1.5-1.5V7h8v2.5h4V7h8v12.5zm-8-14v-5h-4v5h-9.5v14a3 3 0 003 3h17a3 3 0 003-3v-14h-9.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M16.707 16.843v-3.729h.776c.829 0 1.365.553 1.365 1.864 0 1.312-.536 1.865-1.365 1.865h-.776zm3.39-1.864c0-1.934-.972-2.978-2.525-2.978h-2.069v5.958h2.069c1.552 0 2.525-1.044 2.525-2.98zm-6.967 2.98h1.204V12H13.13v5.958zm-5.376-2.905c1.206 0 2.083-1.226 2.083-2.492 0-1.265-.932-2.092-2.083-2.092-1.151 0-2.083.826-2.083 2.092s.877 2.492 2.083 2.492zm1.978.832h-.815L7.754 17.05l-1.162-1.162h-.817c-.804 0-1.492.573-1.638 1.363l-.134.72h7.5l-.133-.72a1.665 1.665 0 00-1.638-1.364zM22.001 19.5c0 .826-.674 1.5-1.5 1.5h-17c-.828 0-1.5-.674-1.5-1.5V7h8v2.5h4V7h8v12.5zm-8-14v-5h-4v5h-9.5v14a3 3 0 003 3h17a3 3 0 003-3v-14h-9.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
