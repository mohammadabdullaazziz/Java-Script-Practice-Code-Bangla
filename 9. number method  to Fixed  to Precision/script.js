JavaScript-এ toFixed() এবং toPrecision() হলো Number অবজেক্টের মেথড, যা সংখ্যা ফরম্যাট (Format) করার জন্য ব্যবহৃত হয়। 
এগুলোর মাধ্যমে দশমিকের পর কয়টি ঘর থাকবে বা মোট কয়টি সংখ্যা থাকবে তা নির্ধারণ করা যায়।


let num = 20.58528;
console.log(num.toFixed(2));
console.log(typeof (num));


toFixed() মেথড মূলত নম্বরকে ডেসিমাল ফিক্স করে স্ট্রিং (String) হিসেবে রিটার্ন করে। :

let x = 9.656;

let res1 = x.toFixed(0);
let res2 = x.toFixed(2);
let res3 = x.toFixed(4);
let res4 = x.toFixed(6);

console.log(res1); // Output: "10"    (কোনো দশমিক থাকবে না, রাউন্ড হয়ে ১০ হয়েছে)
console.log(res2); // Output: "9.66"  (দশমিকের পর ২ ঘর, রাউন্ড হয়েছে)
console.log(res3); // Output: "9.6560" (দশমিকের পর ৪ ঘর পূরণ করতে শেষে ০ যুক্ত হয়েছে)
console.log(res4); // Output: "9.656000" (দশমিকের পর ৬ ঘর পূরণ করতে তিনটি ০ যুক্ত হয়েছে)

// Type check
console.log(typeof res2); // Output: "string"

মুল বিষয়: toFixed() সর্বদা মানটি স্ট্রিং বানিয়ে দেয় এবং প্রয়োজন অনুযায়ী রাউন্ডিং (Rounding) বা শূন্য (0) যোগ করে দশমিকের পরের ঘরগুলো পূরণ করে।





toPrecision() মেথড মূলত একটি সংখ্যার মোট ঘরসংখ্যা (Significant Digits/Total Digits) নির্দিষ্ট করে সংখ্যাটিকে স্ট্রিং (String) হিসেবে রিটার্ন করে।


let num = 20.58528;
console.log(num.toPrecision(3))
console.log(typeof (num));


let x = 9.656;

let res1 = x.toPrecision();
let res2 = x.toPrecision(2);
let res3 = x.toPrecision(4);
let res4 = x.toPrecision(6);

console.log(res1); // Output: "9.656"    (প্যারামিটার না দিলে মূল সংখ্যাটিই স্ট্রিং হয়ে থাকে)
console.log(res2); // Output: "9.7"      (মোট ২ ঘর রেখে রাউন্ড করেছে)
console.log(res3); // Output: "9.656"    (মোট ৪ ঘর পূরণ থাকায় হুবহু ৯.৬৫৬ এসেছে)
console.log(res4); // Output: "9.65600"  (মোট ৬ ঘর পূরণ করতে শেষে দুটি ০ যুক্ত হয়েছে)

// Type check
console.log(typeof res2); // Output: "string"


toFixed() ও toPrecision() এর পার্থক্য:

toFixed(n) ডেসিমালের (দশমিকের) পরের ঘর গণনা করে।

toPrecision(n) দশমিকের আগে ও পরে মিলিয়ে মোট ঘর গণনা করে।






জাভাস্ক্রিপ্টে toString() মেথডের মূল কাজ হলো কোনো ডেটা టైপকে (Number, Boolean, Array, Object) স্ট্রিং (Text)-এ রূপান্তর করা।

দৈনন্দিন কোডিং থেকে শুরু করে বড় প্রজেক্টের লজিক তৈরিতে toString() মেথডের কিছু বিশেষ ও প্রয়োজনীয় ব্যবহার নিচে দেওয়া হলো:

let num = 20;
num = num.toString();
console.log(num);
console.log(typeof (num));


যেকোনো সংখ্যা বা বুলিয়ান মানকে টেক্সট বা স্ট্রিং বানাতে এটি সবচেয়ে বেশি ব্যবহৃত হয়।

let age = 25;
let strAge = age.toString(); 

console.log(strAge);        // Output: "25"
console.log(typeof strAge); // Output: "string"

let isLoggedIn = true;
console.log(isLoggedIn.toString()); // Output: "true"

সংখ্যাকে অন্য Base-এ রূপান্তর (Advanced & Future Use)
toString()-এর একটি বিশেষ ক্ষমতা আছে—এর ভেতরে Radix / Base (2 থেকে 36) পাস করে সংখ্যাকে বাইনারি, অক্টাল বা হেক্সাডেসিমালে বদলে ফেলা যায়।

let num = 255;

