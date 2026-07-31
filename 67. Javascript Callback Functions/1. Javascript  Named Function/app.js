💡 Named Function Callback কী?
  
সহজ বাংলায়:
  
১. আগে সুন্দর করে একটা নাম দিয়ে একটা ফাংশন বানিয়ে রাখা হবে।

২. তারপর মূল ফাংশন ডাকার সময় সেই নামটা তার ব্র্যাকেটের ভেতর পার্সেল হিসেবে পাঠিয়ে দেওয়া।

"যখন একই কাজ বা ফাংশন ফাইলের ৪-৫ জায়গায় বারবার ব্যবহার করতে হবে।"

প্যারামিটারের পজিশন অনুযায়ী ১ম পদে নাম, ২য় পদে বয়স এবং ৩য় পদে ফাংশন পাঠাতে হবে:

function getMyName(myName) {
    console.log(myName);
}

let details = function(name, age, cb) {
    name = "Abdullah";
    age = 30;
    let result = `${name} ${age}`;
    cb(result);
};

// ৩ নম্বর পজিশনে getMyName পাঠাতে হবে
details("", 0, getMyName);



যেহেতু details-এর ভেতরেই name = "Abdullah" এবং age = 30 সেট করা হয়েছে, তাই details-এর প্যারামিটার থেকে name আর age বাদ দিয়ে শুধু cb রাখা যাবে:

function getMyName(myName) {
    console.log(myName);
}

// শুধুমাত্র cb প্যারামিটার রাখা হলো
let details = function(cb) {
    let name = "Abdullah";
    let age = 30;
    let result = `${name} ${age}`;
    cb(result);
};

// এবার ১টি পাঠালেই কাজ করবে!
details(getMyName);



💡 সবচেয়ে সহজ পদ্ধতি (কলব্যাককে ৩ বার আলাদাভাবে ডেকে):


function getMyName(myResult) {
  console.log(myResult);
}

let details = function(cb) {
  let name = "Abdullah Aziz";
  let age = 30;
  let height = 5.2;
  cb("My name is: " + name);
  cb("My age is: " + age);
  cb("My height is: " + height);
};

details(getMyName);



🔍 বিকল্প পদ্ধতি (অ্যারে ব্যবহার করে লুপ চালিয়ে):


যদি details ফাংশনের ভেতরে ম্যানুয়ালি ৩ বার cb() না লিখতে না চাওয়া হয়, তবে একটা অ্যারে বানিয়ে forEach লুপ দিয়েও কাজটা করা যাবে:


function printInfo(myResult) {
  console.log(myResult); // শুধু মান প্রিন্ট করবে
}

let details = function(cb) {
  let name = "Name: Abdullah Aziz";
  let age = "Age: 30";
  let height = "Height: 5.2";

  let infoArray = [name, age, height];

  infoArray.forEach(item => cb(item));
};

details(printInfo);



অবজেক্ট (Object) ব্যবহার করে (সবচেয়ে স্মার্ট ও স্ট্যান্ডার্ড পদ্ধতি)


// ১. কলব্যাক ফাংশন (যে অবজেক্ট ডাটা গ্রহণ করে লেবেলসহ প্রিন্ট করে)
function displayInfo(data) {
  console.log(`Name: ${data.name}`);
  console.log(`Age: ${data.age}`);
  console.log(`Height: ${data.height}`);
}

// ২. মূল ফাংশন (যে অবজেক্ট তৈরি করে কলব্যাকে পাঠায়)
let details = function(cb) {
  let user = {
    name: "Abdullah Aziz",
    age: 30,
    height: 5.2
  };

  // পুরো অবজেক্টটিকে ১ বার কলব্যাকে পাস করা হলো
  cb(user);
};

// ৩. ফাংশন রান করা হলো
details(displayInfo);



কলব্যাক ফাংশনে ২টি প্যারামিটার পাঠিয়ে (Label & Value)
যদি  মূল ফাংশন ভেতর থেকে ৩ বার কলব্যাক ডাকবে এবং প্রতিবারে লেবেল ও ভ্যালু জোড়া হিসেবে পাঠাবে:

// ১. কলব্যাক ফাংশন ২টি জিনিস রিসিভ করবে: label এবং value
function displayWithLabel(label, value) {
  console.log(`${label}: ${value}`);
}

