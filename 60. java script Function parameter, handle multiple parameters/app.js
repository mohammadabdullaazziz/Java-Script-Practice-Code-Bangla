জাভাস্ক্রিপ্টে একটি ফাংশনকে ডায়নামিক বা রিইউজেবল (বারবার ব্যবহারোপযোগী) করার জন্য Parameters এবং Arguments ব্যবহার করা হয়।

Parameters (প্যারামিটার): ফাংশন তৈরি (Declare) করার সময় ব্র্যাকেটের ভেতর যে ভেরিয়েবলগুলোর নাম দেওয়া হয়, সেগুলোকে প্যারামিটার বলে। এটি একটি Placeholder বা খালি বাক্সের মতো।

Arguments (আর্গুমেন্ট): ফাংশনটি কল (Call/Execute) করার সময় ব্র্যাকেটের ভেতর সত্যি সত্যি যে মানগুলো (Data) পাস করা হয়, সেগুলোকে আর্গুমেন্ট বলে। এটি হলো Actual Value বা আসল মান।



Parameter (প্যারামিটার) = ফাংশন ডিফাইন করার সময় ব্যবহৃত ভেরিয়েবল (placeholder)
Argument (আর্গুমেন্ট) = ফাংশন কল করার সময় পাস করা প্রকৃত মান

Parameter = Placeholder (খালি জায়গা/ভেরিয়েবল)

Argument = Actual Value (আসল ডাটা)

console.log() = আউটপুট দেখানোর জন্য জাভাস্ক্রিপ্টের বিল্ট-ইন ফাংশন




//java script Function parameter, handle multiple parameters
function addNumber(num1, num2) {
  console.log(num1 + num2);
}
addNumber(5, 7);




// ফাংশন ডিক্লেয়ারেশন (এখানে p1, p2 হলো Parameters)
function functionName(p1, p2) {
    // এই ভেতরে p1 এবং p2 লোকাল ভেরিয়েবল হিসেবে কাজ করে
    console.log(p1, p2);
}

// ফাংশন কল (এখানে "Value1", "Value2" হলো Arguments)
functionName("Value1", "Value2");



// ১. ফাংশন তৈরি (name এবং cgpa হলো Parameters)
function displayProfile(name, cgpa) {
    console.log(`Student Name: ${name}`);
    console.log(`Academic CGPA: ${cgpa}`);
}

// ২. ফাংশন কল (আসল মানগুলো হলো Arguments)
displayProfile("Mohammad Abdullah", 3.50); 
displayProfile("Arman Aziz", 3.85); // একই ফাংশন ভিন্ন আর্গুমেন্ট দিয়ে রান





// এখানে name এবং age হলো parameters
function greet(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

// "John" এবং 30 হলো arguments
greet("Ebny", 30);  // Output: Hello Ebny, you are 30 years old




function myName(name, country) {
  console.log("My name is" + " " + name + "i live in" + " " + country);
}
myName("Abdullah", "Bangladesh");







let myFirstName = "Programmer";
let myLastName = "Aziz";
function printName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}
printName("Mohammad", "Abdullah", "Aziz");
printName("Mohammad");
printName(myFirstName, myLastName); //let variable

🔍 প্রথম ২ লাইন: গ্লোবাল ভেরিয়েবল তৈরি

let myFirstName = "Programmer";
let myLastName = "Aziz";

এরা গ্লোবাল ভেরিয়েবল (যেকোনো জায়গায় অ্যাক্সেস আছে)

মেমোরিতে সংরক্ষিত:

myFirstName → "Programmer"

myLastName → "Aziz"


ফাংশন ডিক্লেয়ারেশন

function printName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}

প্যারামিটার ৩টা: firstName, middleName, lastName

ফাংশন কিছু রিটার্ন করে না, শুধু কনসোলে প্রিন্ট করে

ফাংশন এখন মেমোরিতে আছে, কিন্তু রান হয়নি

এখন ৩টা ফাংশন কল
printName("Mohammad", "Abdullah", "Aziz");

