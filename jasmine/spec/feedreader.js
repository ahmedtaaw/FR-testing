
$(function() {
  
    describe('RSS Feeds', function() {

         /* 
         *check if all feeds are defined
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         /* 
         *check if URL in each feed are defined and not empty
         */
        it('URL are Defined', function(){
            allFeeds.forEach(function(e){
                expect(e.url).toBeDefined();
            });
        });
        it('URL not Empty', function(){
            allFeeds.forEach(function(e){
                expect(e.url.length).not.toEqual(0);
            });
        });


        /* 
         *check if name in each feed are defined and not empty
         */
        it('Name are Defined', function(){
            allFeeds.forEach(function(e){
                expect(e.name).toBeDefined();
            });
        });

        it('Name not Empty', function(){
            allFeeds.forEach(function(e){
                expect(e.name.length).not.toEqual(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
         /* 
         *check if Menu is hidden by default
         */
        it('Menu is hidden', function(){
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
          /* 
         *check if Menu changes visibility when the menu icon is clicked
         */
         it('Menu changes visibility when the menu icon is clicked', function(){
            $('.menu-icon-link').click();//to check if visiable
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();//to return to initial state
            });
            
        });
    
    describe('Initial Entries', function() {
         /* 
         *should be at least one feed
         */
       beforeEach( function(done){
        loadFeed(0,function(){
        done();
    });
       });
       it('should be at least one feed',function(){
        var feeds = $('.feed a');
        //console.log("feeds.length",feeds.length);
        expect(feeds.length).toBeGreaterThan(0);
      
          });
    });
    
    describe('New Feed Selection', function() {
        /* 
         *check if content changes when a new feed is loaded
         */
        beforeEach( function(done){
            loadFeed(1,function(){
            done();
        });
           });

           it('content changes when a new feed is loaded', function(){
            var firstfeed = allFeeds[0];
            var secondfeed = allFeeds[1];
            //console.log(firstfeed);
            //console.log(secondfeed);
            expect(firstfeed.name).not.toEqual(secondfeed.name);
        });
    });
}());
