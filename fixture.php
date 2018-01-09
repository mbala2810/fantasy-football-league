<?php
 
	include 'connection.php';
 
 	$currentDate = date('Y-m-d');
 	//$currentTime = date('H:i:s');
    //echo $currentDateTime;
	$n = $_POST['no'];
	//$n = 1;
	$sql = "SELECT f.MatchId, t1.Name as team1, t2.Name as team2, f.Date, f.Time FROM fixtures f, team t1, team t2 WHERE GameweekId = '".$n."' and t1.TeamId = f.Team1Id and t2.TeamId = f.Team2Id";
	$val = mysqli_query( $db, $sql);
	if(! $val){
		die('Could not get data : ' . mysqli_connect_error());
	}
	$array = array();
	while($row = mysqli_fetch_array($val, MYSQLI_ASSOC)){
		
		if($currentDate > $row["Date"]) {
			$sql = "SELECT Team1Score, Team2Score from MatchDetails where MatchId = '".$row["MatchId"]."'";
			$res = mysqli_query($db, $sql);
			$r = mysqli_fetch_array($res, MYSQLI_ASSOC);
			$row["Time"] = $r["Team1Score"]." - ".$r["Team2Score"];
		}
		$array[] = $row;
	}
	header("Content-type:application/json"); 
	echo json_encode($array);
	mysqli_close($db);

?>