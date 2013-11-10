 $(document).ready(function(){
  
  var updateProgress = function(nutrient, val){
	
	$("#" + nutrient + "> progress").prop("value", val);
	$("#" + nutrient + "> span").html(val + "%");
  }
  updateProgress(1, 87);
  updateProgress(2, 10);
  updateProgress(3, 30);
  updateProgress(4, 47);
  updateProgress(5, 68);
   updateProgress(6, 86);
 });