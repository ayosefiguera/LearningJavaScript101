function checkCashRegister(price, cash, cid) {
  var change = [];
  let NO_FUNDS = "INSUFFICIENT_FUNDS";
  let CLOSED = "CLOSED";
  let OPEN = "OPEN";
  let status;
  let value = {
    'ONE HUNDRED': 100,
    'TWENTY' : 20,
    'TEN' : 10,
    'FIVE' : 5,
    'ONE' : 1,
    'QUARTER' : 0.25,
    'DIME' : 0.1,
    'NICKEL' : 0.05,
    'PENNY' : 0.01
  };

  let refund = cash - price;
  let dineroTotal = cid.map(elm => elm[1]).reduce((previo, actual) => previo + actual)

  if (dineroTotal === refund){
    status = CLOSED;
    change = cid;
  }else if(dineroTotal < refund){
    status = NO_FUNDS;
    change = [];
    
  }else{
    for(let elm of cid.reverse()){
      while(value[elm[0]] <= refund && elm[1] > 0 ){

        if(change.length == 0 || change[change.length-1][0] != elm[0]){
          change.push([elm[0], value[elm[0]]]);

        }else{
          change[change.length-1][1] += value[elm[0]];
        }
        elm[1] -= value[elm[0]];
        refund = (refund - value[elm[0]]).toFixed(2);
      }
      
    }
    if(refund == 0 ){
      status=OPEN;

    }else{
      status = NO_FUNDS;
      change = [];
    }

  }
    return {status: status, change: change};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

