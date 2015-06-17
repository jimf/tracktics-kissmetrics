'use strict';

/**
 * Main export function. Returns a KISSmetrics provider instance.
 *
 * @return {object}
 */
module.exports = function() {

    global.window._kmq = global.window._kmq || [];

    return {

        /**
         * KISSmetrics page-tracking implementation.
         *
         * @param {string} url URL to track
         */
        trackPage: function trackPage(url) {
            global.window._kmq.push(['record', 'Pageview', { Page: url }]);
        },

        /**
         * KISSmetrics event-tracking implementation.
         *
         * {@link http://support.kissmetrics.com/apis/javascript/}
         *
         * @param {string} action The type of interaction (e.g., "click")
         * @param {object} properties
         * @param {object} properties.event Event name
         */
        trackEvent: function trackEvent(action, properties) {
            var props = {},
                hasProps = false,
                data = ['record', properties.event];

            Object.keys(properties).forEach(function(key) {
                if (key !== 'event') {
                    props[key] = properties[key];
                    hasProps = true;
                }
            });

            if (hasProps) { data.push(props); }

            global.window._kmq.push(data);
        }
    };
};
