//Q1_올바른 괄호가 있는지 체크하기
function solution(s){
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? count++ : count--;
        if (count < 0) return false;
    }
    if (count !== 0) return false;
    return true;
}
/*
문제는 보면 
()() = > true
()( = > false
    같은 형식으로 출력하는 형식이다. 그렇다면 
    괄호가 ( 일때 카운트를하고 )일때 -를해서 0이아니면 
    올바른 괄호가 아님을 출력해주면 문제를 해결할 수 있을것 같아서 위와 같이 구현을 하였다.
*/

//Q2_최댓값과 최솟값 
function solution(s) {
    const o = s.split(' ').map(v => +v);
    return [Math.min(...o), Math.max(...o)].join(' ');
}

//Q3_여러개의 최소 공배수
function solution(arr) {
    return arr.reduce((a, c) => {
        function u(n, m) { return m % n ? u(m % n, n) : n; }
        return a * c / u(a, c);
    }, 1);
}
//1-2에 있는 코드는 한 개 이것은 여러개의 자연수의 최소공배수를 구하는 식이다.
//그렇기에 최대공약수를 구하는 기본적인 u(n,m)의 함수 구조는 똑같다.
//그리고 나서 재귀적 함수호출을 사용하여 a*c의 값은 u(a,c)로 나누어주면된다.
//reduce의 개념이 조금 잡혀있으면 더 쉽게 접근할 수 있었을것 같다.

//Q4_다음 큰 숫자

function solution(n) {
    var answer = n;
    var nOneCnt = n.toString(2).match(/1/g).length;
    var mOneCnt = 0;
    while(nOneCnt != mOneCnt){
        answer += 1;
        mOneCnt = answer.toString(2).match(/1/g).length;
    }
    return answer;
}
//정규표현식말고 그냥 split으로 찢은다음에 for문으로 count 돌리고 그 값을 비교하려다가.
//10줄넘어가는걸 1줄로 바꾸는것을 보고 좀 현타가와서 저거정도는 기억하려고자 한다.
//toString(2) , 이진법 변환후 
//match(/1/g) , 1과 대응되는 값들을 전체적으로 찾아라.
// 이얼마나 간다하냐 .. while 돌려서 if처리만해주면된다 ... 


//Q5_이중행렬곱셈
function solution(arr1, arr2) {
    return Array(arr1.length).fill().map((r, i) => Array(arr2[0].length).fill().map((v, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0)))
}
//이거는 뭐랄까.. 그냥 이중for문쓰자.. 괜히 이걸로했다 너무어려웠다..