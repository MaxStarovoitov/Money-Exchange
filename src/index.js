function remainder(a, b) { return (a - a % b) / b; }

module.exports = function makeExchange(currency) {
  var result = {};

  if (currency >= 10000) { result.error = "You are rich, my friend! We don't have so much coins for exchange"; }
  else {
    H = remainder(currency, 50);
    Q = remainder((currency % 50),25);
    D = remainder((currency % 50)%25,10);
    N = remainder(((currency % 50)%25)%10,5);
    P = remainder((((currency % 50)%25)%10)%5,1);

    result.H = ((H > 0) ? H : 0);
    result.Q = ((Q > 0) ? Q : 0);
    result.D = ((D > 0) ? D : 0);
    result.N = ((N > 0) ? N : 0);
    result.P = ((P > 0) ? P : 0);
  }

  return result;
};
