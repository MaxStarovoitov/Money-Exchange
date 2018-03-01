module.exports = function makeExchange(currency) {
  var h,
    q,
    d,
    n,
    p,
    result = 0,
    query = { 'H': 0, 'Q': 0, 'D': 0, 'N': 0, 'P': 0 },
    msg = [];
    msg.false = 'You are rich, my friend! We dont have so much coins for exchange';

  if (currency >= 10000) { return(msg); }


  h = Math.floor(currency/50);

  if (h > 0){
        query.H = h;
    }

    result = currency % 50;


    q = Math.floor(result/25);

    if(q > 0){
        query.Q = q;
    }

    result = result % 25;


    d = Math.floor(result/10);

    if(d > 0){
        query.D = d;
    }

    result = result % 10;


    n = Math.floor(result/5);

    if(n > 0){
        query.N = n;
    }

    result = result % 5;

    p = result%5;

    if(p > 0){
        query.P = p;
    }


  return(query);
};
