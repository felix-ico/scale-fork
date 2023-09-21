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
  tag: 'scale-icon-action-full-screen',
  styleUrl: '../../icon/icon.css'
})
export class ActionFullScreen {
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
            {this.selected ? (<g><path d="M9.5 12.735a1.25 1.25 0 011.765 1.765L7.5 18.29l2.43 2.45L1.5 22.5l1.76-8.45 2.45 2.45zM22.5 1.5l-1.76 8.45-2.45-2.45-3.785 3.77c-.49.487-1.28.487-1.77 0a1.26 1.26 0 010-1.77l3.785-3.79-2.45-2.45L22.5 1.5z" fill-rule="evenodd"></path></g>) : (<g><path d="M10.22 12.72a.745.745 0 011.06 0c.268.264.293.68.073.975l-.073.085-4.155 4.155L9.93 20.74 1.5 22.5l1.76-8.43 2.805 2.805 4.155-4.155zM22.5 1.5l-1.76 8.43-2.805-2.805-4.155 4.155a.754.754 0 01-.53.22.754.754 0 01-.53-.22.744.744 0 01-.073-.975l.073-.085 4.155-4.155L14.07 3.26 22.5 1.5z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
