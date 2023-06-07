<!DOCTYPE html>

<html>

<head>
    <title>connection</title>
</head>
<body>
<?php




$serverName= "localhost";

$userName="root";

$password="";

$dbName="hakuna";

$conn = mysqli_connect("localhost", "root", "", "hakuna");


// Check connection

if($conn === false){

die("ERROR: Could not connect. "

. mysqli_connect_error());}




// Taking all 4 values from the form data(input)

$Adsress = $_REQUEST['Address'];

$Email = $_REQUEST['Email'];

$Card_Number = $_REQUEST['Card_Number'];

$CVC = $_REQUEST['CVC'];


// We are going to insert the data into our sampleDB table

$sql = "INSERT INTO hakuna VALUES ('$Address','$Email',

'$Card_Number','$CVC')";



// Check if the query is successful

if(mysqli_query($conn, $sql)){

echo "data stored succesfully";


echo nl2br("\nAddress = $Address \nEmail = $Email\n Card_Number = $Card_Number\n "

. "CVC = $CVC<br/>");

} else{

echo " Sorry $sql. "

. mysqli_error($conn);

}

// Close connection
mysqli_close($conn);

        ?>
    </body>
</html>

