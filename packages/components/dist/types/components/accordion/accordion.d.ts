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
export declare class Accordion {
  el: HTMLElement;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** If `true`, only one scale-collapsible within the accordion can be open at a time */
  dependent: boolean;
  /** If `true`, scale-collapsibles within the accordion will all be open initially, unless this is dependant */
  expanded: boolean;
  /** Heading level for scale-collapsible descendants */
  headingLevel: number | null;
  iconLocation?: 'left' | 'right';
  /**
   * Handle `dependent`
   */
  collapsibleHandler(event: CustomEvent): void;
  headingLevelChanged(newValue: number | null): void;
  iconLocationChanged(newValue: 'left' | 'right'): void;
  connectedCallback(): void;
  componentDidLoad(): void;
  getCollapsibleChildren(): HTMLScaleCollapsibleElement[];
  propagatePropsToChildren(headingLevel: number, iconLocation: 'left' | 'right'): void;
  render(): any;
  getCssClassMap(): string;
}
