   Callback Function কি?

একটি ফাংশনের ভেতরে যখন অন্য একটি ফাংশনকে আর্গুমেন্ট হিসেবে পাঠানো হয় এবং প্রথম ফাংশনের কাজ শেষে বা ভেতরে দ্বিতীয় ফাংশনটিকে ডেকে (Call করে) চালানো হয়, 
তখন সেই দ্বিতীয় ফাংশনটিকে Callback Function বলে।

🧠 কেন CallBack Function প্রয়োজন?
  
জাভাস্ক্রিপ্ট হলো একটি Synchronous এবং Single-threaded ল্যাঙ্গুয়েজ। এর মানে হলো জাভাস্ক্রিপ্ট ওপর থেকে নিচে এক লাইন এক লাইন করে কোড রান করে।

কিন্তু রিয়েল-লাইফে কিছু কাজ শেষ হতে সময় লাগে—যেমন:

সার্ভার থেকে ডেটা ফেচ (Fetch) করা

ফাইল রিড করা

কোনো টাইমার বা ইউজার ক্লিক ইভেন্টের জন্য অপেক্ষা করা

এসব কাজ যদি জাভাস্ক্রিপ্ট থামিয়ে রেখে অপেক্ষা করতে যায়, তবে পুরো ওয়েবসাইট ফ্রিজ হয়ে যাবে। এই Asynchronous (অ্যাসিঙ্ক্রোনাস) বা অপেক্ষার কাজগুলো হ্যান্ডেল করার জন্যই কলব্যাক ফাংশনের জন্ম।

Simple Syntex;

function getMyName (myName) {
    myName();
}

let details = function() {
    console.log("Abdullah Aziz");
};

getMyName(details);





function getMyName (myName) {
   myName();
}

let details = function() {
   let name = "Abdullah";
   let age = 30;
   console.log(`${name} ${age}`);
};

getMyName(details);





function printResult(result) {
    console.log("Result is: " + result);
}
function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum); 
}

addNumbers(5, 5, printResult);

১. ফাংশন ডিফাইন বা তৈরি করা
printResult(result): এটি একটি ফাংশন যার কাজ হলো কোনো মান পেয়ে তা কনসোলে আউটপুট দেখানো।

addNumbers(a, b, callback): এটি প্রধান ফাংশন, যা ৩টি Parameters গ্রহণ করে:

a (প্রথম সংখ্যা)

b (দ্বিতীয় সংখ্যা)

callback (একটি ফাংশন)


২. ফাংশন কল ও মান পাস করা
addNumbers(5, 5, printResult);

a (Local Variable) = 5 পায়।
b (Local Variable) = 5 পায়।
callback (Local Variable) = printResult ফাংশনটির রেফারেন্স নিজের মধ্যে জমা রাখে।


৩. ভেতরের কাজ এবং লজিক (Execution Flow)

যোগ করা: 
let sum = a + b;
এখানে 5 + 5 = 10 যোগ হয়ে sum নামের একটি Local Variable-এ জমা হয়।

কলব্যাক চালানো:

callback(sum);

যেহেতু callback-এর ভেতর printResult আছে এবং sum-এর মান 10, তাই এই লাইনটি কার্যকরভাবে হয়ে যায়:👉 printResult(10);

রেজাল্ট রিসিভ ও প্রিন্ট করা:10 মানটি গিয়ে printResult(result) ফাংশনের result প্যারামিটারে (Local Variable) বসে।

এরপর console.log("Result is: " + result); লাইনটি রান হয়ে আউটপুট দেখায়:

Result is: 10







অ্যারো ফাংশন দিয়ে কোড


function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum); 
}

const printResult = (result) => {
    console.log("Result is: " + result);
};

addNumbers(5, 5, printResult);

------
function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum); 
}

addNumbers(5, 5, (result) => {
    console.log("Result is: " + result);
});

আগে printResult ছিল, আর এখানে নেই—এর কারণ হলো এই কোডে নাম ছাড়া সরাসরি অ্যারো ফাংশন (Inline Anonymous Arrow Function) ব্যবহার করা হয়েছে।

