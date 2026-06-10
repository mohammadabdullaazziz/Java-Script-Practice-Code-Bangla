JavaScript-এ Array (অ্যারে) হলো একটি বিশেষ ধরনের অবজেক্ট যা একটি একক ভেরিয়েবলের মধ্যে একাধিক মান (Value) জমা রাখতে ব্যবহার করা হয়। সহজ কথায়, এটি একটি তালিকার মতো।

অ্যারে সাধারণত থার্ড ব্র্যাকেট [] দিয়ে তৈরি করা হয়।

প্রোগ্রামিং বা ডাটা স্ট্রাকচারের ভাষায় Ordered (অর্ডার্ড) মানে হলো একটি সুনির্দিষ্ট ক্রম বা সাজানো ব্যবস্থা।

Array Element হলো একটি অ্যারের ভেতরে থাকা প্রতিটি আলাদা আলাদা মান (Value)।
একটি অ্যারে যদি হয় একটি বাক্সের মতো, তবে সেই বাক্সের ভেতরে আপনি যা যা রেখেছেন, তার প্রতিটিই হলো একেকটি Element।
let fruits = ["Mango", "Banana", "Apple"]; 
"Mango" একটি Element।
"Banana" একটি Element।
"Apple" একটি Element।
এই অ্যারেতে মোট ৩টি Element আছে।

// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
let fruits = ["Apple", "Banana", "Cherry"];

// Creating an array with mixed data types
let mixed = [1, "Hello", true, null];


  
Array.length:
-------------------------------------------
জাভাস্ক্রিপ্টে একটি অ্যারের (Array) মধ্যে মোট কয়টি উপাদান আছে তা জানার জন্য .length প্রোপার্টি ব্যবহার করা হয়। 
এটি কোনো মেথড নয়, বরং একটি প্রোপার্টি। তাই এর শেষে কোনো ব্র্যাকেট () বসে না।
একটি অ্যারের সর্বোচ্চ ইনডেক্স যা থাকে, length-এর মান তার থেকে সবসময় ১ বেশি হয় (কারণ ইনডেক্স শুরু হয় ০ থেকে)।

সর্বোচ্চ সীমা: জাভাস্ক্রিপ্টে একটি অ্যারের সর্বোচ্চ দৈর্ঘ্য হতে পারে 
বা ৪,২৯,৪৯,৬৭,২৯৫ টি এলিমেন্ট।

const fruits = ["Mango", "Apple", "Banana", "Orange"];
// অ্যারের দৈর্ঘ্য বের করা
let size = fruits.length;
console.log(size); // output: 4

Array Truncation

Array Truncation মানে হলো একটি অ্যারের দৈর্ঘ্য কমিয়ে সেটিকে ছোট বা "ছেঁটে" ফেলা।
জাভাস্ক্রিপ্টে যখন কোনো অ্যারের মূল দৈর্ঘ্যের (length) চেয়ে কম মান সেট করে দেওয়া হয়, তখন বাড়তি উপাদানগুলো স্থায়ীভাবে মুছে যায়। 
এই প্রক্রিয়াকেই প্রোগ্রামিংয়ের ভাষায় Truncation বলা হয়।
একটি ঝুড়ি আছে যাতে ৫টি ফল আছে।  যদি নির্দেশ দেওয়া হয় "এই ঝুড়িতে মাত্র ৩টি ফল থাকবে", তখন শেষের ২টি ফল ফেলে দিতে হবে। জাভাস্ক্রিপ্টেও ঠিক এই কাজটিই হয়।

let fruits = ["Mango", "Apple", "Banana", "Orange", "Grape"];
// এখানে length হলো ৫
fruits.length = 3; 
// আমরা দৈর্ঘ্য কমিয়ে ৩ করে দিলাম (Truncate করলাম)
console.log(fruits); 
// আউটপুট: ["Mango", "Apple", "Banana"]
এখানে Orange এবং Grape অ্যারে থেকে স্থায়ীভাবে ডিলিট হয়ে গেছে।

ডেটা রিমুভ করতে: অ্যারের শেষ থেকে এক বা একাধিক এলিমেন্ট দ্রুত ডিলিট করার জন্য এটি সবচেয়ে সহজ পদ্ধতি।
অ্যারে খালি করতে: যদি array.length = 0; , তবে পুরো অ্যারেটি এক নিমেষেই খালি হয়ে যাবে।

