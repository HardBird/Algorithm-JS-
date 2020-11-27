//Q1_제일 작은 수 제거하기 
function solution(arr) {
    const min = Math.min(...arr);
    const r = arr.filter(v => v !== min);
    return r.length ? r : [-1];
  }
  //첨에 filter에 ===min으로 했는데 안풀려서 계속 의문을 가진 부분.
  //제일 작은 수를 제거한 배열을 리턴해야하기에 filter에서는 !==min이 맞는부분이다.
  //ES6 기술인 스프레드 연산자를 알면 코드를 간결하게 작성할 수 있는 부분이다.

//Q2_짝수와 홀수 
function solution(num) {
    return num % 2 ? 'Odd' : 'Even';
  }
  //ㅋㅋ 말해뭐해 기본문제 

//Q3_최대 공약수와 최소 공배수
function solution(n, m) {
    function u(n, m) { return m % n ? u(m % n, n) : n; }
    const gcd = u(n, m);
    return [gcd, n * m / gcd];
  }

  //이거는 진짜몰라서 레퍼 찾아보고 그냥 그대로 썼다..
  //유일하게 수학이 싫지만 손으로푸는게 더 간단한 문제 ..
  //재귀를 해서 최대공약수를 구하고 두수의 곱에 최대공약수를 나누는게 최소공배수 ..
  //머릿속에 기억하자 .. 
  //이를 유클리드 호재법 함수라고한다. 

//Q4_평균구하기
function solution(arr) {
    return arr.reduce((a, c) => a + c) / arr.length;
}
//Q5_하샤드 수
function solution(x) {
    return !(x % String(x).split('').reduce((a, c) => a + c * 1, 0));
}
//문제 설명 : 긴 자연수가 입력되면 한개씩 나눈다음에 , 그것들을 다합치고 원수랑 나눠지면 
//이를 하샤드 수라고 한다.
//*1은 문자를 숫자로 바꾸는것 Number로 해도 된다.

//Q6_콜라즈 추측
function solution(num, count = 0) {
    return count === 500 
        ? -1 
        : num === 1
            ? count
            : solution(num % 2 ? num * 3 + 1 : num / 2, count + 1);
}
//문제를 따라가면되는문제다.. 

//Q7_핸드폰번호가리기 
function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}
//정규표현식.. 공부하려고하는데 대체 무슨소리인지 모르겠다 
//정규표현식 알려줄사람..
//여기서 한번더 알아야되는것 splice는 쓰지말자 ! 기존의 배열을 건드는 것이기에 
//효율적인 방식이아니다. 새로운 배열을 만드는 slice를 사용하는것이 옳다.
//마이너스는 뒤에서부터 추출하는 것이라고 생각하면 된다.

//Q8_행렬의 덧셈 
function solution(arr1, arr2) {
    return arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]));
}
//이중 for문으로 구현해도된다. 하지만 자바스크립트의 문법에 익숙해지려고 map으로 구현을 했다.

//Q9_x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    return new Array(n).fill(x).map((v, i) => (i + 1) * v)
}
//이건뭐... 간단하다 ! 
//Array를 동적으로 생성할때 new를 붙이냐 안붙이냐는 속도적인 면에서 차이가 없다. (신경안써도됌)
//단 사이즈가 정해져있는 배열에 값을 넣을때에는 new보다 [] 배열을 만들어주는게 속도면에서는 엄청유리하다.
//참고자료 : https://withhsunny.tistory.com/71

//Q10_직사각형의 별찍기 
function solution(a, b) {
    return Array(b).fill().map(() => '*'.repeat(a)).join('\n');
  }
  //추억의 문제.. 리얼루 .. 설명은 생략한다.
  //다만 자바스크립트보다 이는 for문을 이용한 생 구현이 조금 더 쉽다고 생각된다.
  //.join이용하여 한줄을 작성후에 다음줄로 넘어가게끔 구현헤주면 된다.