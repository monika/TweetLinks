# jquery.tweets

This is a jQuery plugin that will set up links for Twitter hashtags, usernames, and URLs within the text of a tweet. It requires the jQuery library.

## Usage

Select the element that contains the tweet text and run the `tweet` method on it:

    <p class="tweet">Getting ready for another day at #hogwarts. I hope @ronweasley did his homework. twitpic.com/b2y3un</p>

    <script>
        $('.tweet').tweet();
    </script>

The text of the tweet will be converted to:

    <p class="tweet">Getting ready for another day at <a href="https://twitter.com/search?q=&23hogwarts" title="Twitter / Search - #hogwarts">#hogwarts</a>. I hope <a href="http://twitter.com/ronweasley" title="@ronweasley on Twitter">@ronweasley</a> did his homework. <a href="http://twitpic.com/b2y3un">twitpic.com/b2y3un</a></p>

## Copyright & License

Copyright (c) 2013 Monika Hoex

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE

## Thanks

Thanks to [Tim Kempf](https://github.com/Fauntleroy) for helping me write my first plugin and listening to my never-ending stream of questions.