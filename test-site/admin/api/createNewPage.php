<?php

$_POST = json_decode(file_get_contents("php://input"), true);

$newFile = "../../" . $_POST['name'] . ".html";

if (file_exists($newFile)) {
    header("HTTp/1.0 400 Bas Request");
} else {
    fopen($newFile, "w");
}