// ১. বাইনারি (Binary - Base 2) তে রূপান্তর
console.log(num.toString(2));  // Output: "11111111"

// ২. হেক্সাডেসিমাল (Hexadecimal - Base 16) তে রূপান্তর (যেমন: Color Code)
console.log(num.toString(16)); // Output: "ff"

// ৩. অক্টাল (Octal - Base 8)
console.log(num.toString(8));  // Output: "377"


অ্যারে (Array) থেকে কমা-যুক্ত স্ট্রিং তৈরি
একটি অ্যারেকে সহজে কমা দিয়ে আলাদা করা টেক্সটে পরিণত করতে toString() ব্যবহার করা হয়।

let skills = ["JavaScript", "HTML", "CSS"];
let result = skills.toString();

console.log(result); // Output: "JavaScript,HTML,CSS"



গুরুত্বপূর্ণ সতর্কতা: Null এবং Undefined
toString() ব্যবহার করার সময় সরাসরি null বা undefined-এর ওপর মেথডটি কল করলে TypeError দেখায়।


let user = null;
// user.toString(); // ❌ Uncaught TypeError

// সমাধান: নিরাপদ থাকতে গ্লোবাল String() ব্যবহার করতে পারেন
console.log(String(user)); // Output: "null" (এরর দেবে না)


প্রফেশনাল টিপ: Literal Number-এর ক্ষেত্রে ব্যবহার
কোনো সংখ্যা সরাসরি ভ্যারিয়েবলে না রেখে যদি নম্বর লিটারেল দিয়ে ব্যবহার করতে চান, তবে দুটি ডট (..) বা ব্র্যাকেট ব্যবহার করতে হয়,
কারণ একক ডটকে জাভাস্ক্রিপ্ট দশমিক (Decimal Point) ভেবে নেয়:

// console.log(25.toString());   // ❌ SyntaxError
console.log((25).toString());    // Output: "25" (সঠিক)
console.log(25..toString());     // Output: "25" (সঠিক)





জাভাস্ক্রিপ্টে parseInt() এবং parseFloat() হলো স্ট্রিংকে (string) সংখ্যায় রূপান্তর করার ফাংশন parseInt() স্ট্রিং থেকে পূর্ণসংখ্যা (integer) তৈরি করে
আর parseFloat() দশমিক সংখ্যাসহ (floating-point) মান তৈরি করে [৫]। যেমন, parseInt("10.5") দিলে ১০ হয়, কিন্তু parseFloat("10.5") দিলে ১০.৫ হয় 


parseInt() হলো জাভাস্ক্রিপ্টের একটি অন্যতম বহুল ব্যবহৃত গ্লোবাল ফাংশন। এর মূল কাজ হলো—কোনো স্ট্রিং (Text) 
থেকে পূর্ণসংখ্যা (Integer) খুঁজে বের করে তা Number টাইপে রূপান্তর (Parse) করা।

এটি কীভাবে কাজ করে?
স্ট্রিংয়ের শুরু থেকে পড়া শুরু করে এবং প্রথম থেকে যতগুলো ডিজিটাল সংখ্যা পায়, সেগুলোকে পূর্ণসংখ্যা হিসেবে কেটে নেয়।

যদি স্ট্রিংয়ের শুরুতেই কোনো বর্ণ বা অকার্যকর চরিত্র থাকে, তবে এটি NaN (Not-a-Number) রিটার্ন করে।

এটি দশমিকের পরের অংশ বাদ দিয়ে দেয় (কোনো রাউন্ডিং করে না, শুধু কেটে ফেলে)।

parseInt(string, radix)

string: যে টেক্সটটিকে পূর্ণসংখ্যায় রূপান্তর করতে চান।

radix (প্রস্তাবিত/ঐচ্ছিক): সংখ্যাটি কোন বেসের (যেমন: Base 10 বা ডেসিমাল, Base 2 বা বাইনারি)। আধুনিক জাভাস্ক্রিপ্টে ১০ ভিত্তিক হিসাবের জন্য 10 লিখে দেওয়া সবচেয়ে ভালো অভ্যাস (Best Practice)।

console.log(parseInt("100"));       // Output: 100
console.log(parseInt("45.89"));     // Output: 45 (দশমিক বাদ দিয়ে দেয়)
console.log(parseInt("200px"));     // Output: 200 (শুরুর সংখ্যাটুকু বের করে নেয়)
console.log(parseInt("  50  "));    // Output: 50 (আশেপাশের স্পেস ইগনোর করে)

// শুরুতে সংখ্যা না থাকলে
console.log(parseInt("abc100"));    // Output: NaN

let num = "20";
num = parseInt(num);
console.log(num);
console.log(typeof (num));

