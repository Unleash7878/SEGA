import {html, css, LitElement} from 'https://unpkg.com/lit/index.js?module';
const segaTheme = new CSSStyleSheet();
segaTheme.replace(`
:root,[data-sega-theme="light"] {
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

[data-sega-theme="dark"] {
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
`);
document.adoptedStyleSheets = [
  ...document.adoptedStyleSheets,segaTheme
];
const segaSheet = new CSSStyleSheet();
segaSheet.replace(`
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
class SegaButton extends HTMLElement {
  static sheet = (() => {
    const s = new CSSStyleSheet();
    s.replaceSync(`
      :host { display: inline-block; }
      button { background: var(--md-sys-color-primary); border-radius: 99px; padding: 8px 16px; border: none; cursor: pointer; color: var(--md-sys-color-on-primary);font-family:var(--font-sega-default); }
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
class SegaAppBar extends LitElement {
  static styles = css`
      :host {
        display: block;
      }

      header[data-theme=sega] {
    background-color: var(--color-sega-tertiary-900,#0d1126)
}

header[data-theme=sega].header-ph {
    background-color: var(--color-white,#fff)
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main,header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper,header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation,header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--0 {
    height: 100%
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item {
    color: var(--color-sega-primary-700,#003499);
    transition-property: all;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    transition-duration: .3s;
    transition-timing-function: linear
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item .menu-link-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:before {
    content: "";
    top: var(--spacing-0,0);
    left: var(--spacing-0,0);
    width: 100%;
    height: 100%;
    transition-property: all;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    z-index: -1;
    background-color: #0000;
    transition-duration: .3s;
    transition-timing-function: linear;
    display: block;
    position: absolute
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--active-trail {
    cursor: default;
    --tw-font-weight: var(--font-weight-bold,700);
    font-weight: var(--font-weight-bold,700)
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--active-trail>.menu-link-wrapper>.link {
    cursor: default
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:not(.menu-item--active-trail):hover {
    color: var(--color-white,#fff)
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:not(.menu-item--active-trail):hover:before {
    background-color: var(--color-sega-primary-800,#002366)
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--depth--0 {
    padding: var(--spacing-16,1rem);
    display: flex
}

header[data-theme=sega].header-ph.layout-desktop section .section-content .column-wrapper .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--depth--0:before {
    transform: skew(-15deg)
}

header[data-theme=sega].header-ph.layout-mobile .header-wrapper button.mobile-nav-toggle:after,header[data-theme=sega].header-ph.layout-mobile .header-wrapper button.mobile-nav-toggle .mobile-nav-toggle-content:before,header[data-theme=sega].header-ph.layout-mobile .header-wrapper button.mobile-nav-toggle .mobile-nav-toggle-content:after {
    background-color: var(--color-sega-primary-700,#003499)
}

header[data-theme=sega].layout-mobile.sticky {
    z-index: 11
}

header[data-theme=sega].layout-mobile .header-wrapper .header-logos {
    padding-block:var(--spacing-16,1rem);margin-right: auto
}

header[data-theme=sega].layout-mobile .header-wrapper button.mobile-nav-toggle:after,header[data-theme=sega].layout-mobile .header-wrapper button.mobile-nav-toggle .mobile-nav-toggle-content:before,header[data-theme=sega].layout-mobile .header-wrapper button.mobile-nav-toggle .mobile-nav-toggle-content:after {
    background-color: var(--color-sega-light-0,#fff)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.header--signup-link .component.component--cta .content-wrapper a.cta-theme--default {
    padding-left: 3.5rem
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu {
    z-index: 20!important
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main,header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper,header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation,header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--0 {
    height: 100%
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.expand-down {
    --offset: 0px;
    --skew: 0deg
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.expand-right {
    --offset: 10px;
    --skew: 14deg
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 {
    top: 100%;
    left: var(--spacing-0,0);
    flex-direction: column;
    min-width: 100%;
    display: flex
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li {
    width: 100%
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:first-child {
    left: 0
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(2) {
    left: var(--offset)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(3) {
    left: calc(var(--offset)*2)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(4) {
    left: calc(var(--offset)*3)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(5) {
    left: calc(var(--offset)*4)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(6) {
    left: calc(var(--offset)*5)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(7) {
    left: calc(var(--offset)*6)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(8) {
    left: calc(var(--offset)*7)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(9) {
    left: calc(var(--offset)*8)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu.menu--depth--1 li:nth-child(10) {
    left: calc(var(--offset)*9)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item {
    position: relative
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item .menu-link-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item .menu-link-wrapper .link {
    width: 100%
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item .menu-link-wrapper .menu-link-toggle {
    height: var(--spacing-20,1.25rem);
    width: var(--spacing-20,1.25rem);
    margin-left: var(--spacing-8,.5rem);
    background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20strokeWidth%3D%224%22%20stroke%3D%22white%22%3E%3Cpath%20strokeLinecap%3D%22round%22%20strokeLinejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 1.25rem
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:before {
    content: "";
    top: var(--spacing-0,0);
    left: var(--spacing-0,0);
    background-color: var(--color-sega-tertiary-900,#0d1126);
    width: 100%;
    height: 100%;
    transition-property: all;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    z-index: -1;
    transition-duration: .3s;
    transition-timing-function: linear;
    display: block;
    position: absolute
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:hover:before {
    background-color: var(--color-sega-primary-800,#002366)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--depth--0 {
    align-items: center;
    height: 100%;
    display: flex
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--depth--0:before {
    transform: skew(-15deg)
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--depth--0 .menu-link-wrapper {
    height: 100%
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--depth--0 .menu-link-wrapper a,header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item.menu-item--depth--0 .menu-link-wrapper span {
    height: 100%;
    padding-inline:var(--spacing-16,1rem);align-items: center;
    display: flex
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:not(.menu-item--depth--0):before {
    transform: skew(var(--skew))
}

header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:not(.menu-item--depth--0) .menu-link-wrapper a,header[data-theme=sega].layout-desktop section .section-content .column-wrapper.menu .component.component--menu_main .content-wrapper nav.navigation ul.menu .menu-item:not(.menu-item--depth--0) .menu-link-wrapper span {
    padding-inline:var(--spacing-16,1rem);padding-block: var(--spacing-8,.5rem)
}

header[data-theme=sega] .header-wrapper {
    align-items: center
}

header[data-theme=sega] .header-wrapper:not(:empty) {
    padding: 0
}

header[data-theme=sega] .header-wrapper .header-logos .component--logo .content-wrapper .logo,header[data-theme=sega] .header-wrapper .header-logos .component--logo .content-wrapper .logo a {
    height: 2rem
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user {
    margin-left: var(--spacing-8,.5rem);
    font-family: var(--font-sega-default,Poppins,sans-serif);
    color: var(--color-white,#fff)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .menu--user--content .button-register--wrapper .button-register {
    min-width: fit-content;
    padding-inline:var(--spacing-32,2rem);text-align: center;
    font-family: var(--font-sega-headings,Inter Tight,sans-serif);
    --tw-font-weight: var(--font-weight-bold,700);
    font-weight: var(--font-weight-bold,700);
    color: var(--color-white,#fff);
    text-transform: uppercase;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    z-index: 0;
    transition-duration: .3s;
    transition-timing-function: linear
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .menu--user--content .button-register--wrapper .button-register:before {
    content: "";
    top: var(--spacing-0,0);
    left: var(--spacing-0,0);
    z-index: -1;
    background-color: var(--color-sega-primary-0,#0057ff);
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
    outline-color: var(--color-sega-primary-0,#0057ff);
    width: 100%;
    height: 100%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    clip-path: polygon(17px 0,100% 0,calc(100% - 17px) 100%,0 100%);
    transition-duration: .3s;
    transition-timing-function: linear;
    position: absolute
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .menu--user--content .button-register--wrapper .button-register:hover:before {
    background-color: var(--color-sega-tertiary-0,#3649a5)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .menu--user--content .user-name {
    padding-inline:var(--spacing-16,1rem)}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .menu--user--content .user-menu-toggle {
    padding: var(--spacing-16,1rem)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .menu--user--content .user-menu-toggle.active .icon:after {
    right: calc(var(--spacing-4,.25rem)*-1);
    bottom: calc(var(--spacing-4,.25rem)*-1);
    height: var(--spacing-8,.5rem);
    width: var(--spacing-8,.5rem);
    border-radius: var(--radius-full,9999px);
    background-color: var(--color-sega-success-0,#479f66);
    --tw-content: "";
    content: var(--tw-content);
    display: block;
    position: absolute
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .menu--user--content .user-menu-toggle svg {
    height: var(--spacing-16,1rem);
    width: var(--spacing-16,1rem)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu {
    background-color: var(--color-sega-tertiary-900,#0d1126)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.options-single .button-login {
    padding-block:var(--spacing-16,1rem);--tw-font-weight: var(--font-weight-bold,700);
    font-weight: var(--font-weight-bold,700)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.options-multiple {
    gap: var(--spacing-8,.5rem);
    padding-top: var(--spacing-20,1.25rem);
    padding-bottom: var(--spacing-12,.75rem)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.options-multiple .login-label {
    padding-inline:var(--spacing-16,1rem);--tw-font-weight: var(--font-weight-bold,700);
    font-weight: var(--font-weight-bold,700)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.options-multiple .login-providers {
    gap: var(--spacing-8,.5rem)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.options-multiple .login-providers .login-provider {
    flex-direction: column
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.options-multiple .login-providers .login-provider .button-login {
    padding-block:var(--spacing-8,.5rem);text-align: start
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.options-multiple .login-providers .login-provider .button-register {
    padding-block:var(--spacing-4,.25rem);padding-right: var(--spacing-16,1rem);
    padding-left: var(--spacing-32,2rem);
    text-align: start
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.logged-in {
    gap: var(--spacing-8,.5rem);
    padding-top: var(--spacing-20,1.25rem);
    padding-bottom: var(--spacing-12,.75rem)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.logged-in:has(.button-logout:only-child) {
    padding: var(--spacing-0,0)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.logged-in:has(.button-logout:only-child) .button-logout {
    padding-block:var(--spacing-16,1rem);--tw-font-weight: var(--font-weight-bold,700);
    font-weight: var(--font-weight-bold,700)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.logged-in .user-menu--links .user-menu--link {
    padding-inline:var(--spacing-16,1rem);padding-block: var(--spacing-8,.5rem)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.logged-in .user-menu--links .user-menu--link:before {
    content: "";
    top: var(--spacing-0,0);
    left: var(--spacing-0,0);
    width: 100%;
    height: 100%;
    transition-property: all;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    background-color: #0000;
    transition-duration: .3s;
    transition-timing-function: linear;
    display: block;
    position: absolute
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.logged-in .user-menu--links .user-menu--link:before:hover {
    background-color: var(--color-sega-primary-800,#002366)
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu.logged-in .user-menu--links .user-menu--link:before {
    z-index: -1
}

header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu .button-login,header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu .button-logout {
    cursor: pointer;
    padding-inline:var(--spacing-16,1rem);display: inline-block;
    position: relative
}

:is(header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu .button-login,header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu .button-logout):before {
    content: "";
    top: var(--spacing-0,0);
    left: var(--spacing-0,0);
    z-index: -1;
    width: 100%;
    height: 100%;
    transition-property: all;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    background-color: #0000;
    transition-duration: .3s;
    transition-timing-function: linear;
    display: block;
    position: absolute
}

:is(header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu .button-login,header[data-theme=sega] .header-wrapper .features-wrapper .menu--user .user-menu .button-logout):hover:before {
    background-color: var(--color-sega-primary-800,#002366)
}

header[data-theme=sega] .header-wrapper .features-wrapper .basket-icon {
    color: var(--color-white,#fff)
}

:is(header[data-theme=sega],.mobile-navigation-wrapper[data-theme=sega]) .component.component--menu_main .content-wrapper nav.navigation .menu .menu-item .menu-link {
    font-family: var(--font-sega-headings,Inter Tight,sans-serif);
    text-transform: uppercase;
    font-weight: 800
}

:is(header[data-theme=sega],.mobile-navigation-wrapper[data-theme=sega]) .component.component--menu_main .content-wrapper nav.navigation .menu .menu-item .menu-link-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex
}

:is(header[data-theme=sega],.mobile-navigation-wrapper[data-theme=sega]) .component.component--menu_main .content-wrapper nav.navigation .menu .menu-item .menu-link-wrapper .menu-link-toggle {
    height: var(--spacing-20,1.25rem);
    width: var(--spacing-20,1.25rem);
    margin-left: var(--spacing-8,.5rem);
    background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20strokeWidth%3D%224%22%20stroke%3D%22white%22%3E%3Cpath%20strokeLinecap%3D%22round%22%20strokeLinejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 1.25rem
}

:is(header[data-theme=sega],.mobile-navigation-wrapper[data-theme=sega]) .component.component--cta .content-wrapper a.cta-theme--default:before {
    transition-property: all;
    transition-timing-function: var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));
    transition-duration: var(--tw-duration,var(--default-transition-duration,.15s));
    --tw-duration: .3s;
    --tw-ease: linear;
    background-position: 2rem;
    background-repeat: no-repeat;
    background-size: 1rem;
    transition-duration: .3s;
    transition-timing-function: linear;
    outline-width: 0!important
}

@media screen and (min-width: 480px) {
    :is(header[data-theme=sega],.mobile-navigation-wrapper[data-theme=sega]) .component.component--cta .content-wrapper a.cta-theme--default:before {
        background-image:url("data:image/svg+xml,%3Csvg fill='none' version='1.1' viewBox='0 0 20 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m16.599 2-6.5789 6.1089-6.6103-6.1089zm1.5696 1.2718-7.4664 6.933-0.6788 0.6303-0.6804-0.6287-7.5114-6.9416v10.735h16.337zm-18.168-3.2718h20v16h-20z' clip-rule='evenodd' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
    }
}

.mobile-navigation-wrapper[data-theme=sega] {
    background-color: var(--color-sega-primary-800,#002366);
    width: 85%;
    right: 0
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content {
    height: 100%;
    color: var(--color-sega-light-0,#fff)
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content:before {
    content: "";
    background-image: linear-gradient(#00000080 0%,#0000 100%);
    width: 100%;
    height: .25rem;
    transition: all .25s ease-in-out;
    position: absolute;
    top: 0;
    left: 0
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section {
    height: 100%
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper.header--signup-link {
    margin-inline:var(--spacing-24,1.5rem);width: 100%;
    margin-top: auto;
    margin-bottom: 2rem
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper.header--signup-link .component.component--cta,.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper.header--signup-link .component.component--cta .content-wrapper a.cta-theme--default {
    width: 100%
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content {
    gap: var(--spacing-16,1rem);
    flex-direction: column;
    display: flex
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--menu_main {
    margin-right: auto
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--menu_main nav.navigation .menu.menu--depth--0 {
    padding-block:var(--spacing-24,1.5rem)}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--menu_main nav.navigation .menu: not(.menu--depth--0) {
    background-color:var(--color-sega-tertiary-900,#0d1126);
    font-size: var(--text-14,.875rem);
    line-height: var(--tw-leading,var(--text-14--line-height,1.5))
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--menu_main nav.navigation .menu .menu-item .menu-link-wrapper,.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--social {
    margin-inline:var(--spacing-24,1.5rem);padding-block: var(--spacing-16,1rem)
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--social .content-wrapper .social-link-list {
    justify-content: flex-start;
    gap: 1rem
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--social .content-wrapper .social-link-list .social-link {
    height: 1.5rem
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--social .content-wrapper .social-link-list .social-link a {
    color: var(--color-sega-dark-0,#000)
}

.mobile-navigation-wrapper[data-theme=sega] .mobile-navigation-content section .section-content .column-wrapper .column-content .component.component--social .content-wrapper .social-link-list .social-link a:hover {
    color: var(--color-sega-secondary-0,#e1eaff)
}

header .features-wrapper .menu--user .menu--user--content .button-register--wrapper {
    z-index: 0;
    height: 100%
}

header .features-wrapper .menu--user .menu--user--content .button-register--wrapper .button-register {
    justify-content: center;
    align-items: center;
    height: 100%;
    display: flex
}

header .features-wrapper .menu--user .user-menu {
    right: var(--spacing-0,0);
    z-index: 20;
    white-space: nowrap;
    position: absolute
}

header .features-wrapper .menu--user .user-menu.options-multiple {
    flex-direction: column;
    display: flex
}

header .features-wrapper .menu--user .user-menu.options-multiple .login-providers .login-provider {
    display: flex;
    position: relative
}

header .features-wrapper .menu--user .user-menu.logged-in {
    flex-direction: column;
    display: flex
}

header .features-wrapper .menu--user .user-menu.logged-in .user-name {
    display: flex
}

header .features-wrapper .menu--user .user-menu.logged-in .user-menu--links .user-menu--link {
    position: relative
}

header .features-wrapper .basket-icon {
    min-height: 100%;
    padding: var(--spacing-16,1rem);
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    display: flex
}

header .features-wrapper .basket-icon>svg {
    height: var(--spacing-18,1.125rem);
    width: var(--spacing-18,1.125rem)
}

header .section--section_header .section-content .column-wrapper .column-content .component.component--menu_main nav.navigation .menu.expand-right .menu-item.menu-item--expandable.menu-item--collapsed>.menu-link-wrapper>.menu-link-toggle {
    transition: transform .25s ease-in-out;
    transform: rotate(0)
}

header .section--section_header .section-content .column-wrapper .column-content .component.component--menu_main nav.navigation .menu.expand-right .menu-item.menu-item--expandable.menu-item--expanded>.menu-link-wrapper>.menu-link-toggle {
    transform: rotate(-90deg)
}

header button.mobile-nav-toggle {
    width: 1.5rem;
    min-width: 1.5rem;
    height: 1.5rem
}

header button.mobile-nav-toggle:after {
    content: "";
    background-color: #000;
    width: 100%;
    height: 2px;
    transition: all .25s ease-in-out;
    position: absolute;
    top: 33.3%;
    left: 0
}

header button.mobile-nav-toggle.is-open:after {
    width: 0
}

header button.mobile-nav-toggle.is-open .mobile-nav-toggle-content:before {
    top: 16.65%;
    transform: rotate(45deg)
}

header button.mobile-nav-toggle.is-open .mobile-nav-toggle-content:after {
    width: 100%;
    top: calc(83.31% + 1px);
    left: 0;
    transform: rotate(-45deg)
}

header button.mobile-nav-toggle .mobile-nav-toggle-content:before,header button.mobile-nav-toggle .mobile-nav-toggle-content:after {
    content: "";
    transform-origin: 0;
    background-color: #000;
    height: 2px;
    transition: all .25s ease-in-out;
    position: absolute
}

header button.mobile-nav-toggle .mobile-nav-toggle-content:before {
    width: 100%;
    top: 0;
    left: 0
}

header button.mobile-nav-toggle .mobile-nav-toggle-content:after {
    width: 50%;
    top: 66.6%;
    left: 50%
}

.component.component--menu_main nav.navigation .menu .menu-item.menu-item--expandable.menu-item--collapsed>.menu-link-wrapper>.menu-link-toggle {
    transition: transform .25s ease-in-out;
    transform: rotate(0)
}

.component.component--menu_main nav.navigation .menu .menu-item.menu-item--expandable.menu-item--expanded>.menu-link-wrapper>.menu-link-toggle {
    transition: transform .25s ease-in-out;
    transform: rotate(-180deg)
}

.component.component--menu_main nav.navigation .menu .menu-item.menu-item--expandable>.menu-link {
    justify-content: space-between;
    display: flex
}

.component.component--menu_main nav.navigation .menu .menu-item .menu-link.menu-link--active-trail {
    font-weight: 700
}

.mobile-navigation-wrapper {
    z-index: 21
}

.mobile-navigation-wrapper .component.component--menu_main {
    width: 100%
}

.mobile-navigation-wrapper .component.component--menu_main nav.navigation .menu .menu-item.menu-item--expandable.expanded-on-mobile>.menu-link:after {
    content: none
}
    `;
  render() {
    return html`
      <header data-theme="sega"><div><svg id="レイヤー_1" data-name="レイヤー 1" viewBox="0 0 120 40.02" width="105" height="32"><defs></defs><title>logo-sega</title><path fill="#fff" d="M346.27,408.5a10.35,10.35,0,0,0-19.71,0l-3.43,10.28V401.87H304.86a12.15,12.15,0,0,0-8.47,3.43v-3.43H277.57a12.17,12.17,0,0,0-8.86,3.82v-3.82H251a13.83,13.83,0,0,0-10.12,23.25h-3.72v16.05h17.72a13.81,13.81,0,0,0,11.82-6.68,12.17,12.17,0,0,0,10.87,6.68h18.82v-3.42a12.14,12.14,0,0,0,8.47,3.42h52.3Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M254.88,427.89H239.93v4.7h14.95a5.26,5.26,0,1,0,0-10.51H251a6.37,6.37,0,0,1,0-12.74H266v-4.7H251a11.07,11.07,0,0,0,0,22.14h3.88a.56.56,0,0,1,0,1.11Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M251,415.16H266v-4.71H251A5.26,5.26,0,1,0,251,421h3.88a6.37,6.37,0,0,1,0,12.73H239.93v4.71h14.95a11.08,11.08,0,0,0,0-22.15H251a.55.55,0,1,1,0-1.1Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M304.86,410.45a3.61,3.61,0,0,0-3.6,3.59v15a3.6,3.6,0,0,0,3.6,3.59h9.69V422.08h-7.48v4.7h2.77v1.11h-2.77a1.11,1.11,0,0,1-1.1-1.11V416.26a1.1,1.1,0,0,1,1.1-1.1h13.29v-4.71Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M334.31,432.59h10.93l-7.41-22.08a1.48,1.48,0,0,0-1.42-1,1.5,1.5,0,0,0-1.41,1l-9.62,27.93h5.55l3.38-9.92Zm2-10,1.6,4.76h-3.22Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M343.65,409.57a7.59,7.59,0,0,0-14.55-.1l-8.74,25.63V416.26H307.07V421h8.59V433.7h-10.8a4.7,4.7,0,0,1-4.7-4.7V414a4.71,4.71,0,0,1,4.7-4.7h15.5v-4.7h-15.5a9.41,9.41,0,0,0-9.41,9.41V429a9.41,9.41,0,0,0,9.41,9.41h19.35l9.73-28.26a2.6,2.6,0,0,1,4.95,0l7.89,23.52H334.31v4.71h19Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M277.57,433.7a4.7,4.7,0,0,1-4.7-4.7V414a4.71,4.71,0,0,1,4.7-4.7h16.05v-4.7H277.57a9.41,9.41,0,0,0-9.41,9.41V429a9.41,9.41,0,0,0,9.41,9.41h16.05V433.7Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M278.68,426.78H290.3v-4.7H274V429a3.6,3.6,0,0,0,3.6,3.59h16.05v-4.7H279.78A1.11,1.11,0,0,1,278.68,426.78Z" transform="translate(-237.16 -401.16)"/><path fill="#117bbd" d="M290.3,416.26H278.68a1.1,1.1,0,0,1,1.11-1.1h13.83v-4.71H277.57A3.61,3.61,0,0,0,274,414V421H290.3Z" transform="translate(-237.16 -401.16)"/><path fill="currentColor" d="M350.55,408.53a3.69,3.69,0,1,0,0-7.37,3.69,3.69,0,1,0,0,7.37Zm-3.17-3.69a3.17,3.17,0,0,1,5.42-2.24,3.17,3.17,0,0,1-2.25,5.42,3.18,3.18,0,0,1-3.17-3.18Z" transform="translate(-237.16 -401.16)"/><path fill="currentColor" d="M349.6,405.15v1.74h-.53V402.8h1.52a1.9,1.9,0,0,1,1.22.25,1.14,1.14,0,0,1,.43.95,1.06,1.06,0,0,1-1,1.12l1.15,1.77h-.65l-1.11-1.74Zm0-.45h1.09a2.11,2.11,0,0,0,.5,0,.63.63,0,0,0,.51-.66.74.74,0,0,0-.25-.57,1.14,1.14,0,0,0-.79-.18H349.6Z" transform="translate(-237.16 -401.16)"/></svg></div></header>
    `;
  }
}
customElements.define('sega-app-bar', SegaAppBar);
class SegaApp extends LitElement {
    static styles = css`
      :host { display: block; font-family: var(--font-sega-default); width:100%; height: 100vh; }
    `;
  render() {
    return html`
      <sega-app-bar></sega-app-bar>
      <sega-article></sega-article>
      <sega-footer></sega-footer>
    `;
  }
}
customElements.define('sega-app', SegaApp);