✅ সব আর্গুমেন্ট দেওয়া আছে
firstName = "Mohammad"

middleName = "Abdullah"

lastName = "Aziz"

➡️ আউটপুট: Mohammad Abdullah Aziz


২য় কল:
printName("Mohammad");

❌ শুধু ১টা আর্গুমেন্ট দেওয়া

firstName = "Mohammad"

middleName = undefined (কেউ দেয়নি)

lastName = undefined (কেউ দেয়নি)

➡️ আউটপুট: Mohammad undefined undefined
এখানেই undefined আসার কারণ → ফাংশন ৩টা প্যারামিটার চায়, কিন্তু দেওয়া হয়েছে ১টা। বাকি ২টা প্যারামিটার অসংজ্ঞায়িত (undefined) থেকে যায়।

৩য় কল:
printName(myFirstName, myLastName);

এখানে আর্গুমেন্ট হিসেবে গ্লোবাল ভেরিয়েবলের মান পাঠানো হয়েছে

myFirstName-এর মান "Programmer" → firstName-এ যাবে

myLastName-এর মান "Aziz" → middleName-এ যাবে

lastName-এর জন্য কোনো আর্গুমেন্ট নেই → undefined
➡️ আউটপুট: Programmer Aziz undefined


গ্লোবাল ভেরিয়েবল নিজে থেকে কখনো লোকাল হয় না। কিন্তু ফাংশনের প্যারামিটার হলো লোকাল ভেরিয়েবল।
printName(myFirstName, myLastName);

১	গ্লোবাল myFirstName-এর মান ("Programmer") পড়া হয়
২	সেটা ফাংশনের লোকাল প্যারামিটার firstName-এ কপি হয়
৩	গ্লোবাল myLastName-এর মান ("Aziz") পড়া হয়
৪	সেটা ফাংশনের লোকাল প্যারামিটার middleName-এ কপি হয়
৫	lastName-এ কিছু আসে না → undefined

💡 গুরুত্বপূর্ণ:
গ্লোবাল ভেরিয়েবলের মান প্যারামিটারে যায়, কিন্তু গ্লোবাল ভেরিয়েবল নিজে লোকাল হয় না। ওরা আলাদা জায়গায় থাকে





যদি গ্লোবাল ভেরিয়েবলের নাম ও প্যারামিটারের নাম এক হয়?

let name = "Global";
function test(name) {
  console.log(name); // এখানে 'name' হলো প্যারামিটার (লোকাল)
}
test("Local"); // "Local"
console.log(name); // "Global" (গ্লোবাল অপরিবর্তিত)
প্যারামিটার = লোকাল, গ্লোবালকে ওভাররাইট করে না

প্যারামিটার কম = undefined

প্যারামিটার বেশি = এক্সট্রা ইগনোর

গ্লোবালের মান প্যারামিটারে কপি হয়, গ্লোবাল লোকাল হয় না

লোকাল আর গ্লোবাল আলাদা জায়গায় থাকে (নাম এক হলেও)





function sum(sum1, sum2) {
  console.log(sum1 + sum2 );
}
sum(2);  //result NaN

এখানে NaN আসার কারণ ও সমাধান
কারণ:

sum1 = 2 (আর্গুমেন্ট থেকে পেয়েছে)

sum2 = undefined (কোনো আর্গুমেন্ট দেওয়া হয়নি)

2 + undefined = NaN
NaN = Not a Number
কারণ, undefined একটা সংখ্যা না, তাই জাভাস্ক্রিপ্ট যোগ করতে পারে না।

🧠 জাভাস্ক্রিপ্টের ভেতরের হিসাব:
sum1 = 2;
sum2 = undefined;  // ← কোনো মান আসেনি

console.log(2 + undefined);
// 2 + undefined = NaN

✅ সমাধান ১: ডিফল্ট প্যারামিটার ব্যবহার

function sum(sum1, sum2 = 0) {
  console.log(sum1 + sum2);
}
sum(2);        // 2
sum(2, 3);     // 5


