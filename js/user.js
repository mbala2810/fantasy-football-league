function print(response){
	var i = 0, len = response.length;
	var teamname = localStorage.getItem("Username");
	var rank = 1;
			for(i = 0; i < len; i++){
				var table = document.getElementById('table');
			//alert(table.rows.length);
				var row = table.insertRow(i + 1);
    			var cell1 = row.insertCell(0);
    			var cell2 = row.insertCell(1);
    			var cell3 = row.insertCell(2);
    			
    			if(i != 0 && response[i].score != response[i - 1].score)
    				rank++;
    			cell1.innerHTML = rank;
    			cell2.innerHTML = response[i].Username;
    			cell3.innerHTML = response[i].score;
    			if(response[i].Username == teamname) {
    				$('#user').html("YOUR RANK : " + (i + 1) + "<br><br>" + "TOTAL POINTS : " + response[i].score);
    				
    			}
            }
}

function getDetails(){
	var x = 1;
	var teamname = localStorage.getItem("Username");
	$.ajax({
		type: 'post',
       // contentType: "application/json; charset=utf-8",
		url: '../rank.php',
		data: 'teamname=' + teamname,
		dataType:'json',
		success: function(response) {
			//alert(response.length);
			print(response);
		}
	});
};