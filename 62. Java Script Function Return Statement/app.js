📌 Return Statement কী?
    
Return Statement ব্যবহার করা হয় ফাংশন থেকে কোনো মান আউটপুট বা ফেরত দেওয়ার জন্য। যখন ফাংশন কল করা হয়, তখন এটি একটি মান রিটার্ন করে এবং ফাংশনের এক্সিকিউশন সেখানেই থেমে যায়।

return মূলত দুটি প্রধান কাজ করে:

ফাংশন থেকে একটি নির্দিষ্ট মান (Value) বাইরে পাঠানো: ফাংশনের ভেতরের কোনো হিসাব-নিকাশের ফলাফল বাইরে অন্য কোথাও ব্যবহার করার জন্য।

ফাংশনের এক্সিকিউশন বন্ধ করা: কোড যখনই return লাইনে পৌঁছাবে, ফাংশনটি সাথে সাথে সেখানেই থেমে যাবে। এর নিচে আর কোনো কোড রান করবে না।



function jogKoro(a, b) {
    let result = a + b;
    return result; // এখানে ফাংশনটি তার ফলাফল বাইরে পাঠিয়ে দিচ্ছে
}

// ফাংশনটি কল করে তার রিটার্ন করা মান একটি ভ্যারিয়েবলে রাখা হলো
let sum = jogKoro(5, 10); 

console.log(sum); // আউটপুট দেখাবে: 15
নোট: যদি ফাংশনে return ব্যবহার না করা হত, তাহলে sum ভ্যারিয়েবলের মান হতো undefined। কারণ জাভাস্ক্রিপ্ট ফাংশন নিজে থেকে কিছু রিটার্ন না করলে ডিফল্টভাবে undefined রিটার্ন করে।




বেসিক সিনট্যাক্স

function functionName(parameters) {
    // ফাংশনের কাজ
    return value;  // ফাংশন থেকে value রিটার্ন করে
}

// ফাংশন কল করলে রিটার্ন ভ্যালু পাবেন
let result = functionName(arguments);





মনে রাখার মতো কিছু গুরুত্বপূর্ণ বিষয় ⚠️

শুধু return লেখা: যদি কোনো মান না লিখে শুধু return; লিখা হয়, তবে ফাংশনটি সেখানেই থেমে যাবে এবং undefined রিটার্ন করবে। এটি সাধারণত কোনো শর্তে ফাংশন মাঝপথে থামানোর জন্য ব্যবহৃত হয়।

নতুন লাইনের ফাঁদ (ASI - Automatic Semicolon Insertion): return লেখার ঠিক পরের লাইনে কখনো রিটার্ন করার মানটি লিখবেন না। যেমন:

// এটি ভুল পদ্ধতি ❌
return 
a + b; // এটি কাজ করবে না, undefined রিটার্ন করবে।

// এটি সঠিক পদ্ধতি  
return a + b;

যদি বড় কোনো অবজেক্ট বা কোড নিচের লাইনে লিখতেই হয়, তবে প্রথম বন্ধনী () ব্যবহার করতে হবে:

return (
   a + b
);





Return Statement-এর মৌলিক ব্যবহার

function add(a, b) {
    return a + b;  // a + b রিটার্ন করে
}

const result = add(5, 3);
console.log(result); // 8




// Return ছাড়া
function addWithoutReturn(a, b) {
    const sum = a + b;
    // কোন রিটার্ন নেই - undefined রিটার্ন করে
}

const result2 = addWithoutReturn(5, 3);
console.log(result2); // undefined





function addNumber(num1, num2) {
    let total = num1 + num2;
    return total;
  
}
const result = addNumber(5, 10);
console.log("The sum is: " + result);

const result = addNumber(5, 10); অবশ্যই লিখতে হবে এমন নয়। এটা লেখা হয় ফাংশন যে মান return করেছে, সেটা পরে ব্যবহার করার জন্য।
---
function addNumber(num1, num2) {
    return num1 + num2;
}

const result = addNumber(5, 10);
console.log(result);

result-এ 15 সংরক্ষণ হয়েছে। পরে চাইলে আবার ব্যবহার করা যাবে
console.log(result * 2); // 30


Variable ছাড়াই

function addNumber(num1, num2) {
    return num1 + num2;
}

console.log(addNumber(5, 10));

এটাও ঠিক। এখানে 15 সরাসরি console.log()-এ চলে গেছে, আলাদা variable লাগেনি।

একই return value বারবার ব্যবহার করতে হলে

const result = addNumber(5, 10);