স্থায়ী পরিবর্তন: একবার ট্রানকেট (Truncate) করে ফেললে ডিলিট হওয়া ডেটা আর ফিরে পাওয়া যায় না। আপনি যদি পরে আবার length = 5 করেন,
তবে আগের ডেটা ফিরে আসবে না, বরং সেখানে undefined বা empty দেখাবে।
পারফরম্যান্স: বড় কোনো অ্যারে খালি করার জন্য array = [] ব্যবহার করার চেয়ে array.length = 0 করা অনেক সময় বেশি কার্যকর হয়, 
কারণ এটি মেমোরিতে থাকা আগের অ্যারে রেফারেন্সকেই আপডেট করে।

let numbers = [10, 20, 30, 40, 50, 60];
numbers.length = 3; 
console.log(numbers); // আউটপুট: [10, 20, 30]
এখানে length = 3 করে দেওয়ায় শেষের তিনটি এলিমেন্ট পারমানেন্টলি ডিলিট হয়ে গেছে। বড় কোনো অ্যারে থেকে দ্রুত ডেটা ছেঁটে ফেলার এটি একটি প্রো-ট্রিক।

আপনি যদি এখন আবার numbers.length = 6; করেন, তবে পুরনো ডাটাগুলো (40, 50, 60) ফিরে আসবে না। পরিবর্তে খালি জায়গা (empty slots) তৈরি হবে।
let numbers = [10, 20, 30, 40, 50, 60];
numbers.length = 3;
numbers.length = 6;
console.log(numbers);

Clearing an Array
একটি অ্যারের সব এলিমেন্ট একবারে মুছে ফেলার সবচেয়ে দ্রুত এবং মেমোরি-সেফ উপায় হলো তার length শূন্য করে দেওয়া।

let data = [1, 2, 3, 4, 5];
data.length = 0;
console.log(data); // আউটপুট: []

Dynamic Indexing
অ্যারের শেষ এলিমেন্টে নতুন কিছু যোগ করতে চাইলে আপনি .push() ছাড়াও length ব্যবহার করতে পারেন। কারণ একটি অ্যারের শেষ ইনডেক্স সবসময় হয় length - 1। 
let fruits = ["Mango", "Apple"];
fruits[fruits.length] = "Banana"; 
fruits[fruits.length] = "Abdullah";
fruits[fruits.length] = "Mohammad";
console.log(fruits); // আউটপুট: ["Mango", "Apple", "Banana", "Abdullah", "Mohammad"]

let stack = [];
stack[stack.length] = 10;
stack[stack.length] = 20;
console.log(stack); // [10, 20]

length শুধু count না, control tool
Array shrink/expand করা যায়
Performance optimize করা যায়
Data structure implement করা যায়
Memory behavior বোঝা যায়

Last element access 
let arr = [5, 10, 15];
console.log(arr[arr.length - 1]); // 15


let arr = [];
arr[5] = 100;

console.log(arr.length); // 6

arr[5] = 100;
সরাসরি index 5-এ value
তার আগে index 0,1,2,3,4 ফাঁকা (empty) রয়ে গেছে
Index:   0    1    2    3    4    5
Value:  empty empty empty empty empty 100

👉 JavaScript-এ length মানে:
👉 highest index + 1

length = 5 + 1 = 6

console.log(arr[0]); // undefined
👉 কিন্তু এটা actual value না, এটা empty slot
console.log(0 in arr); // false
console.log(5 in arr); // true


let name = ["Abdullah", "Mohammad", "Ebny", "Aziz", "Arman", "Rokshana"];
let newName = [...name, name.length];
console.log(newName);

let arr = [1, 2, 3, 4, 5, 6];
let newArr = [...arr, arr.length];
console.log(newArr); 

এই কোডটি জাভাস্ক্রিপ্টের আধুনিক একটি ফিচার যাকে Spread Operator (...) বলা হয়,
  
let arr = [1, 2, 3];
এখানে arr নামে একটি অ্যারে তৈরি করা হয়েছে যার মধ্যে তিনটি এলিমেন্ট আছে: ১, ২ এবং ৩।
এই অ্যারেটির length (দৈর্ঘ্য) হলো ৩।

let newArr = [...arr, arr.length];
...arr (Spread Operator): এই তিনটি ডট (...) মূলত arr অ্যারের ভেতরে থাকা এলিমেন্টগুলোকে (১, ২, ৩) "ছড়িয়ে" বা "বের করে" দিচ্ছে।
arr.length: এটি arr অ্যারের দৈর্ঘ্য কত তা বের করছে। আমরা জানি এখানে ৩টি এলিমেন্ট আছে, তাই এর মান হলো ৩।
  
