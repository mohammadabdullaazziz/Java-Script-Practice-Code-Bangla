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