✅ সমাধান ২: চেক করে যোগ করা

function sum(sum1, sum2) {
  if (sum2 === undefined) {
    sum2 = 0;
  }
  console.log(sum1 + sum2);
}
sum(2);  // 2







function printName(first, second, third) {
    console.log(first + " " + third);
    first = "Banner Red";
    console.log(first);

}

let first = "Banner Red";
let second = "Sugar Berry";
let third = "Freedom Sky";

printName("Red", "Green", "Blue");
console.log(first + " " + second + " " + third);


🧠 কোডটির– সারমর্ম:
ফাংশনের ভিতরের first, second, third ফাংশনের নিজস্ব লোকাল ভেরিয়েবল (প্যারামিটার)।

ফাংশনের বাইরের first, second, third গ্লোবাল ভেরিয়েবল।

ফাংশন কল করার সময় পাস করা আর্গুমেন্টগুলো প্যারামিটারে অ্যাসাইন হয়, কিন্তু গ্লোবাল ভেরিয়েবলের কোনো পরিবর্তন হয় না (যতক্ষণ না গ্লোবালকে সরাসরি রিঅ্যাসাইন করা হসছে)।


১ ফাংশন ডিক্লেয়ারেশন
function printName(first, second, third) {
    console.log(first + " " + third);
    first = "Banner Red";
    console.log(first);
}
এখানে first, second, third হচ্ছে প্যারামিটার। এরা ফাংশনের লোকাল ভেরিয়েবল।

ফাংশনের ভিতরে first-এর মান পরিবর্তন করলে তা শুধুমাত্র ফাংশনের ভিতরেই প্রভাব ফেলবে।


২ গ্লোবাল ভেরিয়েবল ডিক্লেয়ার

let first = "Banner Red";
let second = "Sugar Berry";
let third = "Freedom Sky";

এগুলো গ্লোবাল ভেরিয়েবল (যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়)।

ফাংশনের প্যারামিটার ও এই গ্লোবাল ভেরিয়েবলগুলো আলাদা। এমনকি নাম এক হলেও এরা ভিন্ন জিনিস।


ধাপ ৩: ফাংশন কল

printName("Red", "Green", "Blue");

এখন ফাংশনের ভিতরে যা হয়—

ফাংশনের ভিতরে (প্যারামিটার হিসেবে):
first = "Red" (আর্গুমেন্ট থেকে আসা)

second = "Green"

third = "Blue"

প্রথম console.log
console.log(first + " " + third);

→ first = "Red", third = "Blue"
→ আউটপুট: "Red Blue"

first-কে রিঅ্যাসাইন করা

first = "Banner Red";

এখন লোকাল first-এর মান "Banner Red" হয়ে গেল।


দ্বিতীয় console.log
console.log(first);
→ আউটপুট: "Banner Red"

তাহলে ফাংশন কলের আউটপুট:

Red Blue
Banner Red

ধাপ ৪: ফাংশনের বাইরে গ্লোবাল ভেরিয়েবল প্রিন্ট

console.log(first + " " + second + " " + third);

ফাংশনের ভিতরে first-এর মান পরিবর্তন হলেও তা গ্লোবাল first-কে প্রভাবিত করে না।

গ্লোবাল ভেরিয়েবলগুলো আগের মতোই আছে:

first = "Banner Red"

second = "Sugar Berry"

third = "Freedom Sky"

Banner Red Sugar Berry Freedom Sky

📊 পুরো আউটপুট (কনসোলে যা):
Red Blue
Banner Red
Banner Red Sugar Berry Freedom Sky

ফাংশন কলের সময় "Red", "Green", "Blue" আর্গুমেন্ট প্যারামিটারে অ্যাসাইন হয়।

ফাংশনের ভিতরে first-এর মান "Banner Red" করা হয় (শুধু লোকালটির)।

ফাংশনের বাইরে গ্লোবাল ভেরিয়েবল অপরিবর্তিত থাকে।

তাই শেষ আউটপুটে গ্লোবাল মানগুলোই প্রিন্ট হয়।


