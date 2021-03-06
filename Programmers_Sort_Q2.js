/*
문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
입출력 예
numbers	return
[6, 10, 2]	6210
[3, 30, 34, 5, 9]	9534330
*/
//해답
function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');
    return answer[0]==='0'?'0':answer; 
}
//느낀점 
/*
이거는 조금 단순암기식으로 알아둔 법이다.
기본적으로 주어진식을 문자열로 바꾸고 split으로 다시 배열을 만들필요없이.
map을 한 뒤에 해당배열에 ''을 붙여주면 문자형 배열로 완성이 된다. 그리고 
그 문자형 배열에 1을 곱해주면 상수 곱셈처럼 문자들을 상수로 보고 확인 할 수 있다.
문제의 return을 보면 숫자가 오름 차순으르도 되어있어서 sort를 오른차순으로 때려버리면된다.
하지만 나는 처음에 substring을 사용해서 첫번째 자리수를 비교하고 두번째 자리수를 비교하는데,
그렇게까지 어렵게 접근을 하지 않아도된다는 사실을 다 구현하고 깨달았다 ;; 
그리고 마지막 삼항 연사자로 리턴을 하는 이유는 0으로 보내지않으면 0이 가득한 배열을 받기에 강제로 0 한개만 return 시켜준다.
*/
