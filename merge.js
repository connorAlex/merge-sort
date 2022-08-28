function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.ceil(arr.length / 2);
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < half) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while (left.length != 0 && right.length != 0) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }

  while (left.length != 0) {
    result.push(left[0]);
    left.shift();
  }
  while (right.length != 0) {
    result.push(right[0]);
    right.shift();
  }

  return result;
}
