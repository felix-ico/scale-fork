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
  tag: 'scale-icon-action-light-dark-mode',
  styleUrl: '../../icon/icon.css'
})
export class ActionLightDarkMode {
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
            {this.selected ? (<g><defs><path id="a" d="M0 0h23.995v22.496H0z"></path></defs><g transform="translate(.005 .75)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"></use></mask><path d="M12.671 17.339a6.241 6.241 0 01-1.423.169A6.248 6.248 0 1113.12 5.297a7.732 7.732 0 00-3.122 6.201 7.726 7.726 0 002.673 5.841zm5.075-12.09a6.248 6.248 0 00-6.248 6.249 6.248 6.248 0 1012.497 0 6.249 6.249 0 00-6.249-6.249zM4.708 16.727l-1.414 1.414a.749.749 0 101.061 1.06l1.414-1.414a.749.749 0 10-1.061-1.06zm6.54 2.269a.75.75 0 00-.75.75v2a.75.75 0 001.499 0v-2a.75.75 0 00-.749-.75zm-7.749-7.748a.75.75 0 00-.75-.75H.75a.75.75 0 000 1.5h1.999a.75.75 0 00.75-.75zM11.248 3.5a.75.75 0 00.749-.75v-2a.75.75 0 00-1.499 0v2c0 .414.336.75.75.75zm-6.54 2.269a.748.748 0 001.061 0 .749.749 0 000-1.06L4.355 3.295a.75.75 0 00-1.061 1.06l1.414 1.414z" fill="#000" mask="url(#b)"></path></g></g>) : (<g><path d="M4.71 17.48l-1.414 1.413a.75.75 0 101.06 1.061l1.415-1.415a.749.749 0 10-1.061-1.06zm6.54 2.27a.75.75 0 00-.75.75v2a.75.75 0 001.5 0v-2a.75.75 0 00-.75-.75zm.195-3.01c-.065.002-.13.01-.195.01A4.756 4.756 0 016.5 12a4.756 4.756 0 014.75-4.75c.189 0 .374.013.556.035a7.833 7.833 0 011.327-1.246 6.25 6.25 0 10-1.883 12.21c.487 0 .959-.06 1.414-.167a7.815 7.815 0 01-1.22-1.343zM3.5 12a.75.75 0 00-.75-.75h-2a.75.75 0 000 1.5h2A.75.75 0 003.5 12zm7.749-7.75A.75.75 0 0012 3.5v-2a.75.75 0 00-1.5 0v2c0 .413.336.75.75.75zM17.75 6a6.25 6.25 0 100 12.499 6.25 6.25 0 000-12.5zm-13.04.52a.746.746 0 001.06 0 .749.749 0 000-1.06L4.357 4.043a.749.749 0 10-1.06 1.061L4.71 6.52z" fill-rule="evenodd"></path></g>)}
          </g>
        </svg>
      </Host>
    );
  }
}
