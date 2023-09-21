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
  tag: 'scale-icon-content-height',
  styleUrl: '../../icon/icon.css'
})
export class ContentHeight {
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
            {this.selected ? (<g><path d="M8.002 1.482v2.5H5.183c-.646 0-1.179.493-1.243 1.123l-.007.127V5.5h1.57a.75.75 0 01.101 1.493L5.502 7H3.933v2.5h1.57a.75.75 0 01.101 1.493l-.102.006H3.933v2.5h1.57a.75.75 0 01.101 1.493L5.502 15H3.933v2.5h1.57a.75.75 0 01.101 1.493L5.502 19H3.933v.245c0 .646.493 1.179 1.123 1.243l.127.007h2.82v2.5h-2.82a3.754 3.754 0 01-3.744-3.552l-.005-.198V5.232a3.754 3.754 0 013.55-3.744l.2-.006h2.818zm13.2 8.316c1.06 0 1.616.629 1.666 1.846l.004.187v3.624h-1.466v-3.442c0-.534-.193-.875-.715-.875-.53 0-.892.367-.938.97l-.005.132v3.215h-1.466v-3.442c0-.534-.193-.875-.716-.875-.519 0-.88.376-.926.972l-.005.13v3.215h-1.466V9.98h1.375v.67h.068c.284-.534.807-.852 1.466-.852.682 0 1.14.262 1.404.749l.061.126h.068c.308-.568.875-.875 1.591-.875zm-8.228-1.931v7.588h-1.466V9.866h-.068l-1.977 1.635V9.73l2.182-1.862h1.329z" fill-rule="evenodd"></path></g>) : (<g><path d="M2 4.5V20c0 1.654 1.345 3 3 3h3v-1.5H5c-.827 0-1.5-.673-1.5-1.5v-1h2a.75.75 0 100-1.5h-2V15h2a.75.75 0 100-1.5h-2V11h2a.75.75 0 100-1.5h-2V7h2a.75.75 0 100-1.5h-2v-1C3.5 3.673 4.173 3 5 3h3V1.5H5c-1.655 0-3 1.345-3 3zm19.2 5.299c-.715 0-1.283.306-1.59.875h-.069c-.25-.569-.727-.875-1.465-.875-.659 0-1.181.318-1.466.851h-.068v-.67h-1.375v5.476h1.466v-3.215c0-.67.375-1.102.931-1.102.523 0 .716.341.716.875v3.442h1.466v-3.215c0-.681.375-1.102.943-1.102.523 0 .715.341.715.875v3.442h1.466v-3.624c0-1.34-.556-2.034-1.67-2.034zM9.462 9.73v1.772l1.976-1.636h.069v5.59h1.466V7.867h-1.33L9.462 9.73z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
