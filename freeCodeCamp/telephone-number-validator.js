function telephoneCheck(str) {

  let regextrix = [
    /^\d{10}$/g,
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/g,
    /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/g,
    ]
  for (let elm of regextrix){
    if(elm.test(str)){
      return true;
    }
  }
  return false;
}

telephoneCheck("5555555");


