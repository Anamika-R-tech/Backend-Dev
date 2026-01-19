// Original object
const user = {
  name: "Anamika",
  email: "anamika12@gmail.com",
  phone: 1234567890
};

// Object destructuring
const { name, email, phone } = user;
console.log(name);
console.log(email);
console.log(phone);

// ✅ Correct way (spread operator → copy)
const user1 = { ...user };

// Update name in copied object
user1.name = "Anamika Rai";

// Output
console.log("Original user:", user);
console.log("Updated user1:", user1);

// One-line update using spread operator
const updateUser = { ...user, address: "Mathura" };
console.log("User with address:", updateUser);

// Event loop 
// Synchronous vs Asynchronous
// call back queue
//microtask queue

//async
// console.log("Fetching data from db");
// let user;
// setTimeout(() => {
//     user ={name:"Yanshi", phonw:"297438", address:"mathura"};
//     console.log("setTimeout task");
// }, 0);

// console.log(uaer);
// Promise.resolve(() => console.log("task3"));

const fetchuser=(UserId) =>{
    return new Promise((resolve , reject) =>{
        const user = {
            1: {name:"Yanshi", phone:"297438", address:"mathura"},
            2: {name:"Amit", phone:"123456", address:"delhi"}
        })
}