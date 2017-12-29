export function rot(int32, steps) {
  return ((int32 << steps) | (int32 >> (32 - steps)))
}

const x = {};

export function q_round(a, b, c, d) {
  x[a] = x[a] + x[b];
  x[d] = rot(x[d] ^ x[a], 16);
  x[c] = x[c] + x[d];
  x[b] = rot(x[b] ^ x[c], 12);
  x[a] = x[a] + x[b];
  x[d] = rot(x[d] ^ x[a], 8);
  x[c] = x[c] + x[d];
  x[b] = rot(x[b] ^ x[c], 7);
}
