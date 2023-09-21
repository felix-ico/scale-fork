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
export declare class TabNav {
  el: HTMLElement;
  /** True for smaller height and font size in tab headers. */
  /** @deprecated - size should replace small */
  small?: boolean;
  /** (optional) size  */
  size: 'small' | 'large';
  /** (optional) Injected CSS styles */
  styles?: string;
  handleSelect(event: any): void;
  handleKeydown(event: KeyboardEvent): void;
  connectedCallback(): void;
  componentDidRender(): void;
  getAllTabs(): HTMLScaleTabHeaderElement[];
  getAllEnabledTabs(): HTMLScaleTabHeaderElement[];
  getAllPanels(): HTMLScaleTabPanelElement[];
  getPreviousTab(): HTMLScaleTabHeaderElement;
  getNextTab(): HTMLScaleTabHeaderElement;
  getFirstTab(): HTMLScaleTabHeaderElement;
  getLastTab(): HTMLScaleTabHeaderElement;
  linkPanels(): void;
  reset(): void;
  findPanelForTab(tab: HTMLScaleTabHeaderElement): HTMLScaleTabPanelElement;
  selectTab(nextTab: HTMLScaleTabHeaderElement): void;
  /**
   * Sets or removes the `large` prop in `scale-tab-header` and `scale-tab-panel` children.
   */
  propagateSizeToTabs(): void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
