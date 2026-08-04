জাভাস্ক্রিপ্টে Anonymous Function (অ্যানোনিমাস ফাংশন) হলো এমন এক ধরনের ফাংশন, যার নিজের কোনো নাম থাকে না।
সাধারণত একটি ফাংশন তৈরি করতে গেলে আমরা function কিওয়ার্ডের পর একটি নাম দিই (যেমন: function sayHello() {})। কিন্তু অ্যানোনিমাস ফাংশনে নাম দেওয়ার অংশটুকু পুরোপুরি বাদ দেওয়া হয়।

🔍 ১. অ্যানোনিমাস ফাংশনের গঠন (Syntax)

সাধারণ ফাংশন (Named Function):

function greet() {
  console.log("Hello!");
}



অ্যানোনিমাস ফাংশন (Anonymous Function):

function() {
  console.log("Hello!");
}

গুরুত্বপূর্ণ বিষয়: কোনো অ্যানোনিমাস ফাংশনকে যদি সরাসরি কোডে এভাবে একা একা রেখে দেওয়া হয়, তবে জাভাস্ক্রিপ্ট এরর (SyntaxError) দেবে। 
কারণ এর কোনো নাম নেই, তাই একে আলাদা করে ডাকারও কোনো উপায় থাকে না।

এজন্য অ্যানোনিমাস ফাংশনকে সবসময় অন্য কোনো ভ্যারিয়েবলে রেখে অথবা অন্য কোনো ফাংশনের ভেতর কলব্যাক (Callback) হিসেবে ব্যবহার করতে হয়।

আসলে, Anonymous Function এবং Function Expression একে অপরের সাথে হাতরাধাদরি করে চলে।


💡 কোনটা কী? (সহজ পার্থক্য)
১. Anonymous Function: এটি হলো ফাংশনটির চেহারা বা গঠন। অর্থাৎ function() লেখার পর কোনো নাম না থাকা।

function() {
  console.log("আমার কোনো নাম নেই");
}


২. Function Expression: এটি হলো নামহীন সেই ফাংশনটিকে একটি ভ্যারিয়েবলের ভেতরে তুলে রাখার পদ্ধতি বা স্টাইল।

let myVar = function() {
  console.log("আমি ভ্যারিয়েবলে জমা হলাম");
};






function startTask(taskName, callback) {
  console.log(`Starting ${taskName}...`);
  
  // কাজ শেষ, এবার Anonymous Callback রান হবে
  callback();
}

// Anonymous Callback ব্যবহার করছি
startTask("download", function() {
  console.log("Download 100% completed!");
});

Starting download...
Download 100% completed!

startTask( "ডাউনলোড" , function() { console.log(...) } )
      │          │                         │
      │          ▼                         ▼
      │     'taskName'-এ গেল      'callback'-এর ভেতরে জমা হলো
      │                                    │
      └────────────────────────────────────┴──► মেইন ফাংশনে গিয়ে `callback()` 
                                                লেখার সাথে সাথে নামহীন ফাংশনটি চালু হলো!







function multiply(num1, num2, cb) {
  let total = num1 * num2;
  cb(total);
}

// Anonymous Callback ব্যবহার করছি
multiply(5, 4, function(result) {
  console.log(`The result is: ${result}`);
});

---
multiply(5, 4, function(result) {
  console.log(`The result is: ${result}`);
});

multiply এটি মূল ফাংশন (Main Function)।
5, 4  এগুলো মূল ফাংশনের প্রথম দুটি আর্গুমেন্ট/ইনপুট (যেমন: num1, num2)।

function(result) { ... }  এটি পুরোটা একটি Anonymous Callback Function (নামহীন ফাংশন)।
result এটি ওই নামহীন (Anonymous) ফাংশনের নিজের প্যারামিটার (Parameter)।

কাজের প্রবাহ (Execution Order):প্রথমে multiply ফাংশন তার নিজের কাজ (গুণ করা: 5 * 4 = 20) শেষ করবে।
কাজ শেষে প্রাপ্ত ফলাফল 20-কে এই নামহীন ফাংশনের result প্যারামিটারে পাঠিয়ে দিয়ে তাকে চালু (Call) করে দেবে।

