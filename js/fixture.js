function print(response){
	var newDate = response[0].Date.split("-").reverse().join("-");
	$('#a1').html('&nbsp' + newDate);
	$('#b1').html('&nbsp' + response[0].team1 + '&emsp;' + response[0].Time + '&emsp;' + response[0].team2);
	newDate = response[1].Date.split("-").reverse().join("-");
	$('#a2').html('&nbsp' + newDate);
	$('#b2').html('&nbsp' + response[1].team1 + '&emsp;' + response[1].Time + '&emsp;' + response[1].team2);
	newDate = response[2].Date.split("-").reverse().join("-");
	$('#a3').html('&nbsp' + newDate);
	$('#b3').html('&nbsp' + response[2].team1 + '&emsp;' + response[2].Time + '&emsp;' + response[2].team2);
	newDate = response[3].Date.split("-").reverse().join("-");
	$('#a4').html('&nbsp' + newDate);
	$('#b4').html('&nbsp' + response[3].team1 + '&emsp;' + response[3].Time + '&emsp;' + response[3].team2);
	newDate = response[4].Date.split("-").reverse().join("-");
	$('#a5').html('&nbsp' + newDate);
	$('#b5').html('&nbsp' + response[4].team1 + '&emsp;' + response[4].Time + '&emsp;' + response[4].team2);
	newDate = response[5].Date.split("-").reverse().join("-");
	$('#a6').html('&nbsp' + newDate);
	$('#b6').html('&nbsp' + response[5].team1 + '&emsp;' + response[5].Time + '&emsp;' + response[5].team2);
	newDate = response[6].Date.split("-").reverse().join("-");
	$('#a7').html('&nbsp' + newDate);
	$('#b7').html('&nbsp' + response[6].team1 + '&emsp;' + response[6].Time + '&emsp;' + response[6].team2);
	newDate = response[7].Date.split("-").reverse().join("-");
	$('#a8').html('&nbsp' + newDate);
	$('#b8').html('&nbsp' + response[7].team1 + '&emsp;' + response[7].Time + '&emsp;' + response[7].team2);
	newDate = response[8].Date.split("-").reverse().join("-");
	$('#a9').html('&nbsp' + newDate);
	$('#b9').html('&nbsp' + response[8].team1 + '&emsp;' + response[8].Time + '&emsp;' + response[8].team2);
	newDate = response[9].Date.split("-").reverse().join("-");
	$('#a10').html('&nbsp' + newDate);
	$('#b10').html('&nbsp' + response[9].team1 + '&emsp;' + response[9].Time + '&emsp;' + response[9].team2);
}
function getDetails(){
	var x = 1;
	$.ajax({
		type: 'post',
       // contentType: "application/json; charset=utf-8",
		url: '../fixture.php',
		data: {no: x},
		dataType:'json',
		success: function(response) {
            //alert(response);
			print(response);
			
		}
	});
};

$(document).ready(function(){	
        $("#next").click(function(){
            var x = parseInt($('#no').html()) + 1;
            $.ajax({
                type: 'post',
        		//contentType: "application/json; charset=utf-8",
				url: '../fixture.php',
				data: {no: x},
				dataType:'json',
                success: function(data) {
					print(data);
					document.getElementById('skip').style.visibility = 'visible';
					document.getElementById('no').innerHTML = parseInt($('#no').html()) + 1;
					if(x == 6)
						document.getElementById('next').style.visibility = 'hidden';
                }
            });
   });
});

$(document).ready(function(){	
        $("#skip").click(function(){
            var x = parseInt($('#no').html()) - 1;
            $.ajax({
                type: 'post',
        		//contentType: "application/json; charset=utf-8",
				url: '../fixture.php',
				data: {no: x},
				dataType:'json',
                success: function(data) {
					print(data);
					document.getElementById('next').style.visibility = 'visible';
					if(x == 1)
						document.getElementById('skip').style.visibility = 'hidden';
					document.getElementById('no').innerHTML = parseInt($('#no').html()) - 1;
                }
            });
   });
});