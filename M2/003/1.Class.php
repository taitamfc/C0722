<?php
    /*
    Danh từ
    CamelCase           : NguyenVanA
    Ko trùng từ khóa
    Ko bắt đầu số, kí tự đặc biệt

    name
    gender
    color

    setName
    getName

    setGender
    getGender

    setColor
    getColor
    */
    class ConMeo {
        // thuoc tinh
        public $name = '';
        public $gender = false;
        public $color = '';

        public function __construct($ts_name,$ts_gender,$ts_color){
            $this->name  = $ts_name;
            $this->gender  = $ts_gender;
            $this->color  = $ts_color;
        }

        //phuong thuc
        public function setName($name){
            $this->name = $name;
        }
        public function getName(){
            return $this->name;
        }
        public function setColor($color){
            $this->color=$color;
        }
        public function getColor(){
            return $this->color;
        }
        public function setGender($gender){
            $this->gender=$gender;
        }
        public function getGender(){
            return $this->gender;
        }
    }

    // Khoi tao doi tuong
    $objConMeo = new ConMeo('milu','female','red');//
    echo '<pre>';
    print_r($objConMeo);
    echo '</pre>';

    //Thiet lap gia tri cac thuoc thinh name,gender,color bang cach goi phuong
    $objConMeo->setName('miu');
    $objConMeo->setColor('black');
    $objConMeo->setGender('male');

    // in doi tuong
    echo '<pre>';
    print_r($objConMeo);
    echo '</pre>';

    // truy cap vao phuong thuc
    echo '<br>'.$objConMeo-> getName ();
    echo '<br>'.$objConMeo-> getGender ();
    echo '<br>'.$objConMeo-> getColor ();

    echo '<hr>';
    // truy cap thuoc tinh
    echo '<br>'.$objConMeo->name;
    echo '<br>'.$objConMeo->gender;
    echo '<br>'.$objConMeo->color;
    
