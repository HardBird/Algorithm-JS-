//문제
/*
문제 설명
네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

제한사항
컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
computer[i][i]는 항상 1입니다.
입출력 예
n	computers	return
3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	2
3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	1
입출력 예 설명
예제 #1
아래와 같이 2개의 네트워크가 있습니다.
image0.png

예제 #2
아래와 같이 1개의 네트워크가 있습니다.
image1.png
*/

//해답
function solution(n, computers) {
    var answer = 0;
    
    //DFS로 푸는 문제
    const len = computers.length;
    for (let i = 0; i < len; i++) { //갯수만큼 loop
        if (computers[i][i] != -1) { //방문한 Node인지 체크
            answer++; //현재 시작하는 Node가 Root Node가 됨
            dfs(computers, i, n);
        }
    }
    
    function dfs(computers, idx, n) {
        for (let j = 0; j < n; j++) { //다른 Node에 대하여 전부 탐색해야함
            if (computers[idx][j] == 1 && computers[idx][j] != -1) {
                computers[idx][j] = computers[j][idx] = -1; //탐색한 경우 -1로 설정
                // = = 을 한줄에써서 가독성을 높였다. 
                dfs(computers, j, n);
            }
        }
    }
    
    return answer;
}


//느낀점
/*
기본 DFS에서 어느정도 이해했다 생각했는데 바로 머리가 깨져버렸다..
문제는 연결된 네트워크망이 총 몇개인지 계산을 하는 것이다. 단일 노드도 1개의 네트워크망으로 계산을한다.
계산을한 노드에 대해서는 -1 의 값을 삽입하여 탐색한 노드로 판별시킨다.
idx : 노드 하나하나 확인을 해줄것이기에 i의 값을 DFS 고정값의 idx라는 변수로 묶어서 보내버린다.

사실 다른 사람이 푼 레퍼를 보고 이해는 하였다. 하지만 내것으로 만들기에는 몇번을 더 봐야지 이해가 될 것 같다.
*/