<?php
//$books = ['Toan','Ly','Hoa'];
$books = [
    'HTTP_HOST' => 'localhost',
    'HTTP_USER_AGENT' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0',
    'HTTP_ACCEPT' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
];

$_REQUEST;
$_POST;
$_GET;

$info = [
    'name' => 'Nguyen Van A',
    'age' => 18,
    'gender' => 'male',
];

echo count($info);//3

//xóa phần tử
unset( $info['gender'] );
/*
$info = [
    'name' => 'Nguyen Van A',
    'age' => 18
];
*/



echo '<pre>';
print_r( $info);
echo '</pre>';

$info['name'] = 'Nguyen Van B';
echo $info['name'];