// ২. মূল ফাংশন
let details = function(cb) {
  let name = "Abdullah Aziz";
  let age = 30;
  let height = 5.2;

  // লেবেল সহ ৩ বার আলাদাভাবে পাস করা হলো
  cb("Name", name);
  cb("Age", age);
  cb("Height", height);
};

// ৩. রান করা হলো
details(displayWithLabel);


অ্যারে অবজেক্ট (Array of Objects) ব্যবহার করে লুপ চালিয়ে

যদি ভবিষ্যতে আরও অনেক বেশি তথ্য থাকে, তবে অ্যারের ভেতর অবজেক্ট হিসেবে রেখে লুপ চালানো যায়:

function printItem(item) {
  console.log(`${item.label}: ${item.value}`);
}

let details = function(cb) {
  let infoList = [
    { label: "Name", value: "Abdullah Aziz" },
    { label: "Age", value: 30 },
    { label: "Height", value: 5.2 }
  ];

  // forEach লুপের মাধ্যমে প্রতিটি আইটেমকে কলব্যাকে পাঠানো হচ্ছে
  infoList.forEach(info => cb(info));
};

details(printItem);




এখানে কোনো নাম ছাড়া কাজ নেই, কোনো পেঁচানো সিম্বল নেই—সবকিছু একদম স্পষ্ট নামওয়ালা!


function printDoubleValue (result) {
    console.log(`The Value is: ${result}`);
}

function calculateDouble(number, cb) {
    let double = number * 5;
    cb(double);
}

calculateDouble(10, printDoubleValue);

১. calculateDouble(10, printDoubleValue)—এখানে printDoubleValue-কে কী বলে?
  
এখানে printDoubleValue-কে বলা হয় Callback Function Reference (বা সহজ বাংলায়: ফাংশনের রেফারেন্স / শুধু নাম)।

রেফারেন্স মানে কী?

রেফারেন্স মানে হলো  ফাংশনটাকে এখনই চালুর বা রান করার নির্দেশ দিচ্ছেন না, বরং মূল ফাংশন calculateDouble-এর হাতে ওই ফাংশনটির ঠিকানা বা পরিচিতি পার্সেল হিসেবে তুলে দিচ্ছেন।

মূল ফাংশন (calculateDouble) তার নিজের ভেতরের হিসাব-নিকাশ (number * 5) শেষ করার পর, ওই ঠিকানা ব্যবহার করে ব্র্যাকেট () বসিয়ে (cb(double)) তাকে চালুর সুইচ চাপবে!

২. যদি ব্র্যাকেট দিয়ে printDoubleValue() দেওয়া হতো, তবে কী ঘটত?
  
যদি ব্র্যাকেট দিয়ে এভাবে লিখা হত:

calculateDouble(10, printDoubleValue()); // ❌ ভুল পদ্ধতি


বিপদ ১: ফাংশনটি আগেই সঙ্গে সঙ্গে রান হয়ে যেত!

যখনই ব্র্যাকেট () বসিয়ে দেওয়া হবে, জাভাস্ক্রিপ্ট ইঞ্জিন ১ সেকেন্ডও অপেক্ষা করবে না। সে calculateDouble ফাংশনে ঢোকার আগেই printDoubleValue()-কে সরাসরি রান করিয়ে দেবে!

বিপদ ২: মানটি আসবে undefined!

printDoubleValue() ব্র্যাকেটসহ রান হওয়ার সময় সে কিন্তু কোনো result পাবে না। ফলে কনসোলে সঙ্গে সঙ্গে প্রিন্ট হয়ে যাবে:
The Value is: undefined

আর যেহেতু printDoubleValue ফাংশন থেকে কোনো কিছু return করা হয়নি, তাই cb-এর মধ্যে জমা হবে undefined! এরপর calculateDouble-এর ভেতরে যখন cb(double) রান হতে যাবে, তখন জাভাস্ক্রিপ্ট একটা TypeError বানিয়ে কোড ক্র্যাশ করিয়ে দেবে!

function printValue(result) {
  console.log(`Value is: ${result}`);
}

let numberValue = function(number, cb) {
  cb(number * 5); // সরাসরি গুণফল পাস করা হলো
};

numberValue(5, printValue);




