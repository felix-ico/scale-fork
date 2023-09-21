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
  tag: 'scale-icon-service-support',
  styleUrl: '../../icon/icon.css'
})
export class ServiceSupport {
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
            {this.selected ? (<g><path d="M18.349 13.403c.1-.456.156-.925.156-1.403 0-.481-.057-.95-.157-1.402l2.905-.723c.157.69.247 1.4.247 2.125a9.49 9.49 0 01-.25 2.133l-2.901-.73zm-4.948-7.748a6.482 6.482 0 00-1.395-.155h-.002c-.481 0-.948.057-1.4.157l-.728-2.91A9.474 9.474 0 0112 2.5c.725 0 1.435.09 2.125.247l-.724 2.908zm-3.342 1.74c.112-.048.235-.071.351-.11A4.926 4.926 0 0112.003 7 5.014 5.014 0 0117 12c0 2.75-2.25 5-5 5-.057 0-.11-.015-.167-.017a4.962 4.962 0 01-1.774-.377 5.023 5.023 0 01-1.681-1.185 4.969 4.969 0 011.558-7.96c.043-.02.08-.048.123-.066zM12 21.5c-.731 0-1.44-.091-2.124-.248l.728-2.908c.45.1.916.156 1.396.156h.006c.475 0 .942-.055 1.395-.154l.724 2.906A9.49 9.49 0 0112 21.5zM2.5 12c0-.734.092-1.447.25-2.134l2.913.725c-.1.453-.158.923-.158 1.405 0 .483.056.95.156 1.404l-2.913.725A9.476 9.476 0 012.5 12zm17.278-7.778A10.927 10.927 0 0012 1C5.935 1 1 5.935 1 12c0 6.066 4.935 11 11 11s11-4.934 11-11c0-2.938-1.145-5.7-3.222-7.778z" fill-rule="evenodd"></path></g>) : (<g><path d="M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1zm2.4 1.8c3.3.85 5.95 3.5 6.8 6.8l-2.95.5c-.65-2.1-2.3-3.75-4.35-4.35l.5-2.95zm-4.8 0l.5 2.95C8 6.4 6.35 8.05 5.75 10.1L2.8 9.6c.9-3.3 3.5-5.9 6.8-6.8zm0 18.4c-3.3-.85-5.95-3.5-6.8-6.8l2.95-.5c.65 2.1 2.3 3.75 4.35 4.35l-.5 2.95zM7 12c0-2.75 2.25-5 5-5s5 2.25 5 5-2.25 5-5 5-5-2.25-5-5zm7.4 9.2l-.5-2.95c2.1-.65 3.75-2.3 4.35-4.35l2.95.5c-.9 3.3-3.5 5.9-6.8 6.8z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
