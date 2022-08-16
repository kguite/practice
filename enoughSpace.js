// https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
  }

  // if on + weight is more than cap, return on+wait - cap.  Otherwise, return 0

  