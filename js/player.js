function print(response){
	$('#a1').html('&nbsp' + response[0].FirstName + '&nbsp' + response[0].LastName);
	$('#a2').html('&nbsp' + response[0].Name);
	$('#a3').html('&nbsp' + response[0].Nationality);
	$('#a4').html('&nbsp' + response[0].DateOfBirth);
	$('#a5').html('&nbsp' + response[0].Position);
	$('#a6').html('&nbsp' + '£' + response[0].Price);
	//$('#a7').html('&nbsp' + response[0].Points);
}
function getDetails(){
	var x = 1;
	$.ajax({
		type: 'post',
       // contentType: "application/json; charset=utf-8",
		url: '../players.php',
		data: {no: x},
		dataType:'json',
		success: function(response) {
            //alert(response.length);
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
				url: '../players.php',
				data: {no: x},
				dataType:'json',
                success: function(data) {
					print(data);
					document.getElementById('skip').style.visibility = 'visible';
					document.getElementById('no').innerHTML = parseInt($('#no').html()) + 1;
					if(x == 105)
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
				url: '../players.php',
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