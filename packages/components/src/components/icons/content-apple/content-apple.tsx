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
  tag: 'scale-icon-content-apple',
  styleUrl: '../../icon/icon.css'
})
export class ContentApple {
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
            {this.selected ? (<g><path d="M19.408 16.361c-.855-.619-1.996-1.829-1.996-3.879a4.65 4.65 0 011.391-3.374c.504-.502.952-.731.952-.731s-.566-1.024-1.91-1.664c-.61-.291-1.382-.503-2.333-.503-1.769 0-3.129 1.006-3.86 1.006-.854 0-2.128-.946-3.769-.946-.158 0-.316.009-.474.027a4.64 4.64 0 00-1.854.629 5.198 5.198 0 00-.84.624c-.665.606-1.223 1.423-1.587 2.445-.292.818-.46 1.767-.46 2.844 0 4.379 3.18 9.828 5.696 9.828.88 0 2.228-.885 3.587-.885.5 0 .951.12 1.386.27.58.2 1.132.453 1.735.546.15.024.304.037.463.037 2.756 0 4.796-5.744 4.796-5.744s-.41-.158-.923-.53M11.53 5.988l.016.002.041.003.051.004.05.001.068.001h.002c.061 0 .131-.003.206-.008l.058-.005c.078-.007.16-.018.25-.033l.02-.002a3.364 3.364 0 00.375-.09 3.855 3.855 0 00.342-.118 3.799 3.799 0 00.447-.221 4.04 4.04 0 00.373-.237l.008-.006c.126-.092.253-.199.38-.315l.095-.089a5.02 5.02 0 001.157-1.669 4.735 4.735 0 00.366-1.558c.024-.4-.017-.648-.017-.648s-.626.003-1.428.34a4.79 4.79 0 00-1.975 1.546c-.712.938-.922 1.8-.969 2.375-.036.447.025.72.025.72s.023.004.06.007" fill-rule="evenodd"></path></g>) : (<g><path d="M19.408 16.361c-.855-.619-1.996-1.829-1.996-3.879a4.65 4.65 0 011.391-3.374c.504-.502.952-.731.952-.731s-.566-1.024-1.91-1.664c-.61-.291-1.382-.503-2.333-.503-1.769 0-3.129 1.006-3.86 1.006-.854 0-2.128-.946-3.769-.946-.158 0-.316.009-.474.027a4.64 4.64 0 00-1.854.629 5.198 5.198 0 00-.84.624c-.665.606-1.223 1.423-1.587 2.445-.292.818-.46 1.767-.46 2.844 0 4.379 3.18 9.828 5.696 9.828.88 0 2.228-.885 3.587-.885.5 0 .951.12 1.386.27.58.2 1.132.453 1.735.546.15.024.304.037.463.037 2.756 0 4.796-5.744 4.796-5.744s-.41-.158-.923-.53M11.53 5.988l.016.002.041.003.051.004.05.001.068.001h.002c.061 0 .131-.003.206-.008l.058-.005c.078-.007.16-.018.25-.033l.02-.002a3.364 3.364 0 00.375-.09 3.855 3.855 0 00.342-.118 3.799 3.799 0 00.447-.221 4.04 4.04 0 00.373-.237l.008-.006c.126-.092.253-.199.38-.315l.095-.089a5.02 5.02 0 001.157-1.669 4.735 4.735 0 00.366-1.558c.024-.4-.017-.648-.017-.648s-.626.003-1.428.34a4.79 4.79 0 00-1.975 1.546c-.712.938-.922 1.8-.969 2.375-.036.447.025.72.025.72s.023.004.06.007" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
