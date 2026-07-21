জাভাস্ক্রিপ্টে অ্যারে ফাংশন (Arrow Functions) হলো ES6 (২০১৫)-এ আসা সবচেয়ে জনপ্রিয় এবং বহুল ব্যবহৃত একটি ফিচার। এটি মূলত ফাংশন লেখার একটি সংক্ষিপ্ত, আধুনিক এবং স্মার্ট পদ্ধতি।
এটা => (arrow/তীর চিহ্ন) ব্যবহার করে লেখা হয়।



পুরোনো নিয়ম (Regular Function):

// অনেকগুলো শব্দ লিখতে হতো (function, return, curly braces)
const addNumbers = function(a, b) {
    return a + b;
};



নতুন নিয়ম (Arrow Function):

// 'function' লেখা বাদ! তার বদলে আসলো ফ্যাট অ্যারো (=>)
const addNumbers = (a, b) => {
    return a + b;
};


----------------

function showMyname () {
    console.log("Abdullah Aziz");
}

showMyname()



let showMyName = function() {
    console.log("Abdullah Aziz");
};

showMyName()


Function Expression-এর শর্টকাট কি Arrow Function?
হ্যাঁ! অ্যারো ফাংশন মূলত Function Expression-কে আরও সংক্ষেপে এবং সহজ উপায়ে লেখার জন্যই আবিষ্কার করা হয়েছে।



let showMyName = () => {
    console.log("Abdullah Aziz")
};

showMyName();

let showMyName = ( ) => { console.log("Abdullah Aziz"); };
  │      │        │  │  └──────────────┬─────────────┘
  │      │        │  │                └─ 4. Function Body (কাজ)
  │      │        │  └─ 3. Fat Arrow (অ্যারো চিহ্ন)
  │      │        └─ 2. Parameters (ইনপুট নেওয়ার জায়গা)
  │      └─ 1. Function Name / Variable Name (ফাংশনের নাম)
  └─ Variable Keyword (let / const / var)

let showMyName = : যেহেতু অ্যারো ফাংশনের নিজস্ব কোনো নাম থাকে না (এদের Anonymous Function বলে), তাই একে পরে ডাকার সুবিধার্থে একটি ভেরিয়েবলের ভেতর জমা রাখা হয়েছে।

() (Parameter Box) : এর ভেতর আমরা ইনপুট রিসিভ করি (যেমন: (firstName, lastName))। কোনো ইনপুট না থাকলে ফাঁকা () রাখতে হয়।

=> (Fat Arrow) : এটিই হলো অ্যারো ফাংশনের মূল চিহ্ন! ইকুয়াল এবং গ্রেটার দ্যান সাইন মিলিয়ে এটি তৈরি। এটি মূলত বলে: "বা পাশে যা নিচ্ছ, তা নিয়ে ডানপাশের কাজটি করো।"

{ } (Function Body) : সেকেন্ড ব্র্যাকেটের ভেতর ফাংশনের মূল কোড লেখা থাকে।


⚡ আরও শর্টকাট (যদি মাত্র এক লাইনের কাজ হয়):

let showMyName = () => console.log("Abdullah Aziz");
সংক্ষেপে: function শব্দটা কেটে দিয়ে প্রথম ব্র্যাকেটের পাশে জাস্ট একটা => বসিয়ে দিলেই Function Expression-টি অ্যারো ফাংশনে রূপান্তর হয়ে যায়!

প্রফেশনাল সফটওয়্যার ডেভেলপমেন্টে Arrow Function এবং Regular Function—দুটিই প্রচুর ব্যবহৃত হয়, তবে তাদের ব্যবহারের জায়গাগুলো আলাদা।

তবে এক কথায় বলতে গেলে: আধুনিক প্রজেক্টগুলোতে ৮০-৯০% জায়গাতেই Arrow Function ব্যবহার করা হয়!




যেখানে Arrow Function বেশি ব্যবহৃত হয় (৮০%+ ক্ষেত্রে)

