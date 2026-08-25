JavaScript-এ toFixed() এবং toPrecision() হলো Number অবজেক্টের মেথড, যা সংখ্যা ফরম্যাট (Format) করার জন্য ব্যবহৃত হয়। 
এগুলোর মাধ্যমে দশমিকের পর কয়টি ঘর থাকবে বা মোট কয়টি সংখ্যা থাকবে তা নির্ধারণ করা যায়।


let num = 20.58528;
console.log(num.toFixed(2));
console.log(typeof (num));


let num = 20.58528;
console.log(num.toPrecision(3))
console.log(typeof (num));



let num = 20;
num = num.toString();
console.log(num);
console.log(typeof (num));

জাভাস্ক্রিপ্টে parseInt() এবং parseFloat() হলো স্ট্রিংকে (string) সংখ্যায় রূপান্তর করার ফাংশন parseInt() স্ট্রিং থেকে পূর্ণসংখ্যা (integer) তৈরি করে
আর parseFloat() দশমিক সংখ্যাসহ (floating-point) মান তৈরি করে [৫]। যেমন, parseInt("10.5") দিলে ১০ হয়, কিন্তু parseFloat("10.5") দিলে ১০.৫ হয় 

let num = "20";
num = parseInt(num);
console.log(num);
console.log(typeof (num));


let num = "20.5";
num = parseFloat(num);
console.log(num);
console.log(typeof (num));


// number method 
console.log(Number("12"));

console.log(Number("12.5"));

console.log(Number(true));
console.log(Number(false));



জাভাস্ক্রিপ্টে ম্যাথ (Math) সম্পর্কিত কাজ করার জন্য মেথডগুলো এগুলো অবজেক্ট-ওরিয়েন্টেড Math অবজেক্টের মেথড। 
  তবে কাজের সুবিধার্থে স্ট্রিং ডাটাকে সংখ্যায় রূপান্তর করে কিংবা মেথডের ফলাফলের সাথে স্ট্রিং ও ব্যাকটিকস যোগ করে আমরা এগুলো ব্যবহার করে থাকি।

নিচে Math.floor(), Math.ceil(), Math.round(), Math.trunc(), Math.abs(), Math.pow(), Math.sqrt(), এবং Math.random() সহ প্রয়োজনীয় সব মেথডের বিস্তারিত উদাহরণ 


📌 ১. Math.floor()
দশমিক সংখ্যাকে নিচের দিকের নিকটতম পূর্ণসংখ্যায় (Round Down) রূপান্তর করে।

let num = "4.9"; // স্ট্রিং টাইপ ডাটা

// Math মেথড স্বয়ংক্রিয়ভাবে স্ট্রিং "4.9" কে সংখ্যায় রূপান্তর করে নেয়
console.log(`Math.floor("4.9") : ${Math.floor(num)}`); 
// Output: Math.floor("4.9") : 4

console.log(`Negative Floor : ${Math.floor(-4.1)}`); 
// Output: Negative Floor : -5 (কারণ -৫ হলো -৪.১ এর চেয়ে ছোট পূর্ণসংখ্যা)



📌 ২. Math.ceil()
দশমিক সংখ্যাকে ওপরের দিকের নিকটতম পূর্ণসংখ্যায় (Round Up) রূপান্তর করে।

let num = "4.1";

console.log(`Math.ceil("4.1") : ${Math.ceil(num)}`); 
// Output: Math.ceil("4.1") : 5

console.log(`Negative Ceil : ${Math.ceil(-4.9)}`); 
// Output: Negative Ceil : -4


📌 ৩. Math.round()
সাধারণ গাণিতিক নিয়মে রাউন্ড করে। দশমিকের পর .5 বা তার বেশি হলে ওপরের পূর্ণসংখ্যা, আর .5-এর কম হলে নিচের পূর্ণসংখ্যা দেয়।

console.log(`Math.round("4.5") : ${Math.round("4.5")}`); // Output: 5
console.log(`Math.round("4.4") : ${Math.round("4.4")}`); // Output: 4


📌 ৪. Math.trunc()
দশমিকের পরের সব অংশ কেটে শুধু মূল পূর্ণসংখ্যাটি (Integer) রেখে দেয়।

console.log(`Math.trunc("4.99") : ${Math.trunc("4.99")}`); // Output: 4
console.log(`Math.trunc("-4.99") : ${Math.trunc("-4.99")}`); // Output: -4


📌 ৫. Math.abs() (Absolute Value)
যেকোনো ঋণাত্মক (Negative) সংখ্যাকে ধনাত্মক (Positive)-এ রূপান্তর করে।

let balance = "-500";

console.log(`Absolute Value: ${Math.abs(balance)}`); 
// Output: Absolute Value: 500




📌 ৬. Math.pow() & Math.sqrt() (পাওয়ার ও বর্গমূল)
Math.pow(base, exponent): পাওয়ার বা স্কয়ার হিসাব করে।

Math.sqrt(number): সংখ্যার বর্গমূল (Square Root) বের করে।

console.log(`2^3 (Power) : ${Math.pow("2", 3)}`); // Output: 8
console.log(`Square Root of 25 : ${Math.sqrt("25")}`); // Output: 5


📌 ৭. Math.min() & Math.max()
তালিকার সবচেয়ে ছোট এবং সবচেয়ে বড় সংখ্যাটি খুঁজে বের করে।

console.log(`Max Number : ${Math.max(10, "50", 30, 5)}`); // Output: 50
console.log(`Min Number : ${Math.min(10, "50", 30, 5)}`); // Output: 5


📌 ৮. Math.random()
0 থেকে শুরু করে 1-এর কম পর্যন্ত যেকোনো র‍্যান্ডম দশমিক সংখ্যা তৈরি করে।

// ১ থেকে ১০ এর মধ্যে র‍্যান্ডম পূর্ণসংখ্যা তৈরি
let randomNum = Math.floor(Math.random() * 10) + 1;

console.log(`Random Number (1-10): ${randomNum}`);


💡 বোনাস: String-কে Number বানিয়ে Math মেথড ব্যবহার
কখনো কখনো নিখুঁত হিসেব করতে স্ট্রিংকে আগে parseInt() বা parseFloat() দিয়ে সংখ্যা বানিয়ে নেওয়া ভালো প্র্যাকটিস:

let strNum = "12.3456";

// দশমিক সংখ্যায় রূপান্তর করে Math.round করা
let parsedNum = parseFloat(strNum);

console.log(`Result: ${Math.round(parsedNum)}`); // Output: Result: 12
