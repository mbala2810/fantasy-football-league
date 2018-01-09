<?php
 
	include 'connection.php';
	
	$p = $_POST['pos'];
	$n = $_POST['no'];
	
	if($n == "Any" && $p == "Any"){
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t WHERE t.TeamId = p.TeamId";
	}
	else if($n != "Any" && $p == "Any")
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t WHERE t.TeamId = p.TeamId and t.Name = '".$n."'";
	else if($n == "Any" && $p != "Any")
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t WHERE t.TeamId = p.TeamId and p.Position = '".$p."'";		
	else
		$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position, p.Price from players p, team t WHERE t.TeamId = p.TeamId and t.Name = '".$n."' and p.Position = '".$p."'" ;

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