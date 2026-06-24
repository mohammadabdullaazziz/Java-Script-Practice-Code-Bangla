জাভাস্ক্রিপ্ট (JavaScript) ফাংশন হলো কোডের একটি নির্দিষ্ট ব্লক যা কোনো নির্দিষ্ট কাজ করার জন্য তৈরি করা হয়। 
function কী-ওয়ার্ড ব্যবহার করে ফাংশন ডিক্লেয়ার করা হয় এবং প্রয়োজন অনুযায়ী বারবার কল (call) ব্যাবহার করা যায়।
জাভাস্ক্রিপ্টে ফাংশন শুধু কোডের ব্লক নয়, একে বলা হয় "First-Class Citizens" (প্রথম শ্রেণীর নাগরিক)। এর মানে হলো, জাভাস্ক্রিপ্টে একটি ফাংশনকে অন্য যেকোনো সাধারণ ভ্যারিয়েবলের মতোই ট্রিট করা যায়।

//Syntax:
function functionName (parameters) {
  // Function body
}




function functionName(parameters) {
    // কোড ব্লক
    return value; // অপশনাল
}



// ফাংশন ডিক্লারেশন
function greet() {
    console.log("Hello World!");
}

// ফাংশন কল
greet(); // Output: Hello World!





function myNames (name, country) {
  console.log("My name is" + " " + name + " " + "I'm come from" + " " + country)
}

myNames("Abdullah", "Bangladesh");
myNames("Aziz", "Pakistan");
myNames("Mohammad", "Kashmir");




function myIntro () {
  console.log("I am Abdullah");
  console.log("My age 28");
  console.log("I live in Bangladesh");
}
myIntro();
