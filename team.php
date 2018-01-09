<?php
 
	include 'connection.php';
 
	$n = $_POST['no'];
	//$n = 1;
	$sql = "select t.Name, t.Nickname, t.Owner, t.Manager, t.YearOfFormation as teamyear, a.Name as arena, a.Address, a.Capacity, a.YearOfCreation as year from team t, arena a where t.TeamId = a.ArenaId and t.TeamId = '".$n."'";

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