console.log(result);
console.log(result + 20);
console.log(result * 3);
এভাবে একবার ফাংশন কল করেই একই মান অনেক জায়গায় ব্যবহার করা যায়।


তাহলে const result = addNumber(5, 10); কেন লেখা হয়?

কারণ addNumber(5, 10) একটি value (15) return করে। সেই value-টা যদি পরে আবার ব্যবহার করতে চাইলে, তাহলে variable-এ রাখতে হবে।





function addNumber(num1, num2) {
    let total = num1 + num2;
    return total;
    console.log("This line will also never be executed because it is after the return statement.");
}
const result = addNumber(5, 10);
console.log("The sum is: " + result);

return স্টেটমেন্ট যেই মুহূর্তে execute হয়, সাথে সাথে ফাংশনটা বন্ধ হয়ে যায় এবং কন্ট্রোল ফাংশনের বাইরে চলে যায়। 
এর পরে ওই ফাংশনের ভেতরে থাকা আর কোনো কোড রান হয় না — সেটা console.log হোক বা অন্য কিছু।

function addNumber(num1, num2) {
    let total = num1 + num2;
    return total;   // এখানেই ফাংশন শেষ, value রিটার্ন হয়ে গেল
    console.log("এই লাইনটা কখনো রান হবে না"); // dead code / unreachable
}

JavaScript ইঞ্জিন কোড লাইন বাই লাইন পড়ে, আর return পেলেই বুঝে নেয় যে এই ফাংশনের কাজ শেষ — তাই এর পরের লাইনগুলো সে স্কিপ করে দেয় (এমনকি চেক পর্যন্ত করে না)।
অনেক এডিটর/লিন্টার (যেমন VS Code, ESLint) এই ধরনের কোডকে "unreachable code" বলে ধূসর (grayed out) দেখায় বা ওয়ার্নিং দেয়।


যদি return-এর আগে বা পরে console.log চালাতে হয়

function addNumber(num1, num2) {
    let total = num1 + num2;
    console.log("Total calculated: " + total); // return এর আগে রাখো
    return total;
}

অথবা ফাংশন কল করার পর বাইরে থেকে 

const result = addNumber(5, 10);
console.log("The sum is: " + result); // এটা ঠিকভাবে কাজ করবে






function prize(money) {
    let eggPrize = 10;
    let quantity = money * eggPrize; 
    return(
        quantity
    ) ;

    //return quantity, Hello;
}

let result = prize(5);
console.log("The total prize is: " + result);


let result = prize(5);
console.log("The total prize is: " + result);

ফাংশন ডিফাইন করা হচ্ছে 

function prize(money) {
    let eggPrize = 10;
    let quantity = money * eggPrize; 
    return quantity;
}

এখানে prize নামে একটা ফাংশন বানানো হয়েছে যেটা money নামে একটা প্যারামিটার নেয়। এই লাইনে এখনো ফাংশন রান হয়নি — শুধু ডিফাইন হয়েছে (blueprint তৈরি হয়েছে)।

ফাংশন কল করা হচ্ছে

let result = prize(5);
এখন ফাংশনটা কল হচ্ছে, আর money প্যারামিটারে 5 পাঠানো হচ্ছে। এবার ফাংশনের ভেতরের কোড লাইন বাই লাইন রান হবে:

let eggPrize = 10; → একটা ডিমের দাম ধরা হচ্ছে ১০ টাকা
let quantity = money * eggPrize; → হিসাব হচ্ছে 5 * 10 = 50
return quantity; → 50 ফেরত (return) পাঠানো হচ্ছে

তারপর result ভ্যারিয়েবলে সেই রিটার্ন হওয়া মান, অর্থাৎ 50, জমা হয়ে যাচ্ছে।

let result = 50; // এভাবে 

প্রিন্ট করা হচ্ছে

console.log("The total prize is: " + result);

এখানে string আর number যোগ (+) করা হচ্ছে। JavaScript নাম্বারটাকে অটোমেটিক্যালি string-এ কনভার্ট করে জোড়া লাগিয়ে দেয় (একে বলে string concatenation)।





function funName() {
    return "My name is \"Abdullah Aziz\"";
}

let name = funName();
console.log(name);


function funName(name1, name2) {
    return "My name is \"Abdullah Aziz\"";
}

let name = funName("Mohammad", "Arman");
console.log(name);

