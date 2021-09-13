function palindrome(str) {
  str = str.toLowerCase().replace(/[^\w]/g, '').replace(/_/g, '');
  let reverseStr = str.split('').reverse().join('');
  return reverseStr === str;
}

palindrome("0_0 (: /-\ :) 0-0") 
