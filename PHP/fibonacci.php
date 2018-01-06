<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <?php
      $first = 0;
      $second = 1;
      $n =120;
      print $first.'<br>';
      for($i=1; $i<= $n-1; $i++) {
         $final = $first + $second;
         $first = $second;
         $second = $final;
         print $final.'<br>';
         }
    ?>

  </body>
</html>
