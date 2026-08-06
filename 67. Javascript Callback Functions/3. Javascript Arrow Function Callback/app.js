১. Callback Function কী?
  
সহজ কথায়, একটি ফাংশনের ভেতর প্যারামিটার হিসেবে যখন আরেকটি ফাংশন পাস করা হয় এবং প্রথম ফাংশনের কাজ শেষ হওয়ার পর ভেতরের সেই ফাংশনটিকে কল করা হয়, তখন তাকে কলব্যাক ফাংশন বলে।

বাস্তব জীবনের উদাহরণ: রেস্টুরেন্টে ওয়েটারকে অর্ডার দেওয়া হল (প্রধান ফাংশন), আর বললেন খাবার তৈরি হলে টেবিলে দিয়ে যেও (কলব্যাক ফাংশন)।

২. Arrow Function কী?
  
এটি ফাংশন লেখার একটি ছোট এবং আধুনিক শর্টকাট পদ্ধতি (ES6 ফিচার), যেখানে function কিবোর্ড লেখার বদলে => (অ্যারো) চিহ্ন ব্যবহার করা হয়।

৩. এবার "Arrow Callback Function"-এ:

যখন  কলব্যাক ফাংশন হিসেবে সাধারণ function() {} লেখার বদলে অ্যারো ফাংশন () => {} ব্যবহার করি, তখন তাকে অ্যারো কলব্যাক ফাংশন বলে। জাভাস্ক্রিপ্টে এটি সবচেয়ে বেশি ব্যবহৃত হয়।



function processUser(name, callback) {
  console.log(`Processing user: ${name}`);
  callback(); 
}

// ৩. আলাদা কোনো ফাংশনের নাম না দিয়ে সরাসরি ভেতরে অ্যারো কলব্যাক পাস করা হলো
processUser("Abdullah", () => {
  console.log("User process complete!");
});





let details = function(name, age, cb) {
    name = "Abdullah";
    age = 30;
    let result = `${name} ${age}`;
    cb(result);
};

// ৩ নম্বর পজিশনে Anonymous Function-এর বদলে Arrow Callback পাঠানো হলো
details("", 0, (myName) => {
    console.log(myName);
});

আরও এক লাইনে শর্টকাট (অ্যারো ফাংশনের সেরা সুবিধা)
অ্যারো ফাংশনে যদি প্যারামিটার ১টি হয় এবং ভেতরের কাজও ১ লাইনের হয়, তবে ব্র্যাকেট () এবং সেকেন্ড ব্র্যাকেট {} ছাড়াই আরও সংক্ষেপে লেখা যায়:
details("", 0, myName => console.log(myName));




স্ট্যান্ডার্ড অ্যারো কলব্যাক

let details = function(cb) {
    let name = "Abdullah";
    let age = 30;
    let result = `${name} ${age}`;
    cb(result);
};

// ১ নম্বর আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
details((myName) => {
    console.log(myName);
});

লাইনের শর্টকাট (সবচেয়ে ক্লিন) প্যারামিটার একটি হলে এবং ভেতরে কাজও এক লাইনের হলে ব্র্যাকেট ছাড়াও লেখা যায়:

details(myName => console.log(myName));



স্ট্যান্ডার্ড অ্যারো কলব্যাক

let details = function(cb) {
  let name = "Abdullah Aziz";
  let age = 30;
  let height = 5.2;

  cb("My name is: " + name);
  cb("My age is: " + age);
  cb("My height is: " + height);
};

// Anonymous Function-এর বদলে Arrow Callback পাঠানো হলো
details((myResult) => {
  console.log(myResult);
});
১ লাইনের শর্টকাট (সবচেয়ে সংক্ষেপে)
প্যারামিটার ১টি থাকায় () ব্র্যাকেট এবং ফাংশন বডি ১ লাইনের হওয়ায় {} ব্র্যাকেট বাদ দিয়েও লেখা যায়:

details(myResult => console.log(myResult));

My name is: Abdullah Aziz
My age is: 30
My height is: 5.2




স্ট্যান্ডার্ড অ্যারো কলব্যাক

let details = function(cb) {
  let name = "Abdullah Aziz";
  let age = 30;
  let height = 5.2;

  // লেবেল সহ ৩ বার আলাদাভাবে পাস করা হলো
  cb("Name", name);
  cb("Age", age);
  cb("Height", height);
};

// ২টি প্যারামিটার সহ অ্যারো কলব্যাক পাস করা হলো
details((label, value) => {
  console.log(`${label}: ${value}`);
});

লাইনের শর্টকাট
যেহেতু ভেতরে কাজের লাইন মাত্র ১টি, তাই সেকেন্ড ব্র্যাকেট {} ছাড়াই এটি সংক্ষেপে লেখা সম্ভব:

details((label, value) => console.log(`${label}: ${value}`));



স্ট্যান্ডার্ড অ্যারো কলব্যাক

let numberValue = function(number, cb) {
  cb(number * 5); // সরাসরি গুণফল পাস করা হলো
};

// ২য় আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
numberValue(5, (result) => {
  console.log(`Value is: ${result}`);
});

১ লাইনের শর্টকাট (সবচেয়ে সংক্ষেপে)
প্যারামিটার ১টি থাকায় () ব্র্যাকেট এবং ভেতরে কাজ ১ লাইনের হওয়ায় {} বাদ দিয়ে লেখা যায়:

numberValue(5, result => console.log(`Value is: ${result}`));




স্ট্যান্ডার্ড অ্যারো কলব্যাক

function createAccount(username, callback) {
    console.log("Processing database for " + username + "...");
    
    callback(username);
}