CSS থেকে মান নিয়ে জাভাস্ক্রিপ্টে হিসাব-নিকাশ করা
ওয়েব ডেভেলপমেন্টে CSS DOM-এর কোনো এলিমেন্টের উইডথ বা হাইট থেকে "300px" বা "15em"-এর মতো স্ট্রিং ভ্যালু পাওয়া যায়।
এগুলোকে সংখ্যায় রূপান্তর করে যোগ-বিয়োগ করতে parseInt() ব্যবহৃত হয়:


function calculateNewWidth(currentWidthString, addPixels) {
  // "300px" থেকে শুধু 300 সংখ্যাটি কেটে নেওয়া হচ্ছে
  let currentWidth = parseInt(currentWidthString, 10);

  if (Number.isNaN(currentWidth)) {
    return "Invalid width format!";
  }

  let newWidth = currentWidth + addPixels;
  return newWidth + "px";
}

// ১. সঠিক ইনপুট
console.log(calculateNewWidth("300px", 50)); 
// Output: "350px"

// ২. ভুল স্ট্রিং দিলে
console.log(calculateNewWidth("auto", 50)); 
// Output: "Invalid width format!"


HTML Form Input (যেমন: বয়স বা সাল) সংখ্যায় রূপান্তর করা
ইউজার যখন HTML ফর্মের ইনপুট ফিল্ডে কিছু টাইপ করে, জাভাস্ক্রিপ্ট তা সর্বদা স্ট্রিং হিসেবে গ্রহণ করে। যেমন: "1998"। জন্মসাল থেকে বয়স বের করতে এটিকে নম্বরে রূপান্তর করা জরুরি:


function calculateAge(birthYearInput) {
  // ইনপুট স্ট্রিংকে ইন্টারজারে পার্স করা হচ্ছে
  let birthYear = parseInt(birthYearInput, 10);
  let currentYear = 2026;

  // ইনপুট ভ্যালিডেশন
  if (Number.isNaN(birthYear) || birthYear > currentYear) {
    return "Please enter a valid birth year.";
  }

  let age = currentYear - birthYear;
  return "Your age is: " + age + " years.";
}

console.log(calculateAge("2001")); 
// Output: "Your age is: 25 years."



parseFloat() হলো জাভাস্ক্রিপ্টের একটি গ্লোবাল ফাংশন। এর কাজ হলো—কোনো স্ট্রিং (Text) থেকে দশমিকসহ সংখ্যা (Floating-point number) খুঁজে বের করে তা Number টাইপে রূপান্তর করা।

কীভাবে কাজ করে?
এটি স্ট্রিংয়ের শুরু থেকে পড়া শুরু করে এবং প্রথম দশমিক সংখ্যা বা ভগ্নাংশটুকু কেটে নেয়।

এটি স্ট্রিংয়ের ভেতর প্রথম দশমিক বিন্দুটি (.) গ্রহণ করে, কিন্তু দ্বিতীয় কোনো দশমিক পেলে বা অন্য কোনো টেক্সট পেলে পড়া বন্ধ করে দেয়।

যদি স্ট্রিংয়ের শুরুতেই কোনো অক্ষর বা অকার্যকর চিহ্ন থাকে, তবে এটি NaN রিটার্ন করে।

let num = "20.5";
num = parseFloat(num);
console.log(num);
console.log(typeof (num));


console.log(parseFloat("10.50"));     // Output: 10.5
console.log(parseFloat("45.89px"));   // Output: 45.89 (সংখ্যার পরের টেক্সট বাদ দেয়)
console.log(parseFloat("3.14.15"));   // Output: 3.14 (দ্বিতীয় ডটের পর থেকে বাদ দেয়)
console.log(parseFloat("  99.9  "));  // Output: 99.9 (স্পেস ইগনোর করে)

// শুরুতে সংখ্যা না থাকলে
console.log(parseFloat("price 10.5"));// Output: NaN

ইকমার্স সাইটের কার্ট বা ট্যাক্স হিসাব (Currency & Decimal Values)
ওয়েবসাইটে প্রোডাক্টের দাম বা ট্যাক্স প্রায়ই "12.99 BDT" বা "5.5%" হিসেবে টেক্সট আকারে থাকে। দশমিক অক্ষুণ্ণ রেখে এগুলো যোগ-বিয়োগ করতে parseFloat() ব্যবহার করা হয়:

function calculateTotalWithTax(priceString, taxRateString) {
  // স্ট্রিং থেকে দশমিক সংখ্যা বের করা হচ্ছে
  let price = parseFloat(priceString);
  let taxRate = parseFloat(taxRateString);

  if (Number.isNaN(price) || Number.isNaN(taxRate)) {
    return "Invalid price or tax rate!";
  }

  let taxAmount = price * (taxRate / 100);
  let totalPrice = price + taxAmount;

  return "Total: " + totalPrice.toFixed(2) + " BDT";
}