"Anonymous Callback হলো এমন একটি নামহীন ফাংশন, যাকে আর্গুমেন্ট হিসেবে মেইন ফাংশনে পাঠানো হয়, এবং মেইন ফাংশন নিজের কাজ শেষ করে রেজাল্টটি ওই নামহীন ফাংশনের প্যারামিটারে বসিয়ে তাকে চালিয়ে দেয়।"




জাভাস্ক্রিপ্টে ফাংশনগুলোকে বলা হয় First-Class Citizen (প্রথম শ্রেণীর নাগরিক)। এর সহজ মানে হলো:

যেকোনো সাধারণ ডাটা (যেমন: সংখ্যা 10, স্ট্রিং "Hello") যেভাবে আমরা একটা ফাংশনের ব্র্যাকেটের ভেতর আর্গুমেন্ট হিসেবে পাঠাতে পারি, 
ঠিক একইভাবে পুরো একটা Anonymous Function-এর কোডকেও আর্গুমেন্ট হিসেবে অন্য ফাংশনের পেটের ভেতর পাঠিয়ে দেওয়া যায়!

multiply( 5 , 4 , function(result) { console.log(result); } );

১ম আর্গুমেন্ট: 5 (একটি Number)

২য় আর্গুমেন্ট: 4 (একটি Number)

৩য় আর্গুমেন্ট: function(result) { console.log(result); } (একটি আস্ত Anonymous Function Code!)



Anonymous Function হলো এমন ফাংশন যার কোনো নাম নেই।

এটিকে সরাসরি অন্য ফাংশনের আর্গুমেন্ট (Argument) হিসেবে পাঠিয়ে দেওয়া যায়।

মেইন ফাংশন তার কাজ শেষ করে এই নামহীন ফাংশনের প্যারামিটারে (Parameter) রেজাল্ট বসিয়ে দিয়ে তাকে চালিয়ে দেয়।






// ১. আগে আলাদা একটি Named Function তৈরি করা হলো
function showCompletionMessage() {
  console.log("User process complete!");
}

// ২. Main Function (একদম একই আছে)
function processUser(name, callback) {
  console.log(`Processing user: ${name}`);
  callback(); // মেইন ফাংশনের কাজ শেষ, এবার কলব্যাককে ডাকল
}

// ৩. Named Function-এর নাম দিয়ে মেইন ফাংশন রান করা হলো
processUser("Abdullah", showCompletionMessage);




// Main Function
function processUser(name, callback) {
  console.log(`Processing user: ${name}`);
  callback(); // মেইন ফাংশন কলব্যাককে ডাকল
}

// রান করছি
processUser("Abdullah", function() {
  console.log("User process complete!");
});

এই কোড এ callback();  কিছু বসানো হয়নি তবু ও কাজ করল কেন 


🔍 কেন callback() ফাঁকা রাখা সত্ত্বেও কাজ করল?
  
প্যারামিটার ও ডাটা আদান-প্রদান নেই:

এখানে Anonymous Function-টি ব্র্যাকেটে কোনো ইনপুট বা প্যারামিটার আশা করছে না (function())। মেইন ফাংশন থেকেও তাকে কোনো ডেটা (যেমন: হিসাবের ফল) পাঠানোর দরকার নেই।

সংকেত/নোটিফিকেশন হিসেবে কাজ:

এখানে callback() লেখা হয়েছে শুধু একটা সংকেত (Signal) হিসেবে—যাতে মেইন ফাংশনটি বোঝাতে পারে, "আমার কাজ শেষ, এবার নামহীন ফাংশনটি চালু হও!"

callback() না লিখলে কী হতো?
  
যদি মেইন ফাংশনের ভেতরে callback() না লেখা হতো, তবে নামহীন ফাংশনটি কখনোই রান হতো না এবং "User process complete!" মেসেজটি স্ক্রিনে প্রিন্ট হতো না।



📝 Note: কেন callback() না দিলে কোড কাজ করে না?

📌 মূল কারণ (The Core Logic):
যখন কোনো Anonymous Function-কে অন্য একটি ফাংশনের ভেতর আর্গুমেন্ট হিসেবে পাঠানো হয়, তখন সেটি সরাসরি রান (Execute) হয় না—বরং কেবল একটি ডেটা/ভ্যারিয়েবল হিসেবে মেইন ফাংশনের কাছে জমা থাকে।

