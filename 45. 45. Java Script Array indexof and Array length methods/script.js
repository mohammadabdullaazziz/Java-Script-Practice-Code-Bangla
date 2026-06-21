// Array indexof and Array length methods in JavaScript

// length methods in JavaScript
let fruitsOne = ["apple", "banana", "mango"];
console.log(fruitsOne.length);

const emptyArray = [];
let emptyArrayLength = emptyArray.length;
console.log(emptyArrayLength); // Output: 0

let friendAge = [20, 25, 27, 29, 30];
console.log(friendAge.length);

const colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// Output:
// Red
// Green
// Blue


let numbers = [10, 20, 30, 40, 50];
console.log("Original array:", numbers); // Original array: [10, 20, 30, 40, 50]

numbers.length = 3;
console.log("Array after setting length to 3:", numbers); // Array after setting length to 3: [10, 20, 30]

numbers.length = 5;
console.log("Array after setting length to 5:", numbers); // Array after setting length to 5: [10, 20, 30, empty, empty]

// Array indexof methods in JavaScript
let friendAges = [20, 25, 27, 29, 30];
// console.log(friendAges.indexOf(27));

// Basic usage
const fruits = ['apple', 'banana', 'orange', 'apple'];
let index1 = fruits.indexOf('banana');
console.log(index1); // Output: 1

// Element not found
let index2 = fruits.indexOf('grape');
console.log(index2); // Output: -1

//  Searching for the first occurrence of a duplicate element
let index3 = fruits.indexOf('apple');
console.log(index3); // Output: 0 (returns the index of the first 'apple')

//  Using the optional 'fromIndex' parameter
// Search for 'apple' starting from index 1 (the second element)
let index4 = fruits.indexOf('apple', 1);
console.log(index4); // Output: 3

// Checking for existence using indexOf()
if (fruits.indexOf('orange') !== -1) {
  console.log('Orange exists in the array!');
} else {
  console.log('Orange does not exist in the array.');
}





const nameWidth = 25; 

const marketCart = [
    { name: "Miniket Rice (5kg)", price: 340.00 },
    { name: "Mustard Oil (1L)", price: 220.00 },
    { name: "Masoor Dal (1kg)", price: 130.00 },
    { name: "Sugar (1kg)", price: 115.00 },
    { name: "Salt (1kg)", price: 42.00 },
    { name: "Rupchanda Oil (2L)", price: 330.00 },
    { name: "Aata (2kg)", price: 95.00 },
    { name: "Teaser Tea (400g)", price: 125.00 },
    { name: "Powder Milk (500g)", price: 410.00 },
    { name: "Onion (1kg)", price: 75.00 },
    { name: "Garlic (500g)", price: 90.00 },
    { name: "Ginger (500g)", price: 110.00 },
    { name: "Turmeric Powder", price: 60.00 },
    { name: "Chili Powder", price: 65.00 },
    { name: "Dish Wash Liquid", price: 85.00 }
];

// 🔥 নতুন যোগ করা শপের হেডার
console.log("=====================================");
console.log("      ABDULLAH GENERAL STORE       ");
console.log("=====================================");

console.log(`${"Product Name".padEnd(nameWidth)} | Price`);
console.log("-".repeat(nameWidth + 12)); 

let grandTotal = 0;

for (let item of marketCart) {
    let formattedPrice = `${item.price.toFixed(2)} tk`;
    console.log(`${item.name.padEnd(nameWidth, ".")} | ${formattedPrice}`);
    grandTotal += item.price;
}

console.log("-".repeat(nameWidth + 12));
let finalTotalText = `${grandTotal.toFixed(2)} tk`;
console.log(`${"Total Bill".padEnd(nameWidth)} | ${finalTotalText}`);

// 🔥 নতুন যোগ করা ফুটার মেসেজ
console.log("-".repeat(nameWidth + 12));
console.log("   Thank You for Shopping With Us!   ");
console.log("=====================================");


=====================================
      ABDULLAH GENERAL STORE       
=====================================
Product Name              | Price
-------------------------------------
Miniket Rice (5kg)....... | 340.00 tk
Mustard Oil (1L)......... | 220.00 tk
Masoor Dal (1kg)......... | 130.00 tk
Sugar (1kg).............. | 115.00 tk
Salt (1kg)............... | 42.00 tk
Rupchanda Oil (2L)....... | 330.00 tk
Aata (2kg)............... | 95.00 tk
Teaser Tea (400g)........ | 125.00 tk
Powder Milk (500g)....... | 410.00 tk
Onion (1kg).............. | 75.00 tk
Garlic (500g)............ | 90.00 tk
Ginger (500g)............ | 110.00 tk
Turmeric Powder.......... | 60.00 tk
Chili Powder............. | 65.00 tk
Dish Wash Liquid......... | 85.00 tk
-------------------------------------
Total Bill                | 2292.00 tk
-------------------------------------
   Thank You for Shopping With Us!   
=====================================

1️⃣ সেকশন ১: কলামের সাইজ ঠিক করা
const nameWidth = 25;

