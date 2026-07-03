জাভাস্ক্রিপ্টে কোড লেখার কিছু নির্দিষ্ট এবং স্ট্যান্ডার্ড নিয়ম রয়েছে, যাকে Naming Convention বলা হয়। এই নিয়মগুলো মেনে চললে কোড পরিষ্কার (Clean) থাকে এবং অন্য ডেভেলপারদের জন্য তা বোঝা সহজ হয়।

১. মূল নিয়ম (Rules) — এগুলো ভাঙলে Error হবে 

// সঠিক
function myFunction() {}
function calculate_total() {}
function $special() {}
function _private() {}

// ভুল — এরর দিবে
function 1function() {}      // সংখ্যা দিয়ে শুরু করা যাবে না
function my-function() {}    // হাইফেন (-) ব্যবহার করা যাবে না
function my function() {}    // স্পেস দেওয়া যাবে না
function return() {}         // reserved keyword ব্যবহার করা যাবে না


নিয়মগুলো হলো:

নাম শুরু হতে হবে অক্ষর (letter), $ অথবা _ দিয়ে — সংখ্যা দিয়ে না
এরপর অক্ষর, সংখ্যা, $, _ থাকতে পারে
স্পেস বা হাইফেন (-) ব্যবহার করা যাবে না
JavaScript-এর reserved keyword (যেমন return, if, for, function) নাম হিসেবে ব্যবহার করা যাবে না
Case-sensitive — অর্থাৎ myFunc আর myfunc সম্পূর্ণ ভিন্ন 

২. camelCase — সবচেয়ে জনপ্রিয় কনভেনশন
জাভাস্ক্রিপ্টে ফাংশনের নাম সাধারণত camelCase স্টাইলে লেখা হয় — প্রথম শব্দ ছোট হাতের অক্ষরে শুরু হয়, পরের প্রতিটা শব্দের প্রথম অক্ষর বড় হাতের।

// সঠিক পদ্ধতি (camelCase) ❌
function calculateTotalAmount() { ... }
function getUserData() { ... }

// ভুল পদ্ধতি ❌
function calculatetotalamount() { ... } // পড়া কষ্টকর
function calculate_total_amount() { ... } // এটি Python-এ ব্যবহৃত হয় (snake_case)


function getUserData() {}
function calculateTotalPrice() {}
function isValidEmail() {}
function fetchDataFromServer() {}


৩. ফাংশনের নাম হওয়া উচিত ক্রিয়াবাচক (Verb দিয়ে শুরু)
ফাংশন যেহেতু কোনো একটি কাজ সম্পন্ন করে, তাই ফাংশনের নাম সবসময় একটি Verb (ক্রিয়াপদ) দিয়ে শুরু হওয়া উচিত। এটি দেখলে যেন সহজেই বোঝা যায় ফাংশনটি কী কাজ করছে।

সাধারণত নিচের প্রিফিক্স (Prefix) বা শব্দগুলো বহুল ব্যবহৃত হয়:

get... – কোনো তথ্য বা মান পাওয়ার জন্য (যেমন: getName(), getUserId())

set... – কোনো মান সেট বা পরিবর্তন করার জন্য (যেমন: setTheme(), setAge())

calc... – কোনো হিসাব-নিকাশ করার জন্য (যেমন: calcDiscount())

create... – নতুন কিছু তৈরি করার জন্য (যেমন: createCard())

check... – কোনো কিছু পরীক্ষা করার জন্য (যেমন: checkPermission())

function getName() {}       // কিছু "get" করছে
function setAge(age) {}     // কিছু "set" করছে
function createUser() {}    // কিছু "create" করছে
function deleteItem() {}    // কিছু "delete" করছে
function updateProfile() {} // কিছু "update" করছে
function calculateSum() {}  // কিছু "calculate" করছে


get              কিছু রিটার্ন করে           getUserName()

set              কিছু পরিবর্তন/সেট করে    setPassword()

is / has         boolean রিটার্ন করে       isValid(), hasPermission()

create           নতুন কিছু বানায়          createAccount()

delete / remove  কিছু মুছে ফেলে           removeItem()

update           কিছু আপডেট করে        updateUser()

handle           ইভেন্ট হ্যান্ডেল করে       handleClick()

fetch            ডেটা আনে (সাধারণত API থেকে)     fetchPosts()

calculate        হিসাব করে               calculateTax()

validate         যাচাই করে               validateForm()

renderUI         দেখায়/আঁকে             renderPage()




