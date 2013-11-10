  var arr = [["Calories","cal",2000,,349,105,257,102,111,42],
			["Protein","g",50,,25.71,1.29,4.4,8.22,1.19,5.16],
			["Fat","g",65,,16.41,0.39,18,2.37,0.5,0.72],
			["Fiber","g",25,,3.4,3.1,0.3,0,26.76,0.72],
			["Calcium","mg",1000,,188,6,41,305,1,180],
			["Iron, Fe","mg",18,,1.76,0.31,0.5,0.07,8.01,4.86],
			["Magnesium, Mg","mg",400,,0,32,9,27,2,144],
			["Potassium, K","mg",3500,,785,422,72,3366,23,1167],
			["Sodium, Na","mg",2400,,742,1,350,107,140,144],
			["Zinc, Zn","mg",15,,0,0.18,0.41,1.02,0.04,0.96],
			["Vitamin C","mg",60,,30.9,10.3,0.3,0,7.3,50.4],
			["Vitamin, B-6","mg",2,,0,0.433,0.042,0.09,1.072,0.348],
			["Vitamin, B-12","µg",6,,0,0,0.14,1.15,2.43,0],
			["Vitamin A, IU","IU",5000,,7917,76,127,478,468,16878],
			["Vitamin E (alpha-tocopherol)","mg",20,,0,0.12,438,0.02,0.02,3.66],
			["Vitamin D" ,"IU",400,,0,0,14,117,53,0],
			["Vitamin K (phylloquinone)" ,"µg",80,,0,0.6,3.5,0.2,0.1,869.4]];
			var arr1 = [["Calories","cal",2000,,349,105,257,102,111,42],
			["Protein","g",50,,25.71,1.29,4.4,8.22,1.19,5.16],
			["Fat","g",65,,16.41,0.39,18,2.37,0.5,0.72],
			["Fiber","g",25,,3.4,3.1,0.3,0,26.76,0.72],
			["Calcium","mg",1000,,188,6,41,305,1,180],
			["Iron, Fe","mg",18,,1.76,0.31,0.5,0.07,8.01,4.86],
			["Magnesium, Mg","mg",400,,0,32,9,27,2,144],
			["Potassium, K","mg",3500,,785,422,72,3366,23,1167],
			["Sodium, Na","mg",2400,,742,1,350,107,140,144],
			["Zinc, Zn","mg",15,,0,0.18,0.41,1.02,0.04,0.96],
			["Vitamin C","mg",60,,30.9,10.3,0.3,0,7.3,50.4],
			["Vitamin, B-6","mg",2,,0,0.433,0.042,0.09,1.072,0.348],
			["Vitamin, B-12","µg",6,,0,0,0.14,1.15,2.43,0],
			["Vitamin A, IU","IU",5000,,7917,76,127,478,468,16878],
			["Vitamin E (alpha-tocopherol)","mg",20,,0,0.12,438,0.02,0.02,3.66],
			["Vitamin D" ,"IU",400,,0,0,14,117,53,0],
			["Vitamin K (phylloquinone)" ,"µg",80,,0,0.6,3.5,0.2,0.1,869.4]];
			//nutrients = [54954,8,2,0,234,0,0,99,0,0,0,0,0,0,0,0,0];
			
 $(document).ready(function(){
 var choice = 0;
			var updateProgress = function(nutrient, val){
	
	$("#" + nutrient + "> progress").prop("value", val);
	$("#" + nutrient + "> span").html(val + "%");
  }
 
   for (x = 1; x<18; x++){
		updateProgress(x, window.nutrients[x-1]);
   }
			var display = function(){
				choice = $("#foodItem :selected").val() -1 ;
				//console.log(choice);
				var stuff = "";
				for ( x = 0; x <17; x++){
					window.nutrients[x] += Math.round(arr1[x][choice+4]/arr1[x][2]*10000)/100;
					stuff += "<li>" + arr1[x][0] + ": " + arr1[x][choice+4] + " " + arr1[x][1] + " (" + Math.round(arr1[x][choice+4]/arr1[x][2]*10000)/100 + "%)</li>";
					}
					console.log(stuff);
					$("#itemInfo").html(stuff);
			}

			$("#choose").click(function(){
				for(y=0; y<17; y++){
				for (x = 4; x <10; x++){
					arr1[y][x] = arr[y][x]*$("#numServings").val();
				}
			}
			display();
			});
			$("#save").click(function(){
				for(y=0; y<17; y++){
				for (x = 4; x <10; x++){
					arr1[y][x] = arr[y][x]*$("#numServings").val();
				}
			}
			display();
				for( x = 0; x < 17; x++){
					//nutrients[x] = arr1[0][choice+4];
					
					updateProgress(x+1, nutrients[x]);
					//console.log(nutrients[0]);
				}
				$("#first").hide();
				$("#second").show();
				
			});
			
 });