প্যারামিটার	ফাংশনের নিজস্ব লোকাল ভেরিয়েবল। ফাংশন কল করার সময় আর্গুমেন্ট থেকে মান নেয়।
গ্লোবাল ভেরিয়েবল	ফাংশনের বাইরে ডিক্লেয়ার করা হয়। পুরো প্রোগ্রামে অ্যাক্সেসযোগ্য।
একই নামের লোকাল ও গ্লোবাল	এরা আলাদা। ফাংশনের ভিতরে নাম এক হলেও লোকালটাই প্রাধান্য পায়।
লোকাল পরিবর্তন	ফাংশনের ভিতরে লোকাল ভেরিয়েবলের মান বদলালে গ্লোবালের কোনো পরিবর্তন হয় না।









//user Input

function addition(firstNum, secondNum){
  console.log(firstNum + secondNum);
}

let firstNum = prompt("Enter Your First Number: ");
firstNum = Number(firstNum);
let secondNum = prompt("Enter Your Second Number: ")
secondNum = Number(secondNum);
addition(firstNum, secondNum);



অ্যাডভান্সড ও গুরুত্বপূর্ণ কনসেপ্ট

ক) Default Parameters (ডিফল্ট প্যারামিটার)

যদি ফাংশন কল করার সময় কোনো আর্গুমেন্ট পাস করতে ভুলে যাওয়া হয়, তবে জাভাস্ক্রিপ্ট বাই-ডিফল্ট তাকে undefined ধরে নেয়। 
এই বাগ বা এরর এড়াতে প্যারামিটারে আগে থেকেই একটি ব্যাকআপ বা ডিফল্ট মান সেট করে রাখা যায়।

// এখানে status এর ডিফল্ট মান দেওয়া হয়েছে "Active"
function checkUserStatus(userName, status = "Active") {
    console.log(`User: ${userName}, Status: ${status}`);
}

checkUserStatus("Abdullah");          // আউটপুট: User: Abdullah, Status: Active (ডিফল্ট মান নিয়েছে)
checkUserStatus("aZIZ", "Inactive"); // আউটপুট: User: Aziz, Status: Inactive (ডিফল্ট মান ওভাররাইট হয়েছে)



খ) Rest Parameters (...variables) — আনলিমিটেড আর্গুমেন্ট

যখন আগে থেকে জানা যায় না যে ইউজার কতগুলো আর্গুমেন্ট পাস করবে (যেমন: ক্যালকুলেটরে ১০টি সংখ্যাও যোগ হতে পারে, আবার ২টি সংখ্যাও হতে পারে), 
তখন সব আর্গুমেন্টকে একটি অ্যারে (Array) বানিয়ে ফেলার জন্য ৩টি ডট ... দিয়ে Rest Parameter ব্যবহার করা হয়।

// ...numbers সব আর্গুমেন্টকে একটি অ্যারেতে প্যাক করে ফেলে
function sumNumbers(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumNumbers(10, 20));         // আউটপুট: 30
console.log(sumNumbers(5, 15, 25, 35));  // আউটপুট: 80



গ) Pass by Value vs Pass by Reference

Pass by Value (Primitive Data): ফাংশনে আর্গুমেন্ট হিসেবে Number, String, Boolean পাস করলে আসল ভেরিয়েবলের কোনো পরিবর্তন হয় না (আলাদা কপি তৈরি হয়)।

Pass by Reference (Non-Primitive Data): আর্গুমেন্ট হিসেবে Array বা Object পাস করলে মেমরির মেইন রেফারেন্স শেয়ার হয়। অর্থাৎ ফাংশনের ভেতর অবজেক্টের কোনো মান বদলালে ফাংশনের বাইরের আসল অবজেক্টের মানও বদলে যাবে।


function updateData(obj) {
    obj.cgpa = 4.00; // ফাংশনের ভেতর অবজেক্ট পরিবর্তন করা হলো
}

let student = { name: "Abdullah", cgpa: 3.50 };
updateData(student);

