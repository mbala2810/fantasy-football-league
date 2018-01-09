<?php
 
	include 'connection.php';
	
	$p1 = $_POST['x1'];
	$n = $_POST['teamname'];
	$p2 = $_POST['x2'];$p3 = $_POST['x3'];$p4 = $_POST['x4'];$p5 = $_POST['x5'];
	$p6 = $_POST['x6'];$p7 = $_POST['x7'];$p8 = $_POST['x8'];$p9 = $_POST['x9'];
	$p10 = $_POST['x10'];$p11 = $_POST['x11'];
	$query = "SELECT UserId FROM user WHERE Username='".$n."'";
	$result = mysqli_query($db, $query);
	$row = mysqli_fetch_row($result);
	$n = $row[0];
	$sql = "UPDATE squad ". "SET InPlayingEleven = 0 ". 
               "WHERE UserId = '".$n."'";
	$val = mysqli_query($db, $sql);

	
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p1."'" ;
	
	$val = mysqli_query($db, $sql);
	
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p2."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p3."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p4."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p5."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p6."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p7."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p8."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p9."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p10."'" ;
	
	$val = mysqli_query($db, $sql);
	$sql = "UPDATE squad ". "SET InPlayingEleven = 1 ". 
               "WHERE UserId = '".$n."' and PlayerId = '".$p11."'" ;
	
	$val = mysqli_query($db, $sql);
	echo "1";
	mysqli_close($db);

?>