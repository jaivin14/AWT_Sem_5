const obj1 = {
    name: "Jaivin",
    age: 18,
    address: {
      city: "Surat",
      country: "India",
    },
  };
  
  const Copy1 = { ...obj1 };
  Copy1.age = 20
  console.log("Original Object:", obj1);
  console.log("Copied ", Copy1);
  
  // using assign()
  const Copy2 = Object.assign({}, obj1);
  Copy2.name = "Jaivin Savaliya"
  console.log("Original Object:", obj1);
  console.log("Copied ", Copy2);
  
  const Copy3 = Object.fromEntries(Object.entries(obj1));
  console.log("Copied ", Copy3);
  
  // jason.stringify method
  const shallowCopy4 = JSON.parse(JSON.stringify(obj1));
  console.log("Shallow Copy (JSON):", shallowCopy4);
  