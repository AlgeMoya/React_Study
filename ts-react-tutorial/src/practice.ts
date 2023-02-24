import { isAccessor } from "typescript";

let count = 0; // 숫자
count += 1;
// count = "갑자기 분위기 문자열"; // 이러면 에러가 납니다!
// src/practice.ts:3:1 - error TS2322: Type 'string' is not assignable to type 'number'.

const message: string = "hello world"; // 문자열
const done: boolean = true; // 불리언 값
const nubmers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ["hello", "world"]; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면... 안된다!
// src/practice.ts:10:15 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(message);

let mightbeUndefined: string | undefined = undefined; // 누구처럼 string 일수도 있고 undefined일수도 있습니다.
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나임
color = "yellow"; // 아는 거라 잘 받아먹음
// color = "green"; // 에러 발생! // 먹으면 안돼 지지
// src/practice.ts:20:1 - error TS2322: Type '"green"' is not assignable to type '"red" | "orange" | "yellow"'.

function sum(x: number, y: number): number {
  // return null; // 이러면 오류남
  return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// 반환이 없는 함수는 반환형을 void로 지정
function returnNothing(): void {
  console.log("I am just saying hello world");
}

// interface: 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법
// interface는 클래스가 가지고 있어야 할 특정 조건, 요구사항을 설정, 명시할 수 있다.
// 클래스를 선언할 때는 implements 키워드를 사용하여 해당 클래스가 특정 interface의 요구사항을 구현함을 명시한다.
// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // 'implements' 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시합니다.
  // radius: number; // 멤버 변수 radius 값을 설정합니다.

  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;

  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 에러 없이 작동
// console.log(rectangle.width); // width가 private이기 때문에 에러 발생!

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

const people: Person[] = [person, expert]; // interface를 상속시키면 이렇게 부모 interface의 형태로 배열에 넣을 수 있어 편리하다.
