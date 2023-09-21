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
  tag: 'scale-icon-action-reply-all',
  styleUrl: '../../icon/icon.css'
})
export class ActionReplyAll {
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
            {this.selected ? (<g><path d="M15.25 6.514H13.5V3.352l-6.75 4.4L13.5 12V9.014h1.75c3.17 0 5.75 2.579 5.75 5.75v4.486a1.25 1.25 0 102.5 0v-4.486c0-4.55-3.7-8.25-8.25-8.25zM7.5 5.473V3.352l-6.75 4.4 6.75 4.4v-2.12l-3.497-2.28L7.5 5.472z" fill-rule="evenodd"></path></g>) : (<g><path d="M4.003 7.752l1.928-1.257 1.57-1.022V3.352l-6.75 4.4 6.75 4.399v-2.12L5.93 9.009 4.003 7.752zM15.75 7H13.5V3.352l-6.75 4.4 6.75 4.399V8.5h2.25A6.257 6.257 0 0122 14.75v4.987a.75.75 0 001.5 0V14.75c0-4.273-3.476-7.75-7.75-7.75z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
