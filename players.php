<?php
 
	include 'connection.php';
 
	$n = $_POST['no'];
	//$n = 1;
	$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Nationality, p.DateOfBirth, p.Position, p.Price from players p, team t WHERE t.TeamId = p.TeamId and p.PlayerId = '".$n."'";

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