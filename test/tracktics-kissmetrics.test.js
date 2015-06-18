'use strict';

var trackticsKiss = require('..');

function resetKmq() {
    global.window._kmq = [];
}

describe('Tracktics KISSmetrics Plugin', function() {
    var subject;

    beforeEach(function() {
        subject = trackticsKiss();
    });

    it('should define name', function() {
        expect(subject.name).toBe('KISSmetrics');
    });

    describe('#trackPage()', function() {
        var url;

        beforeEach(function() {
            url = '/some/url';
            resetKmq();
            subject.trackPage(url);
        });

        it('should push expected data to _kmq queue', function() {
            expect(global.window._kmq[0]).toEqual(['record', 'Pageview', { Page: url }]);
        });
    });

    describe('#trackEvent()', function() {
        var action, properties;

        beforeEach(function() {
            action = 'click';
            properties = { event: 'Download' };
        });

        describe('when no additional properties are specified', function() {

            beforeEach(function() {
                resetKmq();
                subject.trackEvent(action, properties);
            });

            it('should push expected data to _kmq queue', function() {
                expect(global.window._kmq[0]).toEqual(['record', properties.event]);
            });
        });

        describe('when additional properties are specified', function() {

            beforeEach(function() {
                resetKmq();
                properties.plan = 'Pro';
                subject.trackEvent(action, properties);
            });

            it('should push expected data to _kmq queue', function() {
                expect(global.window._kmq[0]).toEqual(['record', properties.event, { plan: 'Pro' }]);
            });
        });
    });

    describe('when window._kmq is already defined', function() {
        var kmq;

        beforeEach(function() {
            kmq = [];
            global.window._kmq = kmq;

            trackticsKiss();
        });

        it('should preserve window._kmq', function() {
            expect(global.window._kmq).toBe(kmq);
        });
    });
});
