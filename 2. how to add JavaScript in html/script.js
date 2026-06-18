প্রফেশনাল ওয়েব ডেভলপমেন্টে প্রধানত ৩টি উপায়ে এইচটিএমএল-এ জাভাস্ক্রিপ্ট যোগ করা যায়।

📥 ১. External Method (সবচেয়ে প্রফেশনাল ও স্ট্যান্ডার্ড নিয়ম)
বাস্তব জীবনের বড় বড় প্রজেক্টে জাভাস্ক্রিপ্ট কোড সবসময় আলাদা একটি ফাইলে রাখা হয় (যেমন: script.js)। তারপর সেই ফাইলটিকে HTML ফাইলের সাথে লিঙ্ক করিয়ে দেওয়া হয়। এতে কোড দেখতে খুব পরিচ্ছন্ন লাগে।
📄 HTML ফাইল (index.html):


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mohammad Abdullah - JS Profile</title>
</head>
<body>

    <h1>Welcome to My Website</h1>

    <script src="script.js"></script>
</body>
</html>


📄 JavaScript ফাইল (script.js):
// এই কোডটি আলাদা ফাইলে থাকবে
console.log("External JS Connected Successfully!");



📝 ২. Internal Method (ছোটখাটো প্র্যাকটিসের জন্য সেরা)
যদি আলাদা কোনো ফাইল তৈরি করতে না চাওয়া হয়, তবে HTML ফাইলের ভেতরেই <script> এবং </script> ট্যাগের মাঝখানে সরাসরি জাভাস্ক্রিপ্ট কোড লিখে কাজ চালিয়ে নেওয়া যাবে।


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Internal JS Example</title>
</head>
<body>

    <h1>Internal JavaScript Test</h1>

    <script>
        // সরাসরি এইচটিএমএল ফাইলের ভেতরেই কোড
        let userAge = ৩০;
        console.log("User Age is:", userAge);
    </script>

</body>
</html>



⚡ ৩. Inline Method (খুবই ছোট ও জরুরি কাজের জন্য)
HTML এলিমেন্টের বা ট্যাগের ভেতরেই সরাসরি এট্রিবিউট হিসেবে (যেমন: onclick) জাভাস্ক্রিপ্ট লিখে দেওয়া যায়। তবে বড় কোডের জন্য এটি কখনো ব্যবহার করা উচিত নয়।

<button onclick="alert('Hello Abdullah!')">Click Me</button>


১. রিয়েল প্রজেক্টে সবসময় আলাদা ফাইল বানিয়ে <script src="script.js"></script> দিয়ে লিঙ্ক করাই হলো আসল নিয়ম।
২. ওয়েবসাইট যেন ফাস্ট লোড হয়, সেজন্য স্ক্রিপ্ট ট্যাগটি সবসময় HTML ফাইলের একদম নিচে </body> এর ঠিক উপরে রাখতে হয়।





alert("Abdullah Arman");

document.write("<strong>Name :</strong> Abdullah Arman </br>");
document.write("<strong>Address :</strong> Rangpur, Bangladesh </br>");
document.write("<strong>Phone :</strong> <em>01568451112</em?");

console.log("Abdullah" + " " + "Aziz");

