/*
문제 설명
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
0	[]	[]	[7,4,5,6]
1~2	[]	[7]	[4,5,6]
3	[7]	[4]	[5,6]
4	[7]	[4,5]	[6]
5	[7,4]	[5]	[6]
6~7	[7,4,5]	[6]	[]
8	[7,4,5,6]	[]	[]
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

제한 조건
bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.
입출력 예
bridge_length	weight	truck_weights	return
2	10	[7,4,5,6]	8
100	100	[10]	101
100	100	[10,10,10,10,10,10,10,10,10,10]	110
출처

※ 공지 - 2020년 4월 06일 테스트케이스가 추가되었습니다.
*/

//
//해답 
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var bridge_now = new Array(bridge_length).fill(0);
    var bridge_weight = 0;
    let now_truck = truck_weights.shift();
    bridge_now.unshift(now_truck);
    bridge_now.pop();
    bridge_weight += now_truck;
    answer++;
    while(bridge_weight){ 
        bridge_weight -= bridge_now.pop();
        now_truck = truck_weights.shift();
        if(now_truck+bridge_weight<=weight){
            bridge_now.unshift(now_truck);
            bridge_weight+=now_truck;
        }
        else{
            bridge_now.unshift(0);
            truck_weights.unshift(now_truck);
        }
        answer++;
    }
    return answer;
}
//느낀점
/*
문제를 풀다가 방향성을 잃은거 같아서, 해답을 보고 폰 문제.
내가 난제를 겪은 부분은 바로 다리를 지나가는 시간이다.
건너는 다리는 트럭의 무게들의 합만큼 버티고 길이가 1개씩 증감이되서 
무한루프를 돌리는 while문안에서 구현을 한다고까지 생각을하였고,
증감이되는 변수를 answer로하여금, 값을 변화하고자 하였다. 
그렇다면 문제는 트럭을 다리에 올려서 이동시키는 로직은 어떻게 짜지였다.
바로 트럭의 개수만큼 배열을 만들어주는 거였고, 해당트럭이들어오면 배열을 하나씩 밀어주면 되는거였다.
4번째라인이 이문제를 풀게 해주었던 핵심이다. shift&unshift / push&pop은 Stack_Q1에 정리해두었다.
*/