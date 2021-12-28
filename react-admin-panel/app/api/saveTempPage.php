<?php

$_POST = json_decode(file_get_contents("php://input"), true);

//рандомное название файла для того, чтобы в будущем не переписать уже существующую страницу с нормальным названием
$newFile = "../../vbsregw4rew43qtrf.html";

if ($_POST["html"]) {
    file_put_contents($newFile, $_POST["html"]);
} else {
    header("HTTp/1.0 400 Bas Request");
}