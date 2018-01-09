function print(response){
	$('#a1').html('&nbsp' + response[0].Name);
	$('#a2').html('&nbsp' + response[0].Nickname);
	$('#a3').html('&nbsp' + response[0].Owner);
	$('#a4').html('&nbsp' + response[0].Manager);
	$('#a5').html('&nbsp' + response[0].teamyear);
	$('#a6').html('&nbsp' + response[0].arena);
	$('#a7').html('&nbsp' + response[0].Address);
	$('#a8').html('&nbsp' + response[0].Capacity);
	$('#a9').html('&nbsp' + response[0].year);
}
function getDetails(){
	var x = 1;
	$.ajax({
		type: 'post',
       // contentType: "application/json; charset=utf-8",
		url: '../team.php',
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
				url: '../team.php',
				data: {no: x},
				dataType:'json',
                success: function(data) {
					print(data);
					document.getElementById('skip').style.visibility = 'visible';
					document.getElementById('no').innerHTML = parseInt($('#no').html()) + 1;
					if(x == 20)
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
				url: '../team.php',
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