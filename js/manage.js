var arr = [ [ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ],[ ] ];
var gk = 0, mid = 0, def = 0, cf = 0, count = 0;
var data = [];
var data1 = [];
var length = 15;
var m = 3, n = 5, o = 2;
function print(response){
	var i = 0, len = response.length;
			for(i = 0; i < len; i++){
				var table = document.getElementById('mytable');
				var row = table.insertRow(i + 1);
    			var cell1 = row.insertCell(0);
    			var cell2 = row.insertCell(1);
    			var cell3 = row.insertCell(2);
    			var cell4 = row.insertCell(3);
    			var span = document.createElement('span');
				span.innerHTML = '<button style = "height: 100%;" id="' + (i + 1) +'" onclick="addToSquad(id)">+</button>';
    			cell1.appendChild(span);
    			cell2.innerHTML = response[i].FirstName + '&nbsp' + response[i].LastName;
    			cell3.innerHTML = response[i].Name;
    			cell4.innerHTML = response[i].Position;
            }
            for(i = 0; i < length; i++) {
    			data.push(response[i].PlayerId);
    			data1.push(response[i].LastName);
			}
}
function formation(x){
	if(x == "attack"){
		m = 3;
		n = 5;
		o = 2;
	}
	else if(x == "balance"){
		m = 4;
		n = 3;
		o = 3;
	}
	else{
		m = 4;
		n = 4;
		o  = 2;
	}
}
function addToSquad(y) {
	
    count++;
    if(count < 12){
    	var x = parseInt(y);
		var table = document.getElementById('table');
		var row = table.insertRow(count);
    	var k = document.getElementById('mytable');
    	var a = k.rows[x].cells[1].innerHTML;
    	var b = k.rows[x].cells[2].innerHTML;
    	var c = k.rows[x].cells[3].innerHTML;
    	for(i = 1; i < count; i++){
    		if(table.rows[i].cells[1].innerHTML == a){
    			alert("You can't add the same player again!!");
    			count--;
    			return;
    		}		
    	}
    	
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
    	
    	if(gk > 1){
    		alert("Can't add more than 1 goalkeeper");
    		gk = 1;
    		count--;
    	}
    	else if(def > m){
    		alert("Can't add more than " + m + " defenders according to the formation chosen");
    		def = m;
    		count--;	
    	}
    	else if(mid > n){
			alert("Can't add more than " + n + " midfielders according to the formation chosen"); 
			mid = n;
			count--;
		}   
    	else if(cf > o){
    		alert("Can't add more than "  + o + " forwards according to the formation chosen");
    		cf = o;	
    		count--;
    	}	
    	else {
    		var cell1 = row.insertCell(0);
    		var cell2 = row.insertCell(1);
    		var cell3 = row.insertCell(2);
    		var cell4 = row.insertCell(3);
    		var span = document.createElement('span');
			span.innerHTML = '<button id="' + count +'" onclick="rmFromSquad(id)">-</button>';
    	
    		cell1.appendChild(span);
    		cell2.innerHTML = a;
    		cell3.innerHTML = b;
    		cell4.innerHTML = c;
    		if(count == 11)
    			document.getElementById('submit').style.visibility = 'visible';
    	}
    }
    else{
    	alert("Can't add more than 11 players!");
    	count--;
    	
    }
}
function rmFromSquad(y){
	var x = parseInt(y);
	var k = document.getElementById('table');
	var c = k.rows[x].cells[3].innerHTML;
	var table = document.getElementById("table");
    if(y != count) {
    }
    else
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
    if(count < 12)
    	document.getElementById('submit').style.visibility = 'hidden';
    	
}
function getDetails(){
	var x = 1;
	var teamname = localStorage.getItem("Username");
	$.ajax({
		type: 'post',
		url: '../manage.php',
		data: 'teamname=' + teamname,
		dataType:'json',
		success: function(response) {
			print(response);
		}
	});
};


function team1(x, y){
		$('#mytable tr').slice(1).remove();
		var teamname = localStorage.getItem("Username");
		$.ajax({
        	type: 'post',
			url: '../manageteam.php',
			data: 'pos=' + y+ '&no=' +x +'&teamname=' +teamname,
			dataType:'json',
            success: function(response) {
				print(response);
            }
    	});
}        

function search(k) {
	for(var i = 0; i < 15; i++){
		var a = k;
		a = a.split(";");
		if(data1[i] == a[1])
			return i;
	}
	
}
$(document).ready(function() {
	$('#submit').click( function() {
		var teamname = localStorage.getItem("Username");	
		var i, k;
		k = document.getElementById('table');
		for(i = 1; i < 12; i++){
			var x = search(k.rows[i].cells[1].innerHTML);
			arr[i] = data[search(k.rows[i].cells[1].innerHTML)];
		}
		$.ajax({
        	type: 'post',
			url: '../update.php',
			data: 'teamname=' + teamname+ '&x1=' +arr[1] +'&x2=' +arr[2] + '&x3=' +arr[3] + '&x4=' +arr[4] + '&x5=' +arr[5] + '&x6=' +arr[6] + '&x7=' +arr[7] + '&x8=' +arr[8] + '&x9=' +arr[9] + '&x10=' +arr[10] + '&x11=' +arr[11],
			dataType:'json',
            success: function(response) {
            	alert("Players added to squad successfully!!!");
				window.location = "../user.html";
            }
    	});
	});		
});	