জাভাস্ক্রিপ্টে ভেরিয়েবল (Variable) হলো এমন একটি কন্টেইনার বা পাত্র, যেখানে কোনো তথ্য (Data) জমা রাখা যায়। 
যখনই কোডে কোনো মান (যেমন: নাম, সংখ্যা বা রেজাল্ট) বারবার ব্যবহার করার প্রয়োজন হয়, তখন সেটি একটি ভেরিয়েবলে সেভ করে রাখা হয়।
👉 variable = data রাখার বক্স 

জাভাস্ক্রিপ্টে ভেরিয়েবল Case-Sensitive হওয়ার মানে হলো—বড় হাতের অক্ষর (Uppercase) এবং ছোট হাতের অক্ষর (Lowercase) আলাদাভাবে গণ্য হয়। 
অর্থাৎ, name, Name, এবং NAME জাভাস্ক্রিপ্টের কাছে তিনটি সম্পূর্ণ আলাদা ভেরিয়েবল।

Case-Sensitivity-র উদাহরণ

let myname = "Abdullah";
let myName = "Mohammad";
let MYNAME = "Rokshana";
console.log(myname); // আউটপুট: Abdullah
console.log(myName); // আউটপুট: Mohammad
console.log(MYNAME); // আউটপুট: Rokshana


🔸 Variable নাম লেখার নিয়ম (Rules):

অক্ষর, সংখ্যা, $ এবং _ : নাম শুরু হতে পারে অক্ষর (a-z, A-Z), ডলার সাইন ($), অথবা আন্ডারস্কোর (_) দিয়ে।

সংখ্যা দিয়ে শুরু করা নিষেধ: নাম কখনোই কোনো সংখ্যা দিয়ে শুরু হতে পারবে না। (যেমন: 1user ভুল, কিন্তু user1 সঠিক)।

স্পেস থাকা যাবে না: নামের মাঝখানে কোনো স্পেস দেওয়া যাবে না। (যেমন: full name ভুল)।

রিজার্ভড কি-ওয়ার্ড: জাভাস্ক্রিপ্টের নিজস্ব শব্দ যেমন let, var, const, function, if এগুলোকে ভেরিয়েবল হিসেবে ব্যবহার করা যাবে না।


নাম লেখার স্ট্যান্ডার্ড (Naming Conventions)

ক) Camel Case (জাভাস্ক্রিপ্টে সবচেয়ে জনপ্রিয়)
প্রথম শব্দ ছোট হাতের অক্ষরে শুরু হয় এবং পরের প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের হয়।

উদাহরণ: firstName, userEmailAddress, totalPriceAmount.

খ) Snake Case
প্রতিটি শব্দের মাঝে আন্ডারস্কোর (_) ব্যবহার করা হয়।

উদাহরণ: first_name, user_age, total_price.

গ) Pascal Case (সাধারণত Class এর জন্য ব্যবহৃত)
প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের হয়।

উদাহরণ: FirstName, UserAge.

অর্থবহ নাম দেওয়া (Best Practice)
ভেরিয়েবলের নাম এমন হওয়া উচিত যা দেখে বোঝা যায় ভেতরে কী আছে।

খারাপ নাম: let a = 30; (বোঝা যাচ্ছে না ৩০ কী)

ভালো নাম: let userAge = 30;

কনস্ট্যান্ট বা স্থির মানের ক্ষেত্রে
যখন  const দিয়ে এমন কোনো মান  যা কখনোই বদলাবে না (যেমন পাই-এর মান), তখন সব বড় হাতের অক্ষর ব্যবহার করা একটি কনভেনশন।
উদাহরণ: const PI = 3.1416;, const BIRTH_YEAR = 1996;

কিছু valid variable নাম

let name;
let myName;
let my_name;
let $data;
let user1;


জাভাস্ক্রিপ্টে ভেরিয়েবল তৈরি করার জন্য ৩টি কি-ওয়ার্ড আছে \\\\\\\\ JavaScript-এ মূলত ৩ভাবে variable declare করা হয়:

var: ফাংশনাল স্কোপড, এর মান পরিবর্তন করা যায় এবং পুনরায় ডিক্লেয়ার করা যায়।

let: ব্লক স্কোপড, এর মান পরিবর্তন করা যায় কিন্তু পুনরায় ডিক্লেয়ার করা যায় না।

const: ব্লক স্কোপড, এর মান একবার দিলে আর পরিবর্তন বা পুনরায় ডিক্লেয়ার করা যায় না।

১. var (পুরানো পদ্ধতি)

জাভাস্ক্রিপ্টের একদম শুরু থেকে var ব্যবহৃত হয়ে আসছে। তবে আধুনিক জাভাস্ক্রিপ্টে (ES6 এর পর) এর ব্যবহার অনেক কমে গেছে।

