var arr = [ [ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ] ];
var gk = 0, mid = 0, def = 0, cf = 0, count = 0;
var data = [];
var data1 = [];
var length = 105;
var playerCheckTeam = [];
var TeamName = ["AFC Bournemouth", "Arsenal FC", "Brighton and Hove Albion FC", "Burnley FC", "Chelsea FC", "Crystal Palace FC", "Everton FC", "Huddersfield Town AFC", "Leicester City FC", "Liverpool FC", "Manchester City FC", "Manchester United FC", "Newcastle United FC", "Southampton FC", "Stoke City FC", "Swansea City AFC", "Tottenham Hotspur FC", "Watford FC", "West Bromwich Albion FC", "West Ham United FC"];
var len1 = 20;
function print(response){
	var i = 0, len = response.length;
			for(i = 0; i < len; i++){
				var table = document.getElementById('mytable');
			//alert(table.rows.length);
				var row = table.insertRow(i + 1);
    			var cell1 = row.insertCell(0);
    			var cell2 = row.insertCell(1);
    			var cell3 = row.insertCell(2);
    			var cell4 = row.insertCell(3);
    			var cell5 = row.insertCell(4);
    			var span = document.createElement('span');
				span.innerHTML = '<button style = "height: 100%;" id="' + (i + 1) +'" onclick="addToSquad(id)">+</button>';
    			cell1.appendChild(span);
    			cell2.innerHTML = response[i].FirstName + '&nbsp' + response[i].LastName;
    			cell3.innerHTML = response[i].Name;
    			cell4.innerHTML = response[i].Position;
    			cell5.innerHTML = '£' + response[i].Price;
            }
            for(i = 0; i < length; i++) {
    			data.push(response[i].PlayerId);
    			data1.push(response[i].LastName);
			}
			for(i = 0; i < len1; i++){
				playerCheckTeam.push(0);
			}
}
function searchTeam(x){
	var i;
	for(i = 0; i < len1; i++)
		if(TeamName[i] == x)
			return i;
	return -1;
}
function addToSquad(y) {
	
    count++;
    if(count < 16){
    	var x = parseInt(y);
		var table = document.getElementById('table');
		var row = table.insertRow(count);
    	var budget = $('#budget').html();
		budget = budget.split("£");
		var tot = parseInt(budget[1]);
    	var k = document.getElementById('mytable');
    	var a = k.rows[x].cells[1].innerHTML;
    	var b = k.rows[x].cells[2].innerHTML;
    	var c = k.rows[x].cells[3].innerHTML;
    	var d = k.rows[x].cells[4].innerHTML;
    	var e = k.rows[x].cells[4].innerHTML;
    	var e = e.split("£");
    	e = parseInt(e[1]);
    	tot = tot - e;
    	for(i = 1; i < count; i++){
    		if(table.rows[i].cells[1].innerHTML == a){
    			alert("You can't add the same player again!!");
    			count--;
    			return;
    		}
    			
    	}
    	var check = 0;
    	var f = searchTeam(b);
    	playerCheckTeam[f] += 1;
    	if(playerCheckTeam[f] > 3){
    		playerCheckTeam[f] = 3;
    		count--;
    		alert("Can't add more than 3 players from same team");
    		
    	}
    	else {
    	if(c == "Goalkeeper") {
    		gk++;
    		check = 1;
    	}
    	else if(c == "Defender") {
    		def++;
    		check = 2;
    	}
    	else if(c == "Midfielder"){
    		mid++;
    		check = 3;
    	}
    	else
    		cf++;
    	
    	if(gk > 2){
    		alert("Can't add more than 2 goalkeepers");
    		gk = 2;
    		count--;
    	}
    	else if(def > 5){
    		alert("Can't add more than 5 defenders");
    		def = 5;
    		count--;	
    	}
    	else if(mid > 5){
			alert("Can't add more than 5 midfielders"); 
			mid = 5;
			count--;
		}   
    	else if(cf > 3){
    		alert("Can't add more than 3 forwards");
    		cf = 3;	
    		count--;
    	}
    	else if(budget < 0){
    		alert("Not Enough Budget!!!");
    		count--;
    		if(check == 0)
    			cf--;
    		else if(check == 1)
    			gk--;
    		else if(check == 2)
    			def--;
    		else
    			mid--;
    	}	
    	else {
    		var cell1 = row.insertCell(0);
    		var cell2 = row.insertCell(1);
    		var cell3 = row.insertCell(2);
    		var cell4 = row.insertCell(3);
    		var cell5 = row.insertCell(4);
    		var span = document.createElement('span');
			span.innerHTML = '<button id="' + count +'" onclick="rmFromSquad(id)">-</button>';
    	
    		cell1.appendChild(span);
    		cell2.innerHTML = a;
    		cell3.innerHTML = b;
    		cell4.innerHTML = c;
    		cell5.innerHTML = d;
    		//budget = budget.join("£");
    		$('#budget').html("&emsp;BUDGET AVAILABLE : £" + tot);
    		if(count == 15)
    			document.getElementById('submit').style.visibility = 'visible';
    	}
    	}
    }
    else{
    	count--;
    	
    }
}
function rmFromSquad(y){
	var x = parseInt(y);
	var k = document.getElementById('table');
	var c = k.rows[x].cells[3].innerHTML;
	var table = document.getElementById("table");
	var budget = $('#budget').html();
	budget = budget.split("£");
	var tot = parseInt(budget[1]);
	var e = k.rows[x].cells[4].innerHTML;
    var e = e.split("£");
   	e = parseInt(e[1]);
    tot = tot + e;
    $('#budget').html("&emsp;BUDGET AVAILABLE : £" + tot);
    /*
    if(y != count) {
    	//do this
    	
    }
    else*/
    	table.deleteRow(x);
	count--;
	if(c == "Goalkeeper")
    	gk--;
    else if(c == "Defender")
    	def--;
    else if(c == "Midfielder")
    	mid--;
    else
    	cf--;
    if(count < 16)
    	document.getElementById('submit').style.visibility = 'hidden';
    	
}
function getDetails(){
	var x = 1;
	var teamname = localStorage.getItem("Username");
	$.ajax({
		type: 'post',
       // contentType: "application/json; charset=utf-8",
		url: '../player.php',
		data: 'teamname=' + teamname,
		dataType:'json',
		success: function(response) {
			//alert(response.length);
			if(response == "0"){
				alert("Sorry!! You have already chosen your 15 member squad! To manage your squad please visit the Manage Your Squad option!");
				window.location = "../user.html";
			}
			else
				print(response);
		}
	});
};


