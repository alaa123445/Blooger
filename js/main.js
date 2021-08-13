const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    580: {
        items: 2
    },
    830: {
        items: 2
    },

    960: {
        items: 3
    }
}



$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        // autoplay: true,
        // autoplayTimeOut: 1000,
        dots: false,
        nav: true,
        navText: [$(".nav-left"), $(".nav-right")],
        responsive: responsive



    });
});

AOS.init();


// items
// Type: Number
// Default: 3

// The number of items you want to see on the screen.

// margin
// Type: Number
// Default: 0

// margin-right(px) on item.

// loop
// Type: Boolean
// Default: false

// Infinity loop. Duplicate last and first items to get loop illusion.

// center
// Type: Boolean
// Default: false

// Center item. Works well with even an odd number of items.

// mouseDrag
// Type: Boolean
// Default: true

// Mouse drag enabled.

// touchDrag
// Type: Boolean
// Default: true

// Touch drag enabled.

// pullDrag
// Type: Boolean
// Default: true

// Stage pull to edge.

// freeDrag
// Type: Boolean
// Default: false

// Item pull to edge.

// stagePadding
// Type: Number
// Default: 0

// Padding left and right on stage (can see neighbours).

// merge
// Type: Boolean
// Default: false

// Merge items. Looking for data-merge='{number}' inside item..

// mergeFit
// Type: Boolean
// Default: true

// Fit merged items if screen is smaller than items value.

// autoWidth
// Type: Boolean
// Default: false

// Set non grid content. Try using width style on divs.

// startPosition
// Type: Number/String
// Default: 0

// Start position or URL Hash string like '#id'.

// URLhashListener
// Type: Boolean
// Default: false

// Listen to url hash changes. data-hash on items is required.

// nav
// Type: Boolean
// Default: false

// Show next/prev buttons.

// rewind
// Type: Boolean
// Default: true

// Go backwards when the boundary has reached.

// navText
// Type: Array
// Default: [&#x27;next&#x27;,&#x27;prev&#x27;]

// HTML allowed.

// navElement
// Type: String
// Default: div

// DOM element type for a single directional navigation link.

// slideBy
// Type: Number/String
// Default: 1

// Navigation slide by x. 'page' string can be set to slide by page.

// slideTransition
// Type: String
// Default: ``

// You can define the transition for the stage you want to use eg. linear.
// responsive
// Type: Object
// Default: empty object

//Object containing responsive options. Can be set to false to remove responsive capabilities.