ব্যাখ্যা: এখানে একটা ফিক্সড ভ্যারিয়েবল যার মান ২৫। এর মানে হলো, স্ক্রিনে প্রোডাক্টের নাম দেখানোর জন্য ২৫ ঘর পরিমাণ চওড়া জায়গা বরাদ্দ করা হয়েছে। নাম ছোট হোক বা বড়, সে ২৫ ঘরের সাইজই নেবে।

2️⃣ সেকশন ২: ডাটাবেস বা আইটেমের তালিকা
const marketCart = [ { name: "...", price: ... }, ... ];

ব্যাখ্যা: এটি হলো একটি Array of Objects (অবজেক্টের অ্যারে)।

এখানে থার্ড ব্র্যাকেট [] দিয়ে একটা তালিকা (Array) বানানো হয়েছে, আর তার ভেতর সেকেন্ড ব্র্যাকেট {} দিয়ে একেকটি আইটেমের নাম ও দামকে অবজেক্ট আকারে রাখা হয়েছে।

এর সুবিধা হলো, একটা ভ্যারিয়েবলের ভেতরেই ১৫টি আইটেমের ডাটা একসাথে গুছিয়ে রাখা হয়েছে।

3️⃣ সেকশন ৩: মেমোর হেডার বা শিরোনাম প্রিন্ট

console.log(`${"Product Name".padEnd(nameWidth)} | Price`);
console.log("-".repeat(nameWidth + 12));

padEnd(nameWidth) এর কাজ: "Product Name" লেখাটার দৈর্ঘ্য হলো ১২ অক্ষর। কিন্তু যেহেতু nameWidth (২৫) দিয়েছি, তাই জাভাস্ক্রিপ্ট বাকি ১৩টি ঘর খালি স্পেস (Space) দিয়ে ভরাট করে 
মোট ২৫ ঘরের সমান লম্বা লাইন তৈরি করেছে। এর ঠিক পরেই বসেছে পাইপলাইন | Price।

.repeat() এর কাজ: বারবার হাইফেন - টাইপ না করে জাভাস্ক্রিপ্টকে বলা হল, তুমি ২৫ + ১২ = ৩৭ বার হাইফেন প্রিন্ট করে একটা সোজা বর্ডার লাইন টেনে দাও।

4️⃣ সেকশন ৪: লুপের আসল ম্যাজিক (সবচেয়ে গুরুত্বপূর্ণ)

let grandTotal = 0;

for (let item of marketCart) {
    let formattedPrice = `${item.price.toFixed(2)} tk`;
    console.log(`${item.name.padEnd(nameWidth, ".")} | ${formattedPrice}`);
    grandTotal += item.price;
}


grandTotal = 0; শুরুতে আমাদের মোট বিলের থলেটা খালি (০) ছিল।

for...of লুপ: এই লুপটি অটোমেটিকভাবে marketCart অ্যারের ভেতর ঢুকবে এবং প্রথম থেকে শেষ পর্যন্ত একটি একটি করে অবজেক্ট টেনে বের করবে।
প্রতিবার বের করা আইটেমটি সাময়িকভাবে item ভ্যারিয়েবলের ভেতর জমা থাকবে।

toFixed(2) এর কাজ: দামের সংখ্যাটিকে দশমিকের পর দুই ঘর পর্যন্ত ফিক্সড করে (যেমন: 340.00) তার সাথে tk লেখাটা জুড়ে দেয়।

প্যাডিং ম্যাজিক: ${item.name.padEnd(nameWidth, ".")}—এই লাইনটি প্রতিটা প্রোডাক্টের নাম প্রিন্ট করে এবং নামের পর ২৫ ঘর পূর্ণ হতে যতগুলো ঘর বাকি থাকে, 
ততগুলো ডট (.) বসিয়ে দেয়। যেহেতু সবার জন্য মোট সাইজ ২৫, তাই সব ডট গিয়ে একদম সোজা লাইনে শেষ হয় এবং পাইপলাইনগুলো (|) এক সুতোয় সোজা হয়ে নেমে যায়।

grandTotal += item.price; প্রতিবার লুপ ঘোরার সময় আইটেমের দামটি গিয়ে মূল grandTotal থলের ভেতরের সংখ্যার সাথে যোগ হতে থাকে। এভাবে ১৫ বার যোগ হয়ে মোট বিল তৈরি হয়।

5️⃣ সেকশন ৫: ফুটার বা ফাইনাল বিল প্রিন্ট

console.log("-".repeat(nameWidth + 12));
let finalTotalText = `${grandTotal.toFixed(2)} tk`;
console.log(`${"Total Bill".padEnd(nameWidth)} | ${finalTotalText}`);

ব্যাখ্যা: লুপের কাজ শেষ হওয়ার পর নিচে আরেকটি বর্ডার লাইন পড়ে। তারপর "Total Bill" লেখাটিকেও ২৫ ঘর মেপে ডানপাশে পাইপলাইন দিয়ে, 
লুপের ভেতর হিসাব করা সম্পূর্ণ যোগফলটি (grandTotal) স্ক্রিনে ফুটিয়ে তোলা হয়।
