Function Expression হলো JavaScript-এ Function তৈরি করার একটি পদ্ধতি, যেখানে Function-কে একটি Variable-এর মধ্যে সংরক্ষণ করা হয়।
অর্থাৎ, Function-কে একটি Value হিসেবে Variable-এ Assign করা হয়।

🔑 Function Expression কী?
  
Function Expression হলো ফাংশনকে একটি ভেরিয়েবলে অ্যাসাইন করার পদ্ধতি।

সাধারণত এটি anonymous function হয়, অর্থাৎ ফাংশনের কোনো নাম থাকে না।

ফাংশনকে অন্য ফাংশনের আর্গুমেন্ট হিসেবে পাঠানো যায় (callback function)।

এটি hoisting হয় না, অর্থাৎ ফাংশন ডিফাইন করার আগে কল করা যায় না।


দেখতে কেমন হয়? (Syntax)

let variableName = function () {
    // Code
};

অথবা

const variableName = function () {
    // Code
};



সাধারণ ফাংশন (Function Declaration) বনাম Function Expression

Function Declaration (সাধারণ নিয়ম):

function sayHello() {
    return "Hi!";
}


Function Expression (ভেরিয়েবল নিয়ম):

const sayHello = function() {
    return "Hi!";
};



const greeting = function () {
    console.log("Hello JavaScript");
};

greeting();

const →     Variable তৈরি করছে
greeting →  Variable-এর নাম
function(){} → একটি Anonymous Function
পুরো Function-টি greeting Variable-এর মধ্যে রাখা হয়েছে।

greeting();

Variable-এর মাধ্যমে Function Call করা হয়েছে।


  const myFunc = function(name) {
    return "Hello " + name;
};

// ফাংশনটি কল করার নিয়ম:
console.log(myFunc("Arman")); // আউটপুট: Hello Arman

function(name) অংশে ফাংশনটির কোনো নাম নেই। একে বলা হয় Anonymous Function (বেনামী ফাংশন)।

পুরো ফাংশনটিকে আমরা myFunc নামের একটি ভেরিয়েবলের মধ্যে রেখে দেওয়া হয়েছে।

এখন এই ফাংশনটিকে চালাতে চাইলে ভেরিয়েবলের নাম ধরে ডাকতে হবে: myFunc()।


এদের মধ্যে আসল পার্থক্য কোথায়? (The Hoisting Game)
ইন্টারভিউতে বা জাভাস্ক্রিপ্ট শেখার সময় এই পার্থক্যটি সবচেয়ে বেশি গুরুত্বপূর্ণ। একে বলা হয় Hoisting (হয়স্টিং)।

ক) Function Declaration-কে তৈরির আগেই কল করা যায়:

// ফাংশন তৈরি করার আগেই কল করেছি
sayHi(); // আউটপুট: Hi!

function sayHi() {
    console.log("Hi!");
}

খ) Function Expression-কে তৈরির আগে কল করলে এরর (Error) দেবে:

// ফাংশন তৈরি করার আগে কল করেছি
sayHello(); // Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
    console.log("Hello!");
};






১ : দুইটি সংখ্যার যোগ

const add = function (a, b) {
    return a + b;
};

console.log(add(20, 30));  Output-50



২ : বিয়োগ

const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(50, 20)); Output- 30


৩ : গুণ

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 6)); Output-30



৪ : ভাগ

const divide = function (a, b) {
    return a / b;
};

console.log(divide(20, 5)); Output - 4


৫ : নাম প্রিন্ট

const showName = function () {
    console.log("Aziz");
};

showName();


৬ : বয়স দেখানো

const showAge = function () {
    console.log(24);
};

showAge();


৭ : Even Number Check

const isEven = function (number) {
    return number % 2 === 0;
};

console.log(isEven(10));
console.log(isEven(7));
true
false


৮ : বড় সংখ্যা বের করা

const maximum = function (a, b) {
    if (a > b) {
        return a;
    }

    return b;
};

console.log(maximum(80, 50)); Output-80


৯ : একটি String Return করা

const message = function () {
    return "Welcome";
};

console.log(message());


১০ : Array Print

const printArray = function () {
    console.log([10, 20, 30, 40]);
};

printArray();





Function Declaration vs Function Expression


Function Declaration

function greet() {
    console.log("Hello");
}

greet();
এখানে Function-এর একটি নাম (greet) আছে।



Function Expression

const greet = function () {
    console.log("Hello");
};

greet();

এখানে Function-টি Variable-এর মধ্যে রাখা হয়েছে।





Anonymous Function Expression
যখন Function-এর নিজের কোনো নাম থাকে না।

const greet = function () {
    console.log("Hello");
};

এটি সবচেয়ে বেশি ব্যবহৃত Function Expression।


Hoisting-এর পার্থক্য

Function Declaration

greet();

function greet() {
    console.log("Hello");
}

✅ এটি কাজ করবে।

কারণ Function Declaration সম্পূর্ণভাবে Hoisted হয়।


সুবিধা (Advantages)
Function-কে Variable-এ রাখা যায়।
Callback হিসেবে সহজে ব্যবহার করা যায়।
Dynamic Programming-এ উপযোগী।
Event Handling-এ ব্যাপক ব্যবহার হয়।
Anonymous Function তৈরি করা যায়।
আধুনিক JavaScript-এ খুবই প্রচলিত।



অসুবিধা (Disadvantages)
Hoisting-এর সুবিধা পাওয়া যায় না।
Function Assign করার আগে Call করলে Error হয়।
নতুনদের জন্য শুরুতে কিছুটা বিভ্রান্তিকর হতে পারে।


সারসংক্ষেপ:
Function Expression হলো এমন একটি পদ্ধতি যেখানে Function-কে একটি Variable-এর মধ্যে সংরক্ষণ করা হয়। এটি Callback Function, Event Handling, Higher-Order Function 
এবং আধুনিক JavaScript (ES6+) কোডে অত্যন্ত গুরুত্বপূর্ণ। তবে মনে রাখতে হবে,Function Expression-কে Assign করার আগে Call করা যায় না, কারণ এটি Function Declaration-এর মতো সম্পূর্ণ Hoisted হয় না।





Function-কে অন্য Function-এ পাঠানো যায়।  Jana Lagbe   Event Handling-এ ব্যবহার হয়।
