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
  tag: 'scale-icon-action-share',
  styleUrl: '../../icon/icon.css'
})
export class ActionShare {
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
            {this.selected ? (<g><path d="M10.955 5a8.875 8.875 0 00-3.95 7.079L7 12.385v2.325a2.25 2.25 0 004.495.154l.005-.154v-2.325a4.39 4.39 0 013.291-4.247L15 8.09v4.855l5.5-3.6V18a3 3 0 01-2.824 2.995L17.5 21h-12a3 3 0 01-2.995-2.824L2.5 18V5h8.455zM16.5 1.33l6.75 4.42-6.75 4.42V6.5h-.61a5.895 5.895 0 00-5.886 5.664l-.004.221v2.325a.75.75 0 01-1.493.102L8.5 14.71v-2.325a7.395 7.395 0 017.146-7.38L15.89 5h.61V1.33z" fill-rule="evenodd"></path></g>) : (<g><path d="M10.966 5a8.99 8.99 0 00-1.465 1.22l-.26.28H4V18c0 .778.596 1.42 1.356 1.493l.144.007h12c.778 0 1.42-.596 1.493-1.356L19 18v-7.675l1.5-.983V18a3 3 0 01-2.824 2.995L17.5 21h-12a3 3 0 01-2.995-2.824L2.5 18V5h8.466zM16.5 1.332l6.75 4.418-6.75 4.418V6.5h-.613a5.895 5.895 0 00-5.883 5.667l-.004.22v2.322a.75.75 0 01-1.493.101l-.007-.1v-2.322c0-3.992 3.183-7.254 7.144-7.383L15.887 5h.613V1.332z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