৪. Boolean রিটার্ন করা ফাংশনে is, has, can ব্যবহার
যদি কোনো ফাংশন কেবল true অথবা false রিটার্ন করে, তবে তার নাম এমন হওয়া উচিত যা একটি প্রশ্ন নির্দেশ করে। এর জন্য নামের শুরুতে is, has, বা can ব্যবহার করা ভালো।

// দেখে সহজেই বোঝা যাচ্ছে এগুলো true/false দিবে
function isActive() { ... }
function hasPermission() { ... }
function canLogin() { ... }

এই ফাংশনগুলো রান করলে উত্তর সবসময় true অথবা false আসবে। এগুলোকে প্রশ্নবোধক নাম বলা যায়:

is... ➔ কোনো কিছু "হয় কি না" তা পরীক্ষা করতে।

উদাহরণ: isLoggedIn(), isEmailValid() (ইউজার লগইন আছে কি না, বা ইমেইল সঠিক কি না)।

has... ➔ কোনো কিছু "আছে কি না" তা দেখতে।

উদাহরণ: hasToken(), hasError() (টোকেন আছে কি না, বা কোনো এরর আছে কি না)।

can... ➔ কোনো কাজ "করতে পারবে কি না" (অনুমতি)।

উদাহরণ: canEditPost(), canAccess() (পোস্ট এডিট করতে পারবে কি না)।






৫. সার্ভার বা ডেটাবেজের কাজ (fetch, load, send, upload)

ইন্টারনেট বা সার্ভার থেকে ডেটা আনা-নেওয়ার ক্ষেত্রে এই নামগুলো:

fetch... বা load... ➔ এপিআই (API) বা সার্ভার থেকে ডেটা লোড করার জন্য।

উদাহরণ: fetchProducts(), loadComments() (সার্ভার থেকে প্রোডাক্ট বা কমেন্ট টেনে আনছে)।

send... বা post... ➔ সার্ভারে কোনো ডেটা পাঠানোর জন্য।

উদাহরণ: sendFeedback(), postComment() (ফিডব্যাক বা কমেন্ট সার্ভারে পাঠাচ্ছে)।




৬. নতুন কিছু তৈরি বা ডিলিট করা (create, delete, remove, clear)

create... বা make... ➔ নতুন কোনো অবজেক্ট বা এলিমেন্ট তৈরি করা।

উদাহরণ: createNewUser(), createInvoice() (নতুন ইউজার বা ইনভয়েস বানাচ্ছে)।

delete... বা remove... ➔ কোনো কিছু মুছে ফেলা।

উদাহরণ: deleteAccount(), removeItemFromCart() (অ্যাকাউন্ট ডিলিট বা কার্ট থেকে আইটেম বাদ দেওয়া)।

clear... ➔ সব কিছু একদম ফাঁকা বা রিসেট করে দেওয়া।

উদাহরণ: clearSession(), clearForm() (সেশন বা ফর্মের সব ডেটা মুছে ফেলা)।





৭. হিসাব-নিকাশ এবং রূপান্তর (calc, format, parse)

calc... (Calculate) ➔ যেকোনো গাণিতিক হিসাবের জন্য।

উদাহরণ: calcTax(), calcDiscount() (ট্যাক্স বা ডিসকাউন্ট হিসাব করা)।

format... ➔ ডেটার রূপ বা চেহারা সুন্দর করার জন্য।

উদাহরণ: formatDate(), formatCurrency() (তারিখ বা টাকার অঙ্ককে সুন্দর করে সাজানো, যেমন: 1000 কে $1,000 করা)।

parse... ➔ এক ধরনের ডেটাকে অন্য ধরনের ডেটায় রূপান্তর করা।

উদাহরণ: parseJsonData() (স্ট্রিং ডেটাকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর)।


৮. কোনো কিছু শুরু, শেষ বা দেখানো (show, hide, toggle, open, close)

ইউজার ইন্টারফেস (UI) বা স্ক্রিনের কোনো কিছু নিয়ন্ত্রণ করতে এগুলো ব্যবহৃত হয়:

show... / hide... ➔ স্ক্রিনে কোনো কিছু দেখানো বা লুকানো।

উদাহরণ: showModal(), hideLoader().

toggle... ➔ একবার অন এবং একবার অফ করা (যেমন সুইচের মতো)।

উদাহরণ: toggleMenu() (মেনু খোলা থাকলে বন্ধ করবে, বন্ধ থাকলে খুলবে)।


💡 শর্টকাট টেকনিক (The Golden Rule)

[Action/Verb] + [Noun/Subject]

update (অ্যাকশন) + Profile (সাবজেক্ট) = updateProfile() ➔ প্রোফাইল আপডেট করার ফাংশন।