function team1(x, y){
		$('#mytable tr').slice(1).remove();
		$.ajax({
        	type: 'post',
        	//contentType: "application/json; charset=utf-8",
			url: '../team1.php',
			data: 'pos=' + y+ '&no=' +x,
			dataType:'json',
            success: function(response) {
				print(response);
            }
    	});
}        
function search(k) {
	for(var i = 0; i < 105; i++){
		var a = k;
		a = a.split(";");
		//alert(a[1]);
		if(data1[i] == a[1])
			return i;
	}
	
}
$(document).ready(function() {
	$('#submit').click( function() {
		//teamname = team();
		var teamname = localStorage.getItem("Username");
		//localStorage.setItem("teamname",teamname);	
		var i, k;
		k = document.getElementById('table');
		for(i = 1; i < 16; i++){
			//alert(k.rows[i].cells[1].innerHTML);
			var x = search(k.rows[i].cells[1].innerHTML);
			arr[i] = data[search(k.rows[i].cells[1].innerHTML)];
			//alert(arr[i]);
			
		}
		$.ajax({
        	type: 'post',
        	//contentType: "application/json; charset=utf-8",
			url: '../squad.php',
			data: 'teamname=' + teamname+ '&x1=' +arr[1] +'&x2=' +arr[2] + '&x3=' +arr[3] + '&x4=' +arr[4] + '&x5=' +arr[5] + '&x6=' +arr[6] + '&x7=' +arr[7] + '&x8=' +arr[8] + '&x9=' +arr[9] + '&x10=' +arr[10] + '&x11=' +arr[11] + '&x12=' +arr[12] + '&x13=' +arr[13] + '&x14=' +arr[14] + '&x15=' +arr[15],
			dataType:'json',
            success: function(response) {
            	alert("Players added to squad successfully!!!");
				window.location = "../user.html";
            }
    	});
	});		
});	