module.exports = function makeExchange(currency) {
  var result = new Object();

  if (currency >= 10000 ) { result.error = "You are rich, my friend! We don't have so much coins for exchange"; }
  else {
  H = (currency - currency % 50) / 50;
  Q = ((currency % 50) - (currency % 50) % 25) / 25;
  D = (((currency % 50) % 25) - ((currency % 50) % 25) % 10) / 10;
  N = ((((currency % 50) % 25) % 10) - (((currency % 50) % 25) % 10) % 5) / 5;
  P = (((((currency % 50) % 25) % 10) % 5) - ((((currency % 50) % 25) % 10) % 5) % 1) / 1;


  if (H > 0) { result.H = H; }
  if (Q > 0) { result.Q = Q; }
  if (D > 0) { result.D = D; }
  if (N > 0) { result.N = N; }
  if (P > 0) { result.P = P; }
  }

  return result;
};