validate (অ্যাকশন) + Password (সাবজেক্ট) = validatePassword() ➔ পাসওয়ার্ড চেক করার ফাংশন।




জাভাস্ক্রিপ্ট ফাংশন নামকরণের স্ট্যান্ডার্ড তালিকা (Cheat Sheet for Coding)

get... ➔ কোনো তথ্য বা ডেটা নিয়ে আসার জন্য (যেমন: getUserData(), getCartTotal())।

set... ➔ কোনো মান বা ভ্যালু সেট/পরিবর্তন করার জন্য (যেমন: setTheme('dark'), setAge(25))।

is... ➔ কোনো কিছু "হয় কি না" তা যাচাই করতে, এটি true/false দেয় (যেমন: isLoggedIn(), isEmailValid())।

has... ➔ কোনো কিছু "আছে কি না" তা দেখতে, এটিও true/false দেয় (যেমন: hasToken(), hasError())।

can... ➔ কোনো কাজের "অনুমতি আছে কি না" তা চেক করতে (যেমন: canEditPost(), canAccess())।

should... ➔ কোনো শর্ত বা কাজ এই মুহূর্তে "করা উচিত কি না" তা যাচাই করতে (যেমন: shouldUpdate())।

fetch... ➔ এপিআই (API) বা সার্ভার থেকে ডেটা টেনে আনার জন্য (যেমন: fetchProducts(), fetchUsers())।

load... ➔ স্ক্রিনে বা ব্যাকগ্রাউন্ডে কোনো কিছু লোড করার জন্য (যেমন: loadComments(), loadPage())।

send... ➔ সার্ভারে বা অন্য কোথাও কোনো ডেটা পাঠানোর জন্য (যেমন: sendFeedback(), sendEmail())।

post... ➔ সার্ভারে নতুন কোনো ডেটা সাবমিট বা জমা দেওয়ার জন্য (যেমন: postComment(), postData())。

create... ➔ নতুন কোনো অবজেক্ট, ডেটা বা এলিমেন্ট তৈরি করতে (যেমন: createNewUser(), createInvoice())।

make... ➔ create এর মতোই, নতুন কিছু প্রস্তুত করতে ব্যবহার করা হয় (যেমন: makeRequest())।

delete... ➔ কোনো কিছু চিরতরে মুছে ফেলার জন্য (যেমন: deleteAccount(), deletePost())।

remove... ➔ কোনো লিস্ট বা কার্ট থেকে সাময়িকভাবে কিছু বাদ দেওয়ার জন্য (যেমন: removeItemFromCart())।

clear... ➔ সবকিছু একদম ফাঁকা বা রিসেট করে দেওয়ার জন্য (যেমন: clearSession(), clearForm())。

update... ➔ বিদ্যমান কোনো তথ্য পরিবর্তন বা আপগ্রেড করার জন্য (যেমন: updateProfile(), updateStatus())。

calc... ➔ যেকোনো গাণিতিক হিসাব-নিকাশ করার জন্য (যেমন: calcTax(), calcDiscount())।

format... ➔ ডেটার রূপ বা চেহারা সুন্দর করে সাজানোর জন্য (যেমন: formatDate(), formatCurrency())।

parse... ➔ এক ধরনের ডেটাকে অন্য ধরনের ডেটায় রূপান্তর করতে (যেমন: parseJsonData())।

validate... ➔ ইনপুট বা ফর্মের তথ্যগুলো সঠিক আছে কি না তা পরীক্ষা করতে (যেমন: validatePassword(), validateForm())।

show... ➔ স্ক্রিনে কোনো কিছু প্রদর্শন করার জন্য (যেমন: showModal(), showNotification())।

hide... ➔ স্ক্রিন থেকে কোনো কিছু লুকিয়ে ফেলার জন্য (যেমন: hideLoader(), hideMenu())。

toggle... ➔ সুইচের মতো একবার অন এবং একবার অফ করার জন্য (যেমন: toggleMenu(), toggleTheme())。

open... ➔ কোনো পপ-আপ, মোডাল বা উইন্ডো খোলার জন্য (যেমন: openModal())।

close... ➔ খোলা থাকা কোনো কিছু বন্ধ করার জন্য (যেমন: closeModal())।

handle... ➔ কোনো ইভেন্ট বা ঘটনা ঘটলে তা সামলানোর জন্য (যেমন: handleClick(), handleSubmit())।



১.১ কেস স্টাইল (Case Styles)

// ✅ camelCase - সবচেয়ে বেশি ব্যবহৃত (Recommended)
function getUserData() {}
function calculateTotalPrice() {}
function fetchUserProfile() {}

