/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */

$(function() {
    /* This is first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in application.
    */
    describe('RSS Feeds', function() {
        /* It tests to make sure that the allFeeds variable has
         * been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('has defined and not empty URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty.
         */
        it('has defined and not empty name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
        var body = $('body');

        /* Test that ensures the menu element is hidden by default. */
        it('should hide menu element by default', function() {
            expect((body).hasClass('menu-hidden')).toBeTruthy();
        });

        /* Test that ensures the menu changes visibility when
          * the menu icon is clicked. This test has two expectations:
          * the menu display when clicked and it hide when clicked again.
          */
        it('menu changes visibility when the menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

        describe('Initial Entried', function() {

        /* Test that ensures when the loadFeed function is called
         * and completes its work, there is at least a single .entry
         * element within the .feed container.
         */
            beforeEach(function(done) {
                loadFeed(0, function() {
                    done();
                });
            });

            it('there is at least a single .entry element within .feed container', function(done) {
                var entry = $('.entry');
                var feedChildren = $('.feed').children();
                expect(entry.length).not.toBe(0);
                expect(feedChildren.length).not.toBe(0);
                expect(feedChildren[0].querySelector('.entry').className).toBe('entry');
                done();
            });
        });

        describe('New Feed Selection', function() {
            var content1 = null;
            var content2 = null;

        /* Test that ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
            beforeEach(function(done) {
                loadFeed(0, function() {
                    content1 = $('.feed').html();

                    loadFeed(1, function() {
                        content2 = $('.feed').html();
                        done();
                    });
                });
            });

            it('new feed is added to content', function(done) {
                expect(content1 != content2).toBe(true);
                done();
            });
        });
    });
}());
