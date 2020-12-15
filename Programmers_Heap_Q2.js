/*
문제 설명
이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

명령어	수신 탑(높이)
I 숫자	큐에 주어진 숫자를 삽입합니다.
D 1	큐에서 최댓값을 삭제합니다.
D -1	큐에서 최솟값을 삭제합니다.
이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

제한사항
operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
operations의 원소는 큐가 수행할 연산을 나타냅니다.
원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
입출력 예
operations	return
[I 16,D 1]	[0,0]
[I 7,I 5,I -5,D -1]	[7,5]
입출력 예 설명
16을 삽입 후 최댓값을 삭제합니다. 비어있으므로 [0,0]을 반환합니다.
7,5,-5를 삽입 후 최솟값을 삭제합니다. 최대값 7, 최소값 5를 반환합니다.
*/

//해답
function solution(operations){
    let queue = [];
    
    operations.map(operation => {
        if(operation[0] === 'I') {
            queue.push(operation.substring(2));
            queue.sort((a,b) => parseInt(a) - parseInt(b));
        } else {
            operation[2] === '-' ? queue.shift() : queue.pop()
        }
    });
    return queue.length > 0 ? [Math.max(...queue), Math.min(...queue)] : [0,0];
};
//느낀점
/*
기본적으로 ES6에 스프레드 연산을 알면 답을 간단하게 찾을수 있다. return에서 값을보면 max, min의 값을 operations 배열에서 찾아내는데 이를 스프레드연산을 사용하고 
삼항연산자를 이용해서, queue에 값이 없으면 0,0을 리턴하게 만들 수 있는  쉬운 문제이다.
디스크컨트롤러와 같은 3레벨인데.. 왜 3레벨인지는 모르겠다.. 힙의 개념을 이해한다면 쉽게 풀 수 있다.
*/