// ১. সঠিক ইনপুট
console.log(calculateTotalWithTax("99.99 BDT", "7.5%")); 
// Output: "Total: 107.49 BDT"

// ২. ভুল ইনপুট
console.log(calculateTotalWithTax("Free", "5%")); 
// Output: "Invalid price or tax rate!"


জিওলোকেশন (GPS Latitude & Longitude) ফিল্টার করা
ম্যাপে ইউজার থেকে পাওয়া অক্ষাংশ (Latitude) এবং দ্রাঘিমাংশ (Longitude) সর্বদা দশমিক সংখ্যা হয় 
এবং অনেক সময় এগুলো স্ট্রিং আকারে পাঠায় (যেমন: "25.7439")। এগুলোকে নিখুঁত সংখ্যায় রূপান্তর করতে এটি লাগে:

function processCoordinates(latInput, lngInput) {
  let lat = parseFloat(latInput);
  let lng = parseFloat(lngInput);

  // কোঅর্ডিনেট সঠিক দশমিক সংখ্যা কি না তা যাচাই
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return "Invalid map coordinates!";
  }

  return "Location set to: " + lat + ", " + lng;
}

console.log(processCoordinates("25.7439 N", "89.2752 E")); 
// Output: "Location set to: 25.7439, 89.2752"




// number method 
console.log(Number("12"));

console.log(Number("12.5"));

console.log(Number(true));
console.log(Number(false));




The Number.isFinite() Method


Number.isFinite() মেথডের মূল কাজ হলো—কোনো মান প্রকৃত সীমাবদ্ধ সংখ্যা (Finite Number) কি না তা পরীক্ষা করা।

এটি ইনপুট যাচাই করে কেবল true অথবা false রিটার্ন করে।

এটি কীভাবে কাজ করে?
মেথডটি মূলত দুটি শর্ত পরীক্ষা করে:
১. মানটি আসলেই Number টাইপ কি না।

২. মানটি NaN, Infinity, বা -Infinity কি না।

মানটি কি সরাসরি নম্বর (Number) টাইপ? (নম্বর না হয়ে টেক্সট বা অন্য কিছু হলে সরাসরি রিজেক্ট করে দেবে)।

সংখ্যাটি কি অসীম (Infinity) বা অকার্যকর (NaN)? (এগুলো হলেও রিজেক্ট করবে)।

এই দুটি শর্ত পার হলেই কেবল সে true বলবে, না হলে false।

যদি মানটি Number টাইপের হয় এবং এটি সসীম (Finite) সংখ্যা হয়, তবেই এটি true দেয়। কোনো প্রকার টাইপ কনভার্সন (Type Coercion) করে না।


let res1 = Number.isFinite(100);       // true (সাধারণ সংখ্যা)
let res2 = Number.isFinite(0);         // true
let res3 = Number.isFinite(2.5);       // true (দশমিক সংখ্যা)

let res4 = Number.isFinite(Infinity);  // false (অসীম)
let res5 = Number.isFinite(-Infinity); // false
let res6 = Number.isFinite(NaN);       // false (Not a Number)

// Type Coercion করে না
let res7 = Number.isFinite("100");     // false (কারণ এটি String, Number নয়)
let res8 = Number.isFinite(true);      // false (কারণ এটি Boolean)



গ্লোবাল isFinite() আর Number.isFinite() এর পার্থক্য
এই দুটি নিয়ে অনেকে প্যাঁচ লাগিয়ে ফেলে, তাই পার্থক্যটি ভালোভাবে জেনে রাখা দরকার:

গ্লোবাল isFinite("50"): এটি একটু দয়ালু। সে দেখে সামনে "50" টেক্সট আছে, সে একে জোর করে নম্বর 50 বানিয়ে নিয়ে true বানিয়ে দেয়।

Number.isFinite("50"): এটি খুব কড়া। সে দেখে এটি নম্বর নয় বরং স্ট্রিং/টেক্সট, তাই সে একে কোনো সুযোগ না দিয়ে সরাসরি false বলে দেয়।


// Global isFinite() - স্ট্রিংকে নম্বরে কনভার্ট করার চেষ্টা করে
console.log(isFinite("100"));        // true (কারণ "100" কে সংখ্যা 100 এ বদলে নেয়)

// Number.isFinite() - কঠোরভাবে টাইপ চেক করে (Strict Check)
console.log(Number.isFinite("100")); // false (কোনো কনভার্সন করে না)




function calculateTotal(price, quantity) {
  let total = price * quantity;

  // দাম এবং মোট হিসাব দুটোই ভ্যালিড কি না চেক করা হচ্ছে
  if (Number.isFinite(price) && Number.isFinite(total)) {
    return "Total Price: " + total + " BDT";
  } else {
    return "Invalid input! Please enter a valid number.";
  }
}