// 1. Named Callback Function (displays the message)
function showSuccessMessage(user) {
    console.log("Welcome " + user + "! Your account creation was successful.");
}

// 2. Main Function (handles the account creation process)
function createAccount(username, notifyUser) {
    console.log("Processing database for " + username + "...");
    
    // Once finished, execute the named function passed as a parameter
    notifyUser(username);
}

// 3. Passing the function name (showSuccessMessage) when calling createAccount
createAccount("Abdullah", showSuccessMessage);

Processing database for Abdullah...
Welcome Abdullah! Your account creation was successful.


  
Function Expression (ভ্যারিয়েবলে ফাংশন রেখে)
এখানে আলাদা ফাংশন হিসেবে না লিখে একটি ভ্যারিয়েবলের (const বা let) ভেতরে ফাংশনটি জমা রেখে পাস করা হয়:

// ১. ভ্যারিয়েবলে কলব্যাক ফাংশন রাখা
const showSuccessMessage = function(user) {
    console.log("Welcome " + user + "! Your account creation was successful.");
};

// ২. মূল ফাংশন
const createAccount = function(username, notifyUser) {
    console.log("Processing database for " + username + "...");
    notifyUser(username);
};

// ৩. পাস করা হলো
createAccount("Abdullah", showSuccessMessage);


function showSuccessMessage(user) {
    console.log(`Welcome ${user}! Your account creation was successful.`);
}

function createAccount(username, notifyUser) {
    console.log(`Processing database for ${username}...`);
    notifyUser(username);
}

createAccount("Abdullah", showSuccessMessage);





One-liner Arrow Function (এক লাইনে সংক্ষিপ্ত রূপ)
কলব্যাক ফাংশনের কাজ যদি মাত্র ১ লাইনের হয়, তবে ব্র্যাকেট {} ও console.log একদম এক লাইনে লিখে ফেলা যায়:

const createAccount = (username, notifyUser) => {
    console.log("Processing database for " + username + "...");
    notifyUser(username);
};

// এক লাইনে শর্টকাট অ্যারো কলব্যাক
createAccount("Abdullah", user => console.log(`Welcome ${user}! Your account creation was successful.`));



  
  
স্টুডেন্ট রেজাল্ট ও গ্রেড চেকার (Academic Grade Check)

// Step 1: Named callback function to show grade
function displayGrade(finalMark) {
    if (finalMark >= 80) {
        console.log("Grade: A+ (Passed)");
    } else {
        console.log("Grade: Passed");
    }
}

// Step 2: Main function to calculate total mark
function processExamResult(writtenMarks, vivaMarks, callback) {
    let total = writtenMarks + vivaMarks;
    
    // Calling the callback with calculated total
    callback(total);
}

// Step 3: Calling the main function
processExamResult(60, 25, displayGrade);

🔍 মান কীভাবে ঘুরছে (Data Flow Trace):
60 গেল writtenMarks-এ, 25 গেল vivaMarks-এ, আর displayGrade নামটা গেল callback-এ।
total = 60 + 25  মানে 80 হলো।

callback(total) মানে আসলে লাইনটি রান হচ্ছে: displayGrade(85)।

85 মানটি চলে গেল displayGrade-এর finalMark প্যারামিটারে।

আউটপুট প্রিন্ট হলো: Grade: A+ (Passed)।



কেনাকাটার ক্যাশব্যাক অফার (E-commerce Cashback)

// Step 1: Named callback function for 50 TK cashback
function addFiftyCashback(totalBill) {
    let savings = 50;
    console.log("Original Bill: " + totalBill + " TK");
    console.log("Cashback Applied! You saved " + savings + " TK.");
}

// Step 2: Main function to process payment
function processPayment(itemPrice, qty, cashbackFunction) {
    let amount = itemPrice * qty;
    
    // Triggering the cashback function
    cashbackFunction(amount);
}

// Step 3: Function call
processPayment(200, 3, addFiftyCashback);

🔍 মান কীভাবে ঘুরছে (Data Flow Trace):
200 * 3  amount হলো 600 টাকা।

cashbackFunction(600) এর মাধ্যমে addFiftyCashback(600) রান হলো।

600 মানটি addFiftyCashback-এর totalBill-এ গিয়ে বসল।

আউটপুট প্রিন্ট হলো bill এবং cashback-এর তথ্য।




