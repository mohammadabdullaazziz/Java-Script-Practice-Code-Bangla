জাভাস্ক্রিপ্টে একটি ফাংশনকে ডায়নামিক বা রিইউজেবল (বারবার ব্যবহারোপযোগী) করার জন্য Parameters এবং Arguments ব্যবহার করা হয়।

Parameters (প্যারামিটার): ফাংশন তৈরি (Declare) করার সময় ব্র্যাকেটের ভেতর যে ভেরিয়েবলগুলোর নাম দেওয়া হয়, সেগুলোকে প্যারামিটার বলে। এটি একটি Placeholder বা খালি বাক্সের মতো।

Arguments (আর্গুমেন্ট): ফাংশনটি কল (Call/Execute) করার সময় ব্র্যাকেটের ভেতর সত্যি সত্যি যে মানগুলো (Data) পাস করা হয়, সেগুলোকে আর্গুমেন্ট বলে। এটি হলো Actual Value বা আসল মান।



Parameter (প্যারামিটার) = ফাংশন ডিফাইন করার সময় ব্যবহৃত ভেরিয়েবল (placeholder)
Argument (আর্গুমেন্ট) = ফাংশন কল করার সময় পাস করা প্রকৃত মান

Parameter = Placeholder (খালি জায়গা/ভেরিয়েবল)

Argument = Actual Value (আসল ডাটা)





// ফাংশন ডিফিনেশন
function functionName(parameter1, parameter2, parameter3) {
    // ফাংশন বডি
    return parameter1 + parameter2;
}



// ফাংশন কল
functionName(argument1, argument2, argument3);

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
displayProfile("Anisur Rahman", 3.85); // একই ফাংশন ভিন্ন আর্গুমেন্ট দিয়ে রান





// এখানে name এবং age হলো parameters
function greet(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

// "John" এবং 25 হলো arguments
greet("John", 25);  // Output: Hello John, you are 25 years old




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




function sum(sum1, sum2) {
  console.log(sum1 + sum2 );
}
sum(2);  //result NaN




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
checkUserStatus("Sajid", "Inactive"); // আউটপুট: User: Sajid, Status: Inactive (ডিফল্ট মান ওভাররাইট হয়েছে)



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
মেমরি	                   ফাংশন কল না হওয়া পর্যন্ত মেমরিতে জায়গা নেয় না।	   এক্সিকিউশনের সময় মেমরিতে আসল ডাটা হিসেবে পাস হয়।


