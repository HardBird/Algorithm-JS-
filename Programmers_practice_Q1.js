// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }
function solution(n) {
    return '수박'.repeat(n).substr(0, n);
  }