// ১. সঠিক ইনপুট (Valid Numbers)
console.log(calculateTotal(500, 3)); 
// Output: "Total Price: 1500 BDT"

// ২. স্ট্রিং ইনপুট দেওয়া হলে (String Input)
console.log(calculateTotal("500", 3)); 
// Output: "Invalid input! Please enter a valid number."

// ৩. অসীম ইনপুট দেওয়া হলে (Infinity Input)
console.log(calculateTotal(Infinity, 2)); 
// Output: "Invalid input! Please enter a valid number."




১. গড় বা রেটিং হিসাব করা (Division by Zero ঠেকানো)

অনেক সময় ওয়েবসাইটের রেটিং বের করতে গিয়ে শূন্য (0) দিয়ে ভাগ করার ঘটনা ঘটে, 
  যার ফলে জাভাস্ক্রিপ্ট Infinity আউটপুট দেয়। এটি ঠেকাতে Number.isFinite() দারুণ কাজ করে।


function calculateAverage(totalStars, totalReviews) {
  let average = totalStars / totalReviews;

  // totalReviews যদি 0 হয়, তবে average হবে Infinity। তাই এখানে চেক করা হচ্ছে:
  if (Number.isFinite(average)) {
    return "Average Rating: " + average.toFixed(1);
  } else {
    return "No reviews yet or invalid data.";
  }
}

// ১. সাধারণ হিসাব
console.log(calculateAverage(45, 10)); 
// Output: "Average Rating: 4.5"

// ২. শূন্য দিয়ে ভাগ হলে (Infinity)
console.log(calculateAverage(0, 0)); 
// Output: "No reviews yet or invalid data."





২. ব্যাংকিং বা পেমেন্ট সিস্টেমে টাকার পরিমাণ যাচাই করা

ইউজার যখন টাকা উইথড্র (Withdraw) বা পেমেন্ট করতে যায়, তখন হ্যাকাররা বা ভুলবশত ইউজাররা টেক্সট (String) বা ফাঁকা ডেটা পাঠাতে পারে। 
টাকা কাটার আগে ইনপুটটি একদম নিখুঁত সংখ্যা কি না, তা যাচাই করতে এটি ব্যবহার করা যায়।


function processWithdrawal(balance, withdrawAmount) {
  // ইউজার সঠিক সংখ্যার অ্যামাউন্ট দিয়েছে কি না তা চেক করা হচ্ছে
  if (!Number.isFinite(withdrawAmount)) {
    return "Transaction failed! Please enter a valid amount.";
  }

  if (withdrawAmount > balance) {
    return "Insufficient balance!";
  }

  let newBalance = balance - withdrawAmount;
  return "Withdrawal successful. New Balance: " + newBalance + " BDT";
}

// ১. সঠিক ইনপুট
console.log(processWithdrawal(5000, 1000)); 
// Output: "Withdrawal successful. New Balance: 4000 BDT"

// ২. স্ট্রিং ইনপুট দেওয়া হলে
console.log(processWithdrawal(5000, "1000")); 
// Output: "Transaction failed! Please enter a valid amount."

// ৩. ভুল ডেটা বা ফাঁকা থাকলে (যেমন null বা undefined পাঠালে)
console.log(processWithdrawal(5000, undefined)); 
// Output: "Transaction failed! Please enter a valid amount."





The Number.isInteger() Method

Number.isInteger() হলো জাভাস্ক্রিপ্টের একটি বিল্ট-ইন মেথড, যা দিয়ে পরীক্ষা করা হয় কোনো মান পূর্ণসংখ্যা (Integer) কি না।

এটি ইনপুট যাচাই করে কেবল true অথবা false রিটার্ন করে।

এটি কীভাবে কাজ করে?
মেথডটি মূলত ২টি জিনিস নিশ্চিত করে:
১. ইনপুটটি সরাসরি Number টাইপ কি না (স্ট্রিং হলে কোনো কনভার্সন করে না, সরাসরি false দেয়)।
২. সংখ্যাটিতে কোনো দশমিক অংশ (Decimal/Fraction) নেই এবং এটি অসীম (Infinity) বা অকার্যকর (NaN) নয়।


// Integer হলে -> true
console.log(Number.isInteger(10));      // true
console.log(Number.isInteger(-5));      // true
console.log(Number.isInteger(0));       // true
console.log(Number.isInteger(10.0));    // true (কারণ ১০.০ আর ১০ একই কথা)

