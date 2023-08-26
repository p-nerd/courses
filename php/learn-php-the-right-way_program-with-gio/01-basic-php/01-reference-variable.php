<?php

$x = 2;
$y = &$x;

echo "First ", $x , " " , $y , "<br/>";

$x = 100;

echo "Second ", $x , " " , $y;

