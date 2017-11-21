/* TO USE:
 *
 * This entry-point assumes that you are doing 1 of 2 things:
 * 1. Your webpack (or other transpilation library) config is setup to transform
 *    Node modules installed for your project (usually located in /path/to/project/node_modules)
 *    or at least: just this module
 *
 * 2. You have forked this library, transpiled this file yourself, updated the
 *    "main" entry in the package.json of your fork, and are pointing to your
 *    specific fork in your package.json
 *
 * Attempts to `import Foundation from 'foundation-sites';` will fail in a non-ES6
 * environment (possibly, most notably: trying to precompile assets in Rails)
 *
 * If you do not wish to do the above steps you may do the following:
 * 1. `import 'foundation-sites/dist/js/foundation'` in your webpack (or other
 *    transpilation library) entry-point file.
 *
 * 2. Anywhere you are calling `$.fn.foundation()` (most commonly as
 *    `$(document).foundation()`) add `window.Foundation.addToJquery($)` where
 *    `$` is either specific to the file or is on the window
 */
import $ from 'jquery';

import { Foundation } from '../../js/foundation.core';
Foundation.addToJquery($);

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.

import { rtl, GetYoDigits, transitionend } from '../../js/foundation.util.core';
Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;

import { Box } from '../../js/foundation.util.box'
import { onImagesLoaded } from '../../js/foundation.util.imageLoader';
import { Keyboard } from '../../js/foundation.util.keyboard';
import { MediaQuery } from '../../js/foundation.util.mediaQuery';
import { Motion, Move } from '../../js/foundation.util.motion';
import { Nest } from '../../js/foundation.util.nest';
import { Timer } from '../../js/foundation.util.timer';

Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;

// Touch and Triggers previously were almost purely sede effect driven,
// so n../../js// need to add it to Foundation, just init them.

import { Touch } from '../../js/foundation.util.touch';
Touch.init($);

import { Triggers } from '../../js/foundation.util.triggers';
Triggers.init($, Foundation);

import { Abide } from '../../js/foundation.abide';
Foundation.plugin(Abide, 'Abide');

import { Accordion } from '../../js/foundation.accordion';
Foundation.plugin(Accordion, 'Accordion');

import { AccordionMenu } from '../../js/foundation.accordionMenu';
Foundation.plugin(AccordionMenu, 'AccordionMenu');

import { Drilldown } from '../../js/foundation.drilldown';
Foundation.plugin(Drilldown, 'Drilldown');

import { Dropdown } from '../../js/foundation.dropdown';
Foundation.plugin(Dropdown, 'Dropdown');

import { DropdownMenu } from '../../js/foundation.dropdownMenu';
Foundation.plugin(DropdownMenu, 'DropdownMenu');

import { Equalizer } from '../../js/foundation.equalizer';
Foundation.plugin(Equalizer, 'Equalizer');

import { Interchange } from '../../js/foundation.interchange';
Foundation.plugin(Interchange, 'Interchange');

import { Magellan } from '../../js/foundation.magellan';
Foundation.plugin(Magellan, 'Magellan');

import { OffCanvas } from '../../js/foundation.offcanvas';
Foundation.plugin(OffCanvas, 'OffCanvas');

import { Orbit } from '../../js/foundation.orbit';
Foundation.plugin(Orbit, 'Orbit');

import { ResponsiveMenu } from '../../js/foundation.responsiveMenu';
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');

import { ResponsiveToggle } from '../../js/foundation.responsiveToggle';
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');

import { Reveal } from '../../js/foundation.reveal';
Foundation.plugin(Reveal, 'Reveal');

import { Slider } from '../../js/foundation.slider';
Foundation.plugin(Slider, 'Slider');

import { SmoothScroll } from '../../js/foundation.smoothScroll';
Foundation.plugin(SmoothScroll, 'SmoothScroll');

import { Sticky } from '../../js/foundation.sticky';
Foundation.plugin(Sticky, 'Sticky');

import { Tabs } from '../../js/foundation.tabs';
Foundation.plugin(Tabs, 'Tabs');

import { Toggler } from '../../js/foundation.toggler';
Foundation.plugin(Toggler, 'Toggler');

import { Tooltip } from '../../js/foundation.tooltip';
Foundation.plugin(Tooltip, 'Tooltip');

import { ResponsiveAccordionTabs } from '../../js/foundation.responsiveAccordionTabs';
Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');

export default Foundation;
