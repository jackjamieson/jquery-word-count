# jquery-word-count
Watches text fields and displays to the user how many characters they have remaining.

##Good to know
* Requires jQuery, if you aren't already using it this script is overkill
* Text color changes at < 1/2 the characters, < 1/4, and at <= 0, getting progressively brighter red
* You can override the colors and styles of each of the change over points in CSS
* To use, drop the CSS file and JS file into your project.  There are only 4 CSS rules, you can put them into your own CSS file if that's easier.
* Character counting works on all keyboard input as well as right click>copy>paste.

##How to use
* Create a span with class "char".  
* The ID of the span must have "charCount@[id-of-field-to-watch]@[start-value]".

##Example code
    <span class="char" id="charCount@test@10"></span>
    
