📌 Default Parameter কী?
    
Default Parameter হলো ফাংশনের প্যারামিটারের জন্য ডিফল্ট মান নির্ধারণ করার একটি উপায়। যখন ফাংশন কল করার সময় কোনো আর্গুমেন্ট পাস করা হয় না বা undefined পাস করা হয়, 
তখন এই ডিফল্ট মান ব্যবহার করা হয়। এটি ES6 (2015) সংস্করণে যুক্ত করা হয়েছে।

🧐 ডিফল্ট প্যারামিটার কী এবং কেন লাগবে?
    
সহজ কথায়, একটি ফাংশন যখন তৈরি করা হয়, তখন তার ভেতরে কিছু ডেটা পাস করার জন্য Parameter ব্যবহার করা হয়।
কিন্তু কোনো কারণে ফাংশনটি কল করার সময় যদি সেই ডেটা বা Argument দিতে ভুলে যাই বা না দিই, তখন জাভাস্ক্রিপ্ট ডিফল্টভাবে সেখানে undefined বসিয়ে দেয়। 
আর এই undefined-এর কারণে কোডে অনেক বড় বড় ভুল বা এরর (Error) চলে আসে।

এই সমস্যা সমাধানের জন্যই জন্ম হয়েছে Default Parameter-এর। এর কাজ হলো—"যদি ইউজার ফাংশন ডাকার সময় কোনো মান (Value) না দেয়, 
তবে ফাংশন নিজে থেকে একটি ধরে নেওয়া মান ব্যবহার করবে।"


বেসিক সিনট্যাক্স 

function functionName(param1 = defaultValue1, param2 = defaultValue2) {
    // ফাংশন বডি
}


ডিফল্ট প্যারামিটার ছাড়া সমস্যা (পুরাতন নিয়ম):

function welcomeMessage(name) {
    console.log("স্বাগতম, " + name + "!");
}

welcomeMessage("আব্দুল্লাহ"); // আউটপুট: স্বাগতম, আব্দুল্লাহ!
welcomeMessage();            // আউটপুট: স্বাগতম, undefined! (এখানেই সমস্যা!)

ইউজার যখন নাম দিতে ভুলে গেল, তখন স্ক্রিনে দেখাল undefined—যা দেখতে খুবই বাজে লাগে।



ডিফল্ট প্যারামিটার সহ সমাধান (আধুনিক নিয়ম):
এখানে প্যারামিটারের ভেতরেই = চিহ্ন দিয়ে একটি ডিফল্ট মান বসিয়ে দেব।


function welcomeMessage(name = "মেহমান") {
    console.log("স্বাগতম, " + name + "!");
}

welcomeMessage("আব্দুল্লাহ"); // আউটপুট: স্বাগতম, আব্দুল্লাহ! (নিজের নাম নিয়েছে)
welcomeMessage();            // আউটপুট: স্বাগতম, মেহমান! (কিছু না দেওয়ায় ডিফল্ট মান নিয়েছে)





❌ পুরনো পদ্ধতি (ES6 এর আগে):

function greet(name) {
    // ম্যানুয়ালি চেক করতে হতো
    if (name === undefined) {
        name = "Guest";
    }
    // অথবা
    name = name || "Guest";
    console.log(`Hello ${name}`);
}

✅ নতুন পদ্ধতি (ES6 - Default Parameter):

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
// অনেক ক্লিন এবং সহজ!




Number Default

function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));     // 10 (5 * 2)
console.log(multiply(5, 3));  // 15 (5 * 3)



Boolean Default

function toggle(active = true) {
    console.log(`Status: ${active}`);
}

toggle();       // Status: true
toggle(false);  // Status: false



Array Default

function getItems(items = []) {
    console.log(items);
}

getItems();           // []
getItems([1, 2, 3]); // [1, 2, 3]



Object Default

function createUser(config = {}) {
    console.log(config);
}

createUser();                    // {}
createUser({ name: "John" });    // { name: "John" }




 Previous Parameters ব্যবহার

function createUser(name = "Guest", age = 18, city = name + "'s City") {
    console.log(`${name}, ${age}, from ${city}`);
}

createUser();              // Guest, 18, from Guest's City
createUser("John");        // John, 18, from John's City
createUser("John", 25);    // John, 25, from John's City





 Complex Expression

function getFullName(firstName = "John", lastName = "Doe") {
    return `${firstName} ${lastName}`;
}

function greet(name = getFullName("Jane", "Smith")) {
    console.log(`Hello ${name}`);
}

greet();           // Hello Jane Smith
greet("Bob");      // Hello Bob