// Integer না হলে -> false
console.log(Number.isInteger(10.5));    // false (দশমিক সংখ্যা)
console.log(Number.isInteger("10"));    // false (কারণ এটি String, Number নয়)
console.log(Number.isInteger(NaN));     // false
console.log(Number.isInteger(Infinity));// false


ইকমার্স সাইটে কোয়ান্টিটি (Quantity) ভ্যালিডেশন
অনলাইন শপিং সাইটে ইউজার প্রোডাক্টের সংখ্যা (Quantity) কখনোই দশমিক (যেমন: ১.৫ টি শার্ট) বা টেক্সট দিতে পারবে না। এটি হ্যান্ডেল করার কোড:


function addToCart(productId, quantity) {
  // কোয়ান্টিটি অবশ্যই পূর্ণসংখ্যা এবং অন্তত ১ হতে হবে
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return "Invalid quantity! Please enter a whole number.";
  }

  return "Added " + quantity + " item(s) to cart.";
}

// ১. সঠিক ইনপুট
console.log(addToCart(101, 3)); 
// Output: "Added 3 item(s) to cart."

// ২. দশমিক দিলে (ভুল)
console.log(addToCart(101, 2.5)); 
// Output: "Invalid quantity! Please enter a whole number."

// ৩. স্ট্রিং ইনপুট দিলে (ভুল)
console.log(addToCart(101, "4")); 
// Output: "Invalid quantity! Please enter a whole number."



পেজিনেশন (Pagination) পেজ নম্বর চেক করা
ব্লগ বা ইকমার্স ওয়েবসাইটের নিচে ১, ২, ৩ নম্বর পেজ থাকে। URL থেকে যদি কেউ ভুলবশত বা অনিচ্ছাকৃতভাবে page=2.5 পাঠায়, তবে তা ফিল্টার করার কোড:


function loadPageData(pageNumber) {
  // পেজ নম্বর পূর্ণসংখ্যা কি না তা চেক করা হচ্ছে
  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    return "Page not found! Redirecting to home...";
  }

  return "Fetching data for Page " + pageNumber + "...";
}

// ১. ভ্যালিড পেজ
console.log(loadPageData(2)); 
// Output: "Fetching data for Page 2..."

// ২. ইনভ্যালিড পেজ
console.log(loadPageData(1.8)); 
// Output: "Page not found! Redirecting to home..."



ছাত্র-ছাত্রীদের জন্য গ্রেড পয়েন্ট বা মার্কস এন্ট্রি সিস্টেম
শিক্ষকদের নম্বর এন্ট্রি প্যানেলে কিছু ক্ষেত্রে পূর্ণসংখ্যা ছাড়া দশমিক বা ইনভ্যালিড ডেটা সাবমিট করা আটকানো প্রয়োজন হয় (যেমন: উপস্থিতি নম্বর বা মোট ক্লাস সংখ্যা নির্ধারণের সময়):


function submitClassAttendance(studentName, totalDaysAttended) {
  // উপস্থিতির দিনসংখ্যা অবশ্যই একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে
  if (!Number.isInteger(totalDaysAttended) || totalDaysAttended < 0) {
    return "Error: Attendance days must be a valid whole number!";
  }

  return "Attendance updated for " + studentName + ": " + totalDaysAttended + " days.";
}

// ১. সঠিক ইনপুট
console.log(submitClassAttendance("Mohammad", 22)); 
// Output: "Attendance updated for Mohammad: 22 days."

// ২. ভুল ইনপুট (দশমিক দিলে)
console.log(submitClassAttendance("Mohammad", 22.5)); 
// Output: "Error: Attendance days must be a valid whole number!"


লুপ (Loop) বা অ্যারে ইনডেক্স নিরাপদ রাখা
জাভাস্ক্রিপ্টে অ্যারের ইনডেক্স সর্বদা 0, 1, 2 এর মতো পূর্ণসংখ্যা হয়। ভুলে কোনো ফ্লোটিং সংখ্যা (2.4) 
দিয়ে ইনডেক্স বা লুপিংয়ের চেষ্টা করলে প্রোগ্রাম ক্র্যাশ বা undefined রিটার্ন করা আটকানোর জন্য এটি ব্যবহার করা হয়:

function getStudentByIndex(studentsArray, index) {
  // ইনডেক্সটি পূর্ণসংখ্যা এবং অ্যারের সীমার মধ্যে কি না চেক করা হচ্ছে
  if (!Number.isInteger(index) || index < 0 || index >= studentsArray.length) {
    return "Invalid Index! Cannot fetch data.";
  }

  return "Student: " + studentsArray[index];
}

let students = ["Sakib", "Tamim", "Rahim"];

// ১. সঠিক ইনডেক্স
console.log(getStudentByIndex(students, 1)); 
// Output: "Student: Tamim"

