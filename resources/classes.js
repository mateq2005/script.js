{
    //JavaScript Class Syntax
    class ClassName {
        constructor() { `...` };
    };
}

{
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        };
    };

    const car1 = new Car("Ford", 2017);
    const car2 = new Car("Audo", 2010);
}

{
    class ClassName {
        constructor() { `...` };
        method_1() { `...` };
        method_2() { `...` };
        method_3() { `...` };
    };
}

{
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        };
        age() {
            const date = new Date();
            return date.getFullYear - this.year;
        };
    };

    const car1 = new Car("Ford", 2017);
    console.log(`My car is ${car1.age()} years old.`)
}