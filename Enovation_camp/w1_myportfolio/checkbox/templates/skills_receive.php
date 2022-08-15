<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Skills</title>
</head>
<body>
 <p>Frontend</p>
    <ul>
       <?php
       foreach($_POST['Frontend'] as $entry){
       echo"<li>$entry</>";
        }
        ?>
    </ul>
 <p>Backend</p>
    <ul>
       <?php
       foreach($_POST['Backend'] as $entry){
       echo"<li>$entry</>";
        }
        ?>
    </ul>
 <p>version_control</p>
    <ul>
       <?php
       foreach($_POST['version_control'] as $entry){
       echo"<li>$entry</>";
        }
        ?>
    </ul>
</body>
</html>
