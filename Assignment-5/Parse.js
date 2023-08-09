// JSON.parse() is a method to parse a JSON string.

// Two parameters :
// JSON.parse(str)
// JSON.parse(str, reviver)

var str1 = `{"x":5,"y":"some string value"}`;
var obj1 = JSON.parse(str1);
console.log(typeof obj1);
console.log(obj1);

// Review Function
// If a reviver is specified, the value computed by parsing is transformed before being returned as object.
var str2 = `{"name":"Abhi","age":"19","city":"Rajkot"}`;
console.log("Without Review Function :");
var obj2 = JSON.parse(str2);
console.log(obj2);
console.log("type of age : ", typeof obj2.age); // string

// this reviewer function will convert string-age to int type before creating obj
// reviewer function runs for all key-value pair of obj.
console.log("After adding  Review Function :");
obj2 = JSON.parse(str2, function (key, value) {
  if (key === "age") {
    return parseInt(value);
  }
  return value;
});
console.log(obj2);
console.log("type of age : ", typeof obj2.age); // number
