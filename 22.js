//call by value
 
 
    function ByValue(a, b) {
        var temp = a;
        a = b;
        b = a;
    }
    
    var a= 5;
    var b = 10;
    console.log("Before swap a =", a, ", b =", b);
     ByValue(a, b);
    console.log("After swap: a =", a, ", b =", b);


    function ByReference(obj, key1, key2) {
        var temp = obj[key1];
        obj[key1] = obj[key2];
        obj[key2] = temp;
    }
    
    var myObj = { x: 5, y: 10 };
    console.log("Before swape: x =", myObj.x, ", y =", myObj.y);
    ByReference(myObj, 'x', 'y');
    console.log("After swape: x =", myObj.x, ", y =", myObj.y);
    