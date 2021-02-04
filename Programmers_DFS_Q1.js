//문제
/*
문제 설명
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.
입출력 예
numbers	target	return
[1, 1, 1, 1, 1]	3	5
입출력 예 설명
문제에 나온 예와 같습니다.
*/

//해답
//레퍼런스 (https://medium.com/@jjnooys/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5)
function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);
    function dfs(index, sum) {
        if(index === numbers.length) {
            if (sum === target) {
                answer++;
             }
            return;
        }  
        dfs(index + 1, sum + numbers[index]);//핵심
        dfs(index + 1, sum - numbers[index]);//핵심
    }
    
    return answer;
}

//느낀점 
/*
학교에서 공부를 할 때 트리 구조를 열심히 공부할 걸 이라는 생각이 든다.. 
핵심이라고 주석한부분을 보면 좌우로 뻗어나가는 과정을 볼 수 있다.
자바에서는 배열만으로 DFS,BFS 구현이 가능하기에 재귀적 함수호출만 사용하면 트리처럼 이용할 수 있다.
*/