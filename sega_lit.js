import 'https://unpkg.com/@polymer/polymer@^3.0.0/polymer-legacy.js?module';

import 'https://unpkg.com/@polymer/iron-media-query/iron-media-query.js?module';
import 'https://unpkg.com/@polymer/iron-selector/iron-selector.js?module';

import {IronResizableBehavior} from 'https://unpkg.com/@polymer/iron-resizable-behavior/iron-resizable-behavior.js?module';
import {Polymer} from 'https://unpkg.com/@polymer/polymer/lib/legacy/polymer-fn.js?module';
import {dom} from 'https://unpkg.com/@polymer/polymer/lib/legacy/polymer.dom.js?module';
import {html} from 'https://unpkg.com/@polymer/polymer@^3.0.0/lib/utils/html-tag.js?module';
const segaSheet = new CSSStyleSheet();
segaSheet.replace(`
:root,[data-theme="light"] {
    --md-sys-color-background: #fbf8ff;
    --md-sys-color-on-background: #1a1b24;
    --md-sys-color-surface: #fbf8ff;
    --md-sys-color-surface-dim: #dad9e5;
    --md-sys-color-surface-bright: #fbf8ff;
    --md-sys-color-surface-container-lowest: #ffffff;
    --md-sys-color-surface-container-low: #f4f2ff;
    --md-sys-color-surface-container: #eeecf9;
    --md-sys-color-surface-container-high: #e9e7f4;
    --md-sys-color-surface-container-highest: #e3e1ee;
    --md-sys-color-on-surface: #1a1b24;
    --md-sys-color-surface-variant: #e2e1f4;
    --md-sys-color-on-surface-variant: #454655;
    --md-sys-color-inverse-surface: #2f3039;
    --md-sys-color-inverse-on-surface: #f1effc;
    --md-sys-color-outline: #757687;
    --md-sys-color-outline-variant: #c5c5d8;
    --md-sys-color-shadow: #000000;
    --md-sys-color-scrim: #000000;
    --md-sys-color-surface-tint: #3a49e4;
    --md-sys-color-primary: #0011a7;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-primary-container: #2d3dda;
    --md-sys-color-on-primary-container: #f9f6ff;
    --md-sys-color-inverse-primary: #bdc2ff;
    --md-sys-color-secondary: #52599b;
    --md-sys-color-on-secondary: #ffffff;
    --md-sys-color-secondary-container: #babfff;
    --md-sys-color-on-secondary-container: #272d6e;
    --md-sys-color-tertiary: #59006b;
    --md-sys-color-on-tertiary: #ffffff;
    --md-sys-color-tertiary-container: #891fa0;
    --md-sys-color-on-tertiary-container: #fff4fb;
    --md-sys-color-error: #ba1a1a;
    --md-sys-color-on-error: #ffffff;
    --md-sys-color-error-container: #ffdad6;
    --md-sys-color-on-error-container: #410002;
}

[data-theme="dark"] {
    --md-sys-color-background: #12131b;
    --md-sys-color-on-background: #e3e1ee;
    --md-sys-color-surface: #12131b;
    --md-sys-color-surface-dim: #12131b;
    --md-sys-color-surface-bright: #383842;
    --md-sys-color-surface-container-lowest: #0d0e16;
    --md-sys-color-surface-container-low: #1a1b24;
    --md-sys-color-surface-container: #1e1f28;
    --md-sys-color-surface-container-high: #292933;
    --md-sys-color-surface-container-highest: #34343e;
    --md-sys-color-on-surface: #e3e1ee;
    --md-sys-color-surface-variant: #454655;
    --md-sys-color-on-surface-variant: #c5c5d8;
    --md-sys-color-inverse-surface: #e3e1ee;
    --md-sys-color-inverse-on-surface: #2f3039;
    --md-sys-color-outline: #8f8fa1;
    --md-sys-color-outline-variant: #454655;
    --md-sys-color-shadow: #000000;
    --md-sys-color-scrim: #000000;
    --md-sys-color-surface-tint: #bdc2ff;
    --md-sys-color-primary: #bdc2ff;
    --md-sys-color-on-primary: #0010a2;
    --md-sys-color-primary-container: #0016c4;
    --md-sys-color-on-primary-container: #c8ccff;
    --md-sys-color-inverse-primary: #3a49e4;
    --md-sys-color-secondary: #bdc2ff;
    --md-sys-color-on-secondary: #23296a;
    --md-sys-color-secondary-container: #33397a;
    --md-sys-color-on-secondary-container: #cfd1ff;
    --md-sys-color-tertiary: #f6adff;
    --md-sys-color-on-tertiary: #560068;
    --md-sys-color-tertiary-container: #6b0080;
    --md-sys-color-on-tertiary-container: #f9bcff;
    --md-sys-color-error: #ffb4ab;
    --md-sys-color-on-error: #690005;
    --md-sys-color-error-container: #93000a;
    --md-sys-color-on-error-container: #ffdad6;
}

@layer theme {
    :host,:root {
        --font-sans: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --font-mono: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
        --color-amber-50: oklch(98.7% .022 95.277);
        --color-amber-200: oklch(92.4% .12 95.746);
        --color-amber-300: oklch(87.9% .169 91.605);
        --color-amber-700: oklch(55.5% .163 48.998);
        --color-amber-800: oklch(47.3% .137 46.201);
        --color-slate-600: oklch(44.6% .043 257.281);
        --color-slate-800: oklch(27.9% .041 260.031);
        --color-black: #000;
        --color-white: #fff;
        --spacing: 1px;
        --breakpoint-xl: 2560px;
        --text-xs: .75rem;
        --text-xs--line-height: calc(1 / .75);
        --text-sm: .875rem;
        --text-sm--line-height: calc(1.25 / .875);
        --font-weight-normal: 400;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --font-weight-extrabold: 800;
        --font-weight-black: 900;
        --radius-xs: .25rem;
        --radius-lg: .5rem;
        --radius-xl: 1rem;
        --ease-in-out: cubic-bezier(.4,0,.2,1);
        --animate-spin: spin 1s linear infinite;
        --blur-xs: 4px;
        --blur-xl: 32px;
        --aspect-video: 16/9;
        --default-transition-duration: .15s;
        --default-transition-timing-function: cubic-bezier(.4,0,.2,1);
        --default-font-family: var(--font-sans);
        --default-mono-font-family: var(--font-mono);
        --breakpoint-xxs: 640px;
        --breakpoint-xs: 960px;
        --breakpoint-s: 1280px;
        --breakpoint-m: 1600px;
        --breakpoint-l: 1920px;
        --breakpoint-xxl: 3840px;
        --spacing-0: 0;
        --spacing-1: .0625rem;
        --spacing-2: .125rem;
        --spacing-3: .1875rem;
        --spacing-4: .25rem;
        --spacing-5: .3125rem;
        --spacing-6: .375rem;
        --spacing-7: .4375rem;
        --spacing-8: .5rem;
        --spacing-9: .5625rem;
        --spacing-10: .625rem;
        --spacing-11: .6875rem;
        --spacing-12: .75rem;
        --spacing-13: .8125rem;
        --spacing-14: .875rem;
        --spacing-15: .9375rem;
        --spacing-16: 1rem;
        --spacing-17: 1.0625rem;
        --spacing-18: 1.125rem;
        --spacing-19: 1.1875rem;
        --spacing-20: 1.25rem;
        --spacing-21: 1.3125rem;
        --spacing-22: 1.375rem;
        --spacing-23: 1.4375rem;
        --spacing-24: 1.5rem;
        --spacing-25: 1.5625rem;
        --spacing-26: 1.625rem;
        --spacing-27: 1.6875rem;
        --spacing-28: 1.75rem;
        --spacing-29: 1.8125rem;
        --spacing-30: 1.875rem;
        --spacing-31: 1.9375rem;
        --spacing-32: 2rem;
        --spacing-33: 2.0625rem;
        --spacing-34: 2.125rem;
        --spacing-35: 2.1875rem;
        --spacing-36: 2.25rem;
        --spacing-37: 2.3125rem;
        --spacing-38: 2.375rem;
        --spacing-39: 2.4375rem;
        --spacing-40: 2.5rem;
        --spacing-41: 2.5625rem;
        --spacing-42: 2.625rem;
        --spacing-43: 2.6875rem;
        --spacing-44: 2.75rem;
        --spacing-45: 2.8125rem;
        --spacing-46: 2.875rem;
        --spacing-47: 2.9375rem;
        --spacing-48: 3rem;
        --spacing-49: 3.0625rem;
        --spacing-50: 3.125rem;
        --spacing-51: 3.1875rem;
        --spacing-52: 3.25rem;
        --spacing-53: 3.3125rem;
        --spacing-54: 3.375rem;
        --spacing-55: 3.4375rem;
        --spacing-56: 3.5rem;
        --spacing-57: 3.5625rem;
        --spacing-58: 3.625rem;
        --spacing-59: 3.6875rem;
        --spacing-60: 3.75rem;
        --spacing-61: 3.8125rem;
        --spacing-62: 3.875rem;
        --spacing-63: 3.9375rem;
        --spacing-64: 4rem;
        --spacing-65: 4.0625rem;
        --spacing-66: 4.125rem;
        --spacing-67: 4.1875rem;
        --spacing-68: 4.25rem;
        --spacing-69: 4.3125rem;
        --spacing-70: 4.375rem;
        --spacing-71: 4.4375rem;
        --spacing-72: 4.5rem;
        --spacing-73: 4.5625rem;
        --spacing-74: 4.625rem;
        --spacing-75: 4.6875rem;
        --spacing-76: 4.75rem;
        --spacing-77: 4.8125rem;
        --spacing-78: 4.875rem;
        --spacing-79: 4.9375rem;
        --spacing-80: 5rem;
        --spacing-81: 5.0625rem;
        --spacing-82: 5.125rem;
        --spacing-83: 5.1875rem;
        --spacing-84: 5.25rem;
        --spacing-85: 5.3125rem;
        --spacing-86: 5.375rem;
        --spacing-87: 5.4375rem;
        --spacing-88: 5.5rem;
        --spacing-89: 5.5625rem;
        --spacing-90: 5.625rem;
        --spacing-91: 5.6875rem;
        --spacing-92: 5.75rem;
        --spacing-93: 5.8125rem;
        --spacing-94: 5.875rem;
        --spacing-95: 5.9375rem;
        --spacing-96: 6rem;
        --radius-none: 0px;
        --radius-xxs: .125rem;
        --radius-s: .375rem;
        --radius-m: .5rem;
        --radius-l: .75rem;
        --radius-xxl: 1.25rem;
        --radius-full: 9999px;
        --text-12: .75rem;
        --text-12--line-height: 1.5;
        --text-14: .875rem;
        --text-14--line-height: 1.5;
        --text-16: 1rem;
        --text-16--line-height: 1.5;
        --text-18: 1.125rem;
        --text-18--line-height: 1.5;
        --text-20: 1.25rem;
        --text-20--line-height: 1.5;
        --text-22: 1.375rem;
        --text-22--line-height: 1.5;
        --text-24: 1.5rem;
        --text-24--line-height: 1.5;
        --text-26: 1.625rem;
        --text-26--line-height: 1.25;
        --text-28: 1.75rem;
        --text-28--line-height: 1.25;
        --text-30: 1.875rem;
        --text-30--line-height: 1.25;
        --text-32: 2rem;
        --text-32--line-height: 1.25;
        --text-40: 2.5rem;
        --text-40--line-height: 1.125;
        --text-44: 2.75rem;
        --text-44--line-height: 1.125;
        --text-48: 3rem;
        --text-48--line-height: 1.125;
        --text-64: 4rem;
        --text-64--line-height: 1;
        --leading-xxs: 1;
        --tracking-l: .025em;
        --tracking-xxl: .1em;
        --line-clamp-none: unset;
        --line-clamp-1: 1;
        --line-clamp-2: 2;
        --line-clamp-3: 3;
        --line-clamp-4: 4;
        --line-clamp-5: 5;
        --line-clamp-6: 6;
        --blur-xxs: 2px;
        --blur-s: 8px;
        --blur-m: 16px;
        --blur-l: 24px;
        --blur-xxl: 64px;
        --container-width-sthbl: 90%;
        --container-width-max-sthbl: 2560px;
        --font-sthbl-default: Montserrat,sans-serif;
        --font-sthbl-headings: Montserrat,sans-serif;
        --color-sthbl-primary-0: #005dfc;
        --color-sthbl-primary-800: #002666;
        --color-sthbl-tertiary-0: #f6d307;
        --color-sthbl-quaternary-0: #fe3434;
        --color-sthbl-quinary-800: #243042;
        --color-sthbl-quinary-900: #121821;
        --color-sthbl-dark-0: #002366;
        --color-sthbl-gray-0: #4b5563;
        --color-sthbl-gray-400: #8b97a7;
        --color-sthbl-gray-700: #424b57;
        --container-width-lad-0: 90%;
        --container-width-max-lad-0: 2560px;
        --font-lad-0-default: Inter Tight,sans-serif;
        --font-lad-0-headings: mr-eaves-modern,sans-serif;
        --color-lad-0-primary-0: #fff9b1;
        --color-lad-0-primary-300: #fff366;
        --color-lad-0-primary-700: #998d00;
        --color-lad-0-primary-800: #665e00;
        --color-lad-0-light-0: #fff;
        --color-lad-0-dark-0: #291a00;
        --color-lad-0-gray-700: #414258;
        --container-width-pp: 90%;
        --container-width-max-pp: 2560px;
        --font-pp-default: Poppins,sans-serif;
        --font-pp-headings: Inter Tight,sans-serif;
        --color-pp-primary-0: #fcfbe6;
        --color-pp-primary-700: #898310;
        --color-pp-primary-800: #5b570b;
        --color-pp-quaternary-0: #e5177c;
        --color-pp-quaternary-800: #5d0932;
        --color-pp-light-0: #fff;
        --color-pp-dark-0: #15295c;
        --color-pp-dark-400: #597dd9;
        --color-pp-dark-700: #1c387d;
        --color-pp-gray-700: #374362;
        --container-width-per5: 90%;
        --container-width-max-per5: 2560px;
        --font-per5-default: District Pro,sans-serif;
        --font-per5-headings: District Pro,sans-serif;
        --color-per5-primary-0: red;
        --color-per5-primary-800: #600;
        --color-per5-secondary-0: #d1976b;
        --color-per5-tertiary-0: #f8de94;
        --color-per5-light-0: #fff;
        --color-per5-dark-0: #000;
        --color-per5-gray-700: #4a4d4f;
        --container-width-w4sm: 90%;
        --container-width-max-w4sm: 2560px;
        --font-w4sm-default: Neulis Sans,sans-serif;
        --font-w4sm-headings: Arpona,sans-serif;
        --color-w4sm-primary-0: #1c305c;
        --color-w4sm-primary-300: #8aa3db;
        --color-w4sm-primary-400: #6385cf;
        --color-w4sm-primary-500: #3c66c4;
        --color-w4sm-primary-600: #30529c;
        --color-w4sm-primary-800: #18294e;
        --color-w4sm-secondary-400: #f9d239;
        --color-w4sm-secondary-600: #c69f06;
        --color-w4sm-secondary-700: #957704;
        --color-w4sm-secondary-800: #635003;
        --color-w4sm-tertiary-200: #e2c4b6;
        --color-w4sm-tertiary-400: #c58a6d;
        --color-w4sm-tertiary-500: #b66c49;
        --color-w4sm-tertiary-600: #92573a;
        --color-w4sm-quaternary-200: #fcb79c;
        --color-w4sm-quaternary-400: #f96f39;
        --color-w4sm-quaternary-500: #f74c08;
        --color-w4sm-quaternary-600: #c63c06;
        --color-w4sm-quinary-0: #4166f5;
        --color-w4sm-quinary-200: #9eb1fa;
        --color-w4sm-quinary-400: #3d63f5;
        --color-w4sm-quinary-500: #0d3cf2;
        --color-w4sm-quinary-600: #0a30c2;
        --color-w4sm-light-0: #ecf8fc;
        --color-w4sm-light-100: #d3eff8;
        --color-w4sm-light-200: #a7dff1;
        --color-w4sm-light-300: #7bceea;
        --color-w4sm-light-400: #4fbee3;
        --color-w4sm-dark-600: #566b76;
        --color-w4sm-dark-700: #415058;
        --color-w4sm-dark-800: #2b363b;
        --color-w4sm-dark-900: #161b1d;
        --color-w4sm-gray-200: #c6ced2;
        --color-w4sm-gray-400: #8c9ea6;
        --color-w4sm-gray-500: #70858f;
        --color-w4sm-gray-600: #596b73;
        --color-w4sm-gray-700: #435056;
        --container-width-per4r: 90%;
        --container-width-max-per4r: 2560px;
        --font-per4r-default: neue-frutiger-world,sans-serif;
        --font-per4r-headings: neue-frutiger-world,sans-serif;
        --color-per4r-primary-0: #fff000;
        --color-per4r-primary-800: #666000;
        --color-per4r-secondary-0: #2d2d2d;
        --color-per4r-tertiary-0: #00deff;
        --color-per4r-quaternary-0: #f80;
        --color-per4r-quinary-0: #3d0000;
        --color-per4r-light-0: #f0f0f0;
        --color-per4r-dark-0: #18181b;
        --color-per4r-dark-800: #303036;
        --color-per4r-gray-0: #575757;
        --color-per4r-gray-200: #ccc;
        --color-per4r-gray-400: #999;
        --color-per4r-gray-600: #666;
        --color-per4r-gray-700: #4d4d4d;
        --color-per4r-warning-0: #ffc000;
        --container-width-ca: 90%;
        --container-width-max-ca: 2560px;
        --color-ca-primary-0: #451e5d;
        --color-ca-primary-100: #e9d8f3;
        --color-ca-primary-200: #d2b2e6;
        --color-ca-primary-600: #72329a;
        --color-ca-primary-800: #39194d;
        --color-ca-tertiary-0: #000;
        --container-width-ladyk: 90%;
        --container-width-max-ladyk: 2560px;
        --font-ladyk-default: Inter Tight,sans-serif;
        --font-ladyk-headings: Inter Tight,sans-serif;
        --color-ladyk-primary-0: #a00000;
        --color-ladyk-primary-800: #600;
        --color-ladyk-secondary-0: #e60012;
        --color-ladyk-light-0: #fafafa;
        --color-ladyk-dark-0: #18181b;
        --color-ladyk-gray-700: #404159;
        --font-fm26-default: ABCSocial Regular,sans-serif;
        --font-fm26-headings: FMUniverse,FMUniverse,sans-serif;
        --color-fm26-primary-0: #d2c8f5;
        --color-fm26-primary-600: #3f1fad;
        --color-fm26-primary-800: #1f1056;
        --color-fm26-secondary-0: #6e0fd7;
        --color-fm26-tertiary-0: #af78ff;
        --color-fm26-quaternary-0: #e6e6fa;
        --color-fm26-quinary-0: #e664ff;
        --color-fm26-dark-0: #0a0f1e;
        --color-fm26-gray-700: #2f2f6a;
        --color-fm26-danger-0: #ff4164;
        --container-width-rai: 90%;
        --container-width-max-rai: 2560px;
        --font-rai-default: minion-3,serif;
        --font-rai-headings: Warnock Pro,serif;
        --color-rai-primary-0: #fef8ea;
        --color-rai-secondary-0: #473e35;
        --color-rai-tertiary-0: #9d9386;
        --color-rai-quaternary-0: #ca4822;
        --color-rai-quinary-0: #141314;
        --color-rai-quinary-200: #cdcbcd;
        --color-rai-quinary-500: #837c83;
        --color-rai-light-0: #fff8e3;
        --color-rai-dark-0: #695956;
        --color-rai-gray-700: #524e47;
        --color-rai-warning-0: #86fc5c;
        --container-width-tww40: 90%;
        --container-width-max-tww40: 2560px;
        --font-tww40-default: Conduit ITC Pro,sans-serif;
        --font-tww40-headings: Conduit ITC Pro,sans-serif;
        --color-tww40-primary-0: #fa955d;
        --color-tww40-primary-400: #f97e39;
        --color-tww40-primary-700: #943805;
        --color-tww40-primary-800: #632503;
        --color-tww40-primary-900: #311302;
        --color-tww40-secondary-0: #c7f0d8;
        --color-tww40-secondary-700: #207945;
        --color-tww40-secondary-800: #16502e;
        --color-tww40-secondary-900: #0b2817;
        --color-tww40-tertiary-0: #31383a;
        --color-tww40-tertiary-400: #909ea2;
        --color-tww40-tertiary-900: #171b1c;
        --color-tww40-quaternary-0: #5d736d;
        --color-tww40-quaternary-300: #aabbb6;
        --color-tww40-quaternary-400: #8ea49e;
        --color-tww40-quaternary-700: #445550;
        --color-tww40-quaternary-800: #2e3835;
        --color-tww40-quaternary-900: #171c1b;
        --color-tww40-quinary-0: #97d4bc;
        --color-tww40-quinary-400: #6fc3a2;
        --color-tww40-quinary-700: #2d6c53;
        --color-tww40-quinary-800: #1e4838;
        --color-tww40-quinary-900: #0f241c;
        --color-tww40-light-0: #eae8ea;
        --color-tww40-light-100: #e7e4e7;
        --color-tww40-light-200: #cecace;
        --color-tww40-light-300: #b6afb6;
        --color-tww40-light-400: #9e949e;
        --color-tww40-dark-0: #16181d;
        --color-tww40-dark-400: #8b93a7;
        --color-tww40-dark-700: #424857;
        --color-tww40-dark-800: #2c303a;
        --color-tww40-dark-900: #16181d;
        --color-tww40-gray-0: #2a2c31;
        --color-tww40-gray-400: #9196a1;
        --color-tww40-gray-700: #474a52;
        --color-tww40-gray-800: #2f3137;
        --color-tww40-gray-900: #18191b;
        --container-width-per: 90%;
        --container-width-max-per: 2560px;
        --font-per-default: Helvetica Neue Condensed,"helvetica-neue-lt-pro-cond",sans-serif;
        --font-per-headings: Archivo,"Archivo",sans-serif;
        --color-per-primary-0: #e50012;
        --color-per-primary-800: #660008;
        --color-per-secondary-0: #bac8cf;
        --color-per-light-0: #f4fbff;
        --color-per-dark-0: #050909;
        --color-per-gray-700: #4d4d4d;
        --container-width-sthv2: 90%;
        --container-width-max-sthv2: 2560px;
        --font-sthv2-default: Poppins,sans-serif;
        --font-sthv2-headings: Inter Tight,sans-serif;
        --color-sthv2-primary-0: #091d80;
        --color-sthv2-primary-400: #405ef2;
        --color-sthv2-primary-800: #07165f;
        --color-sthv2-secondary-0: #aed7ff;
        --color-sthv2-tertiary-0: #0662f6;
        --color-sthv2-quinary-800: #002b66;
        --color-sthv2-quinary-900: #001633;
        --color-sthv2-light-0: #fff;
        --color-sthv2-dark-0: #000;
        --color-sthv2-gray-700: #4d4d4d;
        --container-width-aiw: 90%;
        --container-width-max-aiw: 2560px;
        --font-aiw-default: Helvetica LT Pro,sans-serif;
        --font-aiw-headings: Helvetica LT Pro,sans-serif;
        --color-aiw-primary-0: #0c0b0a;
        --color-aiw-primary-400: #a29990;
        --color-aiw-primary-800: #38332e;
        --color-aiw-secondary-0: #fffbe6;
        --color-aiw-tertiary-0: #749925;
        --color-aiw-quaternary-0: #b76e10;
        --color-aiw-quinary-0: #696969;
        --color-aiw-light-0: #fff;
        --color-aiw-dark-0: #0e0e0e;
        --color-aiw-gray-0: #959595;
        --color-aiw-gray-700: #4d4d4d;
        --container-width-hvn: 90%;
        --container-width-max-hvn: 2560px;
        --font-hvn-default: Futura PT,sans-serif;
        --font-hvn-headings: arteria-std-compress,sans-serif;
        --color-hvn-primary-0: #bb2f05;
        --color-hvn-primary-500: #f83e07;
        --color-hvn-primary-600: #c73205;
        --color-hvn-primary-800: #631903;
        --color-hvn-secondary-0: #dfbe31;
        --color-hvn-secondary-400: #e4c74e;
        --color-hvn-tertiary-0: #60160a;
        --color-hvn-tertiary-400: #ec5d46;
        --color-hvn-quaternary-0: #476ec2;
        --color-hvn-quaternary-400: #6686cc;
        --color-hvn-quinary-0: #242436;
        --color-hvn-quinary-200: #c2c2d6;
        --color-hvn-quinary-400: #8585ad;
        --color-hvn-quinary-500: #669;
        --color-hvn-light-0: #fff;
        --color-hvn-light-300: #b3b3b3;
        --color-hvn-dark-0: #090909;
        --color-hvn-gray-0: #343434;
        --color-hvn-gray-700: #4d4d4d;
        --container-width-per6: 90%;
        --container-width-max-per6: 2560px;
        --font-per6-default: Arial,sans-serif;
        --font-per6-headings: acumin-pro-extra-condensed,sans-serif;
        --color-per6-primary-0: #066c02;
        --color-per6-primary-800: #066402;
        --color-per6-secondary-0: #0cd805;
        --color-per6-light-0: #f2ece6;
        --color-per6-dark-0: #000;
        --color-per6-gray-0: #7f7f7f;
        --color-per6-gray-700: #4d4d4d;
        --container-width-ct: 90%;
        --container-width-max-ct: 2560px;
        --font-ct-default: ff-good-web-pro,sans-serif;
        --font-ct-headings: revolution-gothic,sans-serif;
        --color-ct-primary-0: #ffe400;
        --color-ct-primary-800: #665b00;
        --color-ct-secondary-0: #ee2223;
        --color-ct-tertiary-0: #f274de;
        --color-ct-tertiary-900: #2f0428;
        --color-ct-quaternary-0: #20b7df;
        --color-ct-quinary-0: #00c1b9;
        --color-ct-light-0: #fcfdf7;
        --color-ct-dark-0: #010101;
        --color-ct-gray-400: #999;
        --color-ct-gray-700: #4d4d4d;
        --container-width-p4old: 90%;
        --container-width-max-p4old: 2560px;
        --font-p4old-default: Gotham,"gotham",sans-serif;
        --font-p4old-headings: Utile Display,"utile-display",sans-serif;
        --color-p4old-primary-0: red;
        --color-p4old-primary-400: #f33;
        --color-p4old-primary-800: #600;
        --color-p4old-secondary-0: #ff0;
        --color-p4old-tertiary-0: #0f0;
        --color-p4old-tertiary-400: #3f3;
        --color-p4old-light-0: #fafafa;
        --color-p4old-dark-0: #18181b;
        --color-p4old-gray-0: #000;
        --color-p4old-gray-200: #ccc;
        --color-p4old-gray-400: #999;
        --color-p4old-gray-600: #666;
        --color-p4old-gray-700: #4d4d4d;
        --container-width-sxsg: 90%;
        --container-width-max-sxsg: 2560px;
        --font-sxsg-default: Poppins,sans-serif;
        --font-sxsg-headings: Inter Tight,sans-serif;
        --font-sxsg-mono: Montserrat,sans-serif;
        --color-sxsg-primary-0: #ee2c2c;
        --color-sxsg-primary-800: #5e0808;
        --color-sxsg-light-0: #fff;
        --color-sxsg-dark-0: #000;
        --color-sxsg-gray-700: #404159;
        --container-width-sth: 90%;
        --container-width-max-sth: 2560px;
        --font-sth-default: Poppins,sans-serif;
        --font-sth-headings: Inter Tight,sans-serif;
        --color-sth-primary-0: #005dfc;
        --color-sth-primary-800: #002666;
        --color-sth-secondary-0: #9cd3ff;
        --color-sth-tertiary-0: #f6d307;
        --color-sth-quinary-800: #3a0264;
        --color-sth-quinary-900: #1d0132;
        --color-sth-light-0: #fff;
        --color-sth-dark-0: #000;
        --color-sth-gray-700: #404159;
        --container-width-tw: 90%;
        --container-width-max-tw: 2560px;
        --font-tw-default: Proxima Nova,"proxima-nova",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --font-tw-headings: Proxima Nova,"proxima-nova",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --color-tw-primary-0: #ffda8a;
        --color-tw-primary-500: #ffae00;
        --color-tw-primary-800: #664600;
        --color-tw-primary-900: #332300;
        --color-tw-secondary-0: #151418;
        --color-tw-tertiary-0: #20242c;
        --color-tw-tertiary-400: #8994a9;
        --color-tw-light-0: #fff;
        --color-tw-dark-0: #000;
        --color-tw-gray-700: #3e475b;
        --container-width-tp: 90%;
        --container-width-max-tp: 2560px;
        --font-tp-default: Proxima Nova,"proxima-nova",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --font-tp-headings: Hepta Slab,"DIN_Next_Slab_Pro_Heavy",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
        --color-tp-primary-0: #99d1c6;
        --color-tp-primary-500: #4fb09d;
        --color-tp-primary-600: #3f8d7d;
        --color-tp-primary-800: #20463f;
        --color-tp-secondary-0: #1690aa;
        --color-tp-tertiary-0: #ffc32c;
        --color-tp-light-0: #ebf6fa;
        --color-tp-dark-0: #093242;
        --color-tp-gray-700: #405059;
        --container-width-ladiw: 90%;
        --container-width-max-ladiw: 2560px;
        --font-ladiw-default: Inter Tight,sans-serif;
        --font-ladiw-headings: mr-eaves-modern,sans-serif;
        --color-ladiw-primary-0: #c59b06;
        --color-ladiw-primary-300: #fadb6b;
        --color-ladiw-primary-400: #f9cf39;
        --color-ladiw-primary-800: #634e03;
        --color-ladiw-light-0: #fff;
        --color-ladiw-gray-700: #404159;
        --container-width-per3r: 90%;
        --container-width-max-per3r: 2560px;
        --font-per3r-default: Semplicita,"semplicitapro",sans-serif;
        --font-per3r-headings: IvyPresto Display,"ivypresto-display",serif;
        --color-per3r-primary-0: #0eb1f4;
        --color-per3r-primary-800: #044662;
        --color-per3r-quaternary-0: #0d0e56;
        --color-per3r-light-0: #fff;
        --color-per3r-gray-700: #4d4d4d;
        --container-width-smtv: 90%;
        --container-width-max-smtv: 2560px;
        --font-smtv-default: Inter Tight,sans-serif;
        --font-smtv-headings: birch-std,serif;
        --color-smtv-primary-0: #e10028;
        --color-smtv-primary-700: #99001b;
        --color-smtv-primary-800: #660012;
        --color-smtv-secondary-0: #945d0c;
        --color-smtv-gray-700: #404159;
        --container-width-dskny: 90%;
        --container-width-max-dskny: 2560px;
        --font-dskny-default: Inter Tight,sans-serif;
        --font-dskny-headings: Inter Tight,sans-serif;
        --color-dskny-primary-0: #e60012;
        --color-dskny-primary-700: #99000c;
        --color-dskny-primary-800: #660008;
        --color-dskny-secondary-0: #513a28;
        --color-dskny-secondary-500: #ab7a54;
        --color-dskny-secondary-800: #443122;
        --color-dskny-tertiary-0: #f3df27;
        --color-dskny-quaternary-0: #eea818;
        --color-dskny-dark-0: #000;
        --color-dskny-gray-700: #404159;
        --container-width-sthdt: 90%;
        --container-width-max-sthdt: 2560px;
        --font-sthdt-default: Proxima Nova,"proxima-nova",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --font-sthdt-headings: Proxima Nova,"proxima-nova",ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --color-sthdt-primary-0: #461080;
        --color-sthdt-primary-100: #e5d2f9;
        --color-sthdt-primary-600: #6317b5;
        --color-sthdt-primary-700: #4a1188;
        --color-sthdt-primary-800: #320b5b;
        --color-sthdt-primary-900: #19062d;
        --color-sthdt-secondary-0: #f948ff;
        --color-sthdt-secondary-300: #fa66ff;
        --color-sthdt-secondary-600: #c500cc;
        --color-sthdt-secondary-700: #940099;
        --color-sthdt-tertiary-0: #b800e8;
        --color-sthdt-tertiary-600: #a200cc;
        --color-sthdt-quaternary-0: #980da9;
        --color-sthdt-quaternary-600: #aa0fbd;
        --color-sthdt-quinary-0: #fdcf0d;
        --color-sthdt-quinary-600: #caa402;
        --color-sthdt-light-600: #666;
        --color-sthdt-dark-600: #666;
        --color-sthdt-gray-600: #555777;
        --color-sthdt-gray-700: #404159;
        --container-width-sega: 90%;
        --container-width-max-sega: 2560px;
        --font-sega-default: Poppins,sans-serif;
        --font-sega-headings: Inter Tight,sans-serif;
        --color-sega-primary-0: #0057ff;
        --color-sega-primary-400: #3379ff;
        --color-sega-primary-800: #002366;
        --color-sega-secondary-0: #e1eaff;
        --color-sega-tertiary-0: #3649a5;
        --color-sega-tertiary-900: #0d1126;
        --color-sega-quinary-700: #4d4d4d;
        --color-sega-light-0: #fff;
        --color-sega-dark-0: #000;
        --color-sega-gray-700: #404159;
        --color-sega-warning-500: #daa125;
        --container-width-smb: 90%;
        --container-width-max-smb: 2560px;
        --font-smb-default: Proxima Soft,"proxima-soft",sans-serif;
        --font-smb-headings: Proxima Soft,"proxima-soft",sans-serif;
        --font-smb-mono: Marvin Round,"marvin-round",sans-serif;
        --color-smb-primary-0: #f76e87;
        --color-smb-primary-800: #610516;
        --color-smb-secondary-0: #f53f65;
        --color-smb-secondary-600: #c20a30;
        --color-smb-tertiary-0: #ffc500;
        --color-smb-light-0: #fff;
        --color-smb-dark-0: #000;
        --color-smb-gray-700: #404159;
        --container-width-mrf: 90%;
        --container-width-max-mrf: 2560px;
        --font-mrf-default: ff-more-web-pro,"ff-more-web-pro",serif;
        --font-mrf-headings: IvyPresto Display,"ivypresto-display",serif;
        --color-mrf-primary-0: #d44258;
        --color-mrf-primary-600: #a62639;
        --color-mrf-primary-800: #53131d;
        --color-mrf-secondary-0: #446;
        --color-mrf-light-0: #fff;
        --color-mrf-dark-0: #000;
        --color-mrf-gray-700: #404159;
        --container-width-ladtm: 90%;
        --container-width-max-ladtm: 2560px;
        --font-ladtm-default: Inter Tight,sans-serif;
        --font-ladtm-headings: yoon-a-yoonche,"yoon-a-yoonche",sans-serif;
        --font-ladtm-mono: mr-eaves-modern,"mr-eaves-modern",sans-serif;
        --color-ladtm-primary-0: #7f89a1;
        --color-ladtm-primary-800: #2b303b;
        --color-ladtm-tertiary-0: #3c6fae;
        --color-ladtm-light-0: #fff;
        --color-ladtm-dark-0: #000;
        --color-ladtm-gray-700: #4d4d4d;
        --container-width-ai: 90%;
        --container-width-max-ai: 2560px;
        --font-ai-default: Poppins,sans-serif;
        --font-ai-headings: Inter Tight,sans-serif;
        --color-ai-primary-0: #589d1d;
        --color-ai-primary-400: #94df53;
        --color-ai-primary-800: #305610;
        --color-ai-light-0: #fff;
        --color-ai-dark-0: #000;
        --color-ai-gray-700: #4d4d4d;
        --container-width-ladpy: 90%;
        --container-width-max-ladpy: 2560px;
        --font-ladpy-default: Adobe Garamond Pro,serif;
        --font-ladpy-headings: IM Fell DW Pica,serif;
        --color-ladpy-primary-0: #b22557;
        --color-ladpy-primary-800: #541229;
        --color-ladpy-secondary-0: #dec357;
        --color-ladpy-light-0: #fff;
        --color-ladpy-gray-700: #4d4d4d;
        --container-width-vf: 90%;
        --container-width-max-vf: 2560px;
        --font-vf-default: Poppins,sans-serif;
        --font-vf-headings: Gomme Sans,"gomme-sans",sans-serif;
        --color-vf-primary-0: #f75220;
        --color-vf-primary-800: #621a04;
        --color-vf-quaternary-0: #ffb516;
        --color-vf-light-0: #fff;
        --color-vf-dark-0: #464646;
        --color-vf-gray-700: #4d4d4d;
        --container-width-src: 90%;
        --container-width-max-src: 2560px;
        --font-src-default: Futura PT,"futura-pt",sans-serif;
        --font-src-headings: Eurostile,sans-serif;
        --color-src-primary-0: #ff8d00;
        --color-src-primary-900: #331c00;
        --color-src-tertiary-0: #1733a0;
        --color-src-quinary-0: #00cccd;
        --color-src-light-0: #fff;
        --color-src-dark-0: #000;
        --color-src-gray-700: #4d4d4d;
        --color-src-warning-0: #2a2c38;
        --container-width-shi: 90%;
        --container-width-max-shi: 2560px;
        --font-shi-default: Futura PT,sans-serif;
        --font-shi-headings: Futura PT,sans-serif;
        --color-shi-primary-0: #f0dfc0;
        --color-shi-primary-500: #ce9631;
        --color-shi-primary-600: #a57827;
        --color-shi-primary-800: #523c14;
        --color-shi-secondary-0: #bf341d;
        --color-shi-secondary-400: #e4634e;
        --color-shi-secondary-500: #dd3c22;
        --color-shi-secondary-600: #b1301b;
        --color-shi-secondary-700: #852414;
        --color-shi-tertiary-0: #eb7930;
        --color-shi-tertiary-400: #ed8745;
        --color-shi-quaternary-0: #bd9657;
        --color-shi-quaternary-400: #c5a36d;
        --color-shi-quinary-0: #66b4b3;
        --color-shi-quinary-200: #bdd;
        --color-shi-quinary-400: #76bcbb;
        --color-shi-quinary-500: #54abaa;
        --color-shi-quinary-700: #326766;
        --color-shi-light-0: #eddfc1;
        --color-shi-light-300: #ddc288;
        --color-shi-dark-0: #000;
        --color-shi-dark-700: #4d4d4d;
        --color-shi-gray-0: #333;
        --color-shi-gray-700: #4d4d4d
    }
}

/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiGyp8kv8JHgFVrJJLucXtAKPY.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiDyp8kv8JHgFVrJJLm111VFteOcEg.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiDyp8kv8JHgFVrJJLm111VGdeOcEg.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiDyp8kv8JHgFVrJJLm111VF9eO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLDD4Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'Inter Tight';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsK8ah8QA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter Tight';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsD8ah8QA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter Tight';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsL8ah8QA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter Tight';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsE8ah8QA.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter Tight';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsI8ah8QA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter Tight';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsJ8ah8QA.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter Tight';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsH8ag.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxC7mw9c.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRzS7mw9c.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxi7mw9c.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRyS7m.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxC7mw9c.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRzS7mw9c.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxi7mw9c.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRyS7m.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

            :root {
                --md-ref-typeface-plain: 'Google Sans',Roboto,system-ui;
                --catalog-display-xl-font-size: 88px;
                --catalog-display-m-font-size: 45px;
                --catalog-title-l-font-size: 22px;
                --catalog-title-m-font-size: 16px;
                --catalog-title-s-font-size: 14px;
                --catalog-body-l-font-size: 16px;
                --catalog-body-m-font-size: 14px;
                --catalog-headline-s-font-size: 24px;
                --catalog-label-s-font-size: 11px;
                --catalog-shape-xl: 28px;
                --catalog-shape-l: 16px;
                --catalog-shape-m: 12px;
                --catalog-shape-s: 8px;
                --catalog-shape-xs: 4px;
                --catalog-spacing-xl: 28px;
                --catalog-spacing-l: 16px;
                --catalog-spacing-m: 12px;
                --catalog-spacing-s: 8px;
                --catalog-top-app-bar-height: calc(48px + 2 * var(--catalog-spacing-m));
                scroll-padding-block-start: calc(var(--catalog-top-app-bar-height) + var(--catalog-top-app-bar-padding-block) * 2)
            }

            @media screen and (max-width: 600px) {
                :root {
                    --catalog-display-xl-font-size:55px;
                    --catalog-title-l-font-size: 16px;
                    --catalog-body-l-font-size: 14px;
                    --catalog-body-m-font-size: 12px;
                    --catalog-spacing-xl: 16px;
                    --catalog-spacing-l: 12px
                }
            }



    :host,html {
        -webkit-text-size-adjust: 100%;
        tab-size: 4;
        line-height: 1.5;
        font-family: var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");
        font-feature-settings: var(--default-font-feature-settings,normal);
        font-variation-settings: var(--default-font-variation-settings,normal);
        -webkit-tap-highlight-color: transparent
    }

  body {
    background: var(--md-sys-color-background);
    color: var(--md-sys-color-on-background);
    margin: 0;
  }
`);
document.adoptedStyleSheets = [
  ...document.adoptedStyleSheets,segaSheet
];
const template = html`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

class SegaButton extends HTMLElement {
  static sheet = (() => {
    const s = new CSSStyleSheet();
    s.replaceSync(`
      :host { display: inline-block; }
      button { background: var(--md-sys-color-primary); border-radius: 99px; padding: 8px 16px; border: none; cursor: pointer; color: var(--md-sys-color-on-primary);font-family:var(--font-lad-0-default); }
    `);
    return s;
  })();

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.adoptedStyleSheets = [SegaButton.sheet];
    this.shadowRoot.innerHTML = `<button>${this.getAttribute('label') || 'Button'}</button>`;
  }
}

if (!customElements.get('sega-button')) {
  customElements.define('sega-button', SegaButton);
}
var sharedPanel = null;

function classNames(obj) {
  var classes = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      classes.push(key);
    }
  }

  return classes.join(' ');
}

Polymer({
  /** @override */
  _template: html`
    <style>
      :host {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #drawer {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: var(--md-sys-color-surface-container);
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        @apply --paper-drawer-panel-drawer-container;
      }

      .transition-drawer {
        transition: -webkit-transform ease-in-out 0.3s, width ease-in-out 0.3s, visibility 0.3s;
        transition: transform ease-in-out 0.3s, width ease-in-out 0.3s, visibility 0.3s;
      }

      .left-drawer > #drawer {
        @apply --paper-drawer-panel-left-drawer-container;
      }

      .right-drawer > #drawer {
        left: auto;
        right: 0;
        @apply --paper-drawer-panel-right-drawer-container;
      }

      #main {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        @apply --paper-drawer-panel-main-container;
      }

      .transition > #main {
        transition: left ease-in-out 0.3s, padding ease-in-out 0.3s;
      }

      .right-drawer > #main {
        left: 0;
      }

      .right-drawer.transition > #main {
        transition: right ease-in-out 0.3s, padding ease-in-out 0.3s;
      }

      #main > ::slotted(*) {
        height: 100%;
      }

      #drawer > ::slotted(*) {
        height: 100%;
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
        background-color: rgba(0, 0, 0, 0.3);
        @apply --paper-drawer-panel-scrim;
      }

      .narrow-layout > #drawer {
        will-change: transform;
      }

      .narrow-layout > #drawer.iron-selected {
        
      }

      .right-drawer.narrow-layout > #drawer.iron-selected {
        
      }

      .narrow-layout > #drawer > ::slotted(*) {
        border: 0;
      }

      .left-drawer.narrow-layout > #drawer:not(.iron-selected) {
        visibility: hidden;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
      }

      .right-drawer.narrow-layout > #drawer:not(.iron-selected) {
        left: auto;
        visibility: hidden;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
      }

      .left-drawer.dragging > #drawer:not(.iron-selected),
      .left-drawer.peeking > #drawer:not(.iron-selected),
      .right-drawer.dragging > #drawer:not(.iron-selected),
      .right-drawer.peeking > #drawer:not(.iron-selected) {
        visibility: visible;
      }

      .narrow-layout > #main {
        padding: 0;
      }

      .right-drawer.narrow-layout > #main {
        left: 0;
        right: 0;
      }

      .narrow-layout > #main:not(.iron-selected) > #scrim,
      .dragging > #main > #scrim {
        visibility: visible;
        opacity: var(--paper-drawer-panel-scrim-opacity, 1);
      }

      .narrow-layout > #main > * {
        margin: 0;
        min-height: 100%;
        left: 0;
        right: 0;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
    </style>

    <iron-media-query id="mq" on-query-matches-changed="_onQueryMatchesChanged" query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]">
    </iron-media-query>

    <iron-selector attr-for-selected="id" class$="[[_computeIronSelectorClass(narrow, _transition, dragging, rightDrawer, peeking)]]" on-transitionend="_onTransitionEnd" activate-event selected="[[selected]]">

      <div id="main">
        <slot name="main"></slot>
        <div id="scrim" on-tap="closeDrawer"></div>
      </div>

      <div id="drawer">
        <slot id="drawerSlot" name="drawer"></slot>
      </div>

    </iron-selector>
