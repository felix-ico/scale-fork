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
  tag: 'scale-icon-alert-cyber-security',
  styleUrl: '../../icon/icon.css'
})
export class AlertCyberSecurity {
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
            {this.selected ? (<g><path d="M12 .98l9.5 2.171v7.998c0 5.693-3.822 10.758-9.294 12.322L12 23.53l-.206-.058C6.322 21.907 2.5 16.841 2.5 11.15V3.152L12 .98zm0 5.145a2.927 2.927 0 00-2.918 2.752l-.005.171v.953H8v4l.007.144a1.5 1.5 0 001.348 1.349l.145.007h5l.145-.007a1.5 1.5 0 001.348-1.35l.007-.143v-4h-1.077v-.952l-.005-.172A2.927 2.927 0 0012 6.125zm0 1.25c.874 0 1.594.674 1.667 1.53l.006.144V10h-3.346v-.952l.006-.145A1.675 1.675 0 0112 7.375z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 .98l9.5 2.173v7.998c0 5.587-3.684 10.572-8.997 12.232l-.297.089-.206.058-.206-.058c-5.373-1.536-9.154-6.447-9.29-12.012l-.004-.31V3.154L12 .98zm0 1.54L4 4.349v6.802c0 4.953 3.278 9.37 8 10.817 4.627-1.417 7.869-5.689 7.996-10.52L20 11.15V4.349l-8-1.83zm0 3.605a2.928 2.928 0 012.918 2.752l.005.172v.95H16v4a1.5 1.5 0 01-1.355 1.494l-.145.007h-5a1.5 1.5 0 01-1.493-1.356L8 14v-4h1.076v-.951A2.928 2.928 0 0112 6.125zm0 1.25c-.874 0-1.594.674-1.667 1.53l-.007.144v.95h3.347v-.95c0-.923-.75-1.674-1.673-1.674z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
