$(document).ready(function(){
	$(".row").hide();
	if(navigator.geolocation){
		var currentPosition = '';
		navigator.geolocation.getCurrentPosition(function(position){
			currentPosition = position;
			var latitude = currentPosition.coords.latitude;
			var longitude = currentPosition.coords.longitude;
			var url = "https://api.apixu.com/v1/current.json?key=dd37d0796730428dba8114458191801&q=" + latitude + "," + longitude;
			$.getJSON(url, function(data){
				var data = JSON.stringify(data);
				var json = JSON.parse(data);
				var country = json.location.country;
				var city = json.location.name;
				var state = json.location.region;
				var time = json.location.localtime;
				var temp = json.current.temp_c;
				var pressure = json.current.pressure_in;
				var humidity = json.current.humidity;
				var sunny = json.current.condition.text;
				var cloud = json.current.cloud;
				var wspeed = json.current.wind_kph;
				var wdeg = json.current.wind_degree;
				var wdir = json.current.wind_dir;
				var precip = json.current.precip_mm;

				$("button").on("click", function(){
					$(".initialHeading").html("Today's Weather");
					$(".report").hide();
					$(".temp").html(temp + " C");
					$(".pressure").html(pressure + " in");
					$(".humidity").html(humidity);
					$(".sunny").html(sunny);
					$(".cloudy").html(cloud == '0' ? "No":"Yes");
					$(".latitude").html(latitude);
					$(".longitude").html(longitude);
					$(".name").html(city);
					$(".region").html(state);
					$(".country").html(country);
					$(".time").html(time);
					$(".wspeed").html(wspeed + " Kph");
					$(".wdeg").html(wdeg);
					$(".wdir").html(country);
					$(".precip").html(precip + " mm");
					$(".row").show();
				});
			});
		});
	}else{
		$(".initialHeading").html("Please allow loction access");
	}
});