...arr	 1, 2, 3	 অ্যারের ভেতরের মানগুলোকে আলাদা করা

arr.length	3	 অ্যারেতে কয়টি সংখ্যা আছে তা বের করা
newArr	[1, 2, 3, 3]	 ছড়িয়ে দেওয়া মান এবং লেন্থকে এক করা
-----------------------------------------------------------------------------------------------------------------------------------------------------------

Array Index
-----------------------------------------------------------------------------------------------------------------------------------------------------------
অ্যারের প্রতিটি উপাদানের একটি নির্দিষ্ট পজিশন বা নাম্বার থাকে, যাকে বলা হয় Index। javaScript-এ ইনডেক্স সবসময় ০ (Zero) থেকে শুরু হয়।
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log(colors[0]); // output: "Red"
console.log(colors[2]); // output: "Blue"

"Red" এর ইনডেক্স হলো 0

"Green" এর ইনডেক্স হলো 1

"Blue" এর ইনডেক্স হলো 2

"Yellow" এর ইনডেক্স হলো 3

ইনডেক্স ব্যবহার করে মান পরিবর্তন করা
let fruits = ["Mango", "Apple"];
fruits[1] = "Banana"; // ১ নম্বর ইনডেক্সে 'Apple' এর বদলে 'Banana' হয়ে গেল।

console.log(fruits); // আউটপুট: ["Mango", "Banana"] 

ইনডেক্স আউট অফ বাউন্ড (Out of Bounds)
যদি আপনি এমন কোনো ইনডেক্স নম্বর দিয়ে মান খুঁজতে চান যা ওই অ্যারেতে নেই, তবে জাভাস্ক্রিপ্ট আপনাকে undefined দেখাবে।
let x = [1, 2];
console.log(x[5]); // আউটপুট: undefined (কারণ ৫ নম্বর ইনডেক্সে কিছু নেই) 

Index মানে হলো এলিমেন্টের পজিশন।

গণনা শুরু হয় ০ থেকে, ১ থেকে নয়।

শেষ ইনডেক্স হলো Length - 1।

ব্র্যাকেটের ভেতর ইনডেক্স নম্বর দিয়ে মান পড়া বা পরিবর্তন করা যায়।

নেগেটিভ ইনডেক্স (Negative Index) :

জাভাস্ক্রিপ্টে সরাসরি থার্ড ব্র্যাকেট [] ব্যবহার করে নেগেটিভ ইনডেক্স কাজ করে না (এটি undefined দেখায়), 
কিন্তু আধুনিক জাভাস্ক্রিপ্টে (ES2022+) .at() নামক একটি চমৎকার মেথড আছে যা নেগেটিভ ইনডেক্স নিয়ে কাজ করতে পারে।
জাভাস্ক্রিপ্টে .at() মেথড ব্যবহার করে নেগেটিভ ইনডেক্স দিয়ে উল্টো দিক থেকে মান বের করা যায়।
.at(-1) মানে হলো শেষের দিক থেকে ১ নম্বর (একেবারে শেষ এলিমেন্ট)।
.at(-2) মানে হলো শেষের দিক থেকে ২ নম্বর।

ইনডেক্স ০ থেকে শুরু হয় (বাম থেকে ডানে)। কিন্তু যখন আপনার অ্যারের একদম শেষের কোনো মান দরকার হয়, তখন উল্টো দিক থেকে (ডান থেকে বামে) গণনা করা অনেক সহজ। 
একেই বলে নেগেটিভ ইনডেক্স।

let fruits = ["Mango", "Banana", "Apple", "Orange", "Grape"];

// ১. শেষের এলিমেন্ট বের করা (Negative 1)
console.log(fruits.at(-1)); // আউটপুট: "Grape"

// ২. শেষ থেকে দ্বিতীয় এলিমেন্ট বের করা (Negative 2)
console.log(fruits.at(-2)); // আউটপুট: "Orange"

// ৩. শেষ থেকে তৃতীয় এলিমেন্ট বের করা (Negative 3)
console.log(fruits.at(-3)); // আউটপুট: "Apple"
let sports = ["Cricket", "Football", "Tennis"];
console.log(sports.at(-1)); // আউটপুট: "Tennis"

.at() ছিল না, তখন আমাদের অনেক কষ্ট করে শেষের মান বের করতে হতো এভাবে:

let fruits = ["Mango", "Banana", "Apple", "Orange", "Grape"];
// length ব্যবহার করে শেষের মান বের করা
console.log(fruits[fruits.length - 1]); // আউটপুট: "Grape"

