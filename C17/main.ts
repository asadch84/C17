//DAY-17 Q-49 Function with Rest Parameters:
function enjoyHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`Task-49:- I enjoy ${hobby}.`);
    });
}

// Example usage:
enjoyHobbies('reading', 'painting', 'hiking');

//Q-50  Multiline Template Literals: Describing my ideal Day
const idealDayDescription = `
Task-50:-On my ideal day, I wake up early  morning and starts the day with Fajar Prayer 
followed by morning walk on Karachi Aiporport track. 
Later Enjoying a peaceful cup of coffee while listening to birds chirping in the garden.


In the afternoon, I wish to visit friends and family and read books, eat Biryani and then go for rest.
In evening i will go on to seaside and enjoys with family

This is my ideal day !!
`;

console.log(idealDayDescription);


//task-51, Refactoring to Arrow Functions:

// Original function
function calculateArea(length:number, width:number):number {
    return length * width;
}

// Refactored to an arrow function
let calculateAreaArrow = (length:number, width:number):number => length * width;

// Example usage

console.log(`Task-51:- My answer is  ${calculateAreaArrow(6, 3)}.`);