এখানে প্যারামিটার অনুযায়ী আর্গুমেন্ট না যাওয়ার মূল কারণ হলো— ফাংশনের ভেতরে প্যারামিটার দুটি (name1, name2) কোথাও ব্যবহারই করা হয়নি।
বাইরে থেকে "Mohammad" এবং "Arman" আর্গুমেন্ট হিসেবে ঠিকই পাঠিয়েছে। কিন্তু ফাংশনের ভেতর থেকে একটা নির্দিষ্ট টেক্সট বা Hardcoded String রিটার্ন করে দেওয়া হয়েছে,
যা হলো "My name is \"Abdullah Aziz\""।

সহজ কথায়, ফাংশনকে বলা হয়েছে: "আমি তোমাকে যে নামই দিই না কেন, তুমি সবসময় 'Abdullah Aziz' নামটাই ফেরত দেবে।"

কোডটি যেভাবে কাজ করছে (লাইন বাই লাইন):

let name = funName("Mohammad", "Arman"); -> এখানে "Mohammad" গিয়ে জমা হচ্ছে name1 এর ভেতর, আর "Arman" জমা হচ্ছে name2 এর ভেতর।

ফাংশনের ভেতরে ঢোকার পর, ফাংশনটি name1 বা name2 এর দিকে তাকাচ্ছেই না। সে সরাসরি "My name is \"Abdullah Aziz\"" লেখাটি রিটার্ন করে দিচ্ছে।

ফলে console.log(name) করার পর আউটপুট আসছে: My name is "Abdullah Aziz".


function funName(name1, name2) {
    return "My name is \"" + name1 + " " + name2 + "\"";
}

let name = funName("Mohammad", "Arman");
console.log(name); 
// আউটপুট আসবে: My name is "Mohammad Arman"


function funName(name1, name2) {
    return `My name is "${name1} ${name2}"`;
}

let name = funName("Mohammad", "Arman");
console.log(name); 
// আউটপুট আসবে: My name is "Mohammad Arman"







function funName(firstName, lastName) {
    let name = firstName + " " + lastName;
    console.log(name);
    return name;
}
    
let fullName = funName('Mohammad', 'Arman');
console.log("Full name is: " + fullName);

১: ফাংশন কল ও আর্গুমেন্ট পাঠানো
let fullName = funName('Mohammad', 'Arman');

এখানে funName ফাংশনটিকে ডাকা হল (Call করা)।

সাথে দুটি ডেটা: 'Mohammad' এবং 'Arman'।

ফাংশনের ভেতরে গিয়ে 'Mohammad' বসে গেল firstName প্যারামিটারে, আর 'Arman' বসে গেল lastName প্যারামিটারে।


২: নাম দুটি জোড়া লাগানো 

let name = firstName + " " + lastName;

ফাংশনের ভেতরে ঢুকে কম্পিউটার দেখল firstName এর মান 'Mohammad' এবং lastName এর মান 'Arman'.

মাঝখানে একটি স্পেস (" ") দিয়ে প্লাস চিহ্ন দিয়ে দুটিকে জোড়া লাগানো হলো।

ফলে তৈরি হলো "Mohammad Arman" এবং সেটি name নামক ভেরিয়েবলে জমা হলো।


৩: প্রথম আউটপুট (ফাংশনের ভেতর থেকে)

console.log(name); এই লাইনের কারণে স্ক্রিনে প্রথম আউটপুট দেখাবে: Mohammad Arman।

৪: মান ফেরত পাঠানো (Return)

return name;

ফাংশনটি তার ভেতরের "Mohammad Arman" লেখাটিকে পকেটে নিয়ে ফাংশনের বাইরে চলে আসলো এবং বাইরে থাকা fullName ভেরিয়েবলের হাতে সঁপে দিল। এখন fullName এর মান হলো "Mohammad Arman"।

৫: দ্বিতীয় আউটপুট (ফাংশনের বাইরে থেকে)

console.log("Full name is: " + fullName); 
এবার কম্পিউটার স্ক্রিনে দেখাবে "Full name is: " এবং তার সাথে fullName-এর ভেতর থাকা মানটি (Mohammad Arman) জোড়া লাগিয়ে দেবে।

Mohammad Arman
Full name is: Mohammad Arman






function checkAge(age) {
    if (age < 18) {
        return "তুমি এখনো ছোট।"; // বয়স ১৮ কম হলে ফাংশন এখানেই শেষ
    }
    
    // যদি বয়স ১৮ বা তার বেশি হয়, তবেই কেবল নিচের কোডটি রান করবে
    return "তুমি বড় হয়েছ!"; 
}

console.log(checkAge(15)); // আউটপুট: তুমি এখনো ছোট।
console.log(checkAge(22)); // আউটপুট: তুমি বড় হয়েছ!
