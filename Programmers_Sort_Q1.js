/*
문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다.
입출력 예
array	commands	return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
입출력 예 설명
[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.


*/


//해답
function solution(array, commands) {
    var answer = [];
    for(var i=0;i<commands.length;i++)
    {
      var temp = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b);
      answer.push(temp[commands[i][2]-1]);
    }
    return answer;
}

//느낀점 
/*
Sort 와 Sort(a-b)의 차이.
기본적으로 Sort는 default 값이 오름차순으로 되어있다. 
내림 차순을 원할 때에는 deps 값으로 b-a 반대로 return을 시키면 된다.
하지만 처음에 구현을 했을때 Sort()로 했는데 테스트케이스에서 오류가 발생했다. 왜 발생했을까?
해답은 deps 값으로 a-b를 해주어야 되는 것이였다. 기본적인 default 값은 아스키 코드순으로 정렬시키기에 
테스트 케이스에서 걸러지게 된다. 그 외적으로는 splice 대신 slice에 익숙해져야 되는것이고 나머지는
기본 배열 문제이기에 어렵지 않게 풀 수 있었다.
*/