// Anonymous Function-এর বদলে Arrow Callback পাস করা হলো
createAccount("Abdullah", (user) => {
    console.log("Welcome " + user + "! Your account creation was successful.");
});
লাইনের শর্টকাট (সবচেয়ে ক্লিন)
প্যারামিটার ১টি থাকায় () ব্র্যাকেট এবং ভেতরে কাজ ১ লাইনের হওয়ায় {} সেকেন্ড ব্র্যাকেট ছাড়াই সংক্ষেপে লেখা যায়:

createAccount("Abdullah", user => console.log("Welcome " + user + "! Your account creation was successful."));



স্ট্যান্ডার্ড অ্যারো কলব্যাক

const createAccount = function(username, notifyUser) {
    console.log("Processing database for " + username + "...");
    notifyUser(username);
};

// ২য় আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
createAccount("Abdullah", (user) => {
    console.log("Welcome " + user + "! Your account creation was successful.");
});
১ লাইনের শর্টকাট
প্যারামিটার ১টি থাকায় () ব্র্যাকেট এবং কাজ ১ লাইনের হওয়ায় {} বাদ দিয়ে এক লাইনে লেখা যায়:

createAccount("Abdullah", user => console.log("Welcome " + user + "! Your account creation was successful."));




function processExamResult(writtenMarks, vivaMarks, callback) {
    let total = writtenMarks + vivaMarks;
    
    // হিসাব করা মোট নম্বরটি কলব্যাকে পাস করা হলো
    callback(total);
}

// ৩ নম্বর আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
processExamResult(60, 25, (totalMarks) => {
    if (totalMarks >= 80) {
        console.log("Grade: A+ (Passed)");
    } else {
        console.log("Grade: Passed");
    }
});





// ১. পেমেন্ট প্রসেস করার মূল ফাংশন
function processPayment(itemPrice, quantity, callback) {
    let totalAmount = itemPrice * quantity;
    
    // হিসাব করা বিলের পরিমাণ কলব্যাকে পাঠানো হলো
    callback(totalAmount);
}

// ২. ৩ নম্বর আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
processPayment(200, 3, (totalBill) => {
    let cashbackAmount = 50;
    console.log("Original Bill: " + totalBill + " TK");
    console.log("Cashback Applied! You saved " + cashbackAmount + " TK.");
});






function checkAttendance(studentId, name, callback) {
    console.log("Checking database for ID: " + studentId + "...");
    
    // ভেরিফিকেশন শেষে নামটি কলব্যাকে পাঠানো হলো
    callback(name);
}

// ৩ নম্বর আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
checkAttendance(101, "Abdullah", (studentName) => {
    console.log("Status: " + studentName + " is Present today.");
});

১ লাইনের শর্টকাট (সবচেয়ে সংক্ষেপে)
প্যারামিটার ১টি থাকায় () ব্র্যাকেট এবং কাজ ১ লাইনের হওয়ায় {} বাদ দিয়ে এক লাইনে লেখা যায়:

checkAttendance(101, "Abdullah", studentName => console.log("Status: " + studentName + " is Present today."));





function makeDrink(drinkName, deliveryMethod) {
    console.log("1. Preparing " + drinkName + "...");
    
    // ড্রিংক তৈরি শেষে কলব্যাক ফাংশনটি এক্সিকিউট করা হচ্ছে
    deliveryMethod(drinkName);
}

// ২. প্রথম কল: অ্যারো কলব্যাক পাস করা হলো
makeDrink("Coffee", (drink) => {
    console.log("☕ Here is your " + drink + ", enjoy!");
});

// ৩. দ্বিতীয় কল: অ্যারো কলব্যাক পাস করা হলো
makeDrink("Milk Tea", (drink) => {
    console.log("🛵 " + drink + " has been handed over to the rider.");
});

১ লাইনের শর্টকাট (সবচেয়ে সংক্ষেপে)
প্যারামিটার ১টি এবং ভেতরে কাজ ১ লাইনের হওয়ায় ব্র্যাকেট বাদ দিয়ে এক লাইনে লেখা যায়:

makeDrink("Coffee", drink => console.log("☕ Here is your " + drink + ", enjoy!"));

makeDrink("Milk Tea", drink => console.log("🛵 " + drink + " has been handed over to the rider."));





function calculateTotal(price, quantity, callback) {
    let totalAmount = price * quantity;
    console.log("Total bill: " + totalAmount + " TK.");
    
    // মোট বিলটি কলব্যাকে পাঠানো হলো
    callback(totalAmount);
}

// ৩ নম্বর আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
calculateTotal(100, 3, (totalBill) => {
    let discount = totalBill * 0.10;
    let finalAmount = totalBill - discount;
    console.log("🎉 Final bill after 10% discount: " + finalAmount + " TK.");
});








function checkPassword(password, onSuccess, onError) {
    if (password.length >= 6) {
        onSuccess("Password is strong and valid!");
    } else {
        onError("Password is too short! Must be at least 6 characters.");
    }
}

// ২য় ও ৩য় আর্গুমেন্টে অ্যারো কলব্যাক পাস করা হলো
checkPassword("123456", 
    (message) => {
        console.log("✅ " + message);
    }, 
    (message) => {
        console.log("❌ " + message);
    }
);

checkPassword("abc", 
    (message) => {
        console.log("✅ " + message);
    }, 
    (message) => {
        console.log("❌ " + message);
    }
);

লাইনের শর্টকাট (সবচেয়ে ক্লিন)
প্যারামিটার ১টি এবং বডির কাজ ১ লাইনের হওয়ায় সংক্ষেপে এক লাইনে লেখা যায়:

checkPassword("123456", 
    message => console.log("✅ " + message), 
    message => console.log("❌ " + message)
);

checkPassword("abc", 
    message => console.log("✅ " + message), 
    message => console.log("❌ " + message)
);

✅ Password is strong and valid!
❌ Password is too short! Must be at least 6 characters.
