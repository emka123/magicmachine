$(document).ready(function(){
    $("#quote-button").click(function(){
        $.ajax({
            url: 'http://www.stands4.com/services/v2/quotes.php?uid=4596&tokenid=CFFBMw71bnIlF7fe',
            success: function(date) {
                quoteObject = date.querySelector('quote').firstChild
                quoteString = new XMLSerializer().serializeToString(quoteObject)
          
                authorObject = date.querySelector('author').firstChild
                authorString = new XMLSerializer().serializeToString(authorObject)
                $("#quote").replaceWith("<div id='quote'><h1>" + quoteString + "</h1><p>Author: " + authorString  + "</p></div>");  
            }
        })
    });
});

