
$(function () {

    describe('RSS Feeds', function () {

        /* 
        *check if all feeds are defined
        */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* 
        *check if URL in each feed are defined and not empty
        */
        it('URL are Defined', function () {
            allFeeds.forEach(function (e) {
                expect(e.url).toBeDefined();
            });
        });
        it('URL not Empty', function () {
            allFeeds.forEach(function (e) {
                expect(e.url.length).not.toEqual(0);
            });
        });


        /* 
         *check if name in each feed are defined and not empty
         */
        it('Name are Defined', function () {
            allFeeds.forEach(function (e) {
                expect(e.name).toBeDefined();
            });
        });

        it('Name not Empty', function () {
            allFeeds.forEach(function (e) {
                expect(e.name.length).not.toEqual(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        /* 
        *check if Menu is hidden by default
        */
        it('Menu is hidden', function () {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
        /* 
       *check if Menu changes visibility when the menu icon is clicked
       */
        it('Menu changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').click();//to check if visiable
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();//to return to initial state
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function () {
        /* 
        *should be at least one feed
        */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('should be at least one feed', function () {
            var entry = $('.feed .entry');
            //console.log("feeds.length",feeds.length);
            expect(entry.length).toBeGreaterThan(0);

        });
    });

    describe('New Feed Selection', function () {
        /* 
         *check if content changes when a new feed is loaded
         */
        var firstfeed;
        var secondfeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                console.log('loadFeed is finished');
                 firstfeed = $('.feed').html();
                done();
            });
        });

        it('content changes when a new feed is loaded', function (done) {
            //console.log($('.feed a')[0]);
            loadFeed(1, function () {
                 secondfeed = $('.feed').html();
                expect(firstfeed).not.toEqual(secondfeed);
                done();
            });
            
        });
 
    });
}());
