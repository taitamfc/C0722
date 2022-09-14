<?php
$books = ['Toan','Ly','Hoa'];
//          0     1     2
$books = array('Toan','Ly','Hoa');
//               0      1    2
// Xuat
echo $books[0];
//Thay doi
$books[0] = 'Toan Hoc';
//Them
$books[3] = 'Sinh';

//them
array_push($books,'Anh');

//in mảng
echo '<pre>';
print_r( $books);
echo '</pre>';

// duyệt mảng
for( $i =0; $i < count($books); $i++ ){
    echo $books[$i];
}