মেইন ফাংশন যখন ভেতরে callback() লেখে, একমাত্র তখনই নামহীন ফাংশনটিকে চালু হওয়ার আদেশ দেওয়া হয়।


সংক্ষেপে ৩টি পয়েন্ট:পাস করা / রান হওয়া: মেইন ফাংশনের ব্র্যাকেটে ফাংশন কোড বসিয়ে দেওয়া মানে শুধু তাকে পৌঁছে দেওয়া, চালিয়ে দেওয়া নয়।

কন্ট্রোল মেইন ফাংশনের হাতে: কলব্যাক ফাংশনটি কখন এবং কীভাবে রান হবে, তার পুরো নিয়ন্ত্রণ থাকে মেইন ফাংশনের ভেতরের callback() লাইনের ওপর।

callback() না লিখলে: মেইন ফাংশন যদি callback() না লেখে, তবে সেই নামহীন ফাংশনটি মেমোরিতে অব্যবহৃত অবস্থায় পেড়ে থাকবে এবং তার ভেতরের কোনো কোডই এক্সিকিউট হবে না।




Named Function

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



Anonymous Function

let details = function(name, age, cb) {
    name = "Abdullah";
    age = 30;
    let result = `${name} ${age}`;
    cb(result); // result-টি কলব্যাকের প্যারামিটারে চলে যাবে
};

// ৩ নম্বর পজিশনে সরাসরি Anonymous Function পাঠানো হলো
details("", 0, function(myName) {
    console.log(myName);
});




Named Function

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


Anonymous Function

// ১. মেইন ফাংশন (ফাংশন এক্সপ্রেশন)
let details = function(cb) {
    let name = "Abdullah";
    let age = 30;
    let result = `${name} ${age}`;
    cb(result);
};

// ২. সরাসরি ১ নম্বর আর্গুমেন্টে Anonymous Function পাঠানো হলো
details(function(myName) {
    console.log(myName);
});






Named Function