// ❌ PascalCase - সাধারণত Class/Constructor এর জন্য
function User() {}  // Class এর জন্য ঠিক
function getUser() {} // Function এর জন্য ভুল

// ❌ snake_case - JavaScript-এ ব্যবহার করা হয় না
function get_user_data() {} // Avoid

// ❌ kebab-case - JavaScript-এ বৈধ নয়
function get-user-data() {} // Syntax Error!



১.২ নামকরণের সাধারণ নিয়ম

// 1. অর্থপূর্ণ নাম দিন (Meaningful names)
// ❌ Bad
function a() {}
function do() {}
function temp() {}

// ✅ Good
function calculateTotal() {}
function validateEmail() {}
function fetchUserById() {}

// 2. Verb দিয়ে শুরু করুন (Start with a verb)
// ❌ Bad
function userData() {}
function emailValidation() {}

// ✅ Good
function getUserData() {}
function validateEmail() {}

// 3. ফাংশনের কাজ বোঝান (Describe what it does)
// ❌ Bad
function process() {}

// ✅ Good
function processPayment() {}
function processUserRegistration() {}



২. বিভিন্ন ধরনের ফাংশনের নামকরণ

২.১ Getter/Setter ফাংশন

// Getter - কিছু রিটার্ন করে
function getUserName() {}
function getTotalPrice() {}
function getActiveUsers() {}

// Setter - কিছু সেট করে
function setUserName(name) {}
function setTotalPrice(price) {}
function setUserStatus(status) {}

// Boolean Getter - 'is', 'has', 'can', 'should' দিয়ে শুরু
function isActive() {}
function hasPermission() {}
function canEdit() {}
function shouldUpdate() {}
function isValid() {}
function isEmailVerified() {}

// উদাহরণ
class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._isActive = true;
    }
    
    // Getter
    getName() {
        return this._name;
    }
    
    // Setter
    setName(name) {
        this._name = name;
    }
    
    // Boolean Getter
    isActive() {
        return this._isActive;
    }
    
    hasPermission(role) {
        return role === 'admin' || role === 'moderator';
    }
}



২.২ Event Handler ফাংশন

// Event Handler - 'handle' বা 'on' দিয়ে শুরু
function handleClick() {}
function handleSubmit() {}
function handleKeyPress() {}

function onUserLogin() {}
function onFormSubmit() {}
function onButtonClick() {}

// React-style event handlers
const handleChange = (event) => {}
const handleSubmit = (event) => {}

// উদাহরণ
button.addEventListener('click', handleClick);
form.addEventListener('submit', handleSubmit);

// Event handler with specific action
function onLoginSuccess(user) {}
function onLoginError(error) {}
function onDataReceived(data) {}


২.৩ Utility/Helper ফাংশন

// Helper/Utility ফাংশন - কাজের ধরন বোঝায়
function formatDate(date) {}
function capitalizeString(str) {}
function generateId() {}
function validateEmail(email) {}
function sanitizeInput(input) {}
function sortByDate(items) {}
function filterByCategory(items, category) {}

// উদাহরণ
function formatCurrency(amount, currency = 'BDT') {
    return `${currency} ${amount.toFixed(2)}`;
}

function generateRandomId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
}


২.৪ Async ফাংশন

// Async ফাংশন - 'fetch', 'load', 'get' দিয়ে শুরু
async function fetchUserData() {}
async function loadConfiguration() {}
async function getApiData() {}

// Promise-returning functions
function fetchUsers() {
    return new Promise((resolve, reject) => {});
}

// উদাহরণ
async function fetchUserProfile(userId) {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
}

async function loadInitialData() {
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);
    return { users, posts };
}


২.৫ Callback ফাংশন

// Callback প্যারামিটার - 'callback', 'onSuccess', 'onError' নামে
function fetchData(url, onSuccess, onError) {
    fetch(url)
        .then(response => response.json())
        .then(onSuccess)
        .catch(onError);
}

// Callback with context
function processData(data, callback) {
    // ... processing
    callback(null, result);
}

// Example with error-first callback (Node.js style)
function readFile(path, callback) {
    // callback(error, data)
}



৩. অ্যাডভান্সড নামকরণ কনভেনশন

৩.১ Factory Functions

// Factory functions - 'create' দিয়ে শুরু
function createUser(name, age) {
    return {
        name,
        age,
        getName: () => name,
        getAge: () => age
    };
}

function createProduct(name, price) {
    return {
        name,
        price,
        getName: () => name,
        getPrice: () => price
    };
}

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// উদাহরণ
const user = createUser('John', 30);
const product = createProduct('Laptop', 1000);


