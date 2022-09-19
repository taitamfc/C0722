<?php
    include_once 'DongHa/Tam.php';
    include_once 'GioLinh/Tam.php';

    include_once 'DongHa/Thang.php';
    include_once 'GioLinh/Thang.php';

    //use namespace\ten_class
    use DongHa\Tam;
    use GioLinh\Tam as TamGioLinh;//dùng as khi tên lớp bị trùng

    $objTam1 = new Tam();
    $objTam2 = new TamGioLinh();

   $objThang1 = new DongHa\Thang();//khởi tạo trực tiếp mà ko use
   $objThang2 = new GioLinh\Thang();//khởi tạo trực tiếp mà ko use

   echo '<pre>';
   print_r($objThang1);
   print_r($objThang2);
   die();