unction getMyName(myResult) {
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

Anonymous Function

// ১. মেইন ফাংশন
let details = function(cb) {
  let name = "Abdullah Aziz";
  let age = 30;
  let height = 5.2;
  
  cb("My name is: " + name);
  cb("My age is: " + age);
  cb("My height is: " + height);
};

// ২. সরাসরি Anonymous Function পাঠাল হলো
details(function(myResult) {
  console.log(myResult);
});

My name is: Abdullah Aziz
My age is: 30
My height is: 5.2




Named Function

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


Anonymous Function

// ১. মূল ফাংশন
let details = function(cb) {
  let name = "Abdullah Aziz";
  let age = 30;
  let height = 5.2;

  // লেবেল সহ ৩ বার আলাদাভাবে পাস করা হলো
  cb("Name", name);
  cb("Age", age);
  cb("Height", height);
};

// ২. সরাসরি Anonymous Function দিয়ে রান করা হলো (প্যারামিটার ২টি)
details(function(label, value) {
  console.log(`${label}: ${value}`);
});

Name: Abdullah Aziz
Age: 30
Height: 5.2



Named Function

function printDoubleValue (result) {
    console.log(`The Value is: ${result}`);
}

function calculateDouble(number, cb) {
    let double = number * 5;
    cb(double);
}

calculateDouble(10, printDoubleValue);

Anonymous Function

function calculateDouble(number, cb) {
    let double = number * 5;
    cb(double);
}

// ২য় আর্গুমেন্টে সরাসরি Anonymous Function দিয়ে রান করা হলো
calculateDouble(10, function(result) {
    console.log(`The Value is: ${result}`);
});

The Value is: 50





Named Function

function printValue(result) {
  console.log(`Value is: ${result}`);
}

let numberValue = function(number, cb) {
  cb(number * 5); // সরাসরি গুণফল পাস করা হলো
};

numberValue(5, printValue);



Anonymous Function

let numberValue = function(number, cb) {
  cb(number * 5); // সরাসরি গুণফল পাস করা হলো
};

// ২য় আর্গুমেন্টে সরাসরি Anonymous Function পাঠানো হলো
numberValue(5, function(result) {
  console.log(`Value is: ${result}`);
});

Value is: 25




Named Function

function showSuccessMessage(user) {
    console.log("Welcome " + user + "! Your account creation was successful.");
}

// ২. মূল ফাংশন (প্রফেশনাল ও স্পষ্ট প্যারামিটার নেমিং)
function createAccount(username, callback) {
    console.log("Processing database for " + username + "...");
    
    callback(username);
}

// ৩. Named Function ব্যবহার করে কল করা হলো
createAccount("Abdullah", showSuccessMessage);


Anonymous Function

// ১. মূল ফাংশন
function createAccount(username, callback) {
    console.log("Processing database for " + username + "...");
    
    callback(username);
}

// ২. সরাসরি Anonymous Function পাঠাল হলো
createAccount("Abdullah", function(user) {
    console.log("Welcome " + user + "! Your account creation was successful.");
});






Named Function

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



Anonymous Function

// ১. মূল ফাংশন
const createAccount = function(username, notifyUser) {
    console.log("Processing database for " + username + "...");
    notifyUser(username);
};

// ২. ২য় আর্গুমেন্টে সরাসরি Anonymous Function পাস করা হলো
createAccount("Abdullah", function(user) {
    console.log("Welcome " + user + "! Your account creation was successful.");
});




Named Function

// ১. রেজাল্ট বা গ্রেড দেখানোর কলব্যাক ফাংশন
function displayGrade(totalMarks) {
    if (totalMarks >= 80) {
        console.log("Grade: A+ (Passed)");
    } else {
        console.log("Grade: Passed");
    }
}

// ২. মূল ফাংশন (পরীক্ষার রেজাল্ট প্রসেস করার জন্য)
function processExamResult(writtenMarks, vivaMarks, callback) {
    let total = writtenMarks + vivaMarks;
    
    // হিসাব করা মোট নম্বরটি কলব্যাকে পাস করা হলো
    callback(total);
}

// ৩. মেইন ফাংশন কল করা হলো
processExamResult(60, 25, displayGrade);

Anonymous Function

// ১. মূল ফাংশন
function processExamResult(writtenMarks, vivaMarks, callback) {
    let total = writtenMarks + vivaMarks;
    
    // হিসাব করা মোট নম্বরটি কলব্যাকে পাস করা হলো
    callback(total);
}

// ২. সরাসরি ৩ নম্বর আর্গুমেন্টে Anonymous Function পাস করা হলো
processExamResult(60, 25, function(totalMarks) {
    if (totalMarks >= 80) {
        console.log("Grade: A+ (Passed)");
    } else {
        console.log("Grade: Passed");
    }
});

Grade: A+ (Passed)




Named Function

// ১. ক্যাশব্যাক প্রিন্ট করার কলব্যাক ফাংশন
function applyFiftyCashback(totalBill) {
    let cashbackAmount = 50;
    console.log("Original Bill: " + totalBill + " TK");
    console.log("Cashback Applied! You saved " + cashbackAmount + " TK.");
}

// ২. পেমেন্ট প্রসেস করার মূল ফাংশন (প্রফেশনাল প্যারামিটার নেমিং)
function processPayment(itemPrice, quantity, callback) {
    let totalAmount = itemPrice * quantity;
    
    // হিসাব করা বিলের পরিমাণ কলব্যাকে পাঠানো হলো
    callback(totalAmount);
}

// ৩. মেইন ফাংশন কল করা হলো
processPayment(200, 3, applyFiftyCashback);


Anonymous Function

// ১. পেমেন্ট প্রসেস করার মূল ফাংশন
function processPayment(itemPrice, quantity, callback) {
    let totalAmount = itemPrice * quantity;
    
    // হিসাব করা বিলের পরিমাণ কলব্যাকে পাঠানো হলো
    callback(totalAmount);
}

// ২. ৩ নম্বর আর্গুমেন্টে সরাসরি Anonymous Function পাস করা হলো
processPayment(200, 3, function(totalBill) {
    let cashbackAmount = 50;
    console.log("Original Bill: " + totalBill + " TK");
    console.log("Cashback Applied! You saved " + cashbackAmount + " TK.");
});

Original Bill: 600 TK
Cashback Applied! You saved 50 TK.



Named Function

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



Anonymous Function

// ১. মূল ফাংশন (আইডি যাচাই ও অ্যাটেনডেন্স চেক করার জন্য)
function checkAttendance(studentId, name, callback) {
    console.log("Checking database for ID: " + studentId + "...");
    
    // ভেরিফিকেশন শেষে নামটি কলব্যাকে পাঠানো হলো
    callback(name);
}

// ২. ৩ নম্বর আর্গুমেন্টে সরাসরি Anonymous Function পাস করা হলো
checkAttendance(101, "Abdullah", function(studentName) {
    console.log("Status: " + studentName + " is Present today.");
});



Named Function

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


Anonymous Function

// ১. মূল ফাংশন (ড্রিংক তৈরি করার জন্য)
function makeDrink(drinkName, deliveryMethod) {
    console.log("1. Preparing " + drinkName + "...");
    
    // ড্রিংক তৈরি শেষে কলব্যাক ফাংশনটি এক্সিকিউট করা হচ্ছে
    deliveryMethod(drinkName);
}

// ২. প্রথম কল: সরাসরি কাস্টমারকে দেওয়ার জন্য Anonymous Function
makeDrink("Coffee", function(drink) {
    console.log("☕ Here is your " + drink + ", enjoy!");
});

// ৩. দ্বিতীয় কল: রাইডারকে দিয়ে পাঠানোর জন্য Anonymous Function
makeDrink("Milk Tea", function(drink) {
    console.log("🛵 " + drink + " has been handed over to the rider.");
});





Named Function

// ১. ১০% ডিসকাউন্ট হিসাব করে দেখানোর কলব্যাক ফাংশন
function applyTenPercentDiscount(totalBill) {
    let discount = totalBill * 0.10;
    let finalAmount = totalBill - discount;
    console.log("🎉 Final bill after 10% discount: " + finalAmount + " TK.");
}

// ২. মূল ফাংশন (মোট বিল হিসাব করার জন্য)
function calculateTotal(price, quantity, callback) {
    let totalAmount = price * quantity;
    console.log("Total bill: " + totalAmount + " TK.");
    
    // মোট বিলটি কলব্যাকে পাঠানো হলো
    callback(totalAmount);
}

// ৩. মেইন ফাংশন কল করা হলো
calculateTotal(100, 3, applyTenPercentDiscount);

Anonymous Function

// ১. মূল ফাংশন
function calculateTotal(price, quantity, callback) {
    let totalAmount = price * quantity;
    console.log("Total bill: " + totalAmount + " TK.");
    
    // মোট বিলটি কলব্যাকে পাঠানো হলো
    callback(totalAmount);
}

// ২. ৩ নম্বর আর্গুমেন্টে সরাসরি Anonymous Function পাস করা হলো
calculateTotal(100, 3, function(totalBill) {
    let discount = totalBill * 0.10;
    let finalAmount = totalBill - discount;
    console.log("🎉 Final bill after 10% discount: " + finalAmount + " TK.");
});

Total bill: 300 TK.
🎉 Final bill after 10% discount: 270 TK.



Named Function

// ১. সাকসেস মেসেজ দেখানোর কলব্যাক ফাংশন
function showPasswordSuccess(message) {
    console.log("✅ " + message);
}

// ২. এরর মেসেজ দেখানোর কলব্যাক ফাংশন
function showPasswordError(message) {
    console.log("❌ " + message);
}

// ৩. মূল ফাংশন (পাসওয়ার্ড চেক করার জন্য)
function checkPassword(password, onSuccess, onError) {
    if (password.length >= 6) {
        onSuccess("Password is strong and valid!");
    } else {
        onError("Password is too short! Must be at least 6 characters.");
    }
}

// ৪. মেইন ফাংশন কল করা হলো
checkPassword("123456", showPasswordSuccess, showPasswordError);
checkPassword("abc", showPasswordSuccess, showPasswordError);


Anonymous Function

// ১. মূল ফাংশন (পাসওয়ার্ডের দৈর্ঘ্য চেক করার জন্য)
function checkPassword(password, onSuccess, onError) {
    if (password.length >= 6) {
        onSuccess("Password is strong and valid!");
    } else {
        onError("Password is too short! Must be at least 6 characters.");
    }
}

// ২. ২য় ও ৩য় আর্গুমেন্টে সরাসরি Anonymous Functions পাস করা হলো
checkPassword("123456", 
    function(message) {
        console.log("✅ " + message);
    }, 
    function(message) {
        console.log("❌ " + message);
    }
);

checkPassword("abc", 
    function(message) {
        console.log("✅ " + message);
    }, 
    function(message) {
        console.log("❌ " + message);
    }
);




Named Function

Anonymous Function