৩.২ Converter/Transformer ফাংশন

// Converter ফাংশন - 'to' বা 'from' দিয়ে শুরু
function toJSON(data) {}
function toDate(string) {}
function toUpperCase(string) {}

function fromJSON(json) {}
function fromDate(date) {}

// উদাহরণ
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function toBase64(str) {
    return Buffer.from(str).toString('base64');
}

function fromBase64(base64) {
    return Buffer.from(base64, 'base64').toString();
}


৩.৩ Validator/Checker ফাংশন

// Validator - 'is', 'has', 'can', 'should' দিয়ে শুরু
function isEmailValid(email) {}
function isPhoneNumber(phone) {}
function hasSpecialCharacters(str) {}
function canAccessResource(user, resource) {}
function shouldRedirect(url) {}

// উদাহরণ
function isStrongPassword(password) {
    // মিনিমাম ৮ ক্যারেক্টার,至少一个大写字母,一个数字,一个特殊字符
    return password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[0-9]/.test(password) &&
           /[^A-Za-z0-9]/.test(password);
}

function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

function hasRequiredFields(obj, requiredFields) {
    return requiredFields.every(field => obj[field] !== undefined);
}



৪. বিশেষ ক্ষেত্রে নামকরণ

৪.১ Private ফাংশন (Convention)

class UserService {
    constructor() {
        this._cache = new Map();
    }
    
    // Public method
    getUser(id) {
        if (this._cache.has(id)) {
            return this._cache.get(id);
        }
        const user = this._fetchUser(id);
        this._cache.set(id, user);
        return user;
    }
    
    // Private method (convention with underscore)
    _fetchUser(id) {
        // Internal use only
        return { id, name: 'John' };
    }
    
    // Private method (convention)
    _validateUser(user) {
        return user && user.id;
    }
}

// Private function (module pattern)
function _helperFunction() {
    // This is a private helper
}

function publicFunction() {
    _helperFunction();
    // ...
}


৪.২ IIFE (Immediately Invoked Function Expression)

// IIFE - সাধারণত নাম দেয়া হয় না, অথবা 'init' দিয়ে শুরু
(function() {
    // initialization code
})();

// Named IIFE
(function initApp() {
    console.log('App initialized');
})();

// Modern IIFE with async
(async function loadData() {
    await fetchData();
})();



৪.৩ Higher-Order Functions

// Higher-order functions - ফাংশন রিটার্ন করে
function createLogger(prefix) {
    return function log(message) {
        console.log(`[${prefix}] ${message}`);
    };
}

function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

function withRetry(fn, maxAttempts = 3) {
    return async function(...args) {
        let attempts = 0;
        while (attempts < maxAttempts) {
            try {
                return await fn(...args);
            } catch (error) {
                attempts++;
                if (attempts === maxAttempts) throw error;
            }
        }
    };
}





টিমে কাজ করার সময় নামকরণ গাইডলাইন

// 📋 Team Naming Convention Document

// 1. File naming
// - user.service.js
// - user.controller.js
// - user.model.js
// - user.routes.js

// 2. Function naming in service
class UserService {
    // CRUD Operations
    createUser() {}
    getUser() {}
    updateUser() {}
    deleteUser() {}
    
    // Business Logic
    activateUser() {}
    deactivateUser() {}
    resetPassword() {}
    
    // Queries
    findUsers() {}
    searchUsers() {}
    filterUsers() {}
}

// 3. Function naming in controller
class UserController {
    // HTTP Methods + Resource
    getUsers() {}
    getUser() {}
    createUser() {}
    updateUser() {}
    deleteUser() {}
    
    // Additional endpoints
    activateUser() {}
    uploadAvatar() {}
    changePassword() {}
}

// 4. Function naming in routes
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


বিশেষ টিপস

// 1. Use consistent prefixes
// ✅ Good
getUser()
getProduct()
getOrder()

// 2. Use consistent suffixes
// ✅ Good
validateEmail()
validatePassword()
validatePhone()

// 3. Use meaningful verbs
// ✅ Good
saveUser()    // Saves to database
updateUser()  // Updates existing
deleteUser()  // Removes
createUser()  // Creates new

// 4. Use context-aware names
// Inside user module
function getProfile() {}
function updateProfile() {}

// Inside product module
function getDetails() {}
function updateStock() {}

// 5. Use domain-specific terms
// E-commerce
function calculateShipping() {}
function applyDiscount() {}
function processPayment() {}

// Healthcare
function checkSymptoms() {}
function prescribeMedication() {}
function scheduleAppointment() {}





