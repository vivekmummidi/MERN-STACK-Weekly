let studentId: number = 101;
let studentName: string = "Rahul";
let isPresent: boolean = true;

let valueAny: any = "Hello";
valueAny = 123; // allowed
let valueUnknown: unknown = "TypeScript";
// void type (used in functions)
function displayMessage(): void {
 console.log("Welcome to TypeScript");
}

let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log(studentId);
console.log(studentName);
console.log(isPresent);
displayMessage(); 
