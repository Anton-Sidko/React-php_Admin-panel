<?php
session_start();

if ($_SESSION["auth"] != true) {
    header("HTTP/1.0 403 Forbidden");
    die;
}

$_POST = json_decode(file_get_contents("php://input"), true);

//$file = "../../" . $_POST['name'];
$file = "../../vbsregw4rew43qtrf.html";

if (file_exists($file)) {
    unlink($file);
} else {
    header("HTTp/1.0 400 Bas Request");
}