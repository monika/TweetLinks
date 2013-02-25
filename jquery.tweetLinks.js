(function( $ ){

    $.fn.tweetLinks = function( parameters ) {

        parameters = parameters || {};

        return this.each(function() {

            var $this = $(this);
            var string = $this.html();

            // Regex Patterns
            var username_regex = /[@]+[A-Za-z0-9-_]+/g;
            var hashtag_regex = /[#]+[A-Za-z0-9-_]+/g;
            var url_regex = /(\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])))/ig;

            // Format Tweet
            var tweet = string.replace( url_regex, function( match, url ){

                var href = url;

                // Checking for Protocol (from https://github.com/Fauntleroy/jquery.links)
                var has_protocol = /^[a-z]+:\/\//i.test( href );
                if( !has_protocol ) href = 'http://' + href;

                // Create Link
                return '<a href="'+ href +'">'+ url +'</a>';

            }).replace( username_regex, function( username ){

                // Remove "@" from username link
                var href = username.replace('@','');

                // Create Link
                return '<a href="http://twitter.com/'+ href +'" title="'+ username +' on Twitter">'+ username +'</a>';

            }).replace(hashtag_regex, function( hashtag ){

                // URL escape "#"
                var href = hashtag.replace('#','%23');

                // Create Link
                return '<a href="https://twitter.com/search?q='+ href +'" title="Twitter / Search - '+ hashtag +'">'+ hashtag +'</a>';

            });

            $this.html( tweet );

            return this;

        });

    };

})( jQuery );