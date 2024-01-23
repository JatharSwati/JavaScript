

function f1_Variables() {

    // Variables
    // Variables are Containers for Storing Data.
    // JavaScript Variables can be declared in 4 ways
    // 1. Automatically     -->     x = 5;
    // 2. Using var         -->     var x = 10;
    // 3. Using let         -->     let x = 25;
    // 4. Using const       -->     const pi = 3.14;
    

    // Variables / Identifiers Naming Rules:
    // All JavaScript variables must be identified with unique names.
    // Names can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar ($) signs.
    // Names must begin with a letter.   --> eg. firstName, lastName
    // Names can also begin with $ and _
    // Names can not begin with digits.
    // Names are case sensitive (y and Y are different variables).
    // Reserved words (like JavaScript keywords) cannot be used as names.


    // var keyword: 
    // Variables declared with var have Global Scope.
    // Variables declared with var must be Declared before use.
    // Variables declared with var can be Redeclared.


    // let keyword: 
    // Variables declared with let have Block Scope.
    // Variables declared with let must be Declared before use.
    // Variables declared with let cannot be Redeclared in the same scope.


    // const keyword: 
    // Variables defined with const cannot be Redeclared
    // Variables defined with const cannot be Reassigned
    // Variables defined with const have Block Scope


    // 1. Automatically

    var msg = "";

    x = 10;
    y = 20;
    z = x + y;

    msg = `z = x + y    --> ${z}`;


    // 2. Using var
    
    var num1 = 30;
    var num2 = 20;
    var sum = num1 + num2;

    msg += `\nvar sum = num1 + num2  --> ${sum}`;


    // 3. Using let        
    
    let n1 = 12;
    let n2 = 17;
    let s = n1 + n2;

    msg += `\nlet s = n1 + n2  --> ${s}`;


    // 4. Using const    

    const a = 3.14;
    const b = 9.81;
    const c = a + b;

    msg += `\nconst c = a + b  --> ${c}`;

    alert(msg);
}


// JavaScript Operators
// There are different types of JavaScript operators :

function f2_ArithmeticOperators() {

// 1] Arithmetic Operators - Arithmetic Operators are used to perform arithmetic on numbers.

    let msg = "";
    
    // (1) Addition
    let x1 = 30;
    let y1 = 10;
    let z1 = x1 + y1
    msg += `30 + 10  --> ${z1}`;

     // (2) Subtraction
     let x2 = 15;
     let y2 = 10;
     let z2 = x2 - y2
     msg += `\n15 - 10  --> ${z2}`;

     // (3) Multiplication
     let x3 = 6;
     let y3 = 3;
     let z3 = x3 * y3;
     msg += `\n6 * 3  --> ${z3}`;

     // (4) Exponentiation
     let x4 = 2;
     let y4 = 5;
     let z4 = x4 ** y4;
     msg += `\n2 ** 5  --> ${z4}`;

     // (5) Division
     let x5 = 25;
     let y5 = 5;
     let z5 = x5 / y5;
     msg += `\n25 / 5  --> ${z5}`;

      // (5) Modulus
      let x6 = 13;
      let y6 = 2;
      let z6 = x6 % y6;
      msg += `\n13 % 2  --> ${z6}`;

      // (6) Increment
      let x7 = 6;
      x7++;
      msg += `\n6++  --> ${x7++}`;

    alert(msg);
}

function f3_Assignmentoperators(){

    // 2] Assignment operators - Assignment operators assign values to JavaScript variables.

    let msg = "";

    // (1) =        x = y       x = y
    let p1 = 5;
    msg += `p1 = 5  --> ${p1 = 5}`;

    // (2) +=	    x += y	    x = x + y
    let p2 = 10;
    msg += `\n10 += 5  --> ${p2 += 5}`;

    // (3) -=       x -= y      x = x - y
    let p3 = 15; 
    msg += `\n15 -= 5  --> ${p3 -= 5}`;

    // (4) *=       x *= y      x = x * y
    let p4 = 25;
    msg += `\n25 *= 5  --> ${p4 *= 5}`;

    // (5) /=       x /= y      x = x / y
    let p5 = 35;
    msg += `\n35 /= 7  --> ${p5 /= 7}`;

    // (6) %=       x %= y      x = x % y
    let p6 = 18;
    msg += `\n18 %= 5  --> ${p6 %= 5}`;
    
    // (7) **=      x **= y     x = x ** y
    let p7 = 5;
    msg += `\n5 **= 2  --> ${p7 ** 2}`;

    alert(msg);
}

function f4_ComparisonOperators() {

    // 3] Comparison Operators -

    let msg = "";

    // (1) Equal to(==)
    let q1 = 6;
    msg += `\n6 == 7  --> ${q1 == 7}`;

    // (2) Equal value and Equal type(===)
    let q2 = 10;
    msg += `\n10 === "10"  --> ${q2 === "10"}`;

    // (3) Not equal(!=)
    let q3 = 24;
    msg += `\n24 != 20  --> ${q3 != 20}`;

    // (4) Not equal value or Not equal type(!==)
    let q4 = 5;
    msg += `\n5 !== 8  --> ${q4 !== "5"}`;

    // (5) Greater than(>)
    let q5 = 7;
    msg += `\n7 > 4  --> ${q5 > 4}`;

    // (6) Less than(<)
    let q6 = 25;
    msg += `\n25 < 15  --> ${q6 <15}`;

    // (7) Greater than or equal to(>=)
    let q7 = 2; 
    msg +=`\n2 >= 2  --> ${q7 >= 2}`;

    // (8) Less than or equal to(<=)
    let q8 = 45;
    msg += `\n45 <= 27 --> ${q8 <= 27}`;

    // (9) String Comparison
    let letter1 = "A";
    let letter2 = "B";
    let result = letter1 < letter2;
    msg +=`\nIs A less than B?  --> ${result}`;

    // (10) String Addition
    let firstName = "Swati";
    let lastName = "Jathar";
    let fullName = firstName + " " + lastName;
    msg += `\nFull Name  --> ${fullName}`;

    alert(msg);
}

function f5_LogicalOperators() {

    // 4] Logical Operators -

    let msg = "";

    // (1) Logical and(&&)
    let r1 = 6;
    let s1 = 3;
    msg += `\n6 < 10 && 3 > 1  --> ${r1 <10 && s1 >1}`;

    // (2) Logical or(||)
    let r2 = 8;
    let s2 = 4;
    msg += `\n8 == 5 || 4 == 5  --> ${r2 == 5 || s2 == 5}`;

    // (3) Logical not(!)
    let r3 = 5;
    let s3 = 2;
    msg += `\n5 === 2  --> ${!(r3 === 2)}`;

    // (4) Type Operators
    msg += `\nType Operator  --> ${"'Swati' is " + typeof "Swati"}`;

    alert(msg);
}
