let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

var person = prompt("Enter your role: ");
if (person == "Employee"){
    person_role = "Access to Dietary Service!";
}
else if (person == "Enrolled Member"){
    person_role = "Access to Dietary Services and One-on-One interactions with a dietician.";
}
else if(person == "Subscriber"){
    person_role = "Partial Access to facilitate Dietary Services only.";
}
else if (person == "Non-Subscriber"){
    person_role = "Need to enroll or at least subscribe first to avail this facility.";
}
else {
    console.log("Enter a valid role!")
}
console.log("Role :", person_role);

let status = prompt("True or False: ")

let employee_status = status ? "Authenticated" : "Not authenticated";
