<?php

$_POST = json_decode(file_get_contents("php://input"), true);

$newFile = "../../temp.html";

if ($_POST["html"]) {
    file_put_contents($newFile, $_POST["html"]);
} else {
    header("HTTp/1.0 400 Bas Request");
}