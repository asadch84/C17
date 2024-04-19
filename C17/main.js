//DAY-17 Q-49 Function with Rest Parameters:
function enjoyHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("Task-49:- I enjoy ".concat(hobby, "."));
    });
}
// Example usage:
enjoyHobbies('reading', 'painting', 'hiking');
//Q-50  Multiline Template Literals: Describing my ideal Day
var idealDayDescription = "\nTask-50:-On my ideal day, I wake up early  morning and starts the day with Fajar Prayer \nfollowed by morning walk on Karachi Aiporport track. \nLater Enjoying a peaceful cup of coffee while listening to birds chirping in the garden.\n\n\nIn the afternoon, I wish to visit friends and family and read books, eat Biryani and then go for rest.\nIn evening i will go on to seaside and enjoys with family\n\nThis is my ideal day !!\n";
console.log(idealDayDescription);
//task-51, Refactoring to Arrow Functions:
// Original function
function calculateArea(length, width) {
    return length * width;
}
// Refactored to an arrow function
var calculateAreaArrow = function (length, width) { return length * width; };
// Example usage
console.log("Task-51:- My answer is  ".concat(calculateAreaArrow(6, 3), "."));