Function Scoped: এটি যে ফাংশনের ভেতর লেখা হয়, শুধুমাত্র সেখানেই সীমাবদ্ধ থাকে। কিন্তু লুপ বা ইফ-এলস ব্লকের ভেতর লিখলেও এটি বাইরে থেকে অ্যাক্সেস করা যায়।

Redeclare: একই নামে একাধিকবার ভেরিয়েবল তৈরি করা যায় (যা অনেক সময় কোডে জটিলতা বা ভুল তৈরি করে)।

Hoisting: এটি কোডের শুরুতে চলে যায় (Hoisted), ফলে ভেরিয়েবল ডিক্লেয়ার করার আগেই ব্যবহার করলে undefined দেখায়।

var name = "Abdullah";
var name = "Mohammad"; // কোনো এরর আসবে না, আগের মান বদলে যাবে


let (আধুনিক ও জনপ্রিয়)
    
আধুনিক জাভাস্ক্রিপ্টে কোনো ভেরিয়েবলের মান পরিবর্তনের প্রয়োজন হলে let ব্যবহার করা হয়।

Block Scoped: এটি সেকেন্ড ব্র্যাকেট { } বা ব্লকের বাইরে কাজ করে না (যেমন: loop বা if-else এর ভেতর ডিক্লেয়ার করলে বাইরে পাওয়া যাবে না)।

Cannot Redeclare: একই ব্লকের ভেতর একই নামে দ্বিতীয়বার ভেরিয়েবল তৈরি করা যায় না। তবে মান পরিবর্তন (Reassign) করা যায়।

Hoisting: এটিও হোইস্ট হয়, কিন্তু ডিক্লেয়ার করার আগে ব্যবহার করলে এরর (ReferenceError) দেয়।

let age = 25;
age = 26; // মান পরিবর্তন করা সম্ভব
// let age = 30; // এটি করলে Error আসবে



const (স্থির বা অপরিবর্তনীয়)
যদি চাওয়া হয় যে কোনো ভেরিয়েবলের মান পুরো প্রোগ্রামে কখনোই বদলাবে না, তবে const ব্যবহার করতে হয়।

Constant: এর মান একবার সেট করলে আর পরিবর্তন করা যায় না। 

Block Scoped: এটিও let এর মতো ব্লকের ভেতর সীমাবদ্ধ থাকে।

Initialization: const দিয়ে ভেরিয়েবল তৈরি করার সময় অবশ্যই মান দিয়ে দিতে হবে (খালি রাখা যায় না)।

const pi = 3.1416;
// pi = 3.15; // Error: Assignment to constant variable.


var x = 10;
// console.log(x);
x = 20; 
// console.log(x);
x = 50;
console.log(x);

const x = 5;
const y = 6;
const z = x + y;
console.log(z);

let x1 = 5;
let y1 = 6;
let z1 = x1 + y1;
console.log(z1);

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

01. abdullah_bin_Aziz (Snake Case);

02. abdullahBinAziz (Camale Case);

03. AbdullahBinAziz (Pascal Case);

// again repeat how to declare variable with string number boolean

let name2 = "Abdullah Arman";
// console.log(name);
name2 = "Arman Aziz";
// console.log(name);
name2 = "Rokshana Aziz"
console.log(name2);



var name = "Abdullah Arman";
// document.write(name);
name = "Aziz </br>";
var age = 29;
document.write(name,age);

var name;
var country;
var age;
name = "Mohammad </br>"
country = "Bangladesh </br>"
age = 56;
document.write(name,country,age);
var name,country,age;



let name = "Abdullah Arman";
name = "Mohammad";
let age = 30;
let country = "Bangladesh </br>";
let subject = "Programming";

// এখানে age এর পর একটি "</br>" যোগ করা হয়েছে
document.write(name, age, "</br>", country, subject);



let name = "Abdullah Arman";
name = "Mohammad";

let age = 30;

let country = "Bangladesh";
let subject = "Programming";

// ব্যাকটিক (`) চিহ্নের ভেতরে একদম সাজিয়ে লেখা যায়



document.write(`${name} </br> ${age} </br> ${country} </br> ${subject}`);



