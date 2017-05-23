(function($) {
  
  // this function change all existing instances of the given substring.
String.prototype.changeValues = function( 
    strToReplace, // The substring you want to replace here
    SubString // The string you want to replace in here.
    ){
    var texT = this;
    var intIndexOfMatch = texT.indexOf( strToReplace );
    
    // Keep looping while an instance of the target string
    // still exists in the string.
    while (intIndexOfMatch != -1){
        // Relace out the current instance.
        texT = texT.replace( strToReplace, SubString )
        
        // Get the index of any next matching substring.
        intIndexOfMatch = texT.indexOf( strToReplace );
    }
    
    // Return the updated string with ALL the target strings
    // replaced out with the new substring.
    return( texT );
}

  
$('.SubmitChange').click(function(){
  var input = $('textarea').val();
  var output = '';
  var indent = 0;
  
  input = input.changeValues('{ [', '{<br>[');
  input = input.changeValues('" ["', '"<br>["');
 	input = input.changeValues('NULL [', 'NULL <br>[');
  input = input.changeValues('} ["', '}<br>["');
  input = input.changeValues('} }', '}<br>}');
  input = input.changeValues(') [', ')<br>[');
  
  for (var i = 0, len = input.length; i < len; i++) {
    output = output + input[i];
	}
  $('.showResult').html(input);
	})
})(jQuery)