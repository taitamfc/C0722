<?php
    class Student {

        //thuoc tinh cua lop
        private static $name = 'Nguyen van A';

        // phuong thuc cua lop
        public static function checkInfo(){
            echo 'checkInfo';
        }
        public static function setName($ts_name){
            self::$name = $ts_name;
        }
        //phuong thuc cua doi tuong
        public static function showInfo(){
            return self::$name;
        }
    }

    
    Student::setName('Nguyen Van B');
    echo '<br>';
    echo Student::showInfo();




