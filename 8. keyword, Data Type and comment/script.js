JavaScript Data Type:
👉 data type হল data-এর ধরন

জাভাস্ক্রিপ্টে Data Type (ডেটা টাইপ) বলতে বোঝায় একটি ভেরিয়েবল কোন ধরনের তথ্য বা মান ধারণ করছে। 
জাভাস্ক্রিপ্ট একটি Dynamic Typed ল্যাঙ্গুয়েজ, অর্থাৎ ভেরিয়েবল ডিক্লেয়ার করার সময় সেটি কোন টাইপের তা বলে দিতে হয় না.

জাভাস্ক্রিপ্টের ডেটা টাইপকে প্রধানত দুইটি ভাগে ভাগ করা যায়:

Primitive Data Types (প্রাথমিক বা সরল ডেটা টাইপ)

Non-Primitive Data Types (জটিল বা রেফারেন্স ডেটা টাইপ)


Primitive Data Types (প্রাথমিক বা সরল ডেটা টাইপ)

এগুলো simple value ধরে, এবং immutable (change করলে নতুন value তৈরি হয়)।

এগুলো হলো জাভাস্ক্রিপ্টের সবচেয়ে বেসিক ডেটা টাইপ। এগুলো ইমিউটেবল (Immutable), অর্থাৎ এদের মান সরাসরি পরিবর্তন করা যায় না।

কেন দুটিই সঠিক?

১. Simple Value ধারণ করা: প্রিমিটিভ ডেটা টাইপগুলো (যেমন: Number, String, Boolean) শুধুমাত্র একটি একক বা সরল মান ধারণ করে। অবজেক্টের মতো এদের ভেতরে অনেকগুলো প্রোপার্টি থাকে না।

২. ইমিউটেবল (Immutable): এটিই সবচেয়ে গুরুত্বপূর্ণ পয়েন্ট। এর মানে হলো, একবার একটি প্রিমিটিভ ভ্যালু তৈরি হলে তাকে সরাসরি পরিবর্তন করা যায় না।

মান পরিবর্তন করা যায় না'— আসল মানে ?

কনফিউজড যে, let x = 5; x = 10; করলে তো মান পরিবর্তন হচ্ছে। এখানে কী ঘটছে:

যখন x = 10, তখন আগের 5 সংখ্যাটি বদলে 10 হচ্ছে না।

বরং মেমরিতে 10 নামক একটি নতুন মান তৈরি হচ্ছে এবং x এখন সেই নতুন মানকে নির্দেশ করছে।

পুরানো 5 কিন্তু মেমরিতে 5-ই থেকে গিয়েছিল (পরবর্তীতে গার্বেজ কালেক্টর সেটি মুছে দেয়)।

let name = "Abdullah";
name[0] = "M"; // আমরা চাচ্ছি 'A' বদলে 'M' করতে
console.log(name); // আউটপুট আসবে "Abdullah", "Mbdullah" নয়!

এখানে name[0] = "M" কাজ করেনি কারণ স্ট্রিং একটি প্রিমিটিভ টাইপ এবং এটি Immutable। চাইলে পুরো ভেরিয়েবলটির মান বদলে দেওয়া যাবে (name = "Mohammad"), 
কিন্তু ওই স্ট্রিংয়ের ভেতরের কোনো অক্ষর সরাসরি বদলানো যাবে না।

"এগুলো হলো জাভাস্ক্রিপ্টের সবচেয়ে বেসিক ডেটা টাইপ। এগুলো ইমিউটেবল (Immutable), অর্থাৎ এদের মান সরাসরি পরিবর্তন করা যায় না।"


জাভাস্ক্রিপ্টে Immutable (অপরিবর্তনশীল) এবং Mutable (পরিবর্তনশীল) হলো ডাটা বা ভ্যালু পরিবর্তনের দুটি খুবই গুরুত্বপূর্ণ নিয়ম। 

Mutable: যাকে চাইলেই বদলে ফেলা যায় বা এডিট করা যায়।

Immutable: যাকে কোনোভাবেই এডিট বা পরিবর্তন করা যায় না। নতুন কিছু করতে চাইলে পুরো জিনিসটাই নতুন করে বানাতে হয়।




📝 ১. Mutable (পরিবর্তনশীল)
জাভাস্ক্রিপ্টের Non-Primitive Data Types (যেমন: Object এবং Array) হলো Mutable।

বাস্তব উদাহরণ: মনে করো নিজের কাছে একটা ডায়রি বা খাতা আছে। সেই খাতায় ১ নম্বরে লিখলে "বই কেনা", ২ নম্বরে লিখলে "কোডিং শেখা"। 
চাইলে যেকোনো সময় ৩ নম্বরে নতুন একটা কাজ যোগ করা যাবে, বা ২ নম্বরের কাজটা কেটে দিতে পারো। পুরো খাতাটা কিন্তু বদলাচ্ছে না, জাস্ট ভেতরের ডাটা এডিট হচ্ছে।

// একটি অ্যারে (Array) যা Mutable
let shoppingList = ["বই", "কলম", "খাতা"];

//  পুরো অ্যারে না বদলে, জাস্ট ২ নম্বর ইনডেক্সের "খাতা" বদলে "ল্যাপটপ" করে দিলাম
shoppingList[2] = "ল্যাপটপ";

// নতুন একটা আইটেমও পুশ (যোগ) করতে পারি
shoppingList.push("মাউস");

console.log(shoppingList); 
// আউটপুট: ["বই", "কলম", "ল্যাপটপ", "মাউস"] (চেঞ্জ হয়ে গেছে!)

