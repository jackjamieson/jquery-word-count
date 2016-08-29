var WORDCOUNT = {

  watchField: function () {
    
    var self = this;
    
    $( document ).ready( function(){

      $("span[id^='charCount']").each(function (index, value) {
        
        var spanElement = $(this);
        var targetElement = $(this).attr("id");
        
        // extracted from the span
        var spanStartValue = targetElement.substring(targetElement.lastIndexOf("@") + 1, targetElement.length);
        var targetElementIdRef = $("#" + targetElement.substring(targetElement.indexOf("@") + 1, targetElement.lastIndexOf("@")));

        // set the initial value
        spanElement.text(spanStartValue);

        // check for existing input
        if ($(targetElementIdRef).val().length > 0) {
          self.updateText(spanStartValue, targetElementIdRef, spanElement);
        }

        // monitor keyup
        $(targetElementIdRef).keyup(function () {
          self.updateText(spanStartValue, this, spanElement);
        });

        // monitor any other input
        $(targetElementIdRef).bind('input', function () {
          self.updateText(spanStartValue, this, spanElement);
        });

      });
    });
  },
  
  updateText : function(spanStartValue, lengthCheckRef, spanElement) {
    var numLetters = spanStartValue - ($(lengthCheckRef).val().length);
    spanElement.text(numLetters);

    this.cssChange(numLetters, spanStartValue, spanElement);
  },

  cssChange: function (numLetters, divMax, divElement) {

    if (numLetters <= divMax / 2) {
      divElement.removeClass("charDanger");
      divElement.addClass("charWarning");
      if (numLetters <= divMax / 4) {
        divElement.addClass("charDanger");
        divElement.removeClass("charWarning");
      }
      divElement.removeClass("charZero");
      divElement.removeClass("char");
    }
    else {
      divElement.addClass("char");
      divElement.removeClass("charWarning");
      divElement.removeClass("charDanger");
      divElement.removeClass("charZero");
    }
    if (numLetters <= 0) {
      divElement.addClass("charZero");
      divElement.removeClass("charWarning");
      divElement.removeClass("charDanger");
    }
  }

}

// start watching for fields to monitor
WORDCOUNT.watchField();