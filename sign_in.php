<?php
 
include 'connection.php';
 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
 

	$prep = $db->prepare("INSERT INTO user (UserId, FirstName, LastName, Username, Password, Nationality) VALUES ('0', ?, ?, ?, ?, ?)");
	if (!$prep){
		echo "false";
	}
	else {
		$prep->bind_param('sssss', $FirstName, $LastName, $Username, $Password, $Nationality);
		$FirstName = $_POST['team-name'];
		$LastName = $_POST['p1-name'];
		$Username = $_POST['p2-name'];
		$Password = $_POST['ph-no'];
		$Nationality = $_POST['email-addr'];
		$query = "SELECT Username FROM user WHERE Username='".$Username."'";
		$result = mysqli_query($db, $query);
		$numResults = mysqli_num_rows($result);
		if($numResults >= 1){
			echo '<script language="javascript">';
			echo 'alert("Username already exists!!!")';
			echo '</script>';
		}
		else if($FirstName != "" && $LastName != "" && $Username != "" && $Password != "" && $Nationality != ""){
			$prep->execute();
			$result = $db->insert_id;
			$prep->close();
			header('Location: login.html');
		}
	}
}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Fantasy Football League - Sign Up</title>
		<meta charset = "UTF-8">
		<meta name = "viewport" content = "width=device-width, initial-scale = 1.0">		
		<link href = "css/sign_in.css" rel = "stylesheet">
		<script src = "js/main.js"></script>
		<style>
			a:link {
    			color: blue;
    			background-color: transparent;
    			text-decoration: underline;
    			margin-left: 12em;
    			font-size: 15pt;
			}
			a:hover {
    			color: violet;
    			background-color: transparent;
    			text-decoration: underline;
			}
		</style>
	</head>
	<body>
		<div class = "d1">
			<h1 text-align = 'center' style = "color : #008000; font-size : 40pt;">FANTASY FOOTBALL LEAGUE</h1>
			<h3 text-align = 'center' style = "font-size : 25pt; color : #008000;">SIGN UP</h3>
			 <form id="phpbasics" name="phpbasics" action="<?php echo $_SERVER['PHP_SELF'];  ?>" method="post" enctype="multipart/form-data">

			<div class = "login-form">
				<input type = "text" class = "ip" name = "team-name" id = "team-name" tabindex = "1" placeholder = "First Name" value = ""> <?php if(isset($_POST['team-name']) && $_POST['team-name'] == ''){ echo '<span style="color:#F00;text-align:center;"><br>PLEASE ENTER FIRST NAME'; } ?>
			</div>
			<br>
			<div class = "login-form">
				<input type = "text" class = "ip" name = "p1-name" id = "p1-name" tabindex = "1" placeholder = "Last Name" value = ""><?php if(isset($_POST['p1-name']) && $_POST['p1-name'] == ''){ echo '<span style="color:#F00;text-align:center;"><br>PLEASE ENTER LAST NAME'; } ?>
			</div>
			<br>
			<div class = "login-form">
				<input type = "text" class = "ip" name = "p2-name" id = "p2-name" tabindex = "1" placeholder = "Username" value = ""><?php if(isset($_POST['p2-name']) && $_POST['p2-name'] == ''){ echo '<span style="color:#F00;text-align:center;"><br>PLEASE ENTER USERNAME'; } ?>
			</div>
			<br>
			<div class = "login-form">
				<input type = "password" class = "ip" name = "ph-no" id = "ph-no" tabindex = "1" placeholder = "Password" value = ""><?php if(isset($_POST['ph-no']) && $_POST['ph-no'] == ''){ echo '<span style="color:#F00;text-align:center;"><br>PLEASE ENTER PASSWORD'; } ?>
			</div>
			<br>
			<div class = "login-form">
				<input type = "text" class = "ip" name = "email-addr" id = "email-addr" tabindex = "1" placeholder = "Nationality" value = ""><?php if(isset($_POST['email-addr']) && $_POST['email-addr'] == ''){ echo '<span style="color:#F00;text-align:center;"><br>PLEASE ENTER NATIONALITY'; } ?>
			</div>
			<br>
			<div class = "login-form">
				<a href = "login.html"> ALREADY A MEMBER?</a>
			</div>
			<br>
			<div class = "login-form">
				<input type = "submit" class = "reg"  name = "submit" id = "submit" tabindex = "1" value = "Get Started">
			</div>
			</form>
		</div>
		<div>
			<?php if(isset($_POST['submit'])){
				echo $result;
			}?>
		</div>
	</body>
</html>
