export const ReversingMode = {
  'None': 0,
  'SemiReversed': 1,
  'FullyReversed': 2
}

export default function sortByKey(array, key, reversing) {
  var sortedArray = array.sort(function(a, b){
    var x = a[key];
    if (x === undefined)
      return -1;
    var y = b[key];
    if (y === undefined)
      return 1;

    if (reversing == ReversingMode.SemiReversed)
      return y - x;
    return x - y;
  });

  if (reversing == ReversingMode.FullyReversed)
    return sortedArray.reverse();

  return sortedArray;
}
