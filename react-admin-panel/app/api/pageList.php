<?php

$htmlFiles = glob("../../*.html");
$responce = [];

foreach ($htmlFiles as $file) {
    $responce[] = basename($file);
}

echo json_encode($responce);