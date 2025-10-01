{
    var a = 100; 
    let b = 200;  
    const c = 300; 

    console.log("Inside block:", a, b, c);
}

console.log("Outside block:", a); 
console.log("Outside block:", b); // b is not defined
console.log("Outside block:", c); // c is not defined


const c = 50;
c = 60; // cant assign to a constant variable
