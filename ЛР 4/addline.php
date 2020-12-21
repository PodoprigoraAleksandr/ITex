<?php
$newline_num=0;

$line=($_POST);
$line=implode(' ', $line); //Записали новую строку в переменную

$contentfile = file("text.txt");//Записали в массив содержимое файла

foreach ($contentfile as $line_num => $newline) {//Определили ключ новой строки
    $newline_num=$newline_num+1;
}

$contentfile[$newline_num] = "<br>"; //Добавили в массив строку
$contentfile[$newline_num+1] = $line; //Добавили в массив строку

file_put_contents("text.txt", $contentfile);

?>
<form action="index.php" name="form2">
    <input type="submit" value="Вернуться в начало">
</form>