// https://www.codewars.com/kata/58cb43f4256836ed95000f97/
function findDifference(a, b) {
    let volume_a = a[0] * a[1] * a[2]
    let volume_b = b[0] * b[1] * b[2]
    let diff = volume_a - volume_b
    if (diff < 0) {
      return diff * -1
    }
    return diff
    }

