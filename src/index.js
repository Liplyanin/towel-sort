
// You should implement your task here.
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
module.exports = function towelSort (matrix) {
  let arr =[];
if(matrix== undefined||matrix.length==0){
  return [];
}else{
  for(let i=0; i<=matrix.length-1; i++){
    if(i==0||i % 2 == 0){
      let newArr = matrix[i];
      newArr.forEach(function(element) {
        arr.push(element);
      });
    }else{
      let newArr = matrix[i].reverse();
      newArr.forEach(function(element) {
        arr.push(element);
      });
    }
  }
  return arr;
}
}
