function cipherDic(rot=13){
  let dic = {};
  let firstLetter = 'A'.charCodeAt();
  let lastLetter = 'Z'.charCodeAt();
 
  for (let i=firstLetter, j = 1; i <= lastLetter-rot; i++, j++ ){
    dic[String.fromCharCode(i)] = String.fromCharCode(i+rot);
    dic[String.fromCharCode(lastLetter-rot+j)] = String.fromCharCode(i);
  }
  return dic;
}

function rot13(str) {
  let cipher = '';
  let dic = cipherDic(13);

  cipher = str.split('').map((elm) => {
    return dic[elm] ? dic[elm]: elm
  }).join('');

  return cipher;
}

rot13("SERR PBQR PNZC");