//Q1_ 2020년에 a월 b일은 무슨요일 일까요 ?? 
function solution(a,b){
    return['SUN','MON','TUE','WED','THU','FRI','SAT'][new Date(2020,a-1,b).getDay()];
}

//Q2_ 문장에서 가운데 글자만 뽑아와보세요.
function solution(s){
    return s.substring(Math.ceil(s.length/2)-1,s.length%2===0?2:1);
}
/*
Math 내장 메소드 몇가지 
Math.abs(x) = 절대값
Math.trunc(x) =  정수 부분을 반환
Math.ceil(x) = 올림
Math.round(x) = 반올림
Math.floor(x) = 버림 
Math.pow(x) = 제곱근
*/

//Q3_ 중복수 제거하기
function solution(arr) {
    return arr.filter((v, i) => v !== arr[i + 1]);
}
//코드를 보고 이게 맞아라는 생각이 들 수도 있다. 이에 대한 예시는 1,1,2,2,3,0,1,1 이면 1,2,3,0,1이 나온다. 1,2,3,0 아님..
//그럼 만약에 0,1,2,3은 어떻게 뽑을거냐 ? 간단하다. sort 한번하고하면 뚝딱이다.

//Q4_ 두 정수 사이의 합 
function solution(a, b) {
    a > b && ([a, b] = [b, a]);
    return Array(b - a + 1).fill().map((v, i) => v + i).reduce((a, c) => a + c);
  }
//회사에서 배운 렌더링 조건을 여기서 써먹을 줄이야 ... a가 범위가 b보다 클때 && 연산을 사용해서, 값을 뒤바꿔 버린다음 값을 계산해준다.
//사실 리듀스말고 for 문을 사용해도 된다. 근데 reduce를 사용해보고싶어서 배열을 하나 만들어봤다.. 

//Q5_ 문자열 정렬 
function solution(strings, n) {
    return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
  }
  //abc,acd,abe 와 2를 입력하면 2번 인덱스 [c,d,e]를 기준으로 정렬을 하 돼, 같은 경우에는 사전순으로 정리하는데 이 사전순으로 정렬하는게 localeCompare를 사용해서 풀어주면 된다.

//Q6_ 문자열 정렬 (대문자를 뒤로)
function solution(s) {
    return s.split('').sort((prev, cur) => cur.charCodeAt() - prev.charCodeAt()).join('');
  }
  //아스키코드값으로 순수 sort를 하면 localeCompare와 같은 결과값이 나온다 그렇기에 charCodeAt을 사용해서 값을 빼오자.

//Q7_ 문자 p와 y의 개수가 일치하는지 확인해보기 
function solution(s){
    return s.replace(/p/gi, '').length == s.replace(/y/gi, '').length;
  }
  //여기서 g는 global을 뜻하며 i는 interval을 뜻하는데, 문장전체에서 소문자 대문자 상관없이 구한다는 뜻이다.
  //replace를 사용하기전에 match를 사용했다. 근데 뭐때문인지 테스트케이스 몇개가 성립되지 않는다.. 테스트케이스도 좀 보게 해주면 좋을거같다.
  //한줄코딩이아니고 처음에 여러줄로 코딩을 하려고했을때는 split을 사용하여서 개수를 체크하고자 하였는데 소문자 대문자를 찾아야 되는 귀찮음이 있었다.
  // 근데 이는 다른 사람 코딩을 보니 toUpperCase로 다 대문자로 바꿔버리면 되는거였다...
  //toUpperCase() : 문장을 다 대문자로 ~ 
  //toLowerCase() : 문장을 다 소문자로 ~

  //Q8_ 문자열 다루기 
  function solution(s) {
    return /^[0-9]+$/.test(s) && [4,6].includes(s.length);
  }
  //또 다른답. 조금더 이해하기가 쉽다.
  function alpha_string46(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false 
 }

  //여기서 정규표현식과 함수가 아직 미숙하다는 것을 느꼈다.
  // .test는 앞에 선언된 변수에 포함된 문자들이 있는지 확인 하는 함수이다.
  // .include 역시 앞에 선언된 변수 길이 만큼 뒤에 변수가 포함되는지 확인 하는 함수이다.
  // if문 여러개로 확인을 할 수 있지만 식 한개로 표현이 된다는것에 아직도 놀랍다.. 
  //다음에는 정규표현식을 만드는것에 대해서도 공부를 해보자.
  //이게싫으면 /^[0-9]+$/ 대신 isNaN 함수를 사용해도 된다.
  //반대로 쓰면되겠지 ? 크크루삥빵뽕 
  //isNaN() : 숫자가아니면 true를 리턴한다. 