console.log(student.cgpa); // আউটপুট: 4.00 (আসল অবজেক্টের মানই বদলে গেছে!)


বৈশিষ্ট্য                    Parameters (প্যারামিটার)                          Arguments (আর্গুমেন্ট)
অবস্থান	                 ফাংশনের স্ট্রাকচার বা ডেফিনিশনে থাকে।	             ফাংশন যেখানে এক্সিকিউট বা কল করা হয় সেখানে থাকে।
ধরণ	                     এটি লোকাল স্কোপড ভেরিয়েবলের মতো কাজ করে।	     এটি সরাসরি ভ্যালু, ভেরিয়েবলের মান বা এক্সপ্রেশন।
মেমরি	                 ফাংশন কল না হওয়া পর্যন্ত মেমরিতে জায়গা নেয় না।	 এক্সিকিউশনের সময় মেমরিতে আসল ডাটা হিসেবে পাস হয়।

-------------------------------------------------------------------------

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    firstName= "Roksana";
    console.log(firstName);
}

let name1 = "Mohammad";
let name2 = "Aziz";


myName(name1, name2);
myName("Abdullah", "Arman");

Roksana ২ বার প্রিন্ট হওয়ার কারণ

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);  // লাইন ১
    firstName = "Roksana";                     // লাইন ২
    console.log(firstName);                    // লাইন ৩
}

let name1 = "Mohammad";
let name2 = "Aziz";

myName(name1, name2);     // কল ১
myName("Abdullah", "Arman"); // কল ২

📤 আউটপুট কী হবে?

Mohammad Aziz
Roksana
Abdullah Arman
Roksana

কারণটা খুব সহজ: ফাংশনটি ২ বার কল করা হয়েছে!

প্রতিবার ফাংশন কল হলে:

প্রথমে console.log(firstName + " " + lastName) রান করে

তারপর firstName = "Roksana" দিয়ে প্যারামিটারটির মান পরিবর্তন করে

তারপর console.log(firstName) রান করে

যেহেতু ফাংশনটি ২ বার কল করা হয়েছে, সেহেতু প্রতিবারই "Roksana" প্রিন্ট হয়েছে।

📊 ধাপে ধাপে বিশ্লেষণ

🔹 ১ম কল: myName(name1, name2)

// name1 = "Mohammad", name2 = "Aziz"
function myName(firstName, lastName) {
    // Step 1: firstName = "Mohammad", lastName = "Aziz"
    console.log(firstName + " " + lastName);  
    // আউটপুট: "Mohammad Aziz" ✅
    
    // Step 2: firstName এর মান পরিবর্তন
    firstName = "Roksana";  
    // এখন firstName = "Roksana"
    
    // Step 3: নতুন মান প্রিন্ট
    console.log(firstName);  
    // আউটপুট: "Roksana" ✅ (১ম বার)
}

🔹 ২য় কল: myName("Abdullah", "Arman")

// সরাসরি "Abdullah", "Arman" পাস করা হয়েছে
function myName(firstName, lastName) {
    // Step 1: firstName = "Abdullah", lastName = "Arman"
    console.log(firstName + " " + lastName);  
    // আউটপুট: "Abdullah Arman" ✅
    
    // Step 2: firstName এর মান পরিবর্তন
    firstName = "Roksana";  
    // এখন firstName = "Roksana"
    
    // Step 3: নতুন মান প্রিন্ট
    console.log(firstName);  
    // আউটপুট: "Roksana" ✅ (২য় বার)
}


 ফাংশন প্রতিবার কলেই নতুন করে রান করে

// প্রতিবার কলেই ফাংশনের ভিতরের কোড 처음 থেকে রান করে
myName(name1, name2);     // ১ম বার রান
myName("Abdullah", "Arman"); // ২য় বার রান (আলাদা এক্সিকিউশন)


প্যারামিটার পরিবর্তন করা লোকাল স্কোপে সীমাবদ্ধ

function myName(firstName, lastName) {
    firstName = "Roksana";  // শুধু এই ফাংশনের ভিতরে firstName পরিবর্তন হয়
    console.log(firstName);
}

