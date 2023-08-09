// JSON.stringify() converts a javascript value to JSON string
var val1 = {
    fname: "Jaivin",
    id: "21CE120",
    age: 18,
  };
  
  console.log("Type of json.stringify : ", typeof(JSON.stringify(val1)));
  console.log(JSON.stringify(val1));
  
  var val2 = [1, 2, 3, "4", true];
  console.log(JSON.stringify(val2));
  
  // The numbers Infinity and NaN, as well as the value null, are all considered null.
  // (But they would never be omitted.)
  
  val1 = {
    number1: NaN,
    number2: Infinity,
    function1: function greet() {
      console.log("Hi there");
    },
  };
  console.log("val1", JSON.stringify(val1)); // [null,null] function is ignored.
  
  var arr1 = ["OS", "DAA"];
  arr1["subject"] = "AWT";
  console.log("arr1", arr1);
  console.log("string of arr1", JSON.stringify(arr1)); // arr1["subject"] is not included
  
  //JSON.stringify(value)
  //JSON.stringify(value, replacer)
  //JSON.stringify(value, replacer, space)
  
  // replacer can be an array or a function
  var obj = {
    name: "Jaivin",
    ID: "21CE120",
    Age: 18,
    dontShow: "This will not included in string",
  };
  
  // replacer function
  function replacerFun(key, value) {
    if (key === "dontShow") {
      return "****";
    }
    return value;
  }
  console.log(JSON.stringify(obj, replacerFun));
  
  // replacer function is called recursively in case of nested objects.
  var obj2 = {
    name: "Jaivin",
    age: 18,
    address: {
      city: "Surat",
      state: "Gujarat",
    },
  };
  console.log(
    JSON.stringify(obj2, function (key, value) {
      if (key === "city") {
        return value.toUpperCase();
      }
      return value;
    })
  );
  
  // manipulation based on type
  // for example : remove property whose value has type string
  var obj3 = {
    subject: "AWT",
    credit: 4,
    marks: 100,
  };
  
  const strObj3 = JSON.stringify(obj3, function (key, value) {
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  });
  console.log(strObj3); // {"credit":4,"marks":70}
  
  // replacer array
  var replacerArr = ["name", "Age"];
  
  console.log(JSON.stringify(obj));
  // Only field specified in array will be in String
  console.log(JSON.stringify(obj, replacerArr));
  
  // Space parameter : For readability purpose
  
  //If the space parameter is a negative number, zero, or a non-string ,non-number value
  //it is treated as if the space parameter were omitted or set to null.
  
  var obj4 = {
    college: "CSPIT",
    departments: ["CE", "CSE", "IT", "EC"],
  };
  
  // if positive number then it specifies number of spaces.
  var strObj4 = JSON.stringify(obj4, null, 2);
  console.log(strObj4);
  // if any string then it will be used for indendation.
  strObj4 = JSON.stringify(obj4, null, "\t");
  console.log(strObj4);