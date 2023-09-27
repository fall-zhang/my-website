## PHP基础

1. 使用php

```php
<?php
    header('content-type:text/html;charset="utf-8"');
?>
```

控制php输出

```php
<?php
	echo "<h1>笨蛋给爷死</h1>"
	echo("<h1>笨蛋给爷死</h1>")
    print_r("<h1>笨蛋给爷死</h1>")
    var_dump(100);
	/* var_dump输出的是数据类型和基本信息，类似于console.log()   多用于测试输出程序 */
?>
```

php语法非常严格，每行必须加 ';' 否则会直接报错

2. 声明PHP变量(弱引用类型)

```php
$n = "tale"
```

3. 字符串拼接

- .   进行拼接
- {}  进行拼接

```php
echo "My name is".$name.",i am".$age;
echo "My name is{$name} I am {$age} years old"
```

4. PHP数据类型

```
String(字符串)，integer(整型)，float(浮点型),boolean(布尔型),array(数组)，object（对象）,NULL（空值） 
```

1. PHP常量  define() const    defined()
2. PHP运算符、算术运算符、递增/递减运算符、赋值运算符、比较运算符、逻辑运算符、数组运算符、三元运算符、错误抑制符
3. 流程控制
    控制代码执行的顺序。
- 顺序结构
- 条件结构  if   switch
- 循环结构



## 循环结构

1. For 循环

```php
for($i=0;$i<10;$i++){
    echo $i;
}
count()//获取数据个数相当于javascript中的array.length
//知道循环次数的时候，使用for
//知道循环结束的条件，使用while
$sum = 2000;
$index = 1;
while($sum<1000){
    $sum += $index;
    $index++;
}
do{
    $sum += $index;
    $index++;
}while($sum<1000)
```


## 数组

### 数组类型：
1. 索引数组:下标是连续的数字
2. 关联数组(也被称作键值数组)
3. 全局数组
    - $_GET 通过get提交过来的所有数组
    - $_POST 通过post提交过来的所有数组


创建数组
1. array()
2. []

### 索引数组

```php
$arr = array("我","透","你个","大嘴")
```

### 关联数组

```php
$arr = array(0 => "张三",    1 => "李四",    2 => "王五");
$arr = [
    "name" => "张三",
    "sex" => "男",
    "address" => "北京",
    "age" => 19
];
```

### 关联数组(键值数组)的遍历

```php
foreach($arr as $key => $value){
    echo "下标{$key},数据{$value}"
}
```

### 数组的嵌套(索引数组嵌套关联数组)

```php
$arr = array(
    array(0 => "张三",    1 => "李四",    2 => "王五"),
    array(0 => "张三",    1 => "李四",    2 => "王五"),
    array(0 => "张三",    1 => "李四",    2 => "王五")
);
for($i = 0;$i <count($arr);$i++){
    var_dump($arr[$i]);
    echo "<br>";
}
```



### 常用数组函数
array()         创建数组
count()         计算数组长度
array_filter()  用回调函数过滤数组中的元素。
array_key_exists()	检查指定的键名是否存在于数组中。
array_map()	    将用户自定义函数作用到给定数组的每个值上，返回新的值。
array_merge()	把一个或多个数组合并为一个数组。
array_pop()	    删除数组中的最后一个元素（出栈）。
array_push()	将一个或多个元素插入数组的末尾（入栈）。
array_rand()	从数组中随机选出一个或多个元素，返回键名。
array_replace()	使用后面数组的值替换第一个数组的值。
array_reverse()	将原数组中的元素顺序翻转，创建新的数组并返回。
array_search()	在数组中搜索给定的值，如果成功则返回相应的键名。
array_shift()	删除数组中的第一个元素，并返回被删除元素的值。
array_unshift()	在数组开头插入一个或多个元素。
array_slice()	返回数组中的选定部分。
array_splice()	把数组中的指定元素去掉并用其它值取代。
array_sum()	    返回数组中所有值的和。
array_unique()	删除数组中重复的值。
in_array()	    检查数组中是否存在指定的值。
rsort()	        对数值数组进行降序排序。
sort()	        对数值数组进行升序排序。

参考：https://www.runoob.com/php/php-ref-array.html




## PHP函数
函数：将完成某一段特定功能的代码，封装起来，可以重复调用。

```php
function getSum($total){
    $sum = 0;
    for($i=1;$i<$total;$i++){
        $sum+=$i;
    }
    return $sum;
}
getSum(100);
```


