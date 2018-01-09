<?php
 
	include 'connection.php';
	
	$p = $_POST['pos'];
	$n = $_POST['no'];
	$x = $_POST['teamname'];
	if($n == "Any" && $p == "Any"){
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t, user u, squad s WHERE t.TeamId = p.TeamId and p.PlayerId = s.PlayerId and s.UserId = u.UserId and u.Username = '".$x."'";
	}
	else if($n != "Any" && $p == "Any")
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t, squad s, user u WHERE t.TeamId = p.TeamId and t.Name = '".$n."' and p.PlayerId = s.PlayerId and s.UserId = u.UserId and u.Username = '".$x."'";
	else if($n == "Any" && $p != "Any")
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t, squad s, user u WHERE t.TeamId = p.TeamId and p.Position = '".$p."' and p.PlayerId = s.PlayerId and s.UserId = u.UserId and u.Username = '".$x."'";		
	else
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t, squad s, user u WHERE t.TeamId = p.TeamId and t.Name = '".$n."' and p.Position = '".$p."' and p.PlayerId = s.PlayerId and s.UserId = u.UserId and u.Username = '".$x."'" ;

	$val = mysqli_query( $db, $sql);
	if(! $val){
		die('Could not get data : ' . mysqli_connect_error());
	}
	$array = array();
	while($row = mysqli_fetch_array($val, MYSQLI_ASSOC)){
		$array[] = $row;
	}
	header("Content-type:application/json"); 
	echo json_encode($array);
	mysqli_close($db);

?>