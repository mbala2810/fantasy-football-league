<?php
 
	include 'connection.php';
 
	$n = $_POST['no'];
	//$n = 1;
	$sql = "select u.Username, sum(p.points) as score from user u, squad s, playerpoints p where u.UserId = s.UserId and s.PlayerId = p.PlayerId and s.InPlayingEleven = 1 group by u.UserId order by sum(p.points) desc";
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