ইউজার অ্যাটেনডেন্স সিস্টেম (Attendance Status)

// Step 1: Named callback function for Present status
function markPresent(studentName) {
    console.log("Status: " + studentName + " is Present today.");
}

// Step 2: Main function to verify student ID
function checkAttendance(studentId, name, callback) {
    console.log("Checking database for ID: " + studentId + "...");
    
    // Verification done, passing the name to callback
    callback(name);
}

// Step 3: Function call
checkAttendance(101, "Abdullah", markPresent);

 মান কীভাবে ঘুরছে (Data Flow Trace):
 101 studentId-তে গেল, "Abdullah" name-এ গেল
callback(name) লাইনটি ডাকার সাথে সাথে markPresent("Abdullah") রান হলো।

"Abdullah" নামটা markPresent ফাংশনের studentName প্যারামিটারে ঢুকল।

আউটপুট প্রিন্ট হলো: Status: Abdullah is Present today.

💡 ১টি গোল্ডেন সামারি:

Named Function Callback-এ কাজ হয় ২টি আলাদা জায়গায়:

উপরে (Step 1): আউটপুট কীভাবে প্রসেস বা সাজানো হবে তার নিয়ম তৈরি করা।

নিচে (Step 3): মূল কাজের জন্য ডেটা পাঠানো + উপরে বানিয়ে রাখা ফাংশনের শুধু নামটা জুড়ে দেওয়া।




  


// 1. 1st Named Callback Function (for in-house customer)
function serveToCustomer(drink) {
    console.log("☕ Here is your " + drink + ", enjoy!");
}

// 2. 2nd Named Callback Function (for home delivery)
function sendByRider(drink) {
    console.log("🛵 " + drink + " has been handed over to the rider.");
}

// 3. Main Function (prepares the tea or coffee)
function makeDrink(drinkName, deliveryMethod) {
    console.log("1. Preparing " + drinkName + "...");
    
    // Task completed! Now executing the external Named Function
    deliveryMethod(drinkName);
}

// Function Calls (Notice: () is NOT used with the function name)
makeDrink("Coffee", serveToCustomer);
makeDrink("Milk Tea", sendByRider);

/* Output:
   1. Preparing Coffee...
   ☕ Here is your Coffee, enjoy!
   1. Preparing Milk Tea...
   🛵 Milk Tea has been handed over to the rider.
*/




// 1. Named Callback Function (calculates 10% discount)
function applyTenPercentDiscount(amount) {
    let discount = amount * 0.10;
    let finalAmount = amount - discount;
    console.log("🎉 Final bill after 10% discount: " + finalAmount + " TK.");
}

// 2. Main Function (calculates total bill amount)
function calculateTotal(price, quantity, discountCalculator) {
    let total = price * quantity;
    console.log("Total bill: " + total + " TK.");
    
    // Calculation finished, calling the discount function with total bill
    discountCalculator(total);
}

// Calling the function (Product price: 100 TK, Quantity: 3)
calculateTotal(100, 3, applyTenPercentDiscount);

/* Output:
   Total bill: 300 TK.
   🎉 Final bill after 10% discount: 270 TK.
*/







// 1. Named Callback Function for Success
function showPassSuccess(msg) {
    console.log("✅ " + msg);
}

// 2. Named Callback Function for Error
function showPassError(msg) {
    console.log("❌ " + msg);
}

// 3. Main Function (validates password length)
function checkPassword(password, onSuccess, onError) {
    if (password.length >= 6) {
        onSuccess("Password is strong and valid!");
    } else {
        onError("Password is too short! Must be at least 6 characters.");
    }
}

// Calling the function
checkPassword("123456", showPassSuccess, showPassError);
checkPassword("abc", showPassSuccess, showPassError);

/* Output:
   ✅ Password is strong and valid!
   ❌ Password is too short! Must be at least 6 characters.
*/






// 1. Named Callback Function for formatted output
function formatOutput(result) {
    console.log("====================");
    console.log("Result: " + result);
    console.log("====================");
}

// 2. Main Function
function addNumbers(num1, num2, printStyle) {
    let sum = num1 + num2;
    
    // Sum calculated, now triggering the Named Callback
    printStyle(sum);
}

// Calling the function
addNumbers(25, 75, formatOutput);

/* Output:
   ====================
   Result: 100
   ====================
*/