টেমপ্লেট লিটারেল (Template Literal) ব্যবহার করা (প্রফেশনাল নিয়ম)
প্রফেশনাল জাভাস্ক্রিপ্টে কমা দিয়ে দিয়ে না লিখে ব্যাকটিক ( ` ) চিহ্ন ব্যবহার করে খুব সুন্দরভাবে এইচটিএমএল ট্যাগ বসানো যায়: এটি হলো ব্যাকটিক (` `) স্ট্রিংয়ের ভেতরে থাকা একটি "খালি ঘর বা ডাইনামিক বক্স"। 
এই বক্সের ভেতরে জাভাস্ক্রিপ্টের যেকোনো ভ্যারিয়েবল, হিসাব-নিকাশ বা লজিক ঢুকিয়ে দেওয়া যায়, 
আর V8 ইঞ্জিন পলকের মধ্যে সেই লজিকটা ক্যালকুলেট করে আসল মানটা ওই জায়গায় বসিয়ে দেয়।
জাভাস্ক্রিপ্টের ভাষায় এই ${}-কে বলা হয় Template Literal Placeholder বা সংক্ষেপে String Interpolation (স্ট্রিং ইন্টারপোলেশন)।

📑 JavaScript ${} (Placeholder)-এর ৩টি জাদুকরী ব্যবহার

১. ভ্যারিয়েবলের মান সরাসরি বসানো (Variable Substitution)
আগে প্লাস (+) চিহ্ন দিয়ে কষ্ট করে স্ট্রিং জোড়াতালি দিতে হতো। এখন ${} দিয়ে কোনো ঝামেলা ছাড়াই ভ্যারিয়েবল বসানো যায়।

let name = "Mohammad Abdullah";
let age = ৩০;

// `${}` ব্যবহার করে ডাইনামিক টেক্সট তৈরি:
let profile = `My name is ${name} and I am ${age} years old.`;
console.log(profile); 
// Output: My name is Mohammad Abdullah and I am ৩০ years old.


২. সরাসরি হিসাব-নিকাশ করা (Mathematical Expressions)
এই বক্সের ভেতরে চাইলে সরাসরি যোগ-বিয়োগ বা যেকোনো ম্যাথ রান করিয়ে দেওয়া যায়। ইঞ্জিন আগে ম্যাথ সলভ করবে, তারপর আউটপুট বসাবে।

let Price = 500;
let tax = 50;

// বক্সের ভেতরেই সরাসরি যোগ করে ফেলা
let receipt = `Total Bill: ${Price + tax} Taka.`;
console.log(receipt); 
// Output: Total Bill: 550 Taka.


৩. কন্ডিশনাল লজিক চালানো (Ternary Operator)
এই বক্সের ভেতরেই ছোটখাটো একটা কন্ডিশন বা চেক বসিয়ে দিতে (যেমন: পাস নাকি ফেল), সেটাও সম্ভব!

let cgpa = 3.50;

// বক্সের ভেতরেই কন্ডিশন চেক (cgpa ৪ এর সমান কি না?)
let status = `Is Golden Student? ${cgpa === 4.00 ? "Yes" : "No"}`;
console.log(status); 
// Output: Is Golden Student? No


⚠️ ইন্টারভিউ বোর্ডের জন্য ১টি জরুরি সতর্কতা:
এই ${} ম্যাজিকটি কিন্তু কেবল এবং কেবলমাত্র ব্যাকটিক (` `) চিহ্নের ভেতরেই কাজ করে। আপনি যদি ভুল করে ডাবল কোট ("") বা সিঙ্গেল কোটের ('') ভেতরে এটি লিখা হয়
, তবে জাভাস্ক্রিপ্ট এটিকে সাধারণ টেক্সট মনে করবে, কোনো মান বসাবে না।

let skill = "JavaScript";

// ❌ ভুল নিয়ম (ডাবল কোট):
console.log("I am learning ${skill}"); 
// Output: I am learning ${skill} (হুবহু এটাই প্রিন্ট হবে!)

//  সঠিক নিয়ম (ব্যাকটিক):
console.log(`I am learning ${skill}`); 
// Output: I am learning JavaScript 


var name = "Abdullah ", 
country = "Bangladesh ", 
age = 29;
console.log(name);

// string number boolean typeof operators code

var name = "Abdullah Arman";
var age = 29;
console.log(name,age);

var name = typeof 'Abdullah "Arman';
var age = typeof 29;
console.log(name,age)

var name = typeof "Azziz";
var age = typeof 28;
console.log(name,age);

boolean data type...
// false=0
// true=1

var isSubs = typeof true;
var isPassed = typeof false;
console.log(isSubs,isPassed);

console.log(3>2);
console.log(10<5);
console.log(5<10);

---------------------------------------------------------

let name = "Abdullah";
let address = "Gongachora, Rongpur";
let subject = "Programming";
let grade = "A";

let age = 30;
let height = 5.2;
let cgpa = 3.50;
let accountBalance = 12.25486545;

console.log("-------- Student Output --------\n");

console.log(`My name is: ${name}`);
console.log(`My age is: ${age} years`);
console.log(`My height is: ${height} ft`);
console.log(`My address is: ${address}`);
console.log(`My subject is: ${subject}`);
console.log(`My grade is: ${grade}`);
console.log(`My CGPA is: ${cgpa.toFixed(2)}`);
console.log(`My account balance is: $${accountBalance.toFixed(2)}`);



// --- Constant Data ---
const name = "Mohammad Abdullah";
const dob = "15-06-1997";
const bloodGroup = "B+";
const religion = "Islam";
const country = "Bangladesh";
const nidNumber = "1997541258745";
const birthPlace = "Rangpur";

// --- Variable Data ---
let age = 30;
let cgpa = 3.50;
let address = "Gongachora, Rangpur";
let subject = "Backend Engineering";
let married = false;
let accountBalance = 89.5982145897;
let gmail = "programmeraziz216@gmail.com";
let phone = "01568451112";
let skills = "C, JavaScript, C++, Python";
let hobbies = "Coding, Reading, Traveling";
let session = "2025-26";
let currentStatus = "Student & Programmer";
let language = "Bengali, English";

console.log("================ STUDENT PROFILE ================");

console.log(`My name is          : ${name}`);
console.log(`My age is           : ${age}`);
console.log(`Date of Birth       : ${dob}`);
console.log(`My NID Number       : ${nidNumber}`);
console.log(`My religion is      : ${religion}`);
console.log(`My blood group is   : ${bloodGroup}`);

console.log("-------------------------------------------------");

console.log(`Study subject       : ${subject}`);
console.log(`Current session     : ${session}`);
console.log(`Current status      : ${currentStatus}`);
console.log(`Current CGPA        : ${cgpa.toFixed(2)}`);
console.log(`My skills are       : ${skills}`);
console.log(`Languages I know    : ${language}`);

console.log("-------------------------------------------------");

console.log(`My Gmail address    : ${gmail}`);
console.log(`Phone number        : ${phone}`);
console.log(`Current address     : ${address}`);
console.log(`My birth place      : ${birthPlace}`);
console.log(`Home country        : ${country}`);

console.log("-------------------------------------------------");

console.log(`My hobbies are      : ${hobbies}`);
console.log(`Am I married?       : ${married ? "Yes" : "No"}`);
console.log(`Account Balance     : ${accountBalance.toFixed(2)} BDT`);

console.log("=================================================");
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(Professional) Version — Object ব্যবহার করে 

const student = {
    name: "Abdullah",
    age: 30,
    height: 5.2,
    address: "Gongachora, Rongpur",
    subject: "Programming",
    grade: "A",
    cgpa: 3.50,
    accountBalance: 12.25486545
};

console.log("-------- Student Output --------");
console.log(`My name is: ${student.name}`);
console.log(`My age is: ${student.age}`);
console.log(`My height is: ${student.height} ft`);
console.log(`My address is: ${student.address}`);
console.log(`My subject is: ${student.subject}`);
console.log(`My grade is: ${student.grade}`);
console.log(`My CGPA is: ${student.cgpa.toFixed(2)}`);
console.log(`My account balance is: $${student.accountBalance.toFixed(2)}`);

-------------------------------------------------------------------------------------------------------------------------------------------------
// --- Constant Data ---
const name = "Mohammad Abdullah";
const dob = "15-06-1997";
const bloodGroup = "B+";
const religion = "Islam";
const country = "Bangladesh";
const nidNumber = "1997541258745";
const birthPlace = "Rangpur";

// --- Variable Data ---
let age = 30;
let cgpa = 3.50;
let address = "Gongachora, Rangpur";
let subject = "Backend Engineering";
let married = false;
let accountBalance = 89.5982145897;
let gmail = "programmeraziz216@gmail.com";
let phone = "01568451112";
let skills = "C, JavaScript, C++, Python";
let hobbies = "Coding, Reading, Traveling";
let session = "2025-26";
let currentStatus = "Student & Programmer";
let language = "Bengali, English";

console.log("================ STUDENT PROFILE ================");

console.log("Name                : " + name);
console.log("Age                 : " + age);
console.log("Date of Birth       : " + dob);
console.log("NID Number          : " + nidNumber);
console.log("Religion            : " + religion);
console.log("Blood Group         : " + bloodGroup);
console.log("-------------------------------------------------");
console.log("Subject             : " + subject);
console.log("Session             : " + session);
console.log("Status              : " + currentStatus);
console.log("CGPA                : " + cgpa.toFixed(2));
console.log("Skills              : " + skills);
console.log("Languages           : " + language);
console.log("-------------------------------------------------");
console.log("Gmail               : " + gmail);
console.log("Phone               : " + phone);
console.log("Address             : " + address);
console.log("Birth Place         : " + birthPlace);
console.log("Country             : " + country);
console.log("-------------------------------------------------");
console.log("Hobbies             : " + hobbies);
console.log("Married             : " + (married ? "Yes" : "No"));
console.log("Balance             : " + accountBalance.toFixed(2) + " BDT");

console.log("=================================================");
-----------------------------------------------------------------------------------------------------------------------------------

// --- Constant Data (যা পরিবর্তন হবে না) ---
const name = "Mohammad Abdullah";
const dob = "15-06-1997";
const bloodGroup = "B+";
const religion = "Islam";
const country = "Bangladesh";
const nidNumber = "1997541258745"; // নতুন যোগ করা হয়েছে
const birthPlace = "Rangpur";      // নতুন যোগ করা হয়েছে

// --- Variable Data (যা ভবিষ্যতে পরিবর্তন হতে পারে) ---
let age = 30;
let cgpa = 3.50;
let address = "Gongachora, Rangpur";
let subject = "Backend Engineering";
let married = false;
let accountBalance = 89.5982145897;
let gmail = "programmeraziz216@gmail.com";
let phone = "01568451112";
let skills = "C, JavaScript, C++, Python";
let hobbies = "Coding, Reading, Traveling";
let session = "2025-26";
let currentStatus = "Student & Programmer"; // নতুন যোগ করা হয়েছে
let language = "Bengali, English";           // নতুন যোগ করা হয়েছে

console.log("================ STUDENT PROFILE ================");

// ব্যক্তিগত তথ্য
console.log("Name".padEnd(20) + " : " + name);
console.log("Age".padEnd(20) + " : " + age);
console.log("Date of Birth".padEnd(20) + " : " + dob);
console.log("NID Number".padEnd(20) + " : " + nidNumber);
console.log("Religion".padEnd(20) + " : " + religion);
console.log("Blood Group".padEnd(20) + " : " + bloodGroup);

console.log("-------------------------------------------------");

// প্রাতিষ্ঠানিক ও পেশাগত তথ্য
console.log("Subject".padEnd(20) + " : " + subject);
console.log("Session".padEnd(20) + " : " + session);
console.log("Status".padEnd(20) + " : " + currentStatus);
console.log("CGPA".padEnd(20) + " : " + cgpa.toFixed(2));
console.log("Skills".padEnd(20) + " : " + skills);
console.log("Languages".padEnd(20) + " : " + language);

console.log("-------------------------------------------------");

// যোগাযোগ ও ঠিকানা
console.log("Gmail".padEnd(20) + " : " + gmail);
console.log("Phone".padEnd(20) + " : " + phone);
console.log("Address".padEnd(20) + " : " + address);
console.log("Birth Place".padEnd(20) + " : " + birthPlace);

console.log("-------------------------------------------------");

// অন্যান্য
console.log("Hobbies".padEnd(20) + " : " + hobbies);
console.log("Married".padEnd(20) + " : " + (married ? "Yes" : "No"));
console.log("Balance".padEnd(20) + " : " + accountBalance.toFixed(2) + " BDT");


জাভাস্ক্রিপ্টে \n, \t, এবং \b কে বলা হয় Escape Characters। এগুলো স্ট্রিংয়ের ভেতরে বিশেষ কিছু কাজ (যেমন নতুন লাইন তৈরি করা বা জায়গা রাখা) করার জন্য ব্যবহৃত হয়।
\n (New Line)  এটি ব্যবহার করা হয় নতুন একটি লাইন তৈরি করার জন্য।

let message = "Hello\nMohammad";
console.log(message);
Hello
Mohammad

\b (Backspace)
\b এর কাজ হলো ঠিক তার আগের একটি অক্ষরকে মুছে ফেলা (যেমন কিবোর্ডের Backspace বাটন চেপে একটি অক্ষর কাটি)। 
তবে আধুনিক ব্রাউজার কনসোলে এর প্রভাব সবসময় দেখা যায় না, কিন্তু অনেক টার্মিনালে এটি কাজ করে।

let text = "Helloo\b"; // এখানে দুটি 'o' আছে, কিন্তু \b একটিকে মুছে দেবে
console.log(text);

const myProfile = "NAME:\t\tMohammad\nSUBJECT:\tBackend Engineer\nCOUNTRY:\tBangladesh";
console.log("Student Summary:");
console.log("----------------------------");
console.log(myProfile);


\t (Horizontal Tab)
এটি ব্যবহার করা হয় লেখার মাঝে একটি বড় গ্যাপ বা ট্যাব (সাধারণত ৪ বা ৮টি স্পেসের সমান) দেওয়ার জন্য। এটি ডেটাকে কলাম আকারে সাজাতে খুব কাজে লাগে।

console.log("Name\t\tAge\tSubject");
console.log("Mohammad\t28\tBackend");


.padEnd \t:
.padEnd() হলো একটি "Space Filler" বা জায়গা পূরণকারী মেথড। এটি নিশ্চিত করে যে একটি স্ট্রিং (লেখা) অন্তত নির্দিষ্ট একটি দৈর্ঘ্য (এখানে labelWidth) পর্যন্ত লম্বা হবে। 
যদি মূল লেখাটি ছোট হয়, তবে এটি বাকি জায়গাটি স্পেস দিয়ে ভরাট করে দেয়।

ম্যানুয়াল স্পেস বনাম ডাইনামিক স্পেস:
ম্যানুয়াল (Manual): যদি console.log("Name      : " + name) , তবে গুনে গুনে স্পেস দিতে হবে। 
যদি পরে "Name" এর বদলে "Full Name" , লিখা হয় তবে পুরো লাইনটির স্পেসিং নষ্ট হয়ে যাবে।

padEnd(labelWidth): এটি স্বয়ংক্রিয়ভাবে হিসাব করে। যদি labelWidth = 20 দেওয়া হয়, তবে লেখাটি ৫ অক্ষরের হোক বা ১০ অক্ষরের, সে ডানে প্রয়োজনীয় স্পেস যোগ করে মোট ২০ ঘর পূরণ করবে।

const labelWidth = 15; // কলামের প্রস্থ নির্ধারণ 

console.log("Field".padEnd(labelWidth) + " : Value");
console.log("-".repeat(30));

// \t এর কাজ এখন padEnd দিয়ে 
console.log("Name".padEnd(labelWidth) + " : Mohammad");
console.log("Age".padEnd(labelWidth) + " : 28");
console.log("Subject".padEnd(labelWidth) + " : Backend Engineer");
console.log("Address".padEnd(labelWidth) + " : Rangpur");
console.log("=================================================");
.padEnd \t
const labelWidth = 15;
কাজ: এখানে একটি ধ্রুবক (constant) মান সেট করা হয়েছে

উদ্দেশ্য: প্রতিটি ফিল্ডের নাম (যেমন: Name, Age) যেন অন্তত ১৫টি অক্ষরের সমান জায়গা নিবে। এটি বারবার ব্যবহার না করে একটি ভেরিয়েবলে 
রাখলে পরে এক জায়গায় পরিবর্তন করলেই পুরো প্রোফাইল বদলে যাবে।

console.log("Field".padEnd(labelWidth) + " : Value");

"Field".padEnd(labelWidth): এটি "Field" শব্দটির পর এতগুলো স্পেস যোগ করবে যেন মোট দৈর্ঘ্য ১৫ হয়।

ফলাফল: Field           (এখানে ৫টি অক্ষর আর ১০টি স্পেস মিলে মোট ১৫ ঘর)। এরপর তার সাথে যুক্ত হবে  : Value।

console.log("-".repeat(30));
.repeat(30): এটি জাভাস্ক্রিপ্টের একটি মেথড যা একটি স্ট্রিংকে (এখানে হাইফেন -) ৩০ বার রিপিট বা পুনরাবৃত্তি করে। এর ফলে একটি সোজা বর্ডার তৈরি হয়।

console.log("Name".padEnd(labelWidth) + " : Mohammad");
console.log("Age".padEnd(labelWidth) + " : 28");
"Name" এর দৈর্ঘ্য ৪। padEnd(15) করায় সে ডানে আরও ১১টি স্পেস যোগ করে দিয়েছে।
"Age" এর দৈর্ঘ্য ৩। padEnd(15) করায় সে ডানে আরও ১২টি স্পেস যোগ করে দিয়েছে।


যেহেতু দুটি শব্দই এখন ১৫ ঘরের জায়গা দখল করছে, তাই পরের কোলন (:) চিহ্নটি একদম একই সোজা লাইনে নিচে নিচে বসছে। এটিই হলো \t (Tab) এর বিকল্প হিসেবে padEnd ব্যবহার করার সুবিধা।
console.log("=================================================");
কাজ: এটি আপনার প্রোফাইলের শেষ সীমানা বোঝানোর জন্য একটি স্টাইলিশ বর্ডার।

Field           : Value
------------------------------
Name            : Mohammad
Age             : 28
Subject         : Backend Engineer
Address         : Rangpur
=================================================
------------------------------------------------------------------------------------------------------------------------------

labelWidth use Variable: 
=======================
labelWidth  সেট করে কোডটি সাজানো হলো। এতে বাম পাশের লেবেলগুলোর জন্য জায়গা বাড়বে, যা বড় লেবেল (যেমন: Account Balance) ব্যবহারের সময় সুবিধাজনক হবে।

const labelWidth = 20; // কলামের প্রস্থ ১৫ থেকে বাড়িয়ে ২০ করা হয়েছে

console.log("Field".padEnd(labelWidth) + " : Value");
console.log("-".repeat(45)); // গ্যাপ বাড়ায় বর্ডারটিও একটু বড় করে দিলাম

// padEnd(20) ব্যবহার করে প্রতিটি ফিল্ড সাজানো
console.log("Name".padEnd(labelWidth) + " : Mohammad Abdullah");
console.log("Age".padEnd(labelWidth) + " : 30");
console.log("Subject".padEnd(labelWidth) + " : Backend Engineer");
console.log("Address".padEnd(labelWidth) + " : Gongachora, Rangpur");
console.log("Blood Group".padEnd(labelWidth) + " : B+");
console.log("Skills".padEnd(labelWidth) + " : C, JavaScript, Python");
console.log("Account Balance".padEnd(labelWidth) + " : 89.60 BDT");

console.log("=====================================================");


Field                : Value
---------------------------------------------
Name                 : Mohammad Abdullah
Age                  : 30
Subject              : Backend Engineer
Address              : Gongachora, Rangpur
Blood Group          : B+
Skills               : C, JavaScript, Python
Account Balance      : 89.60 BDT
=====================================================

// --- Constant Data (অপরিবর্তনীয়) ---
const name = "Mohammad Abdullah";
const dob = "15-06-1997";
const bloodGroup = "B+";
const religion = "Islam";
const country = "Bangladesh";
const nidNumber = "1997541258745";

// --- Variable Data (পরিবর্তনশীল) ---
let age = 30;
let cgpa = 3.50;
let address = "Gongachora, Rangpur";
let subject = "Backend Engineering";
let married = false;
let accountBalance = 89.5982145897;
let gmail = "programmeraziz216@gmail.com";
let phone = "01568451112";
let skills = "C, JavaScript, C++, Python";
let hobbies = "Coding, Reading, Traveling";
let session = "2025-26";

const labelWidth = 20;

console.log("================== STUDENT PROFILE ==================");

// ব্যক্তিগত তথ্য
console.log(`${"Name".padEnd(labelWidth)} : ${name}`);
console.log(`${"Age".padEnd(labelWidth)} : ${age}`);
console.log(`${"Date of Birth".padEnd(labelWidth)} : ${dob}`);
console.log(`${"NID Number".padEnd(labelWidth)} : ${nidNumber}`);
console.log(`${"Blood Group".padEnd(labelWidth)} : ${bloodGroup}`);
console.log(`${"Religion".padEnd(labelWidth)} : ${religion}`);

console.log("-".repeat(53));

// প্রাতিষ্ঠানিক তথ্য
console.log(`${"Subject".padEnd(labelWidth)} : ${subject}`);
console.log(`${"Session".padEnd(labelWidth)} : ${session}`);
console.log(`${"CGPA".padEnd(labelWidth)} : ${cgpa.toFixed(2)}`);
console.log(`${"Skills".padEnd(labelWidth)} : ${skills}`);

console.log("-".repeat(53));

// যোগাযোগ ও অন্যান্য
console.log(`${"Gmail".padEnd(labelWidth)} : ${gmail}`);
console.log(`${"Phone".padEnd(labelWidth)} : ${phone}`);
console.log(`${"Address".padEnd(labelWidth)} : ${address}`);
console.log(`${"Country".padEnd(labelWidth)} : ${country}`);
console.log(`${"Hobbies".padEnd(labelWidth)} : ${hobbies}`);
console.log(`${"Married".padEnd(labelWidth)} : ${married ? "Yes" : "No"}`);
console.log(`${"Account Balance".padEnd(labelWidth)} : ${accountBalance.toFixed(2)} BDT`);

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --- ৪ জনের ডাটা ---
let n1 = "Mohammad", r1 = "101", s1 = "Backend",  p1 = "01568451112";
let n2 = "Abdullah", r2 = "102", s2 = "Frontend", p2 = "01745677826";
let n3 = "Aziz",   r3 = "103", s3 = "Fullstack", p3 = "01772685006";
let n4 = "Arman",    r4 = "104", s4 = "DevOps",    p4 = "01854126355";

// কলামের প্রস্থ নির্ধারণ (Column Widths)
const nameWidth = 15;
const rollWidth = 10;
const subWidth  = 15;
const phoneWidth = 15;

console.log("==================== STUDENT LIST ====================");

// ১. টেবিলের হেডার (Header)
console.log(
    "Name".padEnd(nameWidth) + 
    "Roll".padEnd(rollWidth) + 
    "Subject".padEnd(subWidth) + 
    "Phone".padEnd(phoneWidth)
);

// ২. ডিভাইডার লাইন
console.log("-".repeat(nameWidth + rollWidth + subWidth + phoneWidth));

// ৩. ডাটা রো (Data Rows) - padEnd ব্যবহার করে
console.log(n1.padEnd(nameWidth) + r1.padEnd(rollWidth) + s1.padEnd(subWidth) + p1.padEnd(phoneWidth));
console.log(n2.padEnd(nameWidth) + r2.padEnd(rollWidth) + s2.padEnd(subWidth) + p2.padEnd(phoneWidth));
console.log(n3.padEnd(nameWidth) + r3.padEnd(rollWidth) + s3.padEnd(subWidth) + p3.padEnd(phoneWidth));
console.log(n4.padEnd(nameWidth) + r4.padEnd(rollWidth) + s4.padEnd(subWidth) + p4.padEnd(phoneWidth));

console.log("======================================================");

console.log("=====================================================");

==================== STUDENT LIST ====================
Name           Roll      Subject        Phone          
------------------------------------------------------
Mohammad       101       Backend        01568451112    
Abdullah       102       Frontend       01745677826    
Aziz         103       Fullstack      01772685006
Arman          104       DevOps         01854126355   
======================================================

Header Section: প্রথমে "Name", "Roll" ইত্যাদি লিখে সেগুলোকে padEnd() করা হয়েছে। এতে একটি নির্দিষ্ট গ্যাপ তৈরি হলো।
Column Widths:  আলাদা আলাদা কলামের জন্য আলাদা প্রস্থ দেওয়া হয়েছে। যেমন: রোলের জন্য ১০ ঘর যথেষ্ট, কিন্তু নামের জন্য ১৫ ঘর।
Data Rows: প্রতিটি স্টুডেন্টের ভেরিয়েবলকে (যেমন n1, r1) ঠিক হেডারের সমান প্রস্থ (padEnd) । এর ফলে নামের নিচে নাম এবং রোলের নিচে রোল একদম সোজা হয়ে বসবে।

// --- ৪ জনের ডাটা (ভেরিয়েবল দিয়ে) ---
let n1 = "Mohammad", r1 = "101", s1 = "Backend",  p1 = "01568451112";
let n2 = "Abdullah", r2 = "102", s2 = "Frontend", p2 = "01745677826";
let n3 = "Aziz",   r3 = "103", s3 = "Fullstack", p3 = "01772685006";
let n4 = "Arman",    r4 = "104", s4 = "DevOps",    p4 = "01854126355";

// কলামের প্রস্থ নির্ধারণ
const nameW = 12, rollW = 8, subW = 12, phnW = 15;

// টেবিলের উপরের বর্ডার
console.log("+" + "-".repeat(nameW + 2) + "+" + "-".repeat(rollW + 2) + "+" + "-".repeat(subW + 2) + "+" + "-".repeat(phnW + 2) + "+");

// ১. টেবিলের হেডার (Header)
console.log(
    `| ${"Name".padEnd(nameW)} | ${"Roll".padEnd(rollW)} | ${"Subject".padEnd(subW)} | ${"Phone".padEnd(phnW)} |`
);

// ২. হেডারের নিচের বর্ডার
console.log("+" + "=".repeat(nameW + 2) + "+" + "=".repeat(rollW + 2) + "+" + "=".repeat(subW + 2) + "+" + "=".repeat(phnW + 2) + "+");

// ৩. ডাটা রোগুলো (Data Rows)
console.log(`| ${n1.padEnd(nameW)} | ${r1.padEnd(rollW)} | ${s1.padEnd(subW)} | ${p1.padEnd(phnW)} |`);
console.log(`| ${n2.padEnd(nameW)} | ${r2.padEnd(rollW)} | ${s2.padEnd(subW)} | ${p2.padEnd(phnW)} |`);
console.log(`| ${n3.padEnd(nameW)} | ${r3.padEnd(rollW)} | ${s3.padEnd(subW)} | ${p3.padEnd(phnW)} |`);
console.log(`| ${n4.padEnd(nameW)} | ${r4.padEnd(rollW)} | ${s4.padEnd(subW)} | ${p4.padEnd(phnW)} |`);

// ৪. টেবিলের নিচের বর্ডার
console.log("+" + "-".repeat(nameW + 2) + "+" + "-".repeat(rollW + 2) + "+" + "-".repeat(subW + 2) + "+" + "-".repeat(phnW + 2) + "+");

+--------------+----------+--------------+-----------------+
| Name         | Roll     | Subject      | Phone           |
+==============+==========+==============+=================+
| Mohammad     | 101      | Backend      | 01568451112     |
| Abdullah     | 102      | Frontend     | 01745677826     |
| Aziz         | 103      | Fullstack    | 01772685006     |
| Arman        | 104      | DevOps       | 01854126355     |
+--------------+----------+--------------+-----------------+

বর্ডার লাইন: + এবং - ব্যবহার করে চারদিকে একটি ফ্রেম তৈরি করা হয়েছে।
ভার্টিক্যাল বার (|): প্রতিটি ডাটার মাঝে | ব্যবহার করায় কলামগুলো আলাদাভাবে চেনা যাচ্ছে।
Template Literals: ব্যাকটিক (``) ব্যবহার করে ${} এর ভেতরে padEnd বসানো হয়েছে, যাতে কোডটি দেখতে ক্লিন লাগে।
স্পেসিং: padEnd এর আগে এবং পরে একটি করে অতিরিক্ত স্পেস  (যেমন: | ${...} |), যাতে লেখাগুলো বর্ডারের সাথে লেগে না যায়।
