function deepEqual(valOne, valTwo) {
  if (valOne === valTwo) {
    return true;
  } else if (
    (typeof valOne == "object" && valOne != null) ||
    (typeof valTwo == "object" && valTwo != null)
  ) {
    return false;
  } else {
    var a = 0;
    var b = 0;

    for (var prop in valOne) {
      a += 1;
    }

    for (var prop in valTwo) {
      b += 1;
      if (!(prop in valOne) || !deepEqual(valone[prop], valTwo[prop])) {
        return false;
      }
    }
    return a == b;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
