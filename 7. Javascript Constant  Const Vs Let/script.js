let myName = "Abdullah";
myName = "Arman";
let myFriendName = "Biplob";
console.log(myName, myFriendName);

// Const Variable

const flower = "Rose";
flower = "Sunflower"
console.log(flower);

const FLOWER = "Rose";
console.log(FLOWER);

const IP_ADDRESS = "192.1.0.1";
console.log(IP_ADDRESS);




console.log("My name is: ".padEnd(20) + name); 
সরাসরি উত্তর হলো: "My name is: " সহ মোট ২০ ঘর হবে। অর্থাৎ, লেখাটার পর আলাদা করে আরও ২০ ঘর যোগ হবে না; পুরো লেখাটার দৈর্ঘ্য (Length) জোর করে ২০ ক্যারেক্টার বানানো হবে।

"My name is: "
যদি এই লেখাটার ক্যারেক্টার বা অক্ষরগুলো (স্পেস বা খালি জায়গা সহ), তাহলে এখানে মোট ১২টি ক্যারেক্টার আছে।

.padEnd(20), তখন জাভাস্ক্রিপ্ট হিসাব করবে: "আমার কাছে অলরেডি ১২ ঘর আছে। আমাকে মোট বানাতে হবে ২০ ঘর। তাহলে বাকি থাকে আর কয় ঘর? ২০ - ১২ = ৮ ঘর!"

সে তখন ওই লেখার ডান পাশে (শেষে) ৮টি খালি স্পেস (Space) বসিয়ে দেবে।


let name = "Abdullah";

// বোঝার জন্য স্পেসের জায়গায় ডট (.) দিয়ে প্যাডিং দিচ্ছি
console.log("My name is: ".padEnd(20, ".") + name);

এর আউটপুট আসবে ঠিক এইরকম:

My name is: ........Abdullah

"My name is: " (১২ ঘর) + ........ (৮টি ডট) = মোট ২০ ঘর পূর্ণ হওয়ার পরেই Abdullah নামটা বসেছে।


.padEnd(X) এর ভেতরের X সংখ্যাটি কোনো অতিরিক্ত ঘর যোগ করে না। এটি নির্দেশ করে পুরো টেক্সটটার টোটাল সাইজ বা ফাইনাল লেন্থ (Final Length) কত হবে। যদি আসল লেখা ছোট হয়,
তবে সে বাকি ঘরগুলো স্পেস দিয়ে ভরাট করে মোট ২০ ঘর বানিয়ে ছাড়ে।

concatination--

let firstName = "Abdullah";
let lastName = "Aziz";
let fullName = firstName + " " + lastName;
console.log(fullName);


let firstName = "Abdullah";
let lastName = "Aziz";
// let fullName = firstName.concat(" ", lastName);
let fullName = `${firstName.concat(" ", lastName)}`;
console.log(fullName);





Function for Strings--


let firstName = "Abdullah Aziz";

console.log(`Number of Characters in the name: ${firstName.length}`);


let firstName = "Abdullah Aziz";

let lengthOfName = firstName.length;

console.log("Length of the name is: " + lengthOfName);




let text = "Bangladesh";
text = text.charAt(0);
console.log(text);






let text = "Bangladesh";
text = text.charCodeAt(1);
console.log(text);


let text = "Bangladesh";
text = text.codePointAt(1);
console.log(text);

জাভাস্ক্রিপ্টে charCodeAt() এবং codePointAt()—এই দুটো মেথডের কাজই হলো কোনো স্ট্রিংয়ের নির্দিষ্ট পজিশনে থাকা অক্ষরের ইউনিকোড মান (Unicode/ASCII Value) বের করা।

১. charCodeAt(index)
এটি স্ট্রিংয়ের নির্দিষ্ট ইনডেক্সে থাকা অক্ষরের ১৬-বিট (UTF-16) ক্যারেক্টার কোড বা ASCII মান প্রদান করে।

সীমাবদ্ধতা: এটি শুধু 0 থেকে 65535 (ইউনিকোডের বেসিক ক্যারেক্টার যেমন: ইংরেজি বর্ণ, সংখ্যা, সাধারণ চিহ্ন) পর্যন্ত মান সঠিকভাবে দিতে পারে।

বড় কোনো ইউনিকোড প্রতীক বা ইমোজি (Emoji) দিলে এটি সঠিক পুরো মান না দিয়ে অর্ধেক ভাঙা কোড (Surrogate Pair) দেয়।


let text = "ABC";

console.log(text.charCodeAt(0)); // Output: 65 ('A' এর ASCII Code)
console.log(text.charCodeAt(1)); // Output: 66 ('B' এর ASCII Code)


📌 ২. codePointAt(index)
এটি ES6 (JavaScript 2015)-এ আনা একটি আধুনিক মেথড। এটি অক্ষরের পুরো ইউনিকোড পয়েন্ট (Code Point) প্রদান করে।

সুবিধা: এটি সাধারণ অক্ষরের পাশাপাশি ইমোজি (😊), জটিল প্রতীক বা বিশেষ অক্ষরের (যেগুলোর মান 65535-এর চেয়ে বড়) সঠিক ও পূর্ণাঙ্গ ইউনিকোড মান দিতে পারে।

let text = "ABC";

console.log(text.codePointAt(0)); // Output: 65 ('A' এর Unicode Value)


🔍 দুটির মধ্যে মূল পার্থক্য (ইমোজি দিয়ে উদাহরণ)
সাধারণ অক্ষরের ক্ষেত্রে দুটির আউটপুট একই আসে। কিন্তু ইমোজি বা জটিল চিহ্নের ক্ষেত্রে পার্থক্যটা বোঝা যায়:


let emoji = "😊";

// charCodeAt পুরো ইমোজির কোড দিতে পারে না (ভাঙা মান দেয়)
console.log(emoji.charCodeAt(0));  // Output: 55357 (অসম্পূর্ণ মান)

// codePointAt ইমোজির আসল ও পুরো ইউনিকোড মান দেয়
console.log(emoji.codePointAt(0)); // Output: 128522 (সঠিক মান)

charCodeAt()	সঠিক মান দেয় সাধারণ অক্ষর (A-Z, a-z, 0-9)   	অসম্পূর্ণ মান দেয় ইমোজি ও বড় ক্যারেক্টার এর   	পুরোনো মেথড, শুধু ইংরেজি/সাধারণ অক্ষরের জন্য ব্যবহার করা হয়। 

codePointAt()সঠিক মান দেয় সাধারণ অক্ষর (A-Z, a-z, 0-9)   সঠিক ও পূর্ণাঙ্গ মান দেয় ইমোজি ও বড় ক্যারেক্টার এর  আধুনিক মেথড, সব ধরনের ক্যারেক্টার বা ইমোজির জন্য এটি ব্যবহার করা ভালো।




let text = "Bangladesh";
text = text.toUpperCase();
console.log(text);


let text = "Bangladesh";
text = text.toLowerCase();
console.log(text);



Library Function --

let text = "Bangladesh";
text = text.slice(0, 4)
console.log(text);
