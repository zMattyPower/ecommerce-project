<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

function connectDatabase() {
	$servername = "db";
	$username = "root";
	$password = "";
	$dbname = "progetto_scuola";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
		error_log("Connection failed: " . $conn->connect_error); // Log error to a file
		die(json_encode(['error' => 'Database connection failed'])); // Return a JSON response
	}
	echo "Database Connected.\n";

    return $conn;
}

function makePreparedStatement($conn, $query, $var1, $var2=null, $var3=null) {
    if ($var2 == null) {
        $stmt = $conn->prepare("$query");
        $stmt->bind_param("s", $var1);

        $stmt->execute();
        
        return $stmt->get_result();
    }
	else if ($var3 == null) {
        $stmt = $conn->prepare("$query");
		$stmt->bind_param("ss", $var1, $var2);
        
		$stmt->execute();

        return $stmt->get_result();
    } else {
        $stmt = $conn->prepare("$query");
		$stmt->bind_param("sss", $var1, $var2, $var3);
        
		$stmt->execute();

        return $stmt->get_result();
    }
}