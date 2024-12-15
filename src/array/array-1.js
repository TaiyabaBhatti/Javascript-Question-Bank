// Q-43
// 43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

const unZip = (array) => {
  let arr1 = array[0];
  let arr2 = array[1];
  let newArr = [];
  for (let index = 0; index < arr1.length; index++) {
    newArr.push([arr1[index]]);
  }

  for (let index = 0; index < newArr.length; index++) {
    if (index < arr2.length) {
      newArr[index].push(arr2[index]);
    } else {
      break;
    }
  }

  return newArr;
};

console.log(
  unZip([
    ["a", true, 3, 8],
    ["b", 2, false, 7],
  ])
);


// Q-45



console.log([1, -2, -2, 3, 4, -5, -6, -5]);