ক্লিন কোড এবং কম লেখার সুবিধার কারণে নিচের কাজগুলোতে Arrow Function প্রফেশনালদের প্রথম পছন্দ:

Array Methods (Callback Function): map, filter, reduce, forEach ইত্যাদির ভেতরে।

// প্রফেশনাল স্টাইল (এক লাইনে ক্লিন)
const activeUsers = users.filter(user => user.isActive);

Event Handlers / Callbacks: setTimeout, promises, then/catch, async/await ইত্যাদি লজিকের ভেতরে।

setTimeout(() => {
    console.log("Data loaded");
}, 1000);




যেখানে Regular Function ব্যবহার করতে হয় (বাধ্যতামূলক)

কিছু কিছু জায়গায় অ্যারো ফাংশন ব্যবহার করলে কোড ভেঙে যাবে বা এরর দেবে। সেখানে প্রফেশনালরা সব সময় Regular Function ব্যবহার করেন:

Object-এর ভেতর Method লেখার সময়: অবজেক্টের নিজস্ব ডেটা (this.name, this.age) এক্সেস করার জন্য।

const user = {
    name: "Mohammad Abdullah",
    // এখানে Regular Function ব্যবহার করতেই হবে
    getName: function() {
        return this.name;
    }
};

Constructor Function / Class Prototype: যখন কোনো ফাংশন থেকে নতুন অবজেক্ট তৈরি করা হয় (new কীওয়ার্ড দিয়ে)। অ্যারো ফাংশনকে new দিয়ে কল করা যায় না।

Global Level Utilities: কোনো ফাইলে একদম টপ-লেভেলে বড় কোনো হেল্পার ফাংশন লিখলে, যেখানে Function Hoisting (ফাংশন বানানোর আগেই তাকে ডাকার সুবিধা) দরকার হয়।


ছোট লজিক,               ফিল্টার, ম্যাপ বা কলব্যাক	Arrow Function	        কোড ছোট ও রিডেবল হয়।

অবজেক্টের ভেতরের মেথড (this দরকার)         	Regular Function	this     সঠিকভাবে অবজেক্টকে পয়েন্ট করে।

প্রমিজ, টিমার, ইভেন্ট লিসেনার	        Arrow Function	       বাইরের this নষ্ট হয় না।

কনস্ট্রাক্টর ফাংশন (new কীওয়ার্ড)	       Regular Function	      অ্যারো ফাংশন কনস্ট্রাক্টর হিসেবে কাজ করে না।






এর ৩টি গোল্ডেন রুলস মনে রাখলে কোড প্রো-লেভেলের হয়ে যাবে:
|
|

যদি ফাংশনের ভেতরে মাত্র এক লাইনের কোড থাকে (Implicit Return)

যদি ফাংশন শুধু এক লাইনের হিসাব করে কোনো কিছু রিটার্ন করে, তাহলে { } (সেকেন্ড ব্র্যাকেট) এবং return শব্দটা লেখার কোনো দরকার নেই! জাভাস্ক্রিপ্ট নিজে থেকেই ওটা রিটার্ন করে দেবে।

// কত্ত ছোট হয়ে গেলো!
const multiply = (x, y) => x * y;

console.log(multiply(5, 4)); // আউটপুট: 20





যদি মাত্র একটি প্যারামিটার থাকে 

যদি ফাংশনে মাত্র একটি প্যারামিটার (যেমন: শুধু name) রিসিভ করতে হয়, তাহলে প্যারামিটারের চারপাশের প্রথম ব্র্যাকেট () না দিলেও চলবে!

// 'name' এর চারপাশে কোনো ব্র্যাকেট নেই
const greet = name => "Hello, " + name;

console.log(greet("Abdullah")); // আউটপুট: "Hello, Abdullah"

⚠️ সতর্কতা: যদি কোনো প্যারামিটার না থাকে, অথবা একের বেশি প্যারামিটার থাকে, তবে অবশ্যই () ব্র্যাকেট দিতে হবে। (যেমন: () => "Hi!")




