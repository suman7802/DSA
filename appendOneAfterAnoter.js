function append(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  let a = arr1.length;
  let b = arr2.length;

  let result = [];

  let i = 0;
  let j = 0;

  while (i < a || j < b) {
    if (i < a) {
      result.push(str1[i]);
      i++;
    }
    if (j < b) {
      result.push(str2[j]);
      j++;
    }
  }

  return result.join("").toString();
}

let string1 = "suman";
let string2 = "sharma";
let result = append(string1, string2);
console.log(result);