পজিটিভ (বাম থেকে ডানে)	0 দিয়ে	0, 1, 2, 3...
নেগেটিভ (ডান থেকে বামে)	-1 দিয়ে	-1, -2, -3...
নেগেটিভ ইনডেক্স শুরু হয় -১ থেকে (কারণ -০ বলে কিছু নেই)।



কোনো নির্দিষ্ট Index-এর মানকে অ্যারে থেকে বের করে একটি আলাদা ভেরিয়েবলে জমা রাখাকেই বলা হয় Accessing and Storing।
এটি করার দুটি জনপ্রিয় উপায় আছে: একটি হলো সাধারণ ইনডেক্স পদ্ধতি, আর অন্যটি হলো আধুনিক Array Destructuring।
  
(Basic Indexing):

let colors = ["Red", "Green", "Blue", "Yellow"];

// ২ নম্বর ইনডেক্সের মান (Blue) বের করে 'myFavoriteColor' ভেরিয়েবলে রাখা
let myFavoriteColor = colors[2];
console.log(myFavoriteColor); // আউটপুট: Blue

(Array Destructuring) :

let students = ["Abdur", "Rahim", "Karim"];

// প্রথম ও দ্বিতীয় ইনডেক্সের মান আলাদা ভেরিয়েবলে নেওয়া
let [firstStudent, secondStudent] = students;

console.log(firstStudent);  // আউটপুট: Abdur
console.log(secondStudent); // আউটপুট: Rahim

গাণিতিক হিসাব করে আপডেট (Updating with Math):

let scores = [10, 20, 30];

// ১ নম্বর ইনডেক্সের স্কোরের সাথে আরও ৫ যোগ করি
scores[1] = scores[1] + 5; 
// অথবা সংক্ষেপে: scores[1] += 5;

console.log(scores); 
// আউটপুট: [10, 25, 30]

লুপ ব্যবহার করে সব ইনডেক্স আপডেট (Bulk Update):

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2; // প্রতিটি মানকে ২ দিয়ে গুণ করে আপডেট করা হচ্ছে
}

console.log(numbers); 
// আউটপুট: [2, 4, 6, 8, 10]


ইনডেক্স খোঁজা (indexOf): 
আপনার কাছে একটি মান আছে কিন্তু আপনি জানেন না সেটির ইনডেক্স কত, তখন indexOf() ব্যবহার করতে হয়।

let students = ["Abdur", "Rahim", "Karim"];
let position = students.indexOf("Rahim");
console.log(position); // আউটপুট: 1

ইনডেক্স এবং ডিলিট (Delete vs Splice): 
অ্যারে থেকে কোনো উপাদান (element) মুছে ফেলার ক্ষেত্রে delete এবং splice() এর মধ্যে অনেক বড় পার্থক্য রয়েছে। 
সহজ কথায়, delete শুধু মানটি মুছে ফেলে কিন্তু ঘরটি খালি রেখে দেয়, আর splice() পুরো ঘরটিই সরিয়ে ফেলে অ্যারে-কে ছোট করে দেয়। 

Delete Mathod:
delete ব্যবহার করলে ওই ইনডেক্সের মানটি undefined হয়ে যায়, কিন্তু অ্যারের দৈর্ঘ্য (length) কমে না। একে বলা হয় "Hole" তৈরি করা।

let fruits = ["Mango", "Banana", "Apple", "Orange"];
// ১ নম্বর ইনডেক্স (Banana) ডিলিট করি
delete fruits[1];
console.log(fruits); 
// আউটপুট: ["Mango", <1 empty item>, "Apple", "Orange"]
console.log(fruits.length); 
// আউটপুট: 4 (দৈর্ঘ্য কিন্তু কমেনি!)


splice() মেথড: 
এটি প্রফেশনাল উপায়। এটি নির্দিষ্ট ইনডেক্স থেকে মানটি মুছে ফেলে এবং পরের উপাদানগুলোকে সামনে টেনে আনে। ফলে অ্যারের দৈর্ঘ্য কমে যায়।

let colors = ["Red", "Green", "Blue", "Yellow"];

// ১ নম্বর ইনডেক্স (Green) থেকে ১টি উপাদান মুছে ফেলি
colors.splice(1, 1); 