কেন হলো? কারণ অ্যারে এবং অবজেক্ট হলো Mutable। জাভাস্ক্রিপ্ট এদেরকে মেমরির একটা নির্দিষ্ট জায়গায় রাখে এবং চাইলেই সেই জায়গায় ঢুকে ভেতরের ডাটা এডিট, ডিলিট বা নতুন কিছু যোগ করতে পারা যায়।



২. Immutable (অপরিবর্তনশীল)
জাভাস্ক্রিপ্টের সব Primitive Data Types (যেমন: String, Number, Boolean, Undefined, Null) হলো Immutable।

বাস্তব উদাহরণ:  একটা কাগজে কলম দিয়ে লিখা হল "Abdullah"।  কি এখন কাগজটা না ছিঁড়ে বা ওভাররাইট না করে ওই লেখার ভেতর থেকে A অক্ষরটাকে মুছে অন্য কিছু করতেে পারা যাবে না? না, ওটা ফিক্সড।


let name = "Abdullah";

// তুমি যদি জোর করে প্রথম অক্ষর 'A' এর জায়গায় 'M' বসাতে চাও:
name[0] = "M"; 

console.log(name); // আউটপুট কিন্তু "Abdullah"-ই থাকবে, "Mbdullah" হবে না!

কেন হলো না? কারণ স্ট্রিং হলো Immutable। জাভাস্ক্রিপ্ট তোমাকে ভেতরের কোনো অংশ এডিট করতে দেবে না। 
যদি নাম বদলাতেই চাওয়া হয়, তবে পুরো নতুন একটা স্ট্রিং তৈরি করে ভেরিয়েবলে অ্যাসাইন করতে হবে (যেমন: name = "Mohammad")।






Primitive Data Types (৭ প্রকার)

Number: সব ধরনের সংখ্যা (পূর্ণসংখ্যা বা দশমিক) এই টাইপের অন্তর্ভুক্ত।
let age = 30;
let price = 99.99;

String: টেক্সট বা অক্ষর। এটি একক (' ') বা দ্বৈত (" ") কোটেশনের ভেতরে লিখতে হয়।
let name = "Mohammad Abdullah";

Boolean: শুধুমাত্র দুটি মান হতে পারে: true (সত্য) অথবা false (মিথ্যা)। সিদ্ধান্ত গ্রহণের ক্ষেত্রে এটি ব্যবহৃত হয়।
let isLoggedIn = true;

Undefined: যদি কোনো ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু তাতে কোনো মান দেওয়া না হয়, তবে তার টাইপ হয় undefined।
let x; // x is undefined

Null: এটি ইচ্ছাকৃতভাবে কোনো ভেরিয়েবলকে "খালি" রাখার জন্য ব্যবহৃত হয়। ( typeof null করলে আউটপুট object আসে, যা জাভাস্ক্রিপ্টের একটি পুরনো বাগ)।
let data = null;

BigInt: সাধারণ Number টাইপ একটি নির্দিষ্ট সীমার বেশি বড় সংখ্যা হ্যান্ডেল করতে পারে না। অনেক বড় পূর্ণসংখ্যার জন্য এটি ব্যবহৃত হয় (সংখ্যার শেষে n যোগ করতে হয়)।
let hugeNumber = 9007199254740991n;

Symbol: এটি একটি ইউনিক বা অনন্য মান তৈরি করে, যা সাধারণত অবজেক্টের প্রোপার্টি কি (key) হিসেবে ব্যবহৃত হয়।
let id = Symbol("id");




Non-Primitive Data Typesঃ
Non-Primitive Data Types (বা Reference Type) হলো এমন data type যেগুলোতে একাধিক বা জটিল data সংরক্ষণ করা যায়, এবং এগুলো সরাসরি value না রেখে memory-এর reference (address) ধরে রাখে।


Object: এটি কী-ভ্যালু (key-value) পেয়ারে ডেটা জমা রাখে।
let student = {
    name: "Abdullah",
    age: 30,
    isProgrammer: true
}; 


Array: এটি একই ভেরিয়েবলে অনেকগুলো মানের একটি তালিকা বা লিস্ট তৈরি করে।
let colors = ["Red", "Green", "Blue"];

Function: জাভাস্ক্রিপ্টে ফাংশনকেও এক ধরনের অবজেক্ট বা ডেটা টাইপ হিসেবে গণ্য করা হয়, যা কোনো নির্দিষ্ট কাজ সম্পাদন করে।




typeof অপারেটর এবং ফাংশন
কোনো ভেরিয়েবল কোন টাইপের ডেটা ধারণ করছে, তা জানার জন্য typeof অপারেটর ব্যবহার করা হয়।
console.log(typeof "Hello"); // "string"
console.log(typeof 30);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"



<h3>Java Script Reserved Words</h3>

abstract  arguments  await*  boolean
break  byte  case  catch
char  class*  const*  continue
debugger default	 delete  do
double  else  enum*  eval
export*  extends*  false  final
finally  float  for  function 
goto	 if  implements  import*
in  instanceof  int  interface
let*  long  native	new
null package	private	 protected
public  return  short  static
super*  switch  synchronized  this
throw  throws	transient  true
try  typeof  var  void
volatile  while  with  yield */

<h3>Data Type</h3> 
// primitives data type
// 1.String - "Abdullah Arman"
// 2.Number - 29,  123.23
// 3.Boolean - true,false (value)
// 4.null
// 5.undefined
// 6.symbol

// Non-Primitive Data Types 
// 1. function
// 2. object
// 3. array

<h3>2 comment in js</h3>
/* 1.  multiple line comment */ 
// 2. singal line comment