Real-world Examples


User Registration System-=-

function registerUser(
    username = "anonymous",
    email = "no-email@example.com",
    age = 18,
    isActive = true,
    role = "user"
) {
    return {
        username,
        email,
        age,
        isActive,
        role,
        createdAt: new Date().toISOString()
    };
}

// বিভিন্নভাবে কল করা
console.log(registerUser());  
// {username: "anonymous", email: "no-email@example.com", age: 18, ...}

console.log(registerUser("john_doe"));
// {username: "john_doe", email: "no-email@example.com", age: 18, ...}

console.log(registerUser("john_doe", "john@email.com", 25, true, "admin"));
// সম্পূর্ণ ডেটা সহ




undefined vs null

function test(value = "default") {
    console.log(value);
}

test(undefined);  // "default" (undefined হলে ডিফল্ট নেয়)
test(null);       // null (null হলে ডিফল্ট নেয় না!)
test();           // "default" (কিছু পাস না করলে ডিফল্ট নেয়)




//Javascript function Default Parameter

function printName(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
printName("Abdullah", "Aziz")



function myIntro(firstName, lastName = "somethings") {
    console.log(`Hlw ${firstName} ${lastName}`)
}
myIntro("Aziz Chowdhory");





function sum(num1, num2 = 3) {
    console.log(num1 + num2);
}
sum(2, 2);




function greet(name = "Mohammad") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Mohammad!
greet("Aziz"); // Output: Hello, Aziz!




function express(name1, name2 = (1 == 1) {
    console.log(`Hey! ${name1} ${name2}`);
}
express("Ibny");




undefined বনাম null (খুব ইম্পর্টেন্ট ⚠️)

জাভাস্ক্রিপ্টে undefined এবং null এক জিনিস নয়।

যদি ফাংশনে কোনো মান না দেওয়া হয় বা সরাসরি undefined পাস করা হয়, তবেই কেবল ডিফল্ট প্যারামিটারটি কাজ করবে।

কিন্তু যদি জোর করে null পাস করা হয়, তবে জাভাস্ক্রিপ্ট ডিফল্ট প্যারামিটারকে কাজ করতে দেবে না। সে null-কেই মান হিসেবে ধরে নেবে।


function test(user = "Anonymous") {
    console.log(user);
}

test(undefined); // আউটপুট: Anonymous (ডিফল্ট কাজ করেছে)
test(null);      // আউটপুট: null (ডিফল্ট কাজ করেনি!)




একটি প্যারামিটারকে অন্য প্যারামিটারে ব্যবহার করা
প্রথম প্যারামিটারের মানটি দ্বিতীয় প্যারামিটারের ডিফল্ট ভ্যালু হিসেবে ব্যবহার করা যাবে।

function multiply(x, y = x * 2) {
    console.log(x * y);
}

multiply(5); // x = 5, আর y হবে 5 * 2 = 10। আউটপুট: 50



ডিফল্ট মান হিসেবে ফাংশন ব্যবহার (Dynamic Default)
ডিফল্ট প্যারামিটারে শুধু লেখা বা সংখ্যা নয়,  চাইলে পুরো একটি ফাংশনকেও কল করে দেওয়া যাবে!

function generateId() {
    return Math.floor(Math.random() * 1000);
}

// যদি ইউজার আইডি না দেয়, তবে অটোমেটিক নতুন আইডি জেনারেট হবে
function createUser(name, id = generateId()) {
    console.log(`User: ${name}, ID: ${id}`);
}

createUser("Abdullah"); // আউটপুট: User: Abdullah, ID: 452 (র্যান্ডম আইডি)



🎯 সাইবার সিকিউরিটি এবং ব্যাকএন্ডে এর গুরুত্ব

ব্যাকএন্ড ডেভেলপমেন্ট বা সিকিউরিটির ক্ষেত্রে এই ডিফল্ট প্যারামিটার আপনার কোডকে ক্র্যাশ হওয়া থেকে বাঁচায়।
যেমন: হ্যাকাররা অনেক সময় এপিআই (API) রিকোয়েস্ট পাঠানোর সময় কিছু জরুরি ডেটা (যেমন: User Role বা Limit) ফাঁকা বা undefined পাঠিয়ে দেয়। 
ব্যাকএন্ডে যদি  ডিফল্ট প্যারামিটার সেট করা থাকে (যেমন: role = "user"), তবে হ্যাকার চাইলেও প্যারামিটার ফাঁকা রেখে সিস্টেমে কোনো এরর তৈরি করতে বা অ্যাডমিন প্রিভিলেজ নিতে পারবে না।
