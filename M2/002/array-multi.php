<?php
    $tusach = [
        ['Toan','Ly','Hoa'], //0
    //     0     1     2    
        ['Van','Su','Dia'],  //1
    //     0     1     2
    ];

    //di qua 2 chi so
    echo $tusach[0][1];

    //them 
    $tusach[0][3] = 'Sinh';

    //
    array_push( $tusach[1],'Anh' );

    echo '<pre>';
    print_r( $tusach);
    echo '</pre>';

    //duyet mang
    for( $i = 0; $i < 2; $i++ ){
        /*
        $tusach[0] => ['Toan','Ly','Hoa']
        $tusach[1] => ['Van','Su','Dia']
        */

        for( $j = 0; $j < 4; $j++ ){
            echo $tusach[$i][$j].'<br>';
        }

        echo '<hr>';
        
    }

    