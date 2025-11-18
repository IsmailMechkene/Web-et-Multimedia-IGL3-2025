let id: number | string;
id = 123;
id = "abc";

type A = { a: number };
type B = { b: string };
type AB = A & B;

let ab: AB = { a: 1, b: "hello" };

type Status = "pending" | "done" | "canceled";
let status: Status = "pending";

let value: unknown = "Hello world";
if (typeof value === "string") {
    let length: number = (value as string).length;
    console.log(length);
}