১. function addNumbers(a, b, callback) {
ব্যাখ্যা: এটি প্রধান ফাংশনের ঘোষণা।

এটি ৩টি প্যারামিটার গ্রহণ করে: a (প্রথম সংখ্যা), b (দ্বিতীয় সংখ্যা), এবং callback (একটি ফাংশন যা পরে রান হবে)।

২. let sum = a + b;
ব্যাখ্যা: a এবং b এর মান যোগ করে sum নামের একটি local variable-এ জমা রাখে।

৩. callback(sum);
ব্যাখ্যা: callback নামের লোকাল ভ্যারিয়েবলে যে ফাংশনটি পাঠানো হয়েছে, তাকে এই লাইনে কল করা হয় এবং আর্গুমেন্ট হিসেবে sum-এর মান পাঠানো হয়।

৪. addNumbers(5, 5, (result) => { ... });
ব্যাখ্যা: এটি ফাংশন কল করার লাইন।

এখানে ১ম মান a = 5, ২য় মান b = 5 এবং ৩য় মান হিসেবে কোনো ফাংশনের নাম না দিয়ে সরাসরি একটি Anonymous Arrow Function ব্র্যাকেটের ভেতর পাস করে দেওয়া হয়েছে।

৫. console.log("Result is: " + result);
ব্যাখ্যা: এটি সরাসরি পাসের মাধ্যমে পাঠানো অ্যারো ফাংশনটির ভেতরের কাজ। যখন callback(sum) কল হয়, তখন sum (১০) মানটি এই result-এ গিয়ে বসে এবং আউটপুট প্রিন্ট করে।
---





  
function sayGoodbye() {
   console.log("2. All tasks completed, goodbye!");
}

function processTask(cb) {
   console.log("1. Main task started...");
    
   cb(); 
}
processTask(sayGoodbye);

  
১. cb এর মধ্যে কী ঢোকে?

processTask(sayGoodbye);

তখন cb এর ভেতরে শুধুমাত্র sayGoodbye ফাংশনটি গিয়ে বসে।

1. Main task started... কিন্তু cb এর ভেতরে যায় না! ওটা processTask ফাংশনের নিজস্ব কোড।

২. তাহলে কীভাবে ১ এবং ২ নম্বর কনসোল রান হলো?
কম্পিউটার যখন processTask(sayGoodbye) চালানো শুরু করে, সে ওপর থেকে নিচে একটার পর একটা লাইন পড়ে:

🔹 ধাপ ১ (১ম কনসোল রান হওয়া):
কম্পিউটার processTask ফাংশনে ঢুকেই প্রথম লাইনটি দেখতে পায়:

console.log("1. Main task started...");

এটি cb এর সাথে যুক্ত নয়, এটি processTask এর নিজস্ব কাজ। তাই এটি সাথে সাথে স্ক্রিনে প্রিন্ট হয়ে যায় ➔ 1. Main task started...


🔹 ধাপ ২ (২য় কনসোলে পৌঁছানো):
এর পরের লাইনে গিয়ে কম্পিউটার দেখে লেখা আছে:

cb();

যেহেতু cb এর ভেতরে sayGoodbye ফাংশনটি বসে ছিল, তাই cb(); লেখার মানে হলো sayGoodbye(); ফাংশনকে রান করা।

🔹 ধাপ ৩ (২য় কনসোল রান হওয়া):
cb(); এর কারণে কম্পিউটার এখন লাফ দিয়ে sayGoodbye() ফাংশনের ভেতরে ঢুকে পড়ে!

আর sayGoodbye() ফাংশনের পেটের ভেতরেই তো বসে আছে ২ নম্বর কনসোলটি:

function sayGoodbye() {
   console.log("2. All tasks completed, goodbye!"); // 👈 এই যে ২ নম্বর কনসোল!
}

তাই কম্পিউটার এই লাইনটি চালিয়ে দেয় এবং স্ক্রিনে প্রিন্ট হয় ➔ 2. All tasks completed, goodbye!

💡 সংক্ষেপে সহজ হিসাব:
processTask শুরু হলো ➔ নিজস্ব ১ম কনসোল প্রিন্ট করল।

cb() কল হলো ➔ মানে sayGoodbye() শুরু হলো।

sayGoodbye() এর ভেতরে থাকা ২য় কনসোল প্রিন্ট হলো।





Callbacks-এর আসল এনাটমি (Anatomy)
  

সহজ কথায়: কলব্যাক হলো একটি ফাংশন যা অন্য একটি ফাংশনের ভেতরে আর্গুমেন্ট (Argument) হিসেবে পাস করা হয় এবং মূল কাজ শেষে তাকে কল (Call) করা হয়।

// ১. মেইন ফাংশন (Higher-Order Function)
function doMath(a, b, callback) {
    let result = a * b;
    callback(result); // এখানে কলব্যাক ফাংশনটিকে ডেকে দেওয়া হলো
}

// ২. কলব্যাক ফাংশন
function printOutput(data) {
    console.log("Calculated Value: " + data);
}

// ৩. পাস করা হলো
doMath(4, 5, printOutput); // Output: Calculated Value: 20




  

কলব্যাক লেখার ৩টি ভিন্ন স্টাইল (Writing Styles)

স্টাইল ১: Named Function (আলাদা নাম দিয়ে)

function greet(name) {
    console.log("Hello " + name);
}

function getUser(callback) {
    let name = "Rahim";
    callback(name);
}

getUser(greet);



স্টাইল ২: Anonymous Function (সরাসরি ভেতরে নাম ছাড়া)

function getUser(callback) {
    let name = "Karim";
    callback(name);
}

getUser(function(name) {
    console.log("Hello " + name);
});


স্টাইল ৩: Arrow Function (আধুনিক ES6 পদ্ধতি)

const getUser = (callback) => {
    let name = "Sakib";
    callback(name);
};

getUser((name) => console.log("Hello " + name));


  

Synchronous vs Asynchronous Callbacks
কলব্যাক প্রধানত দুই ধরনের কাজ করে:

ক. Synchronous Callback (সাথে সাথে রান হয়)
যেসব কলব্যাক সাথে সাথেই এক্সিকিউট হয়। যেমন জাভাস্ক্রিপ্টের built-in array methods:

const numbers = [1, 2, 3, 4, 5];

// forEach-এর ভেতরে থাকা অ্যারো ফাংশনটি একটি Synchronous Callback
numbers.forEach((num) => {
    console.log("Number: " + num);
});


খ. Asynchronous Callback (অপেক্ষা করে পরে রান হয়)
যেসব কাজ শেষ হতে সময় লাগে (যেমন: টাইমার, সার্ভার থেকে ডাটা আনা, ফাইল রিড করা):

console.log("1. Order Placed");

// setTimeout এর ভেতরে থাকা ফাংশনটি ৩ সেকেন্ড পর রান হবে
setTimeout(() => {
    console.log("2. Food is ready!");
}, 3000);

console.log("3. Sitting at the table");



  
একাধিক কলব্যাক পাস করা (Multiple Callbacks)

function checkAge(age, successCallback, errorCallback) {
    if (age >= 18) {
        successCallback("Access Granted!");
    } else {
        errorCallback("Access Denied! You are too young.");
    }
}

const showSuccess = (msg) => console.log("SUCCESS: " + msg);
const showError = (msg) => console.log("ERROR: " + msg);

checkAge(20, showSuccess, showError); // Output: SUCCESS: Access Granted!
checkAge(15, showSuccess, showError); // Output: ERROR: Access Denied! You are too young.


  
Callback-এর সবচেয়ে বড় সমস্যা: Callback Hell

// এটি হলো Callback Hell এর একটি কাল্পনিক দৃশ্য:
getUserData(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            getShippingStatus(details.id, (status) => {
                console.log("Status: " + status);
            });
        });
    });
});






  

