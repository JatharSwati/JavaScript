

function f1_Variables() {

    // Variables:
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

    var msg;

    x = 10;
    y = 20;
    z = x + y;

    msg = `z = x + y  --> ${z}`;


    // 2. Using var
    
    var num1 = 30;
    var num2 = 20;
    var sum = num1 + num2;

    msg += `\nvar sum = num1 + num2;  --> ${sum}`;


    // 3. Using let        
    
    let n1 = 12;
    let n2 = 17;
    let s = n1 + n2;

    msg += `\nlet s = n1 + n2;  --> ${s}`;


    // 4. Using const    

    const a = 3.14;
    const b = 9.81;
    const c = a + b;

    msg += `\nconst c = a + b;  --> ${c}`;

    alert(msg);
}