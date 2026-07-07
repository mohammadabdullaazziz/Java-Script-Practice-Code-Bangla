জাভাস্ক্রিপ্টে (JavaScript) function হলো কোডের একটি নির্দিষ্ট ব্লক, যা কোনো নির্দিষ্ট কাজ বা হিসাব সম্পন্ন করার জন্য তৈরি করা হয়। সহজ কথায়, 
একটি নির্দিষ্ট কাজের নিয়ম লিখে রেখে সেটি একটি নাম (Function Name) দিয়ে সংরক্ষণ করে রাখা হয় এবং প্রয়োজন অনুযায়ী যেকোনো সময় শুধু সেই নামের সাহায্যে বারবার কোডটি ব্যবহার করা যায়।

কেন Function ব্যবহার করা হয়?
কোড পুনঃব্যবহারযোগ্যতা (Reusability): একটি কোড বারবার না লিখে, একটি Function তৈরি করে তা বারবার কল বা ব্যবহার করা যায়।

সহজ রক্ষণাবেক্ষণ (Maintainability): কোডে কোনো পরিবর্তন করতে হলে বারবার না লিখে শুধু Function-টির ভেতরের অংশ পরিবর্তন করলেই সব জায়গায় আপডেট হয়ে যায়।


ফাংশন বলতে কী বোঝায়?
ফাংশন হলো নির্দিষ্ট কাজের জন্য ডিজাইন করা পুনঃব্যবহারযোগ্য কোড ব্লক।
ফাংশনগুলো যখন কল বা ইনভোক করা হয়, তখন সেগুলো এক্সিকিউট হয়।
সকল প্রোগ্রামিং ভাষায় ফাংশন মৌলিক বিষয়।



//Syntax:
function functionName (Function parameters) {   ------functionName name
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


function myNames (name, country) {   // ← name, country হলো প্যারামিটার
  console.log("My name is" + " " + name + " " + "I'm come from" + " " + country)
}

myNames("Abdullah", "Bangladesh");   // ← "Abdullah", "Bangladesh" হলো আর্গুমেন্ট
myNames("Aziz", "Pakistan");         // ← "Aziz", "Pakistan" হলো আর্গুমেন্ট
myNames("Mohammad", "Kashmir");      // ← "Mohammad", "Kashmir" হলো আর্গুমেন্ট


প্যারামিটার (Parameter)	ফাংশন ডিক্লেয়ার করার সময় যে ভেরিয়েবলগুলো লিখা হয়	name, country
আর্গুমেন্ট (Argument)	ফাংশন কল করার সময় যে ভ্যালুগুলো পাঠানো হয়	"Abdullah", "Bangladesh"



// ধাপ ১: ফাংশন তৈরি (প্যারামিটার)
function myNames (name, country) {
    // name আর country হলো প্যারামিটার
    // এগুলো ফাংশনের ভেতরে ভেরিয়েবলের মতো কাজ করে
    console.log("My name is" + " " + name + " " + "I'm come from" + " " + country)
}

// ধাপ ২: ফাংশন কল (আর্গুমেন্ট)
myNames("Abdullah", "Bangladesh");
//        ↑            ↑
//        আর্গুমেন্ট   আর্গুমেন্ট
//        (আসল মান)   (আসল মান)

// যখন এই লাইন রান করে——
// name = "Abdullah" (প্যারামিটার = আর্গুমেন্ট)
// country = "Bangladesh" (প্যারামিটার = আর্গুমেন্ট)


myNames("Abdullah", "Bangladesh");
//↑        ↑            ↑
//|        |            |
//ফাংশনের নাম  আর্গুমেন্ট   আর্গুমেন্ট
//() চিহ্ন = কল করা




function myIntro () {
  console.log("I am Abdullah");
  console.log("My age 28");
  console.log("I live in Bangladesh");
}
myIntro();




সেকেন্ড ব্র্যাকেট বা { } এর ভেতরের পুরো অংশটাকে জাভাস্ক্রিপ্টের ভাষায় Block (ব্লক) বা Block Statement বলা হয়।

{
   console.log("I am Abdullah");
   console.log("My age 28");
   console.log("I live in Bangladesh");
}

এই দ্বিতীয় বন্ধনী বা কার্লি ব্রেসেস {} এর ভেতরে থাকা সবটুকু কোড মিলে তৈরি হয় একটি Block। জাভাস্ক্রিপ্ট এই ভেতরের কোডগুলোকে একটি দল বা গুচ্ছ হিসেবে বিবেচনা করে।
