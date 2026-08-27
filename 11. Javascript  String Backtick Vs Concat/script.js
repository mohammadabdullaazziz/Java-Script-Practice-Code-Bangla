জাভাস্ক্রিপ্টে স্ট্রিং জোড়া দেওয়ার জন্য + অপারেটর বা .concat() (concat) ব্যবহার করার চেয়ে ব্যাকটিক (`) বা টেমপ্লেট লিটারাল (Template Literals) ব্যবহার করা আধুনিক, সহজ এবং রিডেবল। 

// ১. ক্যাটাকটিনেশন বা প্লাস অপারেটর (+)
let name = "Abdullah";
let message1 = "Hello " + name + ",\nHow are you?";
console.log(message1);

// ২. (Template Literal) 
let message2 = `Hello ${name},
How are you?`; 
console.log(message2);


<h3>String Data Type</h3> 
জাভাস্ক্রিপ্টে String Data Type প্রধানত ৩ ভাবে ডিক্লেয়ার বা ঘোষণা করা যায়

Single Quote	'Hello'
Double Quote	"Hello"
Backticks	`Hello`

let name1 = "It's alright";
let name2 = "He is called 'Abdullah'";
let name3 = 'He is called "Abdullah"';

let myName1 = "Abdullah";  // Double quotes
let myName2 = 'Abdullah';  // Single quotes

''	Single quote
""	Double quote
\   Backslash

let text1 = "We are the so-called \"Abdullah\" from the Bangladesh.";

let text2= 'It\'s alright.';

let text3 = "The character \\ is called backslash.";

 
let text = "Bangladesh";
let length = text.length;
console.log(length);

<h3>backticks</h3> 
let text4 = `He's often called "Abdullah"`;
console.log(text4);

let mangoPrice = 20;
let name = `Abdullah`;
console.log(`name ${mangoPrice}`);

let userName = "Abdullah";
let year = 29;
console.log('Hello ${userName}, Your Age is ${year}');

/*
Code	Result
\b	    Backspace
\f	    Form Feed
\n	    New Line
\r	    Carriage Return
\t	    Horizontal Tabulator
\v	    Vertical Tabulator */

জাভাস্ক্রিপ্টে একাধিক টেক্সট জোড়া লাগানো বা ডাইনামিক ভ্যারিয়েবল যুক্ত করার দুটি প্রধান উপায় হলো:

১. Concat / Addition (+) Operator: এটি পুরোনো ও ট্র্যাডিশনাল নিয়ম।
২. Backtick / Template Literal (`): এটি ES6-এ আসা আধুনিক, পরিষ্কার এবং সবচেয়ে বেশি ব্যবহৃত নিয়ম।

১. স্ট্রিং জোড়া লাগানো (String Concatenation)
Concat (+ Operator):

let firstName = "Mohammad";
let lastName = "Abdullah";

let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Mohammad Abdullah


Backtick (Template Literal):

let firstName = "Mohammad";
let lastName = "Abdullah";

let fullName = `${firstName}${lastName}`;
console.log(fullName); // Output: Mohammad Abdullah


ডাইনামিক হিসাব ও স্টেটমেন্ট (Dynamic Expression)
Concat (+ Operator):

let price = 500;
let quantity = 3;

let message = "Total Price: " + (price * quantity) + " BDT";
console.log(message); // Output: Total Price: 1500 BDT

Backtick (Template Literal):

let price = 500;
let quantity = 3;

let message = `Total Price: ${price * quantity} BDT`;
console.log(message); // Output: Total Price: 1500 BDT



৩. মাল্টি-লাইন স্ট্রিং (Multi-line Strings)
HTML টেমপ্লেট বা একাধিক লাইনের টেক্সট তৈরি করার ক্ষেত্রে ব্যাকটিক ব্যবহার করলে কোড অনেক পরিচ্ছন্ন থাকে।

Concat (+ Operator):

let htmlCard = "<div>\n" +
               "  <h2>Mohammad Abdullah</h2>\n" +
               "  <p>Developer</p>\n" +
               "</div>";


 Backtick (Template Literal):

 let htmlCard = `
<div>
  <h2>Mohammad Abdullah</h2>
  <p>Developer</p>
</div>
`;
