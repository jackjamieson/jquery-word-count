$(document).ready(function () {

  $(  "span[id^='charCount']" ).each(function( index , value) {

    var divElement = $(this);
    var element = $(this).attr("id");
    var divMax = element.substring(element.lastIndexOf("@")+1, element.length);

    // set the initial value
    divElement.text(divMax);

    $("#" + element.substring(element.indexOf("@")+1, element.lastIndexOf("@"))).keyup(function() {

      var numLetters = divMax - ($(this).val().length);
      divElement.text(numLetters);

      cssChange(numLetters, divMax, divElement);
    });

    $("#" + element.substring(element.indexOf("@")+1, element.lastIndexOf("@"))).bind('input', function() {

      var numLetters = divMax - ($(this).val().length);
      divElement.text(numLetters);

      cssChange(numLetters, divMax, divElement);
    });

  });

  function cssChange(numLetters, divMax, divElement){

    if(numLetters <= divMax/2)
    {
      divElement.removeClass("charDanger");
      divElement.addClass("charWarning");
      if(numLetters <= divMax/4)
      {
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
    if(numLetters <= 0)
    {
      divElement.addClass("charZero");
      divElement.removeClass("charWarning");
      divElement.removeClass("charDanger");
    }
  }
});
