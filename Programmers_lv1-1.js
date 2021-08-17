//Q1_소수찾기 
function solution(n) {
    const primes = [];
    for (var j = 1; j <= n; j++) {
      var isPrime = true;
      for (var i = 2; i<j; i++) {
        if (j % i ===0){
            isPrime=false;
        }
      }
      if (isPrime) {
        primes.push(j);
      };
    }
    return primes.length;
}
//알고리즘의 국민문제 소수찾기 설명은 생략한다.


//Q2_수박수? 
function solution(n) {
    return '수박'.repeat(n).substr(0, n);
  }
//문제가 조금 귀엽다... 입력받은 자연수만큼 수박을 출력시켜주면된다.
//단 3이 입력되면 수박수가 되어야하는데 이는 substring을 사용하여서 구분할 수 있다.


/* 그렇다면 substr , substring의 차이는??
substr은 시작점을 기준으로 몇개를 추출할것이냐 ? 라는 뜻이고
substring은 시작점과 끝점을 기준으로 그사이값을 다 추출해준다! .
*/

//Q3_시저암호
function solution(s, n) {
    return s.split('').map((l) => {
      return l === ' '
        ? l
        : l.charCodeAt() + n > 122 || (l.charCodeAt() <= 90 && l.charCodeAt() + n > 90)
          ? String.fromCharCode((l.charCodeAt() + n) - 26)
          : String.fromCharCode(l.charCodeAt() + n);
    }).join('');
  }
  //이문제는 입력받은 n의 크기만큼 s의 문자를 한칸씩 밀어주면된다.
  //만약에 n이 1이면 AB -> BC 처럼 말이다. 그 방식을 알면 쉽게 해결할 수 있다.
  // charCodeAt :  유니코드의 값을 추출하는 함수
  // fromCharCode : 유니코드의 값으로 문자를 추출하는 함수 
  // 이두개는 파스칼케이스의 코딩법이니 앞은 소문자를 기억하자 ! 

//Q4_약수의합
function solution(n) {
  return new Array(n).fill().map((v, i) => i + 1).reduce((a, c) => n % c ? a : a + c, 0)
}

//Q5_입력받은 수 하나씩 잘라서 자리수 더하기
function solution(n) {
  return String(n).split('').reduce((acc, cur) => acc + Number(cur), 0);
}
//이거는 만약에 1023 일 때, 1+0+2+3 이아닌, 10+2+3 같은 형식이면 문제가 어려웠을것같다.
//이거는 분명 그래프를 통해서 풀면되는데 공부해서 풀어봐야겠다..
//여기서 터득한 기술은 String 후에 split('')을해주면 한자리씩 다끊어서 된다는 것이다 ! 

//Q6_자연수 뒤집어 배열로 만들기 
function solution(n) {
  return String(n).split('').reverse().map(v => Number(v));
}

//Q7_자연수를 뒤집어 출력하기 
function solution(n) {
  return Number(String(n).split('').sort((p, c) => c - p).join(''));
}

//Q6-7 묶어서 리뷰.
//6번은 배열로 출력해야하기에 map을해서 하나하나 출력을 해준것이다.
//그리고 7번은 하나의 자연수로 출력을 해야하기때문에 join()으로 문자열로 바꾸어준뒤 그 전체 값을 number
//를 통해서, 한번에 출력을 해준것이다. ! 

//Q8_자연수 제곱근 판별하기 
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? Math.pow((Math.sqrt(n) + 1),2) : -1
}
//다른 코드를보면 그냥 들어온 n이랑 floor(sqrt(n))을해서 값이 같으면 출력해주는 코딩도있는데
//저것도 어떻게보면 되게 효율적인것같다. 왜냐하면 그냥 n과 나는 n을 한번 정제하기 때문에 
//캐싱의 효율성이 조금더 좋을거같기 때문이다 ! 그 코드도 밑에 다가 적어두겠다 ! 
//Q8_다른 사람이 푼 코드
function solution(n){
  if(n=== Math.pow(Math.floor(Math.sqrt(n)),2)) return Math.pow(Math.floor(Math.sqrt(n))+1,2);
  return -1;
}