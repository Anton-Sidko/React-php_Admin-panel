<?php
session_start();

if ($_SESSION["auth"] != true) {
    header("HTTP/1.0 403 Forbidden");
    die;
}

$htmlFiles = glob("../../*.html");
$responce = [];

foreach ($htmlFiles as $file) {
    $responce[] = basename($file);
}

echo json_encode($responce);