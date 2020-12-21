<?php
$contentfile = file("text.txt");
    
foreach ($contentfile as $line_num => $line) {
    print_r ($line);
    //echo "<br>";
}
?>