`,

  is: 'tp-sega-md-nav-drawer-panel',
  behaviors: [IronResizableBehavior],

  /**
   * Fired when the narrow layout changes.
   *
   * @event paper-responsive-change {{narrow: boolean}} detail -
   *     narrow: true if the panel is in narrow layout.
   */

  /**
   * Fired when the a panel is selected.
   *
   * Listening for this event is an alternative to observing changes in the
   * `selected` attribute. This event is fired both when a panel is selected.
   *
   * @event iron-select {{item: Object}} detail -
   *     item: The panel that the event refers to.
   */

  /**
   * Fired when a panel is deselected.
   *
   * Listening for this event is an alternative to observing changes in the
   * `selected` attribute. This event is fired both when a panel is deselected.
   *
   * @event iron-deselect {{item: Object}} detail -
   *     item: The panel that the event refers to.
   */
  properties: {

    /**
     * The panel to be selected when `paper-drawer-panel` changes to narrow
     * layout.
     */
    defaultSelected: {type: String, value: 'main'},

    /**
     * If true, swipe from the edge is disabled.
     */
    disableEdgeSwipe: {type: Boolean, value: false},

    /**
     * If true, swipe to open/close the drawer is disabled.
     */
    disableSwipe: {type: Boolean, value: false},

    /**
     * Whether the user is dragging the drawer interactively.
     */
    dragging: {type: Boolean, value: false, readOnly: true, notify: true},

    /**
     * Width of the drawer panel.
     */
    drawerWidth: {type: String, value: '256px'},

    /**
     * The attribute on elements that should toggle the drawer on tap, also
     * elements will automatically be hidden in wide layout.
     */
    drawerToggleAttribute: {type: String, value: 'paper-drawer-toggle'},

    /**
     * How many pixels on the side of the screen are sensitive to edge
     * swipes and peek.
     */
    edgeSwipeSensitivity: {type: Number, value: 30},

    /**
     * If true, ignore `responsiveWidth` setting and force the narrow layout.
     */
    forceNarrow: {type: Boolean, value: false},

    /**
     * Whether the browser has support for the transform CSS property.
     */
    hasTransform: {
      type: Boolean,
      value: function() {
        return 'transform' in this.style;
      }
    },

    /**
     * Whether the browser has support for the will-change CSS property.
     */
    hasWillChange: {
      type: Boolean,
      value: function() {
        return 'willChange' in this.style;
      }
    },

    /**
     * Returns true if the panel is in narrow layout.  This is useful if you
     * need to show/hide elements based on the layout.
     */
    narrow: {
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      readOnly: true,
      notify: true
    },

    /**
     * Whether the drawer is peeking out from the edge.
     */
    peeking: {type: Boolean, value: false, readOnly: true, notify: true},

    /**
     * Max-width when the panel changes to narrow layout.
     */
    responsiveWidth: {type: String, value: '768px'},

    /**
     * If true, position the drawer to the right.
     */
    rightDrawer: {type: Boolean, value: false},

    /**
     * The panel that is being selected. `drawer` for the drawer panel and
     * `main` for the main panel.
     *
     * @type {string|null}
     */
    selected:
        {reflectToAttribute: true, notify: true, type: String, value: null},

    /**
     * The CSS selector for the element that should receive focus when the
     * drawer is open. By default, when the drawer opens, it focuses the first
     * tabbable element. That is, the first element that can receive focus.
     *
     * To disable this behavior, you can set `drawerFocusSelector` to `null` or
     * an empty string.
     *
     */
    drawerFocusSelector: {
      type: String,
      value: 'a[href]:not([tabindex="-1"]),' +
          'area[href]:not([tabindex="-1"]),' +
          'input:not([disabled]):not([tabindex="-1"]),' +
          'select:not([disabled]):not([tabindex="-1"]),' +
          'textarea:not([disabled]):not([tabindex="-1"]),' +
          'button:not([disabled]):not([tabindex="-1"]),' +
          'iframe:not([tabindex="-1"]),' +
          '[tabindex]:not([tabindex="-1"]),' +
          '[contentEditable=true]:not([tabindex="-1"])'
    },

    /**
     * Whether the transition is enabled.
     */
    _transition: {type: Boolean, value: false},

  },

  listeners: {
    tap: '_onTap',
    track: '_onTrack',
    down: '_downHandler',
    up: '_upHandler'
  },

  observers: [
    '_forceNarrowChanged(forceNarrow, defaultSelected)',
    '_toggleFocusListener(selected)',
    '_setMainStyle(narrow, rightDrawer, drawerWidth)',
    '_setDrawerStyle(drawerWidth)'
  ],

  /** @override */
  ready: function() {
    // Avoid transition at the beginning e.g. page loads and enable
    // transitions only after the element is rendered and ready.
    this._transition = true;
    this._boundFocusListener = this._didFocus.bind(this);
    console.warn(this.is, 'is deprecated. Please use app-layout instead!');
  },

  /**
   * Toggles the panel open and closed.
   *
   * @method togglePanel
   */
  togglePanel: function() {
    if (this._isMainSelected()) {
      this.openDrawer();
    } else {
      this.closeDrawer();
    }
  },

  /**
   * Opens the drawer.
   *
   * @method openDrawer
   */
  openDrawer: function() {
    requestAnimationFrame(function() {
      this.toggleClass('transition-drawer', true, this.$.drawer);
      this.selected = 'drawer';
    }.bind(this));
  },

  /**
   * Closes the drawer.
   *
   * @method closeDrawer
   */
  closeDrawer: function() {
    requestAnimationFrame(function() {
      this.toggleClass('transition-drawer', true, this.$.drawer);
      this.selected = 'main';
    }.bind(this));
  },

  _onTransitionEnd: function(e) {
    var target = dom(e).localTarget;
    if (target !== this.$.drawer) {
      // ignore events coming from the light dom
      return;
    }
    if (e.propertyName === 'left' || e.propertyName === 'right') {
      this.notifyResize();
    }
    if (e.propertyName === 'transform') {
      requestAnimationFrame(function() {
        this.toggleClass('transition-drawer', false, this.$.drawer);
      }.bind(this));
      if (this.selected === 'drawer') {
        var focusedChild = this._getAutoFocusedNode();
        focusedChild && focusedChild.focus();
      }
    }
  },

  _computeIronSelectorClass: function(
      narrow, transition, dragging, rightDrawer, peeking) {
    return classNames({
      dragging: dragging,
      'narrow-layout': narrow,
      'right-drawer': rightDrawer,
      'left-drawer': !rightDrawer,
      transition: transition,
      peeking: peeking
    });
  },

  _setDrawerStyle: function(drawerWidth) {
    this.$.drawer.style.width = drawerWidth;
  },

  _setMainStyle: function(narrow, rightDrawer, drawerWidth) {
    this.$.main.style.left = (narrow || rightDrawer) ? '0' : drawerWidth;

    if (rightDrawer) {
      this.$.main.style.right = narrow ? '' : drawerWidth;
    }
  },

  _computeMediaQuery: function(forceNarrow, responsiveWidth) {
    return forceNarrow ? '' : '(max-width: ' + responsiveWidth + ')';
  },

  _computeSwipeOverlayHidden: function(narrow, disableEdgeSwipe) {
    return !narrow || disableEdgeSwipe;
  },

  _onTrack: function(event) {
    if (sharedPanel && this !== sharedPanel) {
      return;
    }
    switch (event.detail.state) {
      case 'start':
        this._trackStart(event);
        break;
      case 'track':
        this._trackX(event);
        break;
      case 'end':
        this._trackEnd(event);
        break;
    }
  },

  _responsiveChange: function(narrow) {
    this._setNarrow(narrow);
    this.selected = this.narrow ? this.defaultSelected : null;
    this.setScrollDirection(this._swipeAllowed() ? 'y' : 'all');
    this.fire('paper-responsive-change', {narrow: this.narrow});
  },

  _onQueryMatchesChanged: function(event) {
    this._responsiveChange(event.detail.value);
  },

  _forceNarrowChanged: function() {
    // set the narrow mode only if we reached the `responsiveWidth`
    this._responsiveChange(this.forceNarrow || this.$.mq.queryMatches);
  },

  _swipeAllowed: function() {
    return this.narrow && !this.disableSwipe;
  },

  _isMainSelected: function() {
    return this.selected === 'main';
  },

  _startEdgePeek: function() {
    this.width = this.$.drawer.offsetWidth;
    this._moveDrawer(this._translateXForDeltaX(
        this.rightDrawer ? -this.edgeSwipeSensitivity :
                           this.edgeSwipeSensitivity));
    this._setPeeking(true);
  },

  _stopEdgePeek: function() {
    if (this.peeking) {
      this._setPeeking(false);
      this._moveDrawer(null);
    }
  },

  _downHandler: function(event) {
    if (!this.dragging && this._isMainSelected() && this._isEdgeTouch(event) &&
        !sharedPanel) {
      this._startEdgePeek();
      // cancel selection
      event.preventDefault();
      // grab this panel
      sharedPanel = this;
    }
  },

  _upHandler: function() {
    this._stopEdgePeek();
    // release the panel
    sharedPanel = null;
  },

  _onTap: function(event) {
    var targetElement = dom(event).localTarget;
    var isTargetToggleElement = targetElement && this.drawerToggleAttribute &&
        targetElement.hasAttribute(this.drawerToggleAttribute);

    if (isTargetToggleElement) {
      this.togglePanel();
    }
  },

  _isEdgeTouch: function(event) {
    var x = event.detail.x;

    return !this.disableEdgeSwipe && this._swipeAllowed() &&
        (this.rightDrawer ? x >= this.offsetWidth - this.edgeSwipeSensitivity :
                            x <= this.edgeSwipeSensitivity);
  },

  _trackStart: function(event) {
    if (this._swipeAllowed()) {
      sharedPanel = this;
      this._setDragging(true);

      if (this._isMainSelected()) {
        this._setDragging(this.peeking || this._isEdgeTouch(event));
      }

      if (this.dragging) {
        this.width = this.$.drawer.offsetWidth;
        this._transition = false;
      }
    }
  },

  _translateXForDeltaX: function(deltaX) {
    var isMain = this._isMainSelected();

    if (this.rightDrawer) {
      return Math.max(0, isMain ? this.width + deltaX : deltaX);
    } else {
      return Math.min(0, isMain ? deltaX - this.width : deltaX);
    }
  },

  _trackX: function(event) {
    if (this.dragging) {
      var dx = event.detail.dx;

      if (this.peeking) {
        if (Math.abs(dx) <= this.edgeSwipeSensitivity) {
          // Ignore trackx until we move past the edge peek.
          return;
        }
        this._setPeeking(false);
      }

      this._moveDrawer(this._translateXForDeltaX(dx));
    }
  },

  _trackEnd: function(event) {
    if (this.dragging) {
      var xDirection = event.detail.dx > 0;

      this._setDragging(false);
      this._transition = true;
      sharedPanel = null;
      this._moveDrawer(null);

      if (this.rightDrawer) {
        this[xDirection ? 'closeDrawer' : 'openDrawer']();
      } else {
        this[xDirection ? 'openDrawer' : 'closeDrawer']();
      }
    }
  },

  _transformForTranslateX: function(translateX) {
    if (translateX === null) {
      return '';
    }
    return this.hasWillChange ? 'translateX(' + translateX + 'px)' :
                                'translate3d(' + translateX + 'px, 0, 0)';
  },

  _moveDrawer: function(translateX) {
    this.transform(this._transformForTranslateX(translateX), this.$.drawer);
  },

  _getDrawerSlot: function() {
    return dom(this.$.drawerSlot).getDistributedNodes()[0];
  },

  _getAutoFocusedNode: function() {
    return this.drawerFocusSelector ?
        dom(this._getDrawerSlot()).querySelector(this.drawerFocusSelector) :
        null;
  },

  _toggleFocusListener: function(selected) {
    if (selected === 'drawer') {
      this.addEventListener('focus', this._boundFocusListener, true);
    } else {
      this.removeEventListener('focus', this._boundFocusListener, true);
    }
  },

  _didFocus: function(event) {
    var autoFocusedNode = this._getAutoFocusedNode();
    if (!autoFocusedNode) {
      return;
    }

    var path = dom(event).path;
    var focusedChild = path[0];
    var drawerSlot = this._getDrawerSlot();
    var focusedChildCameFromDrawer = path.indexOf(drawerSlot) !== -1;

    if (!focusedChildCameFromDrawer) {
      event.stopPropagation();
      autoFocusedNode.focus();
    }
  },

  _isDrawerClosed: function(narrow, selected) {
    return !narrow || selected !== 'drawer';
  }
});
Polymer({
  /** @override */
  _template: html`
    <style>
      :host {
        @apply --layout-vertical;
        position: relative;
        height: 100%;
        background-color: var(--md-sys-color-surface-container);
        color: var(--md-sys-color-on-surface);
        @apply --paper-header-panel;
      }

      #mainContainer {
        @apply --layout-flex;
        background-color: var(--md-sys-color-surface);
        border-radius: var(--catalog-shape-xl);
        color: var(--md-sys-color-on-surface);
        padding-block: var(--catalog-spacing-xl);
        padding-inline: var(--catalog-spacing-xl);
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
      }

      #mainPanel {
        @apply --layout-vertical;
        @apply --layout-flex;
        position: relative;
        min-height: 0;
        @apply --paper-header-panel-body;
      }

      #mainContainer {
        @apply --paper-header-panel-container;
      }

      /*
       * mode: scroll
       */
      :host([mode=scroll]) #mainContainer {
        @apply --paper-header-panel-scroll-container;
        overflow: visible;
      }

      :host([mode=scroll]) {
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
      }

      /*
       * mode: cover
       */
      :host([mode=cover]) #mainContainer {
        @apply --paper-header-panel-cover-container;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host([mode=cover]) #mainPanel {
        position: static;
      }

      /*
       * mode: standard
       */
      :host([mode=standard]) #mainContainer {
        @apply --paper-header-panel-standard-container;
      }

      /*
       * mode: seamed
       */
      :host([mode=seamed]) #mainContainer {
        @apply --paper-header-panel-seamed-container;
      }


      /*
       * mode: waterfall
       */
      :host([mode=waterfall]) #mainContainer {
        @apply --paper-header-panel-waterfall-container;
      }

      /*
       * mode: waterfall-tall
       */
      :host([mode=waterfall-tall]) #mainContainer {
        @apply --paper-header-panel-waterfall-tall-container;
      }

      #dropShadow {
        transition: opacity 0.5s;
        height: 6px;
        @apply --paper-header-panel-shadow;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
      }

      #dropShadow.has-shadow {
        opacity: 1;
      }

      #mainContainer > ::slotted(.fit) {
        @apply --layout-fit;
      }

    </style>

    <slot id="headerSlot" name="header"></slot>

    <div id="mainPanel">
      <div id="mainContainer" class$="[[_computeMainContainerClass(mode)]]">
        <slot></slot>
      </div>
      <div id="dropShadow"></div>
    </div>
