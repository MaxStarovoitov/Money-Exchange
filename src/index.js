module.exports = function makeExchange(currency) {
  var result = new Object();

  if (currency > 10000 ) { result.error = "You are rich, my friend! We don't have so much coins for exchange"; }
  else {
    H = remainder(currency, 50);
    Q = remainder((currency % 50),25);
    D = remainder((currency % 50)%25,10);
    N = remainder(((currency % 50)%25)%10,5);
    P = remainder((((currency % 50)%25)%10)%5,1);

    if (H > 0) { o.H = H; }
    if (Q > 0) { o.Q = Q; }
    if (D > 0) { o.D = D; }
    if (N > 0) { o.N = N; }
    if (P > 0) { o.P = P; }
  }

  return result;
};

function remainder(a, b){ return (a - a % b) / b; }
