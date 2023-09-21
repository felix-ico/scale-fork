import React, { createElement } from 'react';
import 'react-dom';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const dashToPascalCase = (str) => str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
    // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
    if (node instanceof Element) {
        // add any classes in className to the class list
        const className = getClassName(node.classList, newProps, oldProps);
        if (className !== '') {
            node.className = className;
        }
        Object.keys(newProps).forEach((name) => {
            if (name === 'children' ||
                name === 'style' ||
                name === 'ref' ||
                name === 'class' ||
                name === 'className' ||
                name === 'forwardedRef') {
                return;
            }
            if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                const eventName = name.substring(2);
                const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
                if (!isCoveredByReact(eventNameLc)) {
                    syncEvent(node, eventNameLc, newProps[name]);
                }
            }
            else {
                node[name] = newProps[name];
                const propType = typeof newProps[name];
                if (propType === 'string') {
                    node.setAttribute(camelToDashCase(name), newProps[name]);
                }
            }
        });
    }
};
const getClassName = (classList, newProps, oldProps) => {
    const newClassProp = newProps.className || newProps.class;
    const oldClassProp = oldProps.className || oldProps.class;
    // map the classes to Maps for performance
    const currentClasses = arrayToMap(classList);
    const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
    const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
    const finalClassNames = [];
    // loop through each of the current classes on the component
    // to see if it should be a part of the classNames added
    currentClasses.forEach((currentClass) => {
        if (incomingPropClasses.has(currentClass)) {
            // add it as its already included in classnames coming in from newProps
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        }
        else if (!oldPropClasses.has(currentClass)) {
            // add it as it has NOT been removed by user
            finalClassNames.push(currentClass);
        }
    });
    incomingPropClasses.forEach((s) => finalClassNames.push(s));
    return finalClassNames.join(' ');
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
    if (typeof document === 'undefined') {
        return true;
    }
    else {
        const eventName = 'on' + eventNameSuffix;
        let isSupported = eventName in document;
        if (!isSupported) {
            const element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }
        return isSupported;
    }
};
const syncEvent = (node, eventName, newEventHandler) => {
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventName];
    // Remove old listener so they don't double up.
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    // Bind new listener.
    node.addEventListener(eventName, (eventStore[eventName] = function handler(e) {
        if (newEventHandler) {
            newEventHandler.call(this, e);
        }
    }));
};
const arrayToMap = (arr) => {
    const map = new Map();
    arr.forEach((s) => map.set(s, s));
    return map;
};

const setRef = (ref, value) => {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        // Cast as a MutableRef so we can assign current
        ref.current = value;
    }
};
const mergeRefs = (...refs) => {
    return (value) => {
        refs.forEach(ref => {
            setRef(ref, value);
        });
    };
};
const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        constructor(props) {
            super(props);
            this.setComponentElRef = (element) => {
                this.componentEl = element;
            };
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            attachProps(this.componentEl, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            let propsToPass = Object.keys(cProps).reduce((acc, name) => {
                const value = cProps[name];
                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (typeof document !== 'undefined' && isCoveredByReact(eventName)) {
                        acc[name] = value;
                    }
                }
                else {
                    // we should only render strings, booleans, and numbers as attrs in html.
                    // objects, functions, arrays etc get synced via properties on mount.
                    const type = typeof value;
                    if (type === 'string' || type === 'boolean' || type === 'number') {
                        acc[camelToDashCase(name)] = value;
                    }
                }
                return acc;
            }, {});
            if (manipulatePropsFunction) {
                propsToPass = manipulatePropsFunction(this.props, propsToPass);
            }
            const newProps = Object.assign(Object.assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style });
            /**
             * We use createElement here instead of
             * React.createElement to work around a
             * bug in Vite (https://github.com/vitejs/vite/issues/6104).
             * React.createElement causes all elements to be rendered
             * as <tagname> instead of the actual Web Component.
             */
            return createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    // If context was passed to createReactComponent then conditionally add it to the Component Class
    if (ReactComponentContext) {
        ReactComponent.contextType = ReactComponentContext;
    }
    return createForwardRef(ReactComponent, displayName);
};

