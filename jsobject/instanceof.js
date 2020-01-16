

var s1 = "abc";
var s2 = new String("abc");
console.log("primitive string instance String:", s1 instanceof String);
console.log("new String() instanceof String",s2 instanceof String);

var bool1 = false;
var bool2 = new Boolean(true);
console.log("primitive boolean instance Boolean:", bool1 instanceof Boolean);
console.log("new Boolean() instanceof Boolean", bool2 instanceof Boolean);

var num1 = 2;
var num2 = new Number(2);
console.log("primitive number instance Number:", num1 instanceof Number);
console.log("new Number() instanceof Number", num2 instanceof Number);