🎯 Callback-এর চেকলিস্ট (মনে রাখার শেষ ৪টি কথা)
কলব্যাক কী? অন্য ফাংশনের পেটে প্যারামিটার হিসেবে যাওয়া ফাংশন।

ভুল করা যাবে না: পাস করার সময় myFunction() ব্র্যাকেট দেওয়া যাবে না, শুধু নাম myFunction পাঠাতে হবে।

কেন দরকার? একটা কাজ শেষ হওয়ার পর ঠিক তখনই আরেকটা কাজ চালু করার নিশ্চয়তা পাওয়ার জন্য।

পরবর্তী ধাপ: কলব্যাকের জটিলতা কাটানোর জন্য আমরা শিখবো Promises!






function details(cb){
  let name = "Abdullah";
  cb(name); // 💥 ২. এখানে এসেই কোড ভেঙে যাবে!
}

details(); // 👈 ১. আপনি কোনো কলব্যাক ফাংশন না পাঠিয়েই ডাকলেন

ধাপ ১:
যখন details() লিখা হল (ব্র্যাকেট খালি রেখে), তখন details ফাংশনের cb প্যারামিটারের মধ্যে কী গেল?

👉 কিছুই যায়নি! তাই cb হয়ে গেল undefined (ফাঁকা)।

ধাপ ২:

ফাংশনের ১ম লাইন চলল: let name = "Abdullah"; (ঠিক আছে)।

ধাপ ৩ (ক্র্যাশ!):
  
ফাংশনটি ২য় লাইনে এসে পেল: cb(name);

যেহেতু cb এখন undefined, কম্পিউটার এটাকে পড়তে চেষ্টা করে এভাবে: undefined("Abdullah");

এখন বলুন, undefined কি কোনো ফাংশন? না!

তাই জাভাস্ক্রিপ্ট সাথে সাথে লাল রঙের একটি মারাত্মক এরর দিয়ে দেবে:

❌ TypeError: cb is not a function

💡 তাহলে ভুলটা এড়ানোর সঠিক নিয়ম কী?
  
যদি চাওয়া হয় যে  কন না পাঠালেও যেন কোড ক্র্যাশ না করে, তাহলে ২টি উপায় আছে:

উপায় ১: একটা if দিয়ে চেক করে নেওয়া (নিরাপদ উপায়)


function details(cb){
  let name = "Abdullah";
  
  // যদি cb একটা ফাংশন হয়, তবেই রান করো!
  if (typeof cb === "function") {
      cb(name);
  } else {
      console.log("Name is: " + name);
  }
}

details(); // এখন আর এরর দেবে না! Output: Name is: Abdullah



function details(cb){
  let name = "Abdullah";
  cb(name);
}

// সঠিকভাবে কলব্যাক ফাংশন পাস করা হলো
details((data) => {
   console.log("My name is " + data);
}); 
// Output: My name is Abdullah
