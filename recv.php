<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

if(!empty($_POST['data'])){
$data = $_POST['data'];
$data = $data . "\n";
$fname = "mciplist.txt";

$file = fopen("/var/www/upload/" .$fname, 'a');//append data
fwrite($file, $data);
fclose($file);
}
?>