`,

  is: 'tp-sega-md-header-panel',

  /**
   * Fired when the content has been scrolled. `event.detail.target` returns
   * the scrollable element which you can use to access scroll info such as
   * `scrollTop`.
   *
   *     <paper-header-panel on-content-scroll="scrollHandler">
   *       ...
   *     </paper-header-panel>
   *
   *
   *     scrollHandler: function(event) {
   *       var scroller = event.detail.target;
   *       console.log(scroller.scrollTop);
   *     }
   *
   * @event content-scroll
   */

  properties: {
    /**
     * Controls header and scrolling behavior. Options are
     * `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and
     * `cover`. Default is `standard`.
     *
     * `standard`: The header is a step above the panel. The header will consume
     * the panel at the point of entry, preventing it from passing through to
     * the opposite side.
     *
     * `seamed`: The header is presented as seamed with the panel.
     *
     * `waterfall`: Similar to standard mode, but header is initially presented
     * as seamed with panel, but then separates to form the step.
     *
     * `waterfall-tall`: The header is initially taller (`tall` class is added
     * to the header).  As the user scrolls, the header separates (forming an
     * edge) while condensing (`tall` class is removed from the header).
     *
     * `scroll`: The header keeps its seam with the panel, and is pushed off
     * screen.
     *
     * `cover`: The panel covers the whole `paper-header-panel` including the
     * header. This allows user to style the panel in such a way that the panel
     * is partially covering the header.
     *
     *     <paper-header-panel mode="cover">
     *       <paper-toolbar slot="header" class="tall">
     *         <paper-icon-button icon="menu"></paper-icon-button>
     *       </paper-toolbar>
     *       <div></div>
     *     </paper-header-panel>
     */
    mode: {
      type: String,
      value: 'standard',
      observer: '_modeChanged',
      reflectToAttribute: true
    },

    /**
     * If true, the drop-shadow is always shown no matter what mode is set to.
     */
    shadow: {type: Boolean, value: false},

    /**
     * The class used in waterfall-tall mode.  Change this if the header
     * accepts a different class for toggling height, e.g. "medium-tall"
     */
    tallClass: {type: String, value: 'tall'},

    /**
     * If true, the scroller is at the top
     */
    atTop: {
      type: Boolean,
      value: true,
      notify: true,
      readOnly: true,
      reflectToAttribute: true
    }
  },

  observers: ['_computeDropShadowHidden(atTop, mode, shadow)'],

  /** @override */
  attached: function() {
    this._addListener();
    // Run `scroll` logic once to initialize class names, etc.
    this._keepScrollingState();
  },

  /** @override */
  detached: function() {
    this._removeListener();
  },

  /** @override */
  ready: function() {
    this.scrollHandler = this._scroll.bind(this);
    console.warn(this.is, 'is deprecated. Please use app-layout instead!');
  },

  /**
   * Returns the header element
   * @return {!Element|undefined}
   */
  get header() {
    var header = dom(this.$.headerSlot).getDistributedNodes()[0];
    if (!header) {
      return undefined;
    }
    return /** @type {!Element}*/ (header);
  },

  /**
   * Returns the scrollable element.
   * @return {!HTMLElement}
   */
  get scroller() {
    return this._getScrollerForMode(this.mode);
  },

  /**
   * Returns true if the scroller has a visible shadow.
   * @return {boolean}
   */
  get visibleShadow() {
    return this.$.dropShadow.classList.contains('has-shadow');
  },

  _computeDropShadowHidden: function(atTop, mode, shadow) {
    var shadowMode = MODE_CONFIGS.shadowMode[mode];

    if (this.shadow) {
      this.toggleClass('has-shadow', true, this.$.dropShadow);
    } else if (shadowMode === SHADOW_ALWAYS) {
      this.toggleClass('has-shadow', true, this.$.dropShadow);
    } else if (shadowMode === SHADOW_WHEN_SCROLLING && !atTop) {
      this.toggleClass('has-shadow', true, this.$.dropShadow);
    } else {
      this.toggleClass('has-shadow', false, this.$.dropShadow);
    }
  },

  _computeMainContainerClass: function(mode) {
    // TODO:  It will be useful to have a utility for classes
    // e.g. Polymer.Utils.classes({ foo: true });

    var classes = {};

    classes['flex'] = mode !== 'cover';

    return Object.keys(classes)
        .filter(function(className) {
          return classes[className];
        })
        .join(' ');
  },

  _addListener: function() {
    this.scroller.addEventListener('scroll', this.scrollHandler);
  },

  _removeListener: function() {
    this.scroller.removeEventListener('scroll', this.scrollHandler);
  },

  _modeChanged: function(newMode, oldMode) {
    var configs = MODE_CONFIGS;
    var header = this.header;
    var animateDuration = 200;

    if (header) {
      // in tallMode it may add tallClass to the header; so do the cleanup
      // when mode is changed from tallMode to not tallMode
      if (configs.tallMode[oldMode] && !configs.tallMode[newMode]) {
        header.classList.remove(this.tallClass);
        this.async(function() {
          header.classList.remove('animate');
        }, animateDuration);
      } else {
        this.toggleClass('animate', configs.tallMode[newMode], header);
      }
    }
    this._keepScrollingState();
  },

  _keepScrollingState: function() {
    var main = this.scroller;
    var header = this.header;

    this._setAtTop(main.scrollTop === 0);

    if (header && this.tallClass && MODE_CONFIGS.tallMode[this.mode]) {
      this.toggleClass(
          this.tallClass,
          this.atTop ||
              header.classList.contains(this.tallClass) &&
                  main.scrollHeight < this.offsetHeight,
          header);
    }
  },

  _scroll: function() {
    this._keepScrollingState();
    this.fire('content-scroll', {target: this.scroller}, {bubbles: false});
  },

  _getScrollerForMode: function(mode) {
    return MODE_CONFIGS.outerScroll[mode] ? this : this.$.mainContainer;
  }
});
Polymer({
  /** @override */
  _template: html`
    <style>
      :host {
        --calculated-md-top-app-bar-height: var(--md-top-app-bar-height, 64px);
        --calculated-md-top-app-bar-sm-height: var(--md-top-app-bar-sm-height, 56px);
        display: block;
        position: relative;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        height: var(--calculated-md-top-app-bar-height);
        background: var(--md-top-app-bar-background, var(--md-sys-color-surface-container));
        color: var(--md-top-app-bar-color, var(--md-sys-color-on-surface));
        @apply --md-top-app-bar;
      }

      :host(.animate) {
        transition: var(--md-top-app-bar-transition, height 0.18s ease-in);
      }

      :host(.medium-tall) {
        height: calc(var(--calculated-md-top-app-bar-height) * 2);
        @apply --md-top-app-bar-medium;
      }

      :host(.tall) {
        height: calc(var(--calculated-md-top-app-bar-height) * 3);
        @apply --md-top-app-bar-tall;
      }

      .toolbar-tools {
        position: relative;
        height: var(--calculated-md-top-app-bar-height);
        padding: 0 16px;
        pointer-events: none;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --md-top-app-bar-content;
      }

      /*
       * TODO: Where should media query breakpoints live so they can be shared between elements?
       */

      @media (max-width: 600px) {
        :host {
          height: var(--calculated-md-top-app-bar-sm-height);
        }

        :host(.medium-tall) {
          height: calc(var(--calculated-md-top-app-bar-sm-height) * 2);
        }

        :host(.tall) {
          height: calc(var(--calculated-md-top-app-bar-sm-height) * 3);
        }

        .toolbar-tools {
          height: var(--calculated-md-top-app-bar-sm-height);
        }
      }

      #topBar {
        position: relative;
      }

      /* middle bar */
      #middleBar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host(.tall) #middleBar,
      :host(.medium-tall) #middleBar {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
      }

      /* bottom bar */
      #bottomBar {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      /*
       * make elements (e.g. buttons) respond to mouse/touch events
       *
       * \`.toolbar-tools\` disables touch events so multiple toolbars can stack and not
       * absorb events. All children must have pointer events re-enabled to work as
       * expected.
       */
      .toolbar-tools > ::slotted(*:not([disabled])) {
        pointer-events: auto;
      }

      .toolbar-tools > ::slotted(.title) {
        @apply --paper-font-common-base;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
        font-weight: 400;
        line-height: 1;
        pointer-events: none;
        @apply --layout-flex;
      }

      .toolbar-tools > ::slotted(.title) {
        margin-left: 56px;
      }

      .toolbar-tools > ::slotted(paper-icon-button + .title) {
        margin-left: 0;
      }

      /**
       * The --md-top-app-bar-title mixin is applied here instead of above to
       * fix the issue with margin-left being ignored due to css ordering.
       */
      .toolbar-tools > ::slotted(.title) {
        @apply --md-top-app-bar-title;
      }

      .toolbar-tools > ::slotted(paper-icon-button[icon=menu]) {
        margin-right: 24px;
      }

      .toolbar-tools > ::slotted(.fit) {
        position: absolute;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        margin: 0;
      }

      /* TODO(noms): Until we have a better solution for classes that don't use
       * /deep/ create our own.
       */
      .start-justified {
        @apply --layout-start-justified;
      }

      .center-justified {
        @apply --layout-center-justified;
      }

      .end-justified {
        @apply --layout-end-justified;
      }

      .around-justified {
        @apply --layout-around-justified;
      }

      .justified {
        @apply --layout-justified;
      }
    </style>

    <div id="topBar" class$="toolbar-tools [[_computeBarExtraClasses(justify)]]">
      <slot name="top"></slot>
    </div>

    <div id="middleBar" class$="toolbar-tools [[_computeBarExtraClasses(middleJustify)]]">
      <slot name="middle"></slot>
    </div>

    <div id="bottomBar" class$="toolbar-tools [[_computeBarExtraClasses(bottomJustify)]]">
      <slot name="bottom"></slot>
    </div>
`,

  is: 'tp-sega-md-top-app-bar',
  hostAttributes: {'role': 'toolbar'},

  properties: {
    /**
     * Controls how the items are aligned horizontally when they are placed
     * at the bottom.
     * Options are `start`, `center`, `end`, `justified` and `around`.
     */
    bottomJustify: {type: String, value: ''},

    /**
     * Controls how the items are aligned horizontally.
     * Options are `start`, `center`, `end`, `justified` and `around`.
     */
    justify: {type: String, value: ''},

    /**
     * Controls how the items are aligned horizontally when they are placed
     * in the middle.
     * Options are `start`, `center`, `end`, `justified` and `around`.
     */
    middleJustify: {type: String, value: ''}

  },

  /** @override */
  ready: function() {
    console.warn(this.is, 'is deprecated. Please use app-layout instead!');
  },

  /** @override */
  attached: function() {
    this._observer = this._observe(this);
    this._updateAriaLabelledBy();
  },

  /** @override */
  detached: function() {
    if (this._observer) {
      this._observer.disconnect();
    }
  },

  _observe: function(node) {
    var observer = new MutationObserver(function() {
      this._updateAriaLabelledBy();
    }.bind(this));
    observer.observe(node, {childList: true, subtree: true});
    return observer;
  },

  _updateAriaLabelledBy: function() {
    flush();
    var labelledBy = [];
    var contents =
        Array.prototype.slice.call(dom(this.root).querySelectorAll('slot'))
            .concat(Array.prototype.slice.call(
                dom(this.root).querySelectorAll('content')));

    for (var content, index = 0; content = contents[index]; index++) {
      var nodes = dom(content).getDistributedNodes();
      for (var node, jndex = 0; node = nodes[jndex]; jndex++) {
        if (node.classList && node.classList.contains('title')) {
          if (node.id) {
            labelledBy.push(node.id);
          } else {
            var id = 'paper-toolbar-label-' + Math.floor(Math.random() * 10000);
            node.id = id;
            labelledBy.push(id);
          }
        }
      }
    }
    if (labelledBy.length > 0) {
      this.setAttribute('aria-labelledby', labelledBy.join(' '));
    }
  },

  _computeBarExtraClasses: function(barJustify) {
    if (!barJustify)
      return '';
    return barJustify + (barJustify === 'justified' ? '' : '-justified');
  }
});

