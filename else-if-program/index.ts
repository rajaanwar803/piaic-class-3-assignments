

let age: number = 5;

if (age < 1) {
    console.log("Infant");

} else if (age >= 1 && age < 3) {
    console.log("Toddler");
    
} else if (age >= 3 && age <= 5) {
    console.log("Preschooler");
    
} else if (age > 5 && age <= 12) {
    console.log("School-age children");
    
} else if (age > 12 && age <= 19) {
    console.log("Teenager");
    
} else if (age > 19 && age <= 29) {
    console.log("Young adult");
    
} else if (age > 29 && age <= 59) {
    console.log("Middle-aged adult");
    
} else {
    console.log("Older adult");
    
}

