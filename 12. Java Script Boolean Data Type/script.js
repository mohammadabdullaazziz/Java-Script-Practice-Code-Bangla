Boolean Data Type

জাভাস্ক্রিপ্টে Boolean (বুলিয়ান) হলো প্রিমিটিভ (Primitive) ডেটা টাইপ। এটি মূলত লজিক্যাল সিদ্ধান্ত নেওয়ার জন্য ব্যবহৃত হয়। সহজ কথায়, 
কোনো কিছু "হ্যাঁ" নাকি "না", "সঠিক" নাকি "ভুল"—তা প্রকাশ করার জন্যই বুলিয়ান ব্যবহার করা হয়।

বুলিয়ান ভ্যালু দুটি:

১. true (সত্য) ২. false (মিথ্যা)

let isRaining = true;  // বৃষ্টি হচ্ছে
let isSunny = false;   // রোদ নেই

console.log(isRaining); // আউটপুট: true
console.log(typeof isSunny); // আউটপুট: boolean

বুলিয়ান সাধারণত কোনো শর্ত (Condition) চেক করার জন্য ব্যবহৃত হয়। প্রোগ্রামিংয়ে if-else স্টেটমেন্টের মাধ্যমে সিদ্ধান্ত নেওয়ার সময় এটি সবচেয়ে বেশি কাজে লাগে।

let age = 20;
let canVote = age >= 18; 

if (canVote) {
    console.log("আপনি ভোট দিতে পারবেন।");
} else {
    console.log("আপনি এখনো ভোট দেওয়ার যোগ্য হননি।");
}



let x = true;
let y = false; 

let numOne = Number(true);
let numTwo = Number(false);
console.log(numOne);
console.log(numTwo);

console.log(3 > 2);
console.log(3 < 2);



let age = 20;

let isAdult = age >= 18; 
console.log(isAdult); // Output: true (কারণ ২০, ১৮ এর চেয়ে বড়)
console.log(10 === 5); // Output: false
