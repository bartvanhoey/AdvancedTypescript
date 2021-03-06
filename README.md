# Advanced Typescript

## How to run the project

`CTRL+SHIFT, P` and choose: 'Tasks: Run Build Task `(CTRL+SHIFT, B)`'
`CTRL+F5` to launch the project.

## Desctructuring arrays

`let colors: string[] = ['green', ' yellow', 'blue'];`
`let [firstColor, secondColor, thirdColor] = colors;`

## Desctructuring objects

`let person = {
    name: 'Bart',
    address: '123 High Street'
    phone: '333-444-555'};`
`let { name, address phone } = person;`

## Spread operator

`let newBookIds = [10, 20];`
`let allBookIds = [1, 2, 3 ...newBookIds];`
`//  [1, 2, 3, 10, 20]`

### Tuple types

`interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}`
`let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];`

### Union types

`function printId(id: string | number){ console.log(id);  }`

### Intersection types

`function createPhablet(): Phone & Tablet {  
    // phablet is born
    // return type has all members of Phone & Tablet types
}`

### String Literal Types

`let employeeCategory: 'Manager' | 'Non-Manager' = 'Manager';`

### Type Aliases

`type StudentCategory = 'BaseSchoolStudent' | 'HighSchoolStudent' | 'UniversityStudent';`
`let studCategory: StudentCategory = 'BaseSchoolStudent';`
`let studCategory: StudentCategory = 'UniversityStudent';`
`let studCategory: StudentCategory = 'Employee'; // COMPILER ERROR`

### Polymorphic *this* types

### Declaration merging

### Type guards

* typeof Type Guards
  
`let myVariable: string | number = 123;`
`if (typeof myVariable === '') {`
    `//  myVariable is a string`
`} else {`
    `//  myVariable is a number`
`}`

* instanceof Type Guards

`let device = Phone | Tablet = new Phone();`
`if (device instanceof Phone) {`
    `// device.callSomeone();`
`}`

* User-Defined Type Guards

`interface Vehicle { numberOfWheels: number; }`
`function isVehicle(v: any): v is Vehicle {`
    `return (<Vehicle>v).numberOfWheels !== undefined;`
`}`
`let car = new Car()`
`if(isVehicle(car)){ // it's a vehicle}`

### Symbols

### Decorators