class SegaApp extends HTMLElement {
  static sheet = (() => {
    const s = new CSSStyleSheet();
    s.replaceSync(`
      :host { display: block; width:100%; height: 100vh; }
    `);
    return s;
  })();

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.adoptedStyleSheets = [SegaApp.sheet];
    this.shadowRoot.innerHTML = `
      <tp-sega-md-nav-drawer-panel>
        <tp-sega-md-header-panel slot="main">
          <tp-sega-md-top-app-bar slot="header">
            <div slot="top">
              <svg id="レイヤー_1" data-name="レイヤー 1" viewBox="0 0 120 40.02" width="105" height="32"><defs></defs><title>logo-sega</title><path fill="#fff" d="M346.27,408.5a10.35,10.35,0,0,0-19.71,0l-3.43,10.28V401.87H304.86a12.15,12.15,0,0,0-8.47,3.43v-3.43H277.57a12.17,12.17,0,0,0-8.86,3.82v-3.82H251a13.83,13.83,0,0,0-10.12,23.25h-3.72v16.05h17.72a13.81,13.81,0,0,0,11.82-6.68,12.17,12.17,0,0,0,10.87,6.68h18.82v-3.42a12.14,12.14,0,0,0,8.47,3.42h52.3Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M254.88,427.89H239.93v4.7h14.95a5.26,5.26,0,1,0,0-10.51H251a6.37,6.37,0,0,1,0-12.74H266v-4.7H251a11.07,11.07,0,0,0,0,22.14h3.88a.56.56,0,0,1,0,1.11Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M251,415.16H266v-4.71H251A5.26,5.26,0,1,0,251,421h3.88a6.37,6.37,0,0,1,0,12.73H239.93v4.71h14.95a11.08,11.08,0,0,0,0-22.15H251a.55.55,0,1,1,0-1.1Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M304.86,410.45a3.61,3.61,0,0,0-3.6,3.59v15a3.6,3.6,0,0,0,3.6,3.59h9.69V422.08h-7.48v4.7h2.77v1.11h-2.77a1.11,1.11,0,0,1-1.1-1.11V416.26a1.1,1.1,0,0,1,1.1-1.1h13.29v-4.71Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M334.31,432.59h10.93l-7.41-22.08a1.48,1.48,0,0,0-1.42-1,1.5,1.5,0,0,0-1.41,1l-9.62,27.93h5.55l3.38-9.92Zm2-10,1.6,4.76h-3.22Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M343.65,409.57a7.59,7.59,0,0,0-14.55-.1l-8.74,25.63V416.26H307.07V421h8.59V433.7h-10.8a4.7,4.7,0,0,1-4.7-4.7V414a4.71,4.71,0,0,1,4.7-4.7h15.5v-4.7h-15.5a9.41,9.41,0,0,0-9.41,9.41V429a9.41,9.41,0,0,0,9.41,9.41h19.35l9.73-28.26a2.6,2.6,0,0,1,4.95,0l7.89,23.52H334.31v4.71h19Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M277.57,433.7a4.7,4.7,0,0,1-4.7-4.7V414a4.71,4.71,0,0,1,4.7-4.7h16.05v-4.7H277.57a9.41,9.41,0,0,0-9.41,9.41V429a9.41,9.41,0,0,0,9.41,9.41h16.05V433.7Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M278.68,426.78H290.3v-4.7H274V429a3.6,3.6,0,0,0,3.6,3.59h16.05v-4.7H279.78A1.11,1.11,0,0,1,278.68,426.78Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M290.3,416.26H278.68a1.1,1.1,0,0,1,1.11-1.1h13.83v-4.71H277.57A3.61,3.61,0,0,0,274,414V421H290.3Z" transform="translate(-237.16 -401.16)"/><path fill="currentColor" d="M350.55,408.53a3.69,3.69,0,1,0,0-7.37,3.69,3.69,0,1,0,0,7.37Zm-3.17-3.69a3.17,3.17,0,0,1,5.42-2.24,3.17,3.17,0,0,1-2.25,5.42,3.18,3.18,0,0,1-3.17-3.18Z" transform="translate(-237.16 -401.16)"/><path fill="currentColor" d="M349.6,405.15v1.74h-.53V402.8h1.52a1.9,1.9,0,0,1,1.22.25,1.14,1.14,0,0,1,.43.95,1.06,1.06,0,0,1-1,1.12l1.15,1.77h-.65l-1.11-1.74Zm0-.45h1.09a2.11,2.11,0,0,0,.5,0,.63.63,0,0,0,.51-.66.74.74,0,0,0-.25-.57,1.14,1.14,0,0,0-.79-.18H349.6Z" transform="translate(-237.16 -401.16)"/></svg>
            </div>
            <span class="title" slot="top"></span>
          </tp-sega-md-top-app-bar>
          <sega-button>SEGA</sega-button>
        </tp-sega-md-header-panel>
      </tp-sega-md-nav-drawer-panel>
    `;
  }
}

if (!customElements.get('sega-app')) {
  customElements.define('sega-app', SegaApp);
}