let name1 = "Mohammad";
myName(name1);  // "Roksana" প্রিন্ট হবে
console.log(name1);  // "Mohammad" (গ্লোবাল ভেরিয়েবল অপরিবর্তিত!)



প্রতিবার নতুন প্যারামিটার ভ্যালু আসে

// ১ম কল: firstName = "Mohammad"
myName(name1, name2);

// ২য় কল: firstName = "Abdullah" (পুরোনো মান ধরে রাখে না)
myName("Abdullah", "Arman");


যে Roksana শুধু ১ বার প্রিন্ট হোক, তাহলে ফাংশনটি ১ বার কল করতে হবে:

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    firstName = "Roksana";
    console.log(firstName);
}

let name1 = "Mohammad";
let name2 = "Aziz";

myName(name1, name2);  // শুধু ১ বার কল
// আউটপুট:
// Mohammad Aziz
// Roksana (শুধু ১ বার)


ফাংশন কলের মেকানিজম

// ফাংশন ডেফিনেশন (শুধু ১ বার তৈরি হয়)
function myName(firstName, lastName) {
    // এই অংশটি প্রতিবার কলেই নতুন করে রান করে
    console.log(firstName + " " + lastName);
    firstName = "Roksana";
    console.log(firstName);
}

// ===== ১ম কল =====
myName(name1, name2);
// কি হয়:
// 1. firstName = name1 (="Mohammad")
// 2. lastName = name2 (="Aziz")
// 3. console.log("Mohammad Aziz")
// 4. firstName = "Roksana" (লোকাল পরিবর্তন)
// 5. console.log("Roksana")
// 6. ফাংশন শেষ → সব লোকাল ভেরিয়েবল মুছে যায়

// ===== ২য় কল =====
myName("Abdullah", "Arman");
// 1. firstName = "Abdullah" (নতুন মান)
// 2. lastName = "Arman" (নতুন মান)
// 3. console.log("Abdullah Arman")
// 4. firstName = "Roksana" (আবার পরিবর্তন)
// 5. console.log("Roksana")
// 6. ফাংশন শেষ → সব লোকাল ভেরিয়েবল মুছে যায়


firstName = "Roksana" কি গ্লোবাল name1-কে পরিবর্তন করে?

উত্তর: ❌ না! কারণ:

let name1 = "Mohammad";

function myName(firstName) {
    firstName = "Roksana";  // প্যারামিটার পরিবর্তন
    console.log(firstName);  // "Roksana"
}

myName(name1);
console.log(name1);  // "Mohammad" (অপরিবর্তিত!)

Roksana ২ বার প্রিন্ট হলে কীভাবে ১ বার করব?

myName(name1, name2);  // শুধু ১ বার
// আউটপুট: Mohammad Aziz, Roksana (১ বার)

Roksana প্রিন্ট বন্ধ করব কীভাবে?

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    // firstName = "Roksana";  // কমেন্ট করে দিন
    // console.log(firstName);  // কমেন্ট করে দিন
}

Roksana কেন ২ বার প্রিন্ট হয়েছে?	ফাংশনটি ২ বার কল করা হয়েছে
প্রতিবার কি একই ভ্যালু আসে?	না, প্রথমবার "Mohammad" আর দ্বিতীয়বার "Abdullah"
গ্লোবাল ভেরিয়েবল পরিবর্তন হয়েছে?	না, শুধু প্যারামিটার পরিবর্তন হয়েছে
কীভাবে ১ বার করব?	ফাংশন ১ বার কল করলে

মূল কথা: ফাংশনটি যতবার কল হবে, তার ভিতরের কোড ততবার রান করবে। আর প্রতিবার রান করার সময় প্যারামিটার নতুন ভ্যালু পায় এবং "Roksana" সেট হয়ে প্রিন্ট হয়। এখানে ফাংশনটি ২ বার কল হওয়ায় Roksana ২ বার প্রিন্ট হয়েছে!
