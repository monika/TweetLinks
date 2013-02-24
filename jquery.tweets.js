(function( $ ){
	
	$.fn.tweet = function( parameters ) {
		
		// Check to see if the object exists if they haven't sent any arguments
		parameters = parameters || {};
		
		// Set Defaults
        var defaults = {
        	relationship: 'external',
        	protocol: 'http://'
        };
        
        // Merge objects together, if parameters aren't supplied in the argument
        parameters = $.extend( defaults, parameters );
        
        // Maintain Chainability
        return this.each(function() {
            
            // Wrapping new DOM element in jQuery
            var $this = $(this);
            
            // Grab string of text from tweet
            var string = $this.html();
		
    		// Username Regex - http://www.simonwhatley.co.uk/parsing-twitter-usernames-hashtags-and-urls-with-javascript
    		var username_regex = /[@]+[A-Za-z0-9-_]+/g;
		
    		// Hashtag Regex - http://www.simonwhatley.co.uk/parsing-twitter-usernames-hashtags-and-urls-with-javascript
    		var hashtag_regex = /[#]+[A-Za-z0-9-_]+/g;
		
    		// URL Regex
    		var url_regex = /(\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])))/ig;
            		
            // Format Tweet
            var tweet = string.replace( url_regex, function( match, url ){
                
                var href = url;
                
                // Checking for Protocol
                var has_protocol = /^[a-z]+:\/\//i.test( href );
				if( !has_protocol ) href = parameters.protocol + href;
				
				// Create Link
				return '<a href="'+ href +'" rel="'+ parameters.relationship +'">'+ url +'</a>';
                
            }).replace( username_regex, function( username ){
                
                // Remove "@" from username link            
                var href = username.replace('@','');
                
                // Create Link
                return '<a href="http://twitter.com/'+ href +'" rel="'+ parameters.relationship +'" title="'+ username +' on Twitter">'+ username +'</a>';
                
            }).replace(hashtag_regex, function( hashtag ){
                
                // URL escape "#"
                var href = hashtag.replace('#','%23');
                
                // Create Link
                return '<a href="http://search.twitter.com/search?q='+ href +'" rel="'+ parameters.relationship +'">'+ hashtag +'</a>';
                
            });
            
            $this.html( tweet );
            		
		    return this;
		
	    });
		
	};
	
})( jQuery );