// ২. ভুল ইনডেক্স (দশমিক দিলে)
console.log(getStudentByIndex(students, 1.5)); 
// Output: "Invalid Index! Cannot fetch data."

কোয়ান্টিটি (প্রোডাক্ট সংখ্যা)

পেজ নম্বর (Pagination)

দিন/উপস্থিতি/বয়সের সংখ্যা

অ্যারের ইনডেক্স বা পজিশন

এই ৪টি ক্ষেত্রে ভ্যালিডেশন বসানোর সময় চোখ বন্ধ করে Number.isInteger()





Number.isNaN() 

Number.isNaN() হলো জাভাস্ক্রিপ্টের একটি মেথড, যা দিয়ে পরীক্ষা করা হয় কোনো মান আসল NaN (Not-a-Number) কি না।

এটি কেবল true অথবা false রিটার্ন করে।

এটি কীভাবে কাজ করে?
জাভাস্ক্রিপ্টে NaN হলো একটি বিশেষ অকার্যকর সংখ্যা (Invalid Number)। Number.isNaN(val) মূলত ২টি কঠোর শর্ত চেক করে:
১. ইনপুটটির টাইপ Number কি না।
২. মানটি আসলেই NaN কি না।

যদি মানটি সরাসরি NaN হয়, কেবল তখনই এটি true দেবে। অন্য কোনো ডেটা টাইপ (যেমন: String, Undefined, Object) হলেও এটি false দেবে—কোনো প্রকার টাইপ পরিবর্তন (Type Conversion) করবে না।


// সরাসরি NaN হলে -> true
console.log(Number.isNaN(NaN));             // true
console.log(Number.isNaN(0 / 0));           // true (কারণ ০/০ এর ফলাফল NaN)
console.log(Number.isNaN(Number("hello")));// true (অকার্যকর কাস্টিং)

// NaN না হলে -> false
console.log(Number.isNaN(100));             // false
console.log(Number.isNaN("NaN"));           // false (কারণ এটি একটি String)
console.log(Number.isNaN(undefined));       // false (কারণ এটি Undefined)


গ্লোবাল isNaN() বনাম Number.isNaN()
দুটির পার্থক্য জানা অত্যন্ত জরুরি:

গ্লোবাল isNaN("Hello"): এটি ইনপুটকে প্রথমে জোর করে সংখ্যায় বানানোর চেষ্টা করে। "Hello" কে নম্বর বানাতে না পেরে সেটিকে NaN ধরে নেয় এবং true দেয়।

Number.isNaN("Hello"): এটি টাইপ কনভার্সন করে না। যেহেতু "Hello" একটি স্ট্রিং, তাই এটি সরাসরি false দেয়।

ভবিষ্যতে কাজে লাগার মতো ২টি বাস্তব উদাহরণ
১. ইনপুট থেকে গাণিতিক হিসাব এবং ভুল ইনপুট হ্যান্ডেল করা
ইউজার কোনো ইনপুট ফিল্ড থেকে সংখ্যা পাঠালে তা দিয়ে হিসাব করার পর ফলাফলটি অকার্যকর (NaN) হয়ে গেছে কি না, তা পরীক্ষা করার জন্য:


function calculateSquareRoot(number) {
  let result = Math.sqrt(number); // ঋণাত্মক সংখ্যার বর্গমূল নিলে NaN আসে

  // হিসাবের পর মানটি NaN কি না চেক করা হচ্ছে
  if (Number.isNaN(result)) {
    return "Error: Cannot calculate square root of a negative number!";
  }

  return "Square root is: " + result;
}

// ১. সঠিক ইনপুট
console.log(calculateSquareRoot(16)); 
// Output: "Square root is: 4"

// ২. ঋণাত্মক সংখ্যা দিলে (ফলাফল NaN আসবে)
console.log(calculateSquareRoot(-9)); 
// Output: "Error: Cannot calculate square root of a negative number!"


ডেটাবেজ বা API থেকে পাওয়া ফিল্ড ভ্যালিডেশন
কখনো কখনো টাইপ কাস্টিং করার পর (Number(val)) মানটি অকার্যকর হয়ে গেলে তা সহজে ধরার জন্য:

function processPrice(inputPrice) {
  let parsedPrice = Number(inputPrice);

  // ইনপুটটি সংখ্যায় রূপান্তর করতে ব্যর্থ হলে parsedPrice হবে NaN
  if (Number.isNaN(parsedPrice)) {
    return "Invalid price format! Transaction failed.";
  }

  return "Final Price: " + parsedPrice + " BDT";
}

// ১. সঠিক স্ট্রিং ইনপুট
console.log(processPrice("500")); 
// Output: "Final Price: 500 BDT"

