<?php
 
	include 'connection.php';
	
	$p1 = $_POST['x1'];
	$n = $_POST['teamname'];
	$p2 = $_POST['x2'];$p3 = $_POST['x3'];$p4 = $_POST['x4'];$p5 = $_POST['x5'];
	$p6 = $_POST['x6'];$p7 = $_POST['x7'];$p8 = $_POST['x8'];$p9 = $_POST['x9'];
	$p10 = $_POST['x10'];$p11 = $_POST['x11'];$p12 = $_POST['x12'];$p13 = $_POST['x13'];
	$p14 = $_POST['x14'];$p15 = $_POST['x15'];
	$query = "SELECT UserId FROM user WHERE Username='".$n."'";
	$result = mysqli_query($db, $query);
	$row = mysqli_fetch_row($result);
	$n = $row[0];
	$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
	//$sql = "INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)";
	//$result = mysqli_query($db, $sql);
		//$p1 = mysqli_query
		$prep->bind_param('ss',$n, $p1);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p2);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p3);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p4);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p5);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p6);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p7);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p8);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p9);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p10);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p11);
		$prep->execute();
		
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p12);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p13);
		
		$prep->execute();
		
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p14);
		$prep->execute();
		$result = $db->insert_id;
		$prep = $db->prepare("INSERT INTO squad (UserId, PlayerId) VALUES (?, ?)");
		$prep->bind_param('ss',$n, $p15);
		$prep->execute();
		$result = $db->insert_id;
		$prep->close();
		//header('Location: ../user.html');
	
		echo "1";
	mysqli_close($db);

?>