অবজেক্ট রিটার্ন করার ক্ষেত্রে

যদি অ্যারো ফাংশন থেকে কোনো শর্টকাট উপায়ে অবজেক্ট { } রিটার্ন করতে চাওয়া হয়, তবে অবজেক্টটিকে একটি প্রথম ব্র্যাকেটের ( ) ভেতর মুড়িয়ে দিতে হবে।
তা না হলে জাভাস্ক্রিপ্ট ওই { } কে ফাংশনের ব্লক মনে করে কনফিউজড হয়ে যাবে।

// ব্র্যাকেটের ভেতর অবজেক্ট
const getUser = () => ({ name: "Aziz", age: 25 });

console.log(getUser()); // আউটপুট: { name: 'Aziz', age: 25 }




রিয়েল-লাইফ ব্যবহার (অ্যারে মেথডের সাথে)

অ্যারো ফাংশন সবচেয়ে বেশি ব্যবহৃত হয় অ্যারের বিভিন্ন মেথড (যেমন: map, filter, forEach)-এর ভেতরে কলব্যাক (Callback) ফাংশন হিসেবে।

একটি অ্যারে থেকে শুধু জোড় সংখ্যাগুলো বের করে আনা।

const numbers = [1, 2, 3, 4, 5, 6];

// পুরোনো নিয়মে (বড় কোড)
const evensOld = numbers.filter(function(n) {
    return n % 2 === 0;
});

// অ্যারো ফাংশন দিয়ে (এক লাইনে ক্লিন কোড!)
const evensNew = numbers.filter(n => n % 2 === 0);

console.log(evensNew); // আউটপুট: [2, 4, 6]




সবচেয়ে বড় পার্থক্য: অ্যারো ফাংশনের নিজস্ব this নেই!

রেগুলার ফাংশন এবং অ্যারো ফাংশনের মধ্যে ইন্টারভিউতে সবচেয়ে বেশি যে প্রশ্নটা করা হয়, তা হলো এদের ভেতরের this কীওয়ার্ডের আচরণ নিয়ে।

রেগুলার ফাংশনে: this নির্ভর করে ফাংশনটি কে ডাকছে তার ওপর (কলিং অবজেক্ট)।

অ্যারো ফাংশনে: অ্যারো ফাংশনের নিজস্ব কোনো this নেই! সে তার ঠিক ওপরের লেভেলের (যেখানে সে জন্ম নিয়েছে) this-কে ধার করে ব্যবহার করে। একে বলা হয় Lexical Scoping।

const student = {
    name: "Mohammad",
    
    // রেগুলার ফাংশন: সে 'student' অবজেক্টকে চেনে
    sayHiRegular: function() {
        console.log("Hi, I am " + this.name);
    },
    
    // অ্যারো ফাংশন: সে 'student' অবজেক্টকে চেনে না! 
    sayHiArrow: () => {
        console.log("Hi, I am " + this.name);
    }
};

student.sayHiRegular(); // আউটপুট: "Hi, I am Mohammad" (ঠিকঠাক কাজ করছে)
student.sayHiArrow();   // আউটপুট: "Hi, I am undefined" (কারণ সে window অবজেক্টকে খুঁজছে!)

প্রো-টিপ: এই কারণেই অবজেক্টের ভেতরের মেথড (Method) বানানোর সময় কখনো অ্যারো ফাংশন ব্যবহার করতে হয় না।

🎯 সামারি (কখন কোনটি ব্যবহার ?):
  
অ্যারো ফাংশন ব্যবহার করবে: লুপের ভেতর, map, filter, বা ছোটখাটো লজিকের জন্য।

রেগুলার ফাংশন ব্যবহার করবে: অবজেক্টের মেথড বানাতে বা যেখানে this কীওয়ার্ড নিয়ে কাজ করতে হবে।

Array method-এর callback (map, filter, reduce, forEach)
ছোট, simple ফাংশন লিখতে

setTimeout/setInterval-এর ভেতরে যেখানে বাইরের this দরকার



