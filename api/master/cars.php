<?php
	header('Content-Type: application/json');
	
	$cars = array("Volvo", "BMW", "Toyota");
	echo json_encode($cars); 
?>