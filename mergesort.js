// function split(wholeArray){
//   if(wholeArray.length === 1){
//     return wholeArray;
//   }
//   const middle = Math.floor(wholeArray.length/2);
//   const left = wholeArray.slice(0,middle);
//   const right = wholeArray.slice(middle);
//   return merge(split(left), split(right));
// }


// function merge(left,right){
//   const result = [];
//   leftIdx  = 0;
//   rightIdx = 0;

//   while(leftIdx < left.length && rightIdx < right.length){
//     if(left[leftIdx] < right[rightIdx]){
//       result.push(left[leftIdx]);
//       leftIdx++;
//     }
//     else{
//       result.push(left[leftIdx]);
//       leftIdx++;
//     }
//   }
//   return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
// }

function split(arr){
  if(arr.length === 1){
    return arr;
  }
  const middle = Math.round(arr.length/2);

  const left = arr.slice(0,middle);
  //console.log(left);
  const right = arr.slice(middle);
  //console.log(right);
  return merge(split(left), split(right));
}


function merge(leftArr, rightArr) {
var sortedArr = [];
console.log(leftArr[0]);
console.log(rightArr[0]);
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {


      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
