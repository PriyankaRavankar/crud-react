<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">


        <link href="{{ asset('css/app.css') }}" rel="stylesheet">


    </head>
    <body>

    <?php
    $name = "NITIN";
    $length = strlen($name);
    for($j=0; $j<$length; $j++){
    // for($i=0; $i<$length; $i++){

        if($name[$j] =="T"){
            for($i=0; $i<$length; $i++){
                echo $name[$i];
            }
        }else{
            for($k=3;$k>=0;$k--){
                echo "&nbsp";
            }
            echo $name[$j];
        }

        // }
        echo "<br>";
    }
    ?>

    </body>
</html>
