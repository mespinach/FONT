<?php
$Pred = "uploads/".$_SESSION['filename'];
$char = $_SESSION['char'];

$output = shell_exec('C:\Users\DELL\venv\Scripts\python.exe D:/Palak/SEM6/SGP/pyfiles/predictorForPHPTest.py '.$Pred);
$sentences = explode('.', $output);
print_r($sentences[1]);
?>