/* eslint-disable */
const AppLogo = /*@__PURE__*/ createReactComponent('app-logo');
const AppMegaMenu = /*@__PURE__*/ createReactComponent('app-mega-menu');
const AppNavigationMainMobile = /*@__PURE__*/ createReactComponent('app-navigation-main-mobile');
const AppNavigationSectorMobile = /*@__PURE__*/ createReactComponent('app-navigation-sector-mobile');
const AppNavigationUserMenu = /*@__PURE__*/ createReactComponent('app-navigation-user-menu');
const ScaleAccordion = /*@__PURE__*/ createReactComponent('scale-accordion');
const ScaleAlert = /*@__PURE__*/ createReactComponent('scale-alert');
const ScaleAppFooter = /*@__PURE__*/ createReactComponent('scale-app-footer');
const ScaleAppHeader = /*@__PURE__*/ createReactComponent('scale-app-header');
const ScaleAppShell = /*@__PURE__*/ createReactComponent('scale-app-shell');
const ScaleBadge = /*@__PURE__*/ createReactComponent('scale-badge');
const ScaleBreadcrumb = /*@__PURE__*/ createReactComponent('scale-breadcrumb');
const ScaleButton = /*@__PURE__*/ createReactComponent('scale-button');
const ScaleCallout = /*@__PURE__*/ createReactComponent('scale-callout');
const ScaleCard = /*@__PURE__*/ createReactComponent('scale-card');
const ScaleCarousel = /*@__PURE__*/ createReactComponent('scale-carousel');
const ScaleChartStackCard = /*@__PURE__*/ createReactComponent('scale-chart-stack-card');
const ScaleCheckbox = /*@__PURE__*/ createReactComponent('scale-checkbox');
const ScaleCheckboxGroup = /*@__PURE__*/ createReactComponent('scale-checkbox-group');
const ScaleChip = /*@__PURE__*/ createReactComponent('scale-chip');
const ScaleCollapsible = /*@__PURE__*/ createReactComponent('scale-collapsible');
const ScaleDataGrid = /*@__PURE__*/ createReactComponent('scale-data-grid');
const ScaleDatePicker = /*@__PURE__*/ createReactComponent('scale-date-picker');
const ScaleDivider = /*@__PURE__*/ createReactComponent('scale-divider');
const ScaleDropdown = /*@__PURE__*/ createReactComponent('scale-dropdown');
const ScaleDropdownSelect = /*@__PURE__*/ createReactComponent('scale-dropdown-select');
const ScaleDropdownSelectItem = /*@__PURE__*/ createReactComponent('scale-dropdown-select-item');
const ScaleGrid = /*@__PURE__*/ createReactComponent('scale-grid');
const ScaleGridItem = /*@__PURE__*/ createReactComponent('scale-grid-item');
const ScaleHelperText = /*@__PURE__*/ createReactComponent('scale-helper-text');
const ScaleIcon = /*@__PURE__*/ createReactComponent('scale-icon');
const ScaleIconActionAdd = /*@__PURE__*/ createReactComponent('scale-icon-action-add');
const ScaleIconActionAddCard = /*@__PURE__*/ createReactComponent('scale-icon-action-add-card');
const ScaleIconActionArrange = /*@__PURE__*/ createReactComponent('scale-icon-action-arrange');
const ScaleIconActionArrowDown = /*@__PURE__*/ createReactComponent('scale-icon-action-arrow-down');
const ScaleIconActionArrowLeft = /*@__PURE__*/ createReactComponent('scale-icon-action-arrow-left');
const ScaleIconActionArrowRight = /*@__PURE__*/ createReactComponent('scale-icon-action-arrow-right');
const ScaleIconActionArrowUp = /*@__PURE__*/ createReactComponent('scale-icon-action-arrow-up');
const ScaleIconActionAutoLogin = /*@__PURE__*/ createReactComponent('scale-icon-action-auto-login');
const ScaleIconActionBackspace = /*@__PURE__*/ createReactComponent('scale-icon-action-backspace');
const ScaleIconActionBackward = /*@__PURE__*/ createReactComponent('scale-icon-action-backward');
const ScaleIconActionChangelog = /*@__PURE__*/ createReactComponent('scale-icon-action-changelog');
const ScaleIconActionCheckmark = /*@__PURE__*/ createReactComponent('scale-icon-action-checkmark');
const ScaleIconActionCircleAdd = /*@__PURE__*/ createReactComponent('scale-icon-action-circle-add');
const ScaleIconActionCircleClose = /*@__PURE__*/ createReactComponent('scale-icon-action-circle-close');
const ScaleIconActionClose = /*@__PURE__*/ createReactComponent('scale-icon-action-close');
const ScaleIconActionCompare = /*@__PURE__*/ createReactComponent('scale-icon-action-compare');
const ScaleIconActionCopyPaste = /*@__PURE__*/ createReactComponent('scale-icon-action-copy-paste');
const ScaleIconActionCutPaste = /*@__PURE__*/ createReactComponent('scale-icon-action-cut-paste');
const ScaleIconActionDisabledMicrophone = /*@__PURE__*/ createReactComponent('scale-icon-action-disabled-microphone');
const ScaleIconActionDownload = /*@__PURE__*/ createReactComponent('scale-icon-action-download');
const ScaleIconActionDownloadFromCloud = /*@__PURE__*/ createReactComponent('scale-icon-action-download-from-cloud');
const ScaleIconActionDragAndDrop = /*@__PURE__*/ createReactComponent('scale-icon-action-drag-and-drop');
const ScaleIconActionEdit = /*@__PURE__*/ createReactComponent('scale-icon-action-edit');
const ScaleIconActionExport = /*@__PURE__*/ createReactComponent('scale-icon-action-export');
const ScaleIconActionFastForward = /*@__PURE__*/ createReactComponent('scale-icon-action-fast-forward');
const ScaleIconActionFastForwardNb = /*@__PURE__*/ createReactComponent('scale-icon-action-fast-forward-nb');
const ScaleIconActionFavorite = /*@__PURE__*/ createReactComponent('scale-icon-action-favorite');
const ScaleIconActionFilter = /*@__PURE__*/ createReactComponent('scale-icon-action-filter');
const ScaleIconActionFilter2 = /*@__PURE__*/ createReactComponent('scale-icon-action-filter-2');
const ScaleIconActionForward = /*@__PURE__*/ createReactComponent('scale-icon-action-forward');
const ScaleIconActionFullScreen = /*@__PURE__*/ createReactComponent('scale-icon-action-full-screen');
const ScaleIconActionHidePassword = /*@__PURE__*/ createReactComponent('scale-icon-action-hide-password');
const ScaleIconActionImport = /*@__PURE__*/ createReactComponent('scale-icon-action-import');
const ScaleIconActionInstall = /*@__PURE__*/ createReactComponent('scale-icon-action-install');
const ScaleIconActionLaunch = /*@__PURE__*/ createReactComponent('scale-icon-action-launch');
const ScaleIconActionLightDarkMode = /*@__PURE__*/ createReactComponent('scale-icon-action-light-dark-mode');
const ScaleIconActionLink = /*@__PURE__*/ createReactComponent('scale-icon-action-link');
const ScaleIconActionLogout = /*@__PURE__*/ createReactComponent('scale-icon-action-logout');
const ScaleIconActionLoop = /*@__PURE__*/ createReactComponent('scale-icon-action-loop');
const ScaleIconActionMenu = /*@__PURE__*/ createReactComponent('scale-icon-action-menu');
const ScaleIconActionMicrophone = /*@__PURE__*/ createReactComponent('scale-icon-action-microphone');
const ScaleIconActionMinimizeScreen = /*@__PURE__*/ createReactComponent('scale-icon-action-minimize-screen');
const ScaleIconActionMinus = /*@__PURE__*/ createReactComponent('scale-icon-action-minus');
const ScaleIconActionMinusCircle = /*@__PURE__*/ createReactComponent('scale-icon-action-minus-circle');
const ScaleIconActionMore = /*@__PURE__*/ createReactComponent('scale-icon-action-more');
const ScaleIconActionMove = /*@__PURE__*/ createReactComponent('scale-icon-action-move');
const ScaleIconActionMute = /*@__PURE__*/ createReactComponent('scale-icon-action-mute');
const ScaleIconActionNotification = /*@__PURE__*/ createReactComponent('scale-icon-action-notification');
const ScaleIconActionPause = /*@__PURE__*/ createReactComponent('scale-icon-action-pause');
const ScaleIconActionPauseNb = /*@__PURE__*/ createReactComponent('scale-icon-action-pause-nb');
const ScaleIconActionPin = /*@__PURE__*/ createReactComponent('scale-icon-action-pin');
const ScaleIconActionPlay = /*@__PURE__*/ createReactComponent('scale-icon-action-play');
const ScaleIconActionPlayNb = /*@__PURE__*/ createReactComponent('scale-icon-action-play-nb');
const ScaleIconActionPopUpWindow = /*@__PURE__*/ createReactComponent('scale-icon-action-pop-up-window');
const ScaleIconActionPower = /*@__PURE__*/ createReactComponent('scale-icon-action-power');
const ScaleIconActionPreviousNb = /*@__PURE__*/ createReactComponent('scale-icon-action-previous-nb');
const ScaleIconActionPrint = /*@__PURE__*/ createReactComponent('scale-icon-action-print');
const ScaleIconActionPublish = /*@__PURE__*/ createReactComponent('scale-icon-action-publish');
const ScaleIconActionRandom = /*@__PURE__*/ createReactComponent('scale-icon-action-random');
const ScaleIconActionRecordNb = /*@__PURE__*/ createReactComponent('scale-icon-action-record-nb');
const ScaleIconActionRefresh = /*@__PURE__*/ createReactComponent('scale-icon-action-refresh');
const ScaleIconActionRemove = /*@__PURE__*/ createReactComponent('scale-icon-action-remove');
const ScaleIconActionReply = /*@__PURE__*/ createReactComponent('scale-icon-action-reply');
const ScaleIconActionReplyAll = /*@__PURE__*/ createReactComponent('scale-icon-action-reply-all');
const ScaleIconActionReplyForward = /*@__PURE__*/ createReactComponent('scale-icon-action-reply-forward');
const ScaleIconActionRestart = /*@__PURE__*/ createReactComponent('scale-icon-action-restart');
const ScaleIconActionSearch = /*@__PURE__*/ createReactComponent('scale-icon-action-search');
const ScaleIconActionSend = /*@__PURE__*/ createReactComponent('scale-icon-action-send');
const ScaleIconActionShare = /*@__PURE__*/ createReactComponent('scale-icon-action-share');
const ScaleIconActionShoppingCart = /*@__PURE__*/ createReactComponent('scale-icon-action-shopping-cart');
const ScaleIconActionShowPassword = /*@__PURE__*/ createReactComponent('scale-icon-action-show-password');
const ScaleIconActionSort = /*@__PURE__*/ createReactComponent('scale-icon-action-sort');
const ScaleIconActionSoundOn = /*@__PURE__*/ createReactComponent('scale-icon-action-sound-on');
const ScaleIconActionStar = /*@__PURE__*/ createReactComponent('scale-icon-action-star');
const ScaleIconActionStreamOn = /*@__PURE__*/ createReactComponent('scale-icon-action-stream-on');
const ScaleIconActionSuccess = /*@__PURE__*/ createReactComponent('scale-icon-action-success');
const ScaleIconActionThumbsDown = /*@__PURE__*/ createReactComponent('scale-icon-action-thumbs-down');
const ScaleIconActionThumbsUp = /*@__PURE__*/ createReactComponent('scale-icon-action-thumbs-up');
const ScaleIconActionTilesAdd = /*@__PURE__*/ createReactComponent('scale-icon-action-tiles-add');
const ScaleIconActionUpload = /*@__PURE__*/ createReactComponent('scale-icon-action-upload');
const ScaleIconActionUploadToCloud = /*@__PURE__*/ createReactComponent('scale-icon-action-upload-to-cloud');
const ScaleIconActionVolumeDown = /*@__PURE__*/ createReactComponent('scale-icon-action-volume-down');
const ScaleIconActionVolumeUp = /*@__PURE__*/ createReactComponent('scale-icon-action-volume-up');
const ScaleIconActionZoomIn = /*@__PURE__*/ createReactComponent('scale-icon-action-zoom-in');
const ScaleIconActionZoomOut = /*@__PURE__*/ createReactComponent('scale-icon-action-zoom-out');
const ScaleIconAlertAntivirusProtection = /*@__PURE__*/ createReactComponent('scale-icon-alert-antivirus-protection');
const ScaleIconAlertCompliance = /*@__PURE__*/ createReactComponent('scale-icon-alert-compliance');
const ScaleIconAlertCyberSecurity = /*@__PURE__*/ createReactComponent('scale-icon-alert-cyber-security');
const ScaleIconAlertError = /*@__PURE__*/ createReactComponent('scale-icon-alert-error');
const ScaleIconAlertHelp = /*@__PURE__*/ createReactComponent('scale-icon-alert-help');
const ScaleIconAlertHighPriorityEmail = /*@__PURE__*/ createReactComponent('scale-icon-alert-high-priority-email');
const ScaleIconAlertImprintDataprivacy = /*@__PURE__*/ createReactComponent('scale-icon-alert-imprint-dataprivacy');
const ScaleIconAlertInformation = /*@__PURE__*/ createReactComponent('scale-icon-alert-information');
const ScaleIconAlertLegal = /*@__PURE__*/ createReactComponent('scale-icon-alert-legal');
const ScaleIconAlertNetworkDisrupted = /*@__PURE__*/ createReactComponent('scale-icon-alert-network-disrupted');
const ScaleIconAlertPasswordBreaking = /*@__PURE__*/ createReactComponent('scale-icon-alert-password-breaking');
const ScaleIconAlertSecurity = /*@__PURE__*/ createReactComponent('scale-icon-alert-security');
const ScaleIconAlertTrafficDisruption = /*@__PURE__*/ createReactComponent('scale-icon-alert-traffic-disruption');
const ScaleIconAlertUnknown = /*@__PURE__*/ createReactComponent('scale-icon-alert-unknown');
const ScaleIconAlertWarning = /*@__PURE__*/ createReactComponent('scale-icon-alert-warning');
const ScaleIconCommunicationAvailable = /*@__PURE__*/ createReactComponent('scale-icon-communication-available');
const ScaleIconCommunicationBlog = /*@__PURE__*/ createReactComponent('scale-icon-communication-blog');
const ScaleIconCommunicationCallIncoming = /*@__PURE__*/ createReactComponent('scale-icon-communication-call-incoming');
const ScaleIconCommunicationCallOutgoing = /*@__PURE__*/ createReactComponent('scale-icon-communication-call-outgoing');
const ScaleIconCommunicationChat = /*@__PURE__*/ createReactComponent('scale-icon-communication-chat');
const ScaleIconCommunicationChatBadge = /*@__PURE__*/ createReactComponent('scale-icon-communication-chat-badge');
const ScaleIconCommunicationEmail = /*@__PURE__*/ createReactComponent('scale-icon-communication-email');
const ScaleIconCommunicationEndCall = /*@__PURE__*/ createReactComponent('scale-icon-communication-end-call');
const ScaleIconCommunicationFeedback = /*@__PURE__*/ createReactComponent('scale-icon-communication-feedback');
const ScaleIconCommunicationFlightMode = /*@__PURE__*/ createReactComponent('scale-icon-communication-flight-mode');
const ScaleIconCommunicationHappyPerson = /*@__PURE__*/ createReactComponent('scale-icon-communication-happy-person');
const ScaleIconCommunicationInbox = /*@__PURE__*/ createReactComponent('scale-icon-communication-inbox');
const ScaleIconCommunicationLandingMobileContactClient = /*@__PURE__*/ createReactComponent('scale-icon-communication-landing-mobile-contact-client');
const ScaleIconCommunicationLoyaltyEarned = /*@__PURE__*/ createReactComponent('scale-icon-communication-loyalty-earned');
const ScaleIconCommunicationLoyaltyLost = /*@__PURE__*/ createReactComponent('scale-icon-communication-loyalty-lost');
const ScaleIconCommunicationMailOpened = /*@__PURE__*/ createReactComponent('scale-icon-communication-mail-opened');
const ScaleIconCommunicationMessage = /*@__PURE__*/ createReactComponent('scale-icon-communication-message');
const ScaleIconCommunicationMessageIncoming = /*@__PURE__*/ createReactComponent('scale-icon-communication-message-incoming');
const ScaleIconCommunicationMessageOutgoing = /*@__PURE__*/ createReactComponent('scale-icon-communication-message-outgoing');
const ScaleIconCommunicationMmsIncoming = /*@__PURE__*/ createReactComponent('scale-icon-communication-mms-incoming');
const ScaleIconCommunicationMmsOutgoing = /*@__PURE__*/ createReactComponent('scale-icon-communication-mms-outgoing');
const ScaleIconCommunicationMobilePhoneNumber = /*@__PURE__*/ createReactComponent('scale-icon-communication-mobile-phone-number');
const ScaleIconCommunicationNetworkSignal = /*@__PURE__*/ createReactComponent('scale-icon-communication-network-signal');
const ScaleIconCommunicationNewEmail = /*@__PURE__*/ createReactComponent('scale-icon-communication-new-email');
const ScaleIconCommunicationOutbox = /*@__PURE__*/ createReactComponent('scale-icon-communication-outbox');
const ScaleIconCommunicationPhoneNumber = /*@__PURE__*/ createReactComponent('scale-icon-communication-phone-number');
const ScaleIconCommunicationRecipient = /*@__PURE__*/ createReactComponent('scale-icon-communication-recipient');
const ScaleIconCommunicationSaveEmailsToDrafts = /*@__PURE__*/ createReactComponent('scale-icon-communication-save-emails-to-drafts');
const ScaleIconCommunicationSms = /*@__PURE__*/ createReactComponent('scale-icon-communication-sms');
const ScaleIconCommunicationSpam = /*@__PURE__*/ createReactComponent('scale-icon-communication-spam');
const ScaleIconCommunicationVoiceMessage = /*@__PURE__*/ createReactComponent('scale-icon-communication-voice-message');
const ScaleIconContent2faGoogleAuth = /*@__PURE__*/ createReactComponent('scale-icon-content-2fa-google-auth');
const ScaleIconContentAchievement = /*@__PURE__*/ createReactComponent('scale-icon-content-achievement');
const ScaleIconContentAndroid = /*@__PURE__*/ createReactComponent('scale-icon-content-android');
const ScaleIconContentApple = /*@__PURE__*/ createReactComponent('scale-icon-content-apple');
const ScaleIconContentApplications = /*@__PURE__*/ createReactComponent('scale-icon-content-applications');
const ScaleIconContentAvailableKeychain = /*@__PURE__*/ createReactComponent('scale-icon-content-available-keychain');
const ScaleIconContentBank = /*@__PURE__*/ createReactComponent('scale-icon-content-bank');
const ScaleIconContentBiometric = /*@__PURE__*/ createReactComponent('scale-icon-content-biometric');
const ScaleIconContentBirthday = /*@__PURE__*/ createReactComponent('scale-icon-content-birthday');
const ScaleIconContentBookmark = /*@__PURE__*/ createReactComponent('scale-icon-content-bookmark');
const ScaleIconContentCalendar = /*@__PURE__*/ createReactComponent('scale-icon-content-calendar');
const ScaleIconContentClipboard = /*@__PURE__*/ createReactComponent('scale-icon-content-clipboard');
const ScaleIconContentClock = /*@__PURE__*/ createReactComponent('scale-icon-content-clock');
const ScaleIconContentCloudSecurity = /*@__PURE__*/ createReactComponent('scale-icon-content-cloud-security');
const ScaleIconContentCodeScanner = /*@__PURE__*/ createReactComponent('scale-icon-content-code-scanner');
const ScaleIconContentColorSelection = /*@__PURE__*/ createReactComponent('scale-icon-content-color-selection');
const ScaleIconContentCountry = /*@__PURE__*/ createReactComponent('scale-icon-content-country');
const ScaleIconContentCreditCard = /*@__PURE__*/ createReactComponent('scale-icon-content-credit-card');
const ScaleIconContentDataVisualisation = /*@__PURE__*/ createReactComponent('scale-icon-content-data-visualisation');
const ScaleIconContentDelivery = /*@__PURE__*/ createReactComponent('scale-icon-content-delivery');
const ScaleIconContentDigitalBanking = /*@__PURE__*/ createReactComponent('scale-icon-content-digital-banking');
const ScaleIconContentDigitalMedia = /*@__PURE__*/ createReactComponent('scale-icon-content-digital-media');
const ScaleIconContentDiscount = /*@__PURE__*/ createReactComponent('scale-icon-content-discount');
const ScaleIconContentESim = /*@__PURE__*/ createReactComponent('scale-icon-content-e-sim');
const ScaleIconContentEu = /*@__PURE__*/ createReactComponent('scale-icon-content-eu');
const ScaleIconContentFaceMask = /*@__PURE__*/ createReactComponent('scale-icon-content-face-mask');
const ScaleIconContentFeatures = /*@__PURE__*/ createReactComponent('scale-icon-content-features');
const ScaleIconContentFlexibleTariffs = /*@__PURE__*/ createReactComponent('scale-icon-content-flexible-tariffs');
const ScaleIconContentFolder = /*@__PURE__*/ createReactComponent('scale-icon-content-folder');
const ScaleIconContentFood = /*@__PURE__*/ createReactComponent('scale-icon-content-food');
const ScaleIconContentGenderDiverse = /*@__PURE__*/ createReactComponent('scale-icon-content-gender-diverse');
const ScaleIconContentGenderFemale = /*@__PURE__*/ createReactComponent('scale-icon-content-gender-female');
const ScaleIconContentGenderMale = /*@__PURE__*/ createReactComponent('scale-icon-content-gender-male');
const ScaleIconContentHalfRating = /*@__PURE__*/ createReactComponent('scale-icon-content-half-rating');
const ScaleIconContentHeart = /*@__PURE__*/ createReactComponent('scale-icon-content-heart');
const ScaleIconContentHeight = /*@__PURE__*/ createReactComponent('scale-icon-content-height');
const ScaleIconContentHistory = /*@__PURE__*/ createReactComponent('scale-icon-content-history');
const ScaleIconContentHourGlass = /*@__PURE__*/ createReactComponent('scale-icon-content-hour-glass');
const ScaleIconContentIban = /*@__PURE__*/ createReactComponent('scale-icon-content-iban');
const ScaleIconContentId = /*@__PURE__*/ createReactComponent('scale-icon-content-id');
const ScaleIconContentInStock = /*@__PURE__*/ createReactComponent('scale-icon-content-in-stock');
const ScaleIconContentInternational = /*@__PURE__*/ createReactComponent('scale-icon-content-international');
const ScaleIconContentInternationalSms = /*@__PURE__*/ createReactComponent('scale-icon-content-international-sms');
const ScaleIconContentInterview = /*@__PURE__*/ createReactComponent('scale-icon-content-interview');
const ScaleIconContentKey = /*@__PURE__*/ createReactComponent('scale-icon-content-key');
const ScaleIconContentLanguage = /*@__PURE__*/ createReactComponent('scale-icon-content-language');
const ScaleIconContentLock = /*@__PURE__*/ createReactComponent('scale-icon-content-lock');
const ScaleIconContentLoyalty = /*@__PURE__*/ createReactComponent('scale-icon-content-loyalty');
const ScaleIconContentMediaFolder = /*@__PURE__*/ createReactComponent('scale-icon-content-media-folder');
const ScaleIconContentMoneyAt = /*@__PURE__*/ createReactComponent('scale-icon-content-money-at');
const ScaleIconContentMusic = /*@__PURE__*/ createReactComponent('scale-icon-content-music');
const ScaleIconContentNews = /*@__PURE__*/ createReactComponent('scale-icon-content-news');
const ScaleIconContentOutOfStock = /*@__PURE__*/ createReactComponent('scale-icon-content-out-of-stock');
const ScaleIconContentPersonWalking = /*@__PURE__*/ createReactComponent('scale-icon-content-person-walking');
const ScaleIconContentPrepaidActivate = /*@__PURE__*/ createReactComponent('scale-icon-content-prepaid-activate');
const ScaleIconContentPriceTag = /*@__PURE__*/ createReactComponent('scale-icon-content-price-tag');
const ScaleIconContentRatings = /*@__PURE__*/ createReactComponent('scale-icon-content-ratings');
const ScaleIconContentRoute = /*@__PURE__*/ createReactComponent('scale-icon-content-route');
const ScaleIconContentRss = /*@__PURE__*/ createReactComponent('scale-icon-content-rss');
const ScaleIconContentShop = /*@__PURE__*/ createReactComponent('scale-icon-content-shop');
const ScaleIconContentSignal = /*@__PURE__*/ createReactComponent('scale-icon-content-signal');
const ScaleIconContentSimCard = /*@__PURE__*/ createReactComponent('scale-icon-content-sim-card');
const ScaleIconContentSmile = /*@__PURE__*/ createReactComponent('scale-icon-content-smile');
const ScaleIconContentSortIndicatorDown = /*@__PURE__*/ createReactComponent('scale-icon-content-sort-indicator-down');
const ScaleIconContentSortIndicatorMiniDown = /*@__PURE__*/ createReactComponent('scale-icon-content-sort-indicator-mini-down');
const ScaleIconContentSortIndicatorUp = /*@__PURE__*/ createReactComponent('scale-icon-content-sort-indicator-up');
const ScaleIconContentSortIndicatorUpMini = /*@__PURE__*/ createReactComponent('scale-icon-content-sort-indicator-up-mini');
const ScaleIconContentStatusInactive = /*@__PURE__*/ createReactComponent('scale-icon-content-status-inactive');
const ScaleIconContentStatusRecurring = /*@__PURE__*/ createReactComponent('scale-icon-content-status-recurring');
const ScaleIconContentStopwatch = /*@__PURE__*/ createReactComponent('scale-icon-content-stopwatch');
const ScaleIconContentSupportChat = /*@__PURE__*/ createReactComponent('scale-icon-content-support-chat');
const ScaleIconContentSustainable = /*@__PURE__*/ createReactComponent('scale-icon-content-sustainable');
const ScaleIconContentTariffs = /*@__PURE__*/ createReactComponent('scale-icon-content-tariffs');
const ScaleIconContentThreats = /*@__PURE__*/ createReactComponent('scale-icon-content-threats');
const ScaleIconContentTodoList = /*@__PURE__*/ createReactComponent('scale-icon-content-todo-list');
const ScaleIconContentTransport = /*@__PURE__*/ createReactComponent('scale-icon-content-transport');
const ScaleIconContentUnlock = /*@__PURE__*/ createReactComponent('scale-icon-content-unlock');
const ScaleIconContentVoucher = /*@__PURE__*/ createReactComponent('scale-icon-content-voucher');
const ScaleIconContentWaiting = /*@__PURE__*/ createReactComponent('scale-icon-content-waiting');
const ScaleIconContentWallet = /*@__PURE__*/ createReactComponent('scale-icon-content-wallet');
const ScaleIconDeviceAddDevice = /*@__PURE__*/ createReactComponent('scale-icon-device-add-device');
const ScaleIconDeviceCamera = /*@__PURE__*/ createReactComponent('scale-icon-device-camera');
const ScaleIconDeviceChangeCamera = /*@__PURE__*/ createReactComponent('scale-icon-device-change-camera');
const ScaleIconDeviceComputer = /*@__PURE__*/ createReactComponent('scale-icon-device-computer');
const ScaleIconDeviceDeviceController = /*@__PURE__*/ createReactComponent('scale-icon-device-device-controller');
const ScaleIconDeviceDeviceEthernet = /*@__PURE__*/ createReactComponent('scale-icon-device-device-ethernet');
const ScaleIconDeviceDeviceMesh = /*@__PURE__*/ createReactComponent('scale-icon-device-device-mesh');
const ScaleIconDeviceDevicePhone = /*@__PURE__*/ createReactComponent('scale-icon-device-device-phone');
const ScaleIconDeviceDeviceRouter = /*@__PURE__*/ createReactComponent('scale-icon-device-device-router');
const ScaleIconDeviceDeviceTv = /*@__PURE__*/ createReactComponent('scale-icon-device-device-tv');
const ScaleIconDeviceDeviceWatch = /*@__PURE__*/ createReactComponent('scale-icon-device-device-watch');
const ScaleIconDeviceDongle = /*@__PURE__*/ createReactComponent('scale-icon-device-dongle');
const ScaleIconDeviceFax = /*@__PURE__*/ createReactComponent('scale-icon-device-fax');
const ScaleIconDeviceFixedLineServices = /*@__PURE__*/ createReactComponent('scale-icon-device-fixed-line-services');
const ScaleIconDeviceGameController = /*@__PURE__*/ createReactComponent('scale-icon-device-game-controller');
const ScaleIconDeviceMediaReceiver = /*@__PURE__*/ createReactComponent('scale-icon-device-media-receiver');
const ScaleIconDeviceMobileData = /*@__PURE__*/ createReactComponent('scale-icon-device-mobile-data');
const ScaleIconDeviceMobileDevicesCombination = /*@__PURE__*/ createReactComponent('scale-icon-device-mobile-devices-combination');
const ScaleIconDeviceMobileEquipment = /*@__PURE__*/ createReactComponent('scale-icon-device-mobile-equipment');
const ScaleIconDeviceMobilePhoneInsurance = /*@__PURE__*/ createReactComponent('scale-icon-device-mobile-phone-insurance');
const ScaleIconDeviceMobileServices = /*@__PURE__*/ createReactComponent('scale-icon-device-mobile-services');
const ScaleIconDeviceNoCamera = /*@__PURE__*/ createReactComponent('scale-icon-device-no-camera');
const ScaleIconDevicePhoneWithMobilePlan = /*@__PURE__*/ createReactComponent('scale-icon-device-phone-with-mobile-plan');
const ScaleIconDevicePhoneWithoutMobilePlan = /*@__PURE__*/ createReactComponent('scale-icon-device-phone-without-mobile-plan');
const ScaleIconDevicePhotoCamera = /*@__PURE__*/ createReactComponent('scale-icon-device-photo-camera');
const ScaleIconDeviceRemoteController = /*@__PURE__*/ createReactComponent('scale-icon-device-remote-controller');
const ScaleIconDeviceReplacementMobilephone = /*@__PURE__*/ createReactComponent('scale-icon-device-replacement-mobilephone');
const ScaleIconDeviceScreenRotate = /*@__PURE__*/ createReactComponent('scale-icon-device-screen-rotate');
const ScaleIconDeviceServer = /*@__PURE__*/ createReactComponent('scale-icon-device-server');
const ScaleIconDeviceSmartSpeaker = /*@__PURE__*/ createReactComponent('scale-icon-device-smart-speaker');
const ScaleIconDeviceTablet = /*@__PURE__*/ createReactComponent('scale-icon-device-tablet');
const ScaleIconDeviceTvAndMobile = /*@__PURE__*/ createReactComponent('scale-icon-device-tv-and-mobile');
const ScaleIconDeviceTwitchingClosedState = /*@__PURE__*/ createReactComponent('scale-icon-device-twitching-closed-state');
const ScaleIconDeviceTwitchingOpenState = /*@__PURE__*/ createReactComponent('scale-icon-device-twitching-open-state');
const ScaleIconHomeHome = /*@__PURE__*/ createReactComponent('scale-icon-home-home');
const ScaleIconHomeInternetAtHome = /*@__PURE__*/ createReactComponent('scale-icon-home-internet-at-home');
const ScaleIconHomeIot = /*@__PURE__*/ createReactComponent('scale-icon-home-iot');
const ScaleIconHomeLightBulb = /*@__PURE__*/ createReactComponent('scale-icon-home-light-bulb');
const ScaleIconHomeNetworkSecure = /*@__PURE__*/ createReactComponent('scale-icon-home-network-secure');
const ScaleIconHomeNoWifi = /*@__PURE__*/ createReactComponent('scale-icon-home-no-wifi');
const ScaleIconHomePowerSocket = /*@__PURE__*/ createReactComponent('scale-icon-home-power-socket');
const ScaleIconHomePreferredWifi = /*@__PURE__*/ createReactComponent('scale-icon-home-preferred-wifi');
const ScaleIconHomeReducedWifi = /*@__PURE__*/ createReactComponent('scale-icon-home-reduced-wifi');
const ScaleIconHomeSlowWifi = /*@__PURE__*/ createReactComponent('scale-icon-home-slow-wifi');
const ScaleIconHomeSmarthome = /*@__PURE__*/ createReactComponent('scale-icon-home-smarthome');
const ScaleIconHomeUnableToConnectToRouter = /*@__PURE__*/ createReactComponent('scale-icon-home-unable-to-connect-to-router');
const ScaleIconHomeWifi = /*@__PURE__*/ createReactComponent('scale-icon-home-wifi');
const ScaleIconHomeWifiConnected = /*@__PURE__*/ createReactComponent('scale-icon-home-wifi-connected');
const ScaleIconHomeWifiConnectionError = /*@__PURE__*/ createReactComponent('scale-icon-home-wifi-connection-error');
const ScaleIconHomeWifiManualLogin = /*@__PURE__*/ createReactComponent('scale-icon-home-wifi-manual-login');
const ScaleIconHomeWifiNoWiredInternet = /*@__PURE__*/ createReactComponent('scale-icon-home-wifi-no-wired-internet');
const ScaleIconNavigationCircleTopUp = /*@__PURE__*/ createReactComponent('scale-icon-navigation-circle-top-up');
const ScaleIconNavigationCollapseDown = /*@__PURE__*/ createReactComponent('scale-icon-navigation-collapse-down');
const ScaleIconNavigationCollapseUp = /*@__PURE__*/ createReactComponent('scale-icon-navigation-collapse-up');
const ScaleIconNavigationDoubleLeft = /*@__PURE__*/ createReactComponent('scale-icon-navigation-double-left');
const ScaleIconNavigationDoubleRight = /*@__PURE__*/ createReactComponent('scale-icon-navigation-double-right');
const ScaleIconNavigationExternalLink = /*@__PURE__*/ createReactComponent('scale-icon-navigation-external-link');
const ScaleIconNavigationInternalLink = /*@__PURE__*/ createReactComponent('scale-icon-navigation-internal-link');
const ScaleIconNavigationLeft = /*@__PURE__*/ createReactComponent('scale-icon-navigation-left');
const ScaleIconNavigationLeftCondensed = /*@__PURE__*/ createReactComponent('scale-icon-navigation-left-condensed');
const ScaleIconNavigationLocation = /*@__PURE__*/ createReactComponent('scale-icon-navigation-location');
const ScaleIconNavigationMap = /*@__PURE__*/ createReactComponent('scale-icon-navigation-map');
const ScaleIconNavigationMyLocation = /*@__PURE__*/ createReactComponent('scale-icon-navigation-my-location');
const ScaleIconNavigationRight = /*@__PURE__*/ createReactComponent('scale-icon-navigation-right');
const ScaleIconNavigationRightCondensed = /*@__PURE__*/ createReactComponent('scale-icon-navigation-right-condensed');
const ScaleIconNavigationStart = /*@__PURE__*/ createReactComponent('scale-icon-navigation-start');
const ScaleIconNavigationTopUp = /*@__PURE__*/ createReactComponent('scale-icon-navigation-top-up');
const ScaleIconProcessOrderStatus = /*@__PURE__*/ createReactComponent('scale-icon-process-order-status');
const ScaleIconProcessProcessing = /*@__PURE__*/ createReactComponent('scale-icon-process-processing');
const ScaleIconProcessSepaTransaction = /*@__PURE__*/ createReactComponent('scale-icon-process-sepa-transaction');
const ScaleIconServiceDevicesService = /*@__PURE__*/ createReactComponent('scale-icon-service-devices-service');
const ScaleIconServiceMaintanance = /*@__PURE__*/ createReactComponent('scale-icon-service-maintanance');
const ScaleIconServiceManual = /*@__PURE__*/ createReactComponent('scale-icon-service-manual');
const ScaleIconServiceOneTimePassword = /*@__PURE__*/ createReactComponent('scale-icon-service-one-time-password');
const ScaleIconServiceServices = /*@__PURE__*/ createReactComponent('scale-icon-service-services');
const ScaleIconServiceSettings = /*@__PURE__*/ createReactComponent('scale-icon-service-settings');
const ScaleIconServiceSupport = /*@__PURE__*/ createReactComponent('scale-icon-service-support');
const ScaleIconServiceVpn = /*@__PURE__*/ createReactComponent('scale-icon-service-vpn');
const ScaleIconTProduct2faTelekomApp = /*@__PURE__*/ createReactComponent('scale-icon-t-product-2fa-telekom-app');
const ScaleIconTProductMagentaCloud = /*@__PURE__*/ createReactComponent('scale-icon-t-product-magenta-cloud');
const ScaleIconTProductMagentaTv = /*@__PURE__*/ createReactComponent('scale-icon-t-product-magenta-tv');
const ScaleIconTProductMagentaone = /*@__PURE__*/ createReactComponent('scale-icon-t-product-magentaone');
const ScaleIconTProductMeasureInternetSpeed = /*@__PURE__*/ createReactComponent('scale-icon-t-product-measure-internet-speed');
const ScaleIconTProductSeamlessConnectivity = /*@__PURE__*/ createReactComponent('scale-icon-t-product-seamless-connectivity');
const ScaleIconTProductTelekom1t1 = /*@__PURE__*/ createReactComponent('scale-icon-t-product-telekom-1t1');
const ScaleIconTProductTelekomPlan = /*@__PURE__*/ createReactComponent('scale-icon-t-product-telekom-plan');
const ScaleIconTProductTelekomShopB = /*@__PURE__*/ createReactComponent('scale-icon-t-product-telekom-shop-b');
const ScaleIconTProductUsage = /*@__PURE__*/ createReactComponent('scale-icon-t-product-usage');
const ScaleIconTProductVoice = /*@__PURE__*/ createReactComponent('scale-icon-t-product-voice');
const ScaleIconUserFileAdmin = /*@__PURE__*/ createReactComponent('scale-icon-user-file-admin');
const ScaleIconUserFileAnalytics = /*@__PURE__*/ createReactComponent('scale-icon-user-file-analytics');
const ScaleIconUserFileAttachment = /*@__PURE__*/ createReactComponent('scale-icon-user-file-attachment');
const ScaleIconUserFileAudioFile = /*@__PURE__*/ createReactComponent('scale-icon-user-file-audio-file');
const ScaleIconUserFileBilling = /*@__PURE__*/ createReactComponent('scale-icon-user-file-billing');
const ScaleIconUserFileBoy = /*@__PURE__*/ createReactComponent('scale-icon-user-file-boy');
const ScaleIconUserFileBussinesUsers = /*@__PURE__*/ createReactComponent('scale-icon-user-file-bussines-users');
const ScaleIconUserFileCommunities = /*@__PURE__*/ createReactComponent('scale-icon-user-file-communities');
const ScaleIconUserFileContacts = /*@__PURE__*/ createReactComponent('scale-icon-user-file-contacts');
const ScaleIconUserFileContactsFromCloud = /*@__PURE__*/ createReactComponent('scale-icon-user-file-contacts-from-cloud');
const ScaleIconUserFileContracts = /*@__PURE__*/ createReactComponent('scale-icon-user-file-contracts');
const ScaleIconUserFileDraftFile = /*@__PURE__*/ createReactComponent('scale-icon-user-file-draft-file');
const ScaleIconUserFileFamilies = /*@__PURE__*/ createReactComponent('scale-icon-user-file-families');
const ScaleIconUserFileFamily = /*@__PURE__*/ createReactComponent('scale-icon-user-file-family');
const ScaleIconUserFileFile = /*@__PURE__*/ createReactComponent('scale-icon-user-file-file');
const ScaleIconUserFileFileCollection = /*@__PURE__*/ createReactComponent('scale-icon-user-file-file-collection');
const ScaleIconUserFileGirl = /*@__PURE__*/ createReactComponent('scale-icon-user-file-girl');
const ScaleIconUserFileHandshake = /*@__PURE__*/ createReactComponent('scale-icon-user-file-handshake');
const ScaleIconUserFileHtmlFile = /*@__PURE__*/ createReactComponent('scale-icon-user-file-html-file');
const ScaleIconUserFileIdCard = /*@__PURE__*/ createReactComponent('scale-icon-user-file-id-card');
const ScaleIconUserFileImageFile = /*@__PURE__*/ createReactComponent('scale-icon-user-file-image-file');
const ScaleIconUserFileLogout = /*@__PURE__*/ createReactComponent('scale-icon-user-file-logout');
const ScaleIconUserFileMan = /*@__PURE__*/ createReactComponent('scale-icon-user-file-man');
const ScaleIconUserFilePdfFile = /*@__PURE__*/ createReactComponent('scale-icon-user-file-pdf-file');
const ScaleIconUserFileSwitchUsers = /*@__PURE__*/ createReactComponent('scale-icon-user-file-switch-users');
const ScaleIconUserFileUser = /*@__PURE__*/ createReactComponent('scale-icon-user-file-user');
const ScaleIconUserFileVideos = /*@__PURE__*/ createReactComponent('scale-icon-user-file-videos');
const ScaleIconUserFileWoman = /*@__PURE__*/ createReactComponent('scale-icon-user-file-woman');
const ScaleIconWeatherCloudy = /*@__PURE__*/ createReactComponent('scale-icon-weather-cloudy');
const ScaleIconWeatherCloudyRain = /*@__PURE__*/ createReactComponent('scale-icon-weather-cloudy-rain');
const ScaleIconWeatherCloudySleet = /*@__PURE__*/ createReactComponent('scale-icon-weather-cloudy-sleet');
const ScaleIconWeatherCloudySnow = /*@__PURE__*/ createReactComponent('scale-icon-weather-cloudy-snow');
const ScaleIconWeatherCloudyThunderRain = /*@__PURE__*/ createReactComponent('scale-icon-weather-cloudy-thunder-rain');
const ScaleIconWeatherCloudyThunderSnow = /*@__PURE__*/ createReactComponent('scale-icon-weather-cloudy-thunder-snow');
const ScaleIconWeatherHeavySleet = /*@__PURE__*/ createReactComponent('scale-icon-weather-heavy-sleet');
const ScaleIconWeatherHeavySnow = /*@__PURE__*/ createReactComponent('scale-icon-weather-heavy-snow');
const ScaleIconWeatherMoonClear = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-clear');
const ScaleIconWeatherMoonCloudyA = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-cloudy-a');
const ScaleIconWeatherMoonCloudyB = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-cloudy-b');
const ScaleIconWeatherMoonRain = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-rain');
const ScaleIconWeatherMoonSleet = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-sleet');
const ScaleIconWeatherMoonSnow = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-snow');
const ScaleIconWeatherMoonThunderRain = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-thunder-rain');
const ScaleIconWeatherMoonThunderSnow = /*@__PURE__*/ createReactComponent('scale-icon-weather-moon-thunder-snow');
const ScaleIconWeatherOvercast = /*@__PURE__*/ createReactComponent('scale-icon-weather-overcast');
const ScaleIconWeatherRain = /*@__PURE__*/ createReactComponent('scale-icon-weather-rain');
const ScaleIconWeatherSunny = /*@__PURE__*/ createReactComponent('scale-icon-weather-sunny');
const ScaleIconWeatherThunderRain = /*@__PURE__*/ createReactComponent('scale-icon-weather-thunder-rain');
const ScaleIconWeatherThunderSnow = /*@__PURE__*/ createReactComponent('scale-icon-weather-thunder-snow');
const ScaleInput = /*@__PURE__*/ createReactComponent('scale-input');
const ScaleLink = /*@__PURE__*/ createReactComponent('scale-link');
const ScaleList = /*@__PURE__*/ createReactComponent('scale-list');
const ScaleListItem = /*@__PURE__*/ createReactComponent('scale-list-item');
const ScaleLoadingSpinner = /*@__PURE__*/ createReactComponent('scale-loading-spinner');
const ScaleLogo = /*@__PURE__*/ createReactComponent('scale-logo');
const ScaleLogoSvg = /*@__PURE__*/ createReactComponent('scale-logo-svg');
const ScaleMenuFlyout = /*@__PURE__*/ createReactComponent('scale-menu-flyout');
const ScaleMenuFlyoutDivider = /*@__PURE__*/ createReactComponent('scale-menu-flyout-divider');
const ScaleMenuFlyoutItem = /*@__PURE__*/ createReactComponent('scale-menu-flyout-item');
const ScaleMenuFlyoutList = /*@__PURE__*/ createReactComponent('scale-menu-flyout-list');
const ScaleModal = /*@__PURE__*/ createReactComponent('scale-modal');
const ScaleNavIcon = /*@__PURE__*/ createReactComponent('scale-nav-icon');
const ScaleNavMain = /*@__PURE__*/ createReactComponent('scale-nav-main');
const ScaleNavSegment = /*@__PURE__*/ createReactComponent('scale-nav-segment');
const ScaleNotification = /*@__PURE__*/ createReactComponent('scale-notification');
const ScaleNotificationBadge = /*@__PURE__*/ createReactComponent('scale-notification-badge');
const ScaleNotificationBanner = /*@__PURE__*/ createReactComponent('scale-notification-banner');
const ScaleNotificationMessage = /*@__PURE__*/ createReactComponent('scale-notification-message');
const ScaleNotificationToast = /*@__PURE__*/ createReactComponent('scale-notification-toast');
const ScalePagination = /*@__PURE__*/ createReactComponent('scale-pagination');
const ScaleProgressBar = /*@__PURE__*/ createReactComponent('scale-progress-bar');
const ScaleRadioButton = /*@__PURE__*/ createReactComponent('scale-radio-button');
const ScaleRadioButtonGroup = /*@__PURE__*/ createReactComponent('scale-radio-button-group');
const ScaleRatingStars = /*@__PURE__*/ createReactComponent('scale-rating-stars');
const ScaleSegment = /*@__PURE__*/ createReactComponent('scale-segment');
const ScaleSegmentedButton = /*@__PURE__*/ createReactComponent('scale-segmented-button');
const ScaleSidebarNav = /*@__PURE__*/ createReactComponent('scale-sidebar-nav');
const ScaleSidebarNavCollapsible = /*@__PURE__*/ createReactComponent('scale-sidebar-nav-collapsible');
const ScaleSidebarNavItem = /*@__PURE__*/ createReactComponent('scale-sidebar-nav-item');
const ScaleSlider = /*@__PURE__*/ createReactComponent('scale-slider');
const ScaleSsrSlotFix = /*@__PURE__*/ createReactComponent('scale-ssr-slot-fix');
const ScaleSwitch = /*@__PURE__*/ createReactComponent('scale-switch');
const ScaleTabHeader = /*@__PURE__*/ createReactComponent('scale-tab-header');
const ScaleTabNav = /*@__PURE__*/ createReactComponent('scale-tab-nav');
const ScaleTabPanel = /*@__PURE__*/ createReactComponent('scale-tab-panel');
const ScaleTable = /*@__PURE__*/ createReactComponent('scale-table');
const ScaleTag = /*@__PURE__*/ createReactComponent('scale-tag');
const ScaleTelekomAppShell = /*@__PURE__*/ createReactComponent('scale-telekom-app-shell');
const ScaleTelekomFooter = /*@__PURE__*/ createReactComponent('scale-telekom-footer');
const ScaleTelekomFooterContent = /*@__PURE__*/ createReactComponent('scale-telekom-footer-content');
const ScaleTelekomFooterDataBackCompat = /*@__PURE__*/ createReactComponent('scale-telekom-footer-data-back-compat');
const ScaleTelekomFooterExtendedNavigation = /*@__PURE__*/ createReactComponent('scale-telekom-footer-extended-navigation');
const ScaleTelekomFooterExtendedNavigationColumn = /*@__PURE__*/ createReactComponent('scale-telekom-footer-extended-navigation-column');
const ScaleTelekomHeader = /*@__PURE__*/ createReactComponent('scale-telekom-header');
const ScaleTelekomHeaderDataBackCompat = /*@__PURE__*/ createReactComponent('scale-telekom-header-data-back-compat');
const ScaleTelekomMegaMenu = /*@__PURE__*/ createReactComponent('scale-telekom-mega-menu');
const ScaleTelekomMegaMenuColumn = /*@__PURE__*/ createReactComponent('scale-telekom-mega-menu-column');
const ScaleTelekomMobileFlyoutCanvas = /*@__PURE__*/ createReactComponent('scale-telekom-mobile-flyout-canvas');
const ScaleTelekomMobileMenu = /*@__PURE__*/ createReactComponent('scale-telekom-mobile-menu');
const ScaleTelekomMobileMenuItem = /*@__PURE__*/ createReactComponent('scale-telekom-mobile-menu-item');
const ScaleTelekomNavFlyout = /*@__PURE__*/ createReactComponent('scale-telekom-nav-flyout');
const ScaleTelekomNavItem = /*@__PURE__*/ createReactComponent('scale-telekom-nav-item');
const ScaleTelekomNavList = /*@__PURE__*/ createReactComponent('scale-telekom-nav-list');
const ScaleTextField = /*@__PURE__*/ createReactComponent('scale-text-field');
const ScaleTextarea = /*@__PURE__*/ createReactComponent('scale-textarea');
const ScaleToast = /*@__PURE__*/ createReactComponent('scale-toast');
const ScaleToggleButton = /*@__PURE__*/ createReactComponent('scale-toggle-button');
const ScaleToggleGroup = /*@__PURE__*/ createReactComponent('scale-toggle-group');
const ScaleTooltip = /*@__PURE__*/ createReactComponent('scale-tooltip');

