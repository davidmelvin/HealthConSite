 $(document).ready(function(){
  
  var updateProgress = function(nutrient, val){
	
	$("#" + nutrient + "> progress").prop("value", val);
	$("#" + nutrient + "> span").html(val + "%");
  }
 
   for (x = 1; x<18; x++){
		updateProgress(x, window.nutrients[x-1]);
   }
 });