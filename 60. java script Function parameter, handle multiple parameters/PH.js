function square(number) {
  const multiplication = (number * number);
  console.log("square of the given number is", multiplication);
}
square(4);
square(5);
square(12);

ফাংশনটি খুব সহজ একটি কাজ করে: ইনপুট হিসেবে দেওয়া কোনো সংখ্যার বর্গ (Square) বের করে এবং তা কনসোলে প্রিন্ট করে।

function square(number) {   // ১. ফাংশন ডিক্লেয়ারেশন
  const multiplication = (number * number);  // ২. বর্গ করে CONST এ রাখা
  console.log("square of the given number is", multiplication); // ৩. আউটপুট দেখানো
}
square(4);  // ৪. ফাংশন কল (আর্গুমেন্ট 4)
square(5);  // ৫. ফাংশন কল (আর্গুমেন্ট 5)
square(12); // ৬. ফাংশন কল (আর্গুমেন্ট 12)

১. ফাংশন ডিক্লেয়ারেশন (Function Declaration):

function square(number) { ... }
এখানে square নামে একটি ফাংশন তৈরি করা হয়েছে। এটি number নামে একটি প্যারামিটার নেয়।


২. বর্গ নির্ণয় ও সংরক্ষণ:

const multiplication = (number * number);

ফাংশন যখন কল হবে, তখন number-এর জায়গায় যে মান আসবে, সেই মানকে নিজের সাথে গুণ করে multiplication নামক কনস্ট্যান্ট ভেরিয়েবলে সংরক্ষণ করা হয়।

যেমন: square(4) কল করলে, number = 4 হয়, এবং 4 * 4 = 16।



৩. আউটপুট প্রিন্ট:

console.log("square of the given number is", multiplication);

এখন multiplication-এর মান (যা বর্গফল) কনসোলে প্রিন্ট করা হয়। যেমন: "square of the given number is 16"



৪. ফাংশন কল (Call):

square(4);

এখানে ফাংশনটি ৪ আর্গুমেন্ট দিয়ে ডাকা হয়েছে। অর্থাৎ, number প্যারামিটারটি এখন 4-এর সমান।


🎬 প্রোগ্রামটি কীভাবে রান হয় (স্টেপ বাই স্টেপ):

প্রথমে square(4) কল হয়।

number = 4

multiplication = 4 * 4 = 16

আউটপুট: square of the given number is 16



তারপর square(5) কল হয়।

number = 5

multiplication = 5 * 5 = 25

আউটপুট: square of the given number is 25



সবশেষে square(12) কল হয়।

number = 12

multiplication = 12 * 12 = 144

আউটপুট: square of the given number is 144


square of the given number is 16
square of the given number is 25
square of the given number is 144


প্যারামিটার ও আর্গুমেন্ট:
এখানে number হলো প্যারামিটার (যা ফাংশন তৈরির সময় লেখা হয়), আর 4, 5, 12 হলো আর্গুমেন্ট (যা ফাংশন কল করার সময় পাঠানো হয়)।

const ব্যবহার:
multiplication-কে const দিয়ে ডিক্লেয়ার করা হয়েছে, মানে এই ভেরিয়েবলের মান একবার সেট হলে পরে আর পরিবর্তন করা যাবে না। (যা এখানে ঠিক আছে, কারণ বর্গফল তো আর বদলাবে না!)

return নেই:
এই ফাংশনটি কোনো কিছু রিটার্ন করছে না। এটি শুধু console.log() দিয়ে আউটপুট দেখাচ্ছে। আপনি চাইলে পরবর্তীতে এতে return যোগ করে মান ফেরত পাঠাতে পারেন।




 
আরও উন্নত সংস্করণ যদি return ব্যবহার

function square(number) {
    return number * number;   // মান ফেরত পাঠাচ্ছে
}

const result1 = square(4);
console.log("square of the given number is", result1); // Output: 16

// অথবা সরাসরি:
console.log("square of the given number is", square(5)); // Output: 25

এখন ফাংশনটি মান ফেরত পাঠাচ্ছে, এবং  সেই মানটি অন্য কোথাও ব্যবহার করা যাবে না।