// ২. ভুল স্ট্রিং ইনপুট (যা নম্বর বানানো যায় না)
console.log(processPrice("abc")); 
// Output: "Invalid price format! Transaction failed."



শপিং কার্টে ফর্ম ইনপুট থেকে ডিসকাউন্ট ক্যালকুলেশন
ইউজার যখন ওয়েবসাইট থেকে কোনো ডিসকাউন্ট কোড বা পার্সেন্টেজ ফর্মে টাইপ করে, 
তখন টেক্সটবক্স থেকে আসা ইনপুট স্ট্রিং হিসেবে থাকে। সেটিকে ম্যাথমেটিক্যাল ক্যালকুলেশন করার আগে ও পরে চেক করার নিরাপদ উপায়:

function applyDiscount(price, discountInput) {
  // টেক্সট ইনপুটকে নম্বর বানানোর চেষ্টা করা হচ্ছে
  let discountPercent = Number(discountInput);

  // ইনপুট টেক্সট ভুল হলে (যেমন: "10%" বা "ten" দিলে) Number() মেথডটি NaN বানায়
  if (Number.isNaN(discountPercent)) {
    return "Error: Invalid discount percentage entered!";
  }

  let finalPrice = price - (price * (discountPercent / 100));
  return "Discounted Price: " + finalPrice + " BDT";
}

// ১. সঠিক ইনপুট
console.log(applyDiscount(1000, "15")); 
// Output: "Discounted Price: 850 BDT"

// ২. ভুল ইনপুট ("15%" চিহ্নসহ দিলে Number() রূপান্তর ব্যর্থ হয়ে NaN হয়)
console.log(applyDiscount(1000, "15%")); 
// Output: "Error: Invalid discount percentage entered!"



এপিআই (API) বা ডেটাবেজ থেকে আসা ইনকমপ্লিট ডেটা ক্লিনিং
অনলাইন ব্যাকএন্ড বা এপিআই থেকে ডেটা আসার সময় অনেক সময় কোনো ফিল্ডের মান 
গাণিতিক অপারেশনের কারণে NaN হয়ে আসতে পারে। ওই ডেটা দিয়ে সামনের কাজ বা চার্ট (Chart) দেখানোর আগে ফিল্টার করার লজিক:

function filterValidScores(scores) {
  // অকার্যকর (NaN) মানগুলো বাদ দিয়ে শুধু ভ্যালিড স্কোর ফিল্টার করা হচ্ছে
  let validScores = scores.filter(score => !Number.isNaN(score));
  
  return validScores;
}

// এপিআই থেকে পাওয়া বিভিন্ন ধরনের স্কোরের অ্যারে (যেখানে কিছু NaN ঢুকে পড়েছে)
let apiData = [85, 90, 0 / 0, 78, Number("abc"), 95];

console.log(filterValidScores(apiData)); 
// Output: [85, 90, 78, 95] (NaN এর ভ্যালুগুলো বাদ পড়ে গেছে)

১. Number("text") দিয়ে কাস্টিং করলে তা NaN হয়ে যায়।

২. 0 / 0 বা কোনো টেক্সটের সাথে অংক কষলে (যেমন: "hello" * 5) ফলাফল NaN আসে।

৩. এসব ক্ষেত্রে ভ্যালু নষ্ট হলো কি না তা নিশ্চিত করতে Number.isNaN() চেক বসানো হয়।





BigInt হলো জাভাস্ক্রিপ্টের (ES2020 তে আসা) একটি প্রিমিয়ার বা বিশেষ Primitive Data Type।
এর মূল কাজ হলো—সাধারণ Number টাইপের সীমার বাইরের অত্যন্ত বিশাল পূর্ণসংখ্যা (Large Integer) নিয়ে নির্ভুলভাবে হিসাব-নিকাশ করা।কেন BigInt প্রয়োজন? 
(সমস্যা ও সমাধান)জাভাস্ক্রিপ্টের সাধারণ Number টাইপ সর্বাধিক $2^{53} - 1$ বা 9007199254740991 (যা Number.MAX_SAFE_INTEGER) পর্যন্ত পূর্ণসংখ্যার হিসাব নির্ভুলভাবে করতে পারে।


// সাধারণ Number এর সীমাবদ্ধতা:
let max = Number.MAX_SAFE_INTEGER; // 9007199254740991

console.log(max + 1); // Output: 9007199254740992 (সঠিক)
console.log(max + 2); // Output: 9007199254740992 (ভুল! ১ বাড়ার কথা ছিল)

BigInt তৈরি করার ২টি নিয়ম
১. কোনো পূর্ণসংখ্যার শেষে n বসিয়ে:

let bigNum1 = 9007199254740991n;

২. BigInt() ফাংশন ব্যবহার করে:

let bigNum2 = BigInt("9007199254740991");




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