export { AppLogo, AppMegaMenu, AppNavigationMainMobile, AppNavigationSectorMobile, AppNavigationUserMenu, ScaleAccordion, ScaleAlert, ScaleAppFooter, ScaleAppHeader, ScaleAppShell, ScaleBadge, ScaleBreadcrumb, ScaleButton, ScaleCallout, ScaleCard, ScaleCarousel, ScaleChartStackCard, ScaleCheckbox, ScaleCheckboxGroup, ScaleChip, ScaleCollapsible, ScaleDataGrid, ScaleDatePicker, ScaleDivider, ScaleDropdown, ScaleDropdownSelect, ScaleDropdownSelectItem, ScaleGrid, ScaleGridItem, ScaleHelperText, ScaleIcon, ScaleIconActionAdd, ScaleIconActionAddCard, ScaleIconActionArrange, ScaleIconActionArrowDown, ScaleIconActionArrowLeft, ScaleIconActionArrowRight, ScaleIconActionArrowUp, ScaleIconActionAutoLogin, ScaleIconActionBackspace, ScaleIconActionBackward, ScaleIconActionChangelog, ScaleIconActionCheckmark, ScaleIconActionCircleAdd, ScaleIconActionCircleClose, ScaleIconActionClose, ScaleIconActionCompare, ScaleIconActionCopyPaste, ScaleIconActionCutPaste, ScaleIconActionDisabledMicrophone, ScaleIconActionDownload, ScaleIconActionDownloadFromCloud, ScaleIconActionDragAndDrop, ScaleIconActionEdit, ScaleIconActionExport, ScaleIconActionFastForward, ScaleIconActionFastForwardNb, ScaleIconActionFavorite, ScaleIconActionFilter, ScaleIconActionFilter2, ScaleIconActionForward, ScaleIconActionFullScreen, ScaleIconActionHidePassword, ScaleIconActionImport, ScaleIconActionInstall, ScaleIconActionLaunch, ScaleIconActionLightDarkMode, ScaleIconActionLink, ScaleIconActionLogout, ScaleIconActionLoop, ScaleIconActionMenu, ScaleIconActionMicrophone, ScaleIconActionMinimizeScreen, ScaleIconActionMinus, ScaleIconActionMinusCircle, ScaleIconActionMore, ScaleIconActionMove, ScaleIconActionMute, ScaleIconActionNotification, ScaleIconActionPause, ScaleIconActionPauseNb, ScaleIconActionPin, ScaleIconActionPlay, ScaleIconActionPlayNb, ScaleIconActionPopUpWindow, ScaleIconActionPower, ScaleIconActionPreviousNb, ScaleIconActionPrint, ScaleIconActionPublish, ScaleIconActionRandom, ScaleIconActionRecordNb, ScaleIconActionRefresh, ScaleIconActionRemove, ScaleIconActionReply, ScaleIconActionReplyAll, ScaleIconActionReplyForward, ScaleIconActionRestart, ScaleIconActionSearch, ScaleIconActionSend, ScaleIconActionShare, ScaleIconActionShoppingCart, ScaleIconActionShowPassword, ScaleIconActionSort, ScaleIconActionSoundOn, ScaleIconActionStar, ScaleIconActionStreamOn, ScaleIconActionSuccess, ScaleIconActionThumbsDown, ScaleIconActionThumbsUp, ScaleIconActionTilesAdd, ScaleIconActionUpload, ScaleIconActionUploadToCloud, ScaleIconActionVolumeDown, ScaleIconActionVolumeUp, ScaleIconActionZoomIn, ScaleIconActionZoomOut, ScaleIconAlertAntivirusProtection, ScaleIconAlertCompliance, ScaleIconAlertCyberSecurity, ScaleIconAlertError, ScaleIconAlertHelp, ScaleIconAlertHighPriorityEmail, ScaleIconAlertImprintDataprivacy, ScaleIconAlertInformation, ScaleIconAlertLegal, ScaleIconAlertNetworkDisrupted, ScaleIconAlertPasswordBreaking, ScaleIconAlertSecurity, ScaleIconAlertTrafficDisruption, ScaleIconAlertUnknown, ScaleIconAlertWarning, ScaleIconCommunicationAvailable, ScaleIconCommunicationBlog, ScaleIconCommunicationCallIncoming, ScaleIconCommunicationCallOutgoing, ScaleIconCommunicationChat, ScaleIconCommunicationChatBadge, ScaleIconCommunicationEmail, ScaleIconCommunicationEndCall, ScaleIconCommunicationFeedback, ScaleIconCommunicationFlightMode, ScaleIconCommunicationHappyPerson, ScaleIconCommunicationInbox, ScaleIconCommunicationLandingMobileContactClient, ScaleIconCommunicationLoyaltyEarned, ScaleIconCommunicationLoyaltyLost, ScaleIconCommunicationMailOpened, ScaleIconCommunicationMessage, ScaleIconCommunicationMessageIncoming, ScaleIconCommunicationMessageOutgoing, ScaleIconCommunicationMmsIncoming, ScaleIconCommunicationMmsOutgoing, ScaleIconCommunicationMobilePhoneNumber, ScaleIconCommunicationNetworkSignal, ScaleIconCommunicationNewEmail, ScaleIconCommunicationOutbox, ScaleIconCommunicationPhoneNumber, ScaleIconCommunicationRecipient, ScaleIconCommunicationSaveEmailsToDrafts, ScaleIconCommunicationSms, ScaleIconCommunicationSpam, ScaleIconCommunicationVoiceMessage, ScaleIconContent2faGoogleAuth, ScaleIconContentAchievement, ScaleIconContentAndroid, ScaleIconContentApple, ScaleIconContentApplications, ScaleIconContentAvailableKeychain, ScaleIconContentBank, ScaleIconContentBiometric, ScaleIconContentBirthday, ScaleIconContentBookmark, ScaleIconContentCalendar, ScaleIconContentClipboard, ScaleIconContentClock, ScaleIconContentCloudSecurity, ScaleIconContentCodeScanner, ScaleIconContentColorSelection, ScaleIconContentCountry, ScaleIconContentCreditCard, ScaleIconContentDataVisualisation, ScaleIconContentDelivery, ScaleIconContentDigitalBanking, ScaleIconContentDigitalMedia, ScaleIconContentDiscount, ScaleIconContentESim, ScaleIconContentEu, ScaleIconContentFaceMask, ScaleIconContentFeatures, ScaleIconContentFlexibleTariffs, ScaleIconContentFolder, ScaleIconContentFood, ScaleIconContentGenderDiverse, ScaleIconContentGenderFemale, ScaleIconContentGenderMale, ScaleIconContentHalfRating, ScaleIconContentHeart, ScaleIconContentHeight, ScaleIconContentHistory, ScaleIconContentHourGlass, ScaleIconContentIban, ScaleIconContentId, ScaleIconContentInStock, ScaleIconContentInternational, ScaleIconContentInternationalSms, ScaleIconContentInterview, ScaleIconContentKey, ScaleIconContentLanguage, ScaleIconContentLock, ScaleIconContentLoyalty, ScaleIconContentMediaFolder, ScaleIconContentMoneyAt, ScaleIconContentMusic, ScaleIconContentNews, ScaleIconContentOutOfStock, ScaleIconContentPersonWalking, ScaleIconContentPrepaidActivate, ScaleIconContentPriceTag, ScaleIconContentRatings, ScaleIconContentRoute, ScaleIconContentRss, ScaleIconContentShop, ScaleIconContentSignal, ScaleIconContentSimCard, ScaleIconContentSmile, ScaleIconContentSortIndicatorDown, ScaleIconContentSortIndicatorMiniDown, ScaleIconContentSortIndicatorUp, ScaleIconContentSortIndicatorUpMini, ScaleIconContentStatusInactive, ScaleIconContentStatusRecurring, ScaleIconContentStopwatch, ScaleIconContentSupportChat, ScaleIconContentSustainable, ScaleIconContentTariffs, ScaleIconContentThreats, ScaleIconContentTodoList, ScaleIconContentTransport, ScaleIconContentUnlock, ScaleIconContentVoucher, ScaleIconContentWaiting, ScaleIconContentWallet, ScaleIconDeviceAddDevice, ScaleIconDeviceCamera, ScaleIconDeviceChangeCamera, ScaleIconDeviceComputer, ScaleIconDeviceDeviceController, ScaleIconDeviceDeviceEthernet, ScaleIconDeviceDeviceMesh, ScaleIconDeviceDevicePhone, ScaleIconDeviceDeviceRouter, ScaleIconDeviceDeviceTv, ScaleIconDeviceDeviceWatch, ScaleIconDeviceDongle, ScaleIconDeviceFax, ScaleIconDeviceFixedLineServices, ScaleIconDeviceGameController, ScaleIconDeviceMediaReceiver, ScaleIconDeviceMobileData, ScaleIconDeviceMobileDevicesCombination, ScaleIconDeviceMobileEquipment, ScaleIconDeviceMobilePhoneInsurance, ScaleIconDeviceMobileServices, ScaleIconDeviceNoCamera, ScaleIconDevicePhoneWithMobilePlan, ScaleIconDevicePhoneWithoutMobilePlan, ScaleIconDevicePhotoCamera, ScaleIconDeviceRemoteController, ScaleIconDeviceReplacementMobilephone, ScaleIconDeviceScreenRotate, ScaleIconDeviceServer, ScaleIconDeviceSmartSpeaker, ScaleIconDeviceTablet, ScaleIconDeviceTvAndMobile, ScaleIconDeviceTwitchingClosedState, ScaleIconDeviceTwitchingOpenState, ScaleIconHomeHome, ScaleIconHomeInternetAtHome, ScaleIconHomeIot, ScaleIconHomeLightBulb, ScaleIconHomeNetworkSecure, ScaleIconHomeNoWifi, ScaleIconHomePowerSocket, ScaleIconHomePreferredWifi, ScaleIconHomeReducedWifi, ScaleIconHomeSlowWifi, ScaleIconHomeSmarthome, ScaleIconHomeUnableToConnectToRouter, ScaleIconHomeWifi, ScaleIconHomeWifiConnected, ScaleIconHomeWifiConnectionError, ScaleIconHomeWifiManualLogin, ScaleIconHomeWifiNoWiredInternet, ScaleIconNavigationCircleTopUp, ScaleIconNavigationCollapseDown, ScaleIconNavigationCollapseUp, ScaleIconNavigationDoubleLeft, ScaleIconNavigationDoubleRight, ScaleIconNavigationExternalLink, ScaleIconNavigationInternalLink, ScaleIconNavigationLeft, ScaleIconNavigationLeftCondensed, ScaleIconNavigationLocation, ScaleIconNavigationMap, ScaleIconNavigationMyLocation, ScaleIconNavigationRight, ScaleIconNavigationRightCondensed, ScaleIconNavigationStart, ScaleIconNavigationTopUp, ScaleIconProcessOrderStatus, ScaleIconProcessProcessing, ScaleIconProcessSepaTransaction, ScaleIconServiceDevicesService, ScaleIconServiceMaintanance, ScaleIconServiceManual, ScaleIconServiceOneTimePassword, ScaleIconServiceServices, ScaleIconServiceSettings, ScaleIconServiceSupport, ScaleIconServiceVpn, ScaleIconTProduct2faTelekomApp, ScaleIconTProductMagentaCloud, ScaleIconTProductMagentaTv, ScaleIconTProductMagentaone, ScaleIconTProductMeasureInternetSpeed, ScaleIconTProductSeamlessConnectivity, ScaleIconTProductTelekom1t1, ScaleIconTProductTelekomPlan, ScaleIconTProductTelekomShopB, ScaleIconTProductUsage, ScaleIconTProductVoice, ScaleIconUserFileAdmin, ScaleIconUserFileAnalytics, ScaleIconUserFileAttachment, ScaleIconUserFileAudioFile, ScaleIconUserFileBilling, ScaleIconUserFileBoy, ScaleIconUserFileBussinesUsers, ScaleIconUserFileCommunities, ScaleIconUserFileContacts, ScaleIconUserFileContactsFromCloud, ScaleIconUserFileContracts, ScaleIconUserFileDraftFile, ScaleIconUserFileFamilies, ScaleIconUserFileFamily, ScaleIconUserFileFile, ScaleIconUserFileFileCollection, ScaleIconUserFileGirl, ScaleIconUserFileHandshake, ScaleIconUserFileHtmlFile, ScaleIconUserFileIdCard, ScaleIconUserFileImageFile, ScaleIconUserFileLogout, ScaleIconUserFileMan, ScaleIconUserFilePdfFile, ScaleIconUserFileSwitchUsers, ScaleIconUserFileUser, ScaleIconUserFileVideos, ScaleIconUserFileWoman, ScaleIconWeatherCloudy, ScaleIconWeatherCloudyRain, ScaleIconWeatherCloudySleet, ScaleIconWeatherCloudySnow, ScaleIconWeatherCloudyThunderRain, ScaleIconWeatherCloudyThunderSnow, ScaleIconWeatherHeavySleet, ScaleIconWeatherHeavySnow, ScaleIconWeatherMoonClear, ScaleIconWeatherMoonCloudyA, ScaleIconWeatherMoonCloudyB, ScaleIconWeatherMoonRain, ScaleIconWeatherMoonSleet, ScaleIconWeatherMoonSnow, ScaleIconWeatherMoonThunderRain, ScaleIconWeatherMoonThunderSnow, ScaleIconWeatherOvercast, ScaleIconWeatherRain, ScaleIconWeatherSunny, ScaleIconWeatherThunderRain, ScaleIconWeatherThunderSnow, ScaleInput, ScaleLink, ScaleList, ScaleListItem, ScaleLoadingSpinner, ScaleLogo, ScaleLogoSvg, ScaleMenuFlyout, ScaleMenuFlyoutDivider, ScaleMenuFlyoutItem, ScaleMenuFlyoutList, ScaleModal, ScaleNavIcon, ScaleNavMain, ScaleNavSegment, ScaleNotification, ScaleNotificationBadge, ScaleNotificationBanner, ScaleNotificationMessage, ScaleNotificationToast, ScalePagination, ScaleProgressBar, ScaleRadioButton, ScaleRadioButtonGroup, ScaleRatingStars, ScaleSegment, ScaleSegmentedButton, ScaleSidebarNav, ScaleSidebarNavCollapsible, ScaleSidebarNavItem, ScaleSlider, ScaleSsrSlotFix, ScaleSwitch, ScaleTabHeader, ScaleTabNav, ScaleTabPanel, ScaleTable, ScaleTag, ScaleTelekomAppShell, ScaleTelekomFooter, ScaleTelekomFooterContent, ScaleTelekomFooterDataBackCompat, ScaleTelekomFooterExtendedNavigation, ScaleTelekomFooterExtendedNavigationColumn, ScaleTelekomHeader, ScaleTelekomHeaderDataBackCompat, ScaleTelekomMegaMenu, ScaleTelekomMegaMenuColumn, ScaleTelekomMobileFlyoutCanvas, ScaleTelekomMobileMenu, ScaleTelekomMobileMenuItem, ScaleTelekomNavFlyout, ScaleTelekomNavItem, ScaleTelekomNavList, ScaleTextField, ScaleTextarea, ScaleToast, ScaleToggleButton, ScaleToggleGroup, ScaleTooltip };
//# sourceMappingURL=index.es.js.map