console.log(colors); 
// আউটপুট: ["Red", "Blue", "Yellow"]
console.log(colors.length); 
// আউটপুট: 3 (অ্যারেটি ছোট হয়ে গেছে)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
জাভাস্ক্রিপ্ট-এ অ্যারে (Array) মূলত ৩টি ভিন্ন উপায়ে লেখা বা তৈরি করা যায়। তবে ব্যাকএন্ড ডেভেলপমেন্ট বা রিয়েল-লাইফ কোডিংয়ে এর মধ্যে ১টি নিয়মই ৯৯% সময়ে ব্যবহার করা হয়, বাকিগুলো ইন্টারভিউ বা খুঁটিনাটি লজিক জানার জন্য মনে রাখলেই চলবে।

১. Array Literal (সবচেয়ে সহজ এবং সবচেয়ে বেশি ব্যবহৃত নিয়ম)
জাভাস্ক্রিপ্টে থার্ড ব্র্যাকেট [ ] ব্যবহার করে সরাসরি অ্যারে লেখার এই পদ্ধতিকে বলা হয় অ্যারে লিটারেল।  প্রফেশনাল ডেভেলপাররা সবসময় এই নিয়মটাই ব্যবহার করেন। এটি দেখতে সুন্দর, ফাস্ট এবং কোড লিখতে সময় কম লাগে।

// একদম সহজ এবং স্ট্যান্ডার্ড নিয়ম
const numbers = [10, 20, 30, 40];
const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits); // আউটপুট: ["Apple", "Mango", "Banana"]

২. new Keyword এবং Constructor ব্যবহার করে
জাভাস্ক্রিপ্টের বিল্ট-ইন Array() অবজেক্টের আগে new কীওয়ার্ড বসিয়ে অ্যারে তৈরি করা যায়। অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর স্টাইলে এটি কাজ করে।

// এই নিয়মটাও কাজ করবে, তবে মানুষ এটা সাধারণত লেখে না
const colors = new Array("Red", "Green", "Blue");

console.log(colors); // আউটপুট: ["Red", "Green", "Blue"]

⚠️ এখানে একটা বিশাল খুঁটিনাটি প্যাঁচ (Trap) আছে, যা ইন্টারভিউতে ধরা হয়:
যদি new Array(5) লিখা হয়, তবে জাভাস্ক্রিপ্ট ৫ উপাদান বিশিষ্ট কোনো অ্যারে বানাবে না, বরং সে ৫টি খালি ঘর (Empty Slots) ওয়ালা একটা ফাঁকা অ্যারে তৈরি করবে!

const emptyArray = new Array(5); 
console.log(emptyArray); // আউটপুট: [ <5 empty items> ] এই ঝামেলার কারণেই ডেভেলপাররা এই দ্বিতীয় নিয়মটা এড়িয়ে চলেন।


৩. Array.of() মেথড ব্যবহার করে (অ্যাডভান্সড নিয়ম)
এটি ES6 সংস্করণে আসা একটি আধুনিক মেথড। ব্র্যাকেটের ভেতর যে ডেটাগুলো কমা দিয়ে দেওয়া হবে, সে সেগুলোকে নিয়ে একটা নতুন অ্যারে বানিয়ে দেবে।

// ব্র্যাকেটের ভেতরের উপাদানগুলো দিয়ে অ্যারে তৈরি হবে
const mixedArray = Array.of(100, "Hello", true);

console.log(mixedArray); // আউটপুট: [100, "Hello", true]
(উপরের ২ নম্বর নিয়মে যে new Array(5) দিলে খালি ঘর তৈরি হওয়ার ঝামেলা ছিল, Array.of(5) দিলে সেই ঝামেলা হয় না। এটি সরাসরি [5] আউটপুট দেয়).

  💡 বোনাস ট্রিক: Array.from() (স্ট্রিং থেকে অ্যারে বানানো)
কখনো কখনো কোনো টেক্সট বা স্ট্রিং-এর প্রতিটা অক্ষরকে আলাদা করে অ্যারে বানানোর জন্য এই মেথডটি ব্যাকএন্ডে বা DSA-তে দারুণ কাজে দেয়:

const nameText = "Abdullah";
const nameArray = Array.from(nameText);

console.log(nameArray); 
// আউটপুট: ['A', 'b', 'd', 'u', 'l', 'l', 'a', 'h']

যখন নিজের প্রজেক্ট বা ব্যাকএন্ডের কোড লিখা হবে, চোখ বন্ধ করে সবসময় ১ নম্বর নিয়ম (Array Literal - [ ]) ব্যবহার করলে ভাল।


Empty Array তৈরি করে পরে value যোগ করা

let colors = [];

colors[0] = "Red";
colors[1] = "Blue";
colors[2] = "Green";

console.log(colors);   
["Red", "Blue", "Green"]