### 创建函数

function 函数名([参数1,参数2,参数3,...,参数n]){
    // 函数体  完成功能的代码
    [return 值]
}

PHP 函数命名准则：
- 函数的名称应该提示出它的功能
- 函数名称以字母或下划线开头（不能以数字开头）
- 函数的名称不区分大小写


### 参数与返回值

函数参数：

1. 通过引用传递参数
    $max = '张三';

    function joinStr(&$a){
        $a = 'hello '.$a;
    //    echo $a;
    }

    joinStr($max);

    echo $max;
2. 默认参数的值
   function getNum($num=0){
       echo $num;
   }

   getNum();

### 匿名函数

$sum = function ($a,$b){
    return $a+$b;
}

var_dump($sum(10,20))


### 访问函数外部变量
$username = "zhangsan";

function getUserName(){
     echo "hello ".$username;
}


getUserName();

回顾：
1. Web服务器开发
   - Web服务器  Apache、Nginx、IIS
   - HTTP协议
                 TCP/IP
   Browser  ---------------- Server
                 HTTP协议：请求 request  响应 response
   - 服务器业务处理  PHP、Java、Python、Nodejs、ASP.net.....
   - 数据存储 数据库 MySQL
2. 搭建开发环境
   php运行环境搭建方式：  黄金搭档：LAMP = Linux + Apache + MySQL + PHP
      1. 【项目开发，学习，集成环境】通过集成环境安装包(傻瓜式)
          WAMP集成环境安装包
          WAMP = Windows + Apache + MySQL + PHP
          LAMP = Linux   + Apache + MySQL + PHP
          MAMP = MacOSX  + Apache + MySQL + PHP
      2. 【项目发布上线，服务器环境】独立安装  安装php、安装MySQL、安装Apache、配置

3. PHP基础
   1. PHP介绍
   2. PHP 语法
   3. PHP注释
   4. PHP变量
   5. PHP输出语句
      echo 变量
      print 变量
      print_r()
      var_dump()
   6. PHP 数据类型
      - 基本类型
        String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）
      - 复合类型
        Array（数组）
        Object （对象）
      - 特殊数据类型
        NULL  （空）
        resource (资源)
   7. 对数据类型操作
   获取变量存储数据的类型  gettype(var)
   数据类型转换          (type)value
   转换数据类型          settype(var,type)
   数据类型检测
      is_bool	变量是否为布尔型
      is_string	变量是否为字符串类型
      is_float,is_double	变量是否为浮点型
      is_integer,is_init	变量是否为整型
      is_null	变量是否为null
      is_array	变量是否为数组
      is_object	变量是否为一个对象
      is_numeric	变量是否为数字或由数字组成的字符串
   8. 常量
   常量可以理解为值不可变的变量。

   定义常量两种方式：
   1. define
   语法
   define(string $name,mixed $value[,bool $case_insensitive=false])

   name	必选	常量的名称
   value	必选	常量的值
   case_insensitive	可选	如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。

   2. const 定义常量

   const  CONSTANT  =  'Hello World' ;
   echo  CONSTANT ;

   常量作用域是全局的。
   常量名称建议大写。

   检查某个名称的常量是否存在
   bool defined ( string $name )
   返回值:如果该名称的常量已定义，返回 TRUE；未定义则返回 FALSE。

   示例：
   defined('MATH');
   defined('PI');

   获取已定义常量列表：
     输出所有用户定义常量
     array get_defined_constants(true)['user']

## PHP常量

   PHP预定义常量
   __LINE__  文件中的当前行号。
   __FILE__  文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名。
   __DIR__   文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录。
   __FUNCTION__  函数名称（PHP 4.3.0 新加）。
   __CLASS__     类的名称（PHP 4.3.0 新加）。
   __METHOD__    类的方法名（PHP 5.0.0 新加）。
   PHP_VERSION   PHP程序版本
   PHP_OS	     执行PHP解析器操作系统名称

```
<``form` `action``=``"connet.php"` `method``=``"POST"` `>
用户名：<``input` `type` `= ``"text"` `name` `= ``"username"``/> <``br` `/>
密码：<``input` `type` `= ``"password"` `name``=``"password"``/> <``br` `/>
重复密码：<``input` `type` `= ``"password"` `name``=``"repassword"``/><``br` `/>
<``input` `type` `= ``"submit"` `value` `= ``"提交"``/>
`form``>
```







