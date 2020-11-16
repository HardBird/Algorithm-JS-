/*
문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
입출력 예
citations	return
[3, 0, 6, 1, 5]	3
입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
 */

//해답
function solution(citations) {
    citations.sort((a,b)=>a-b);
    var answer = 0;
    while(true){
        var temp = citations.filter(item=>item>=answer).length
        if(answer>temp)break
        answer++;
    }
    answer=answer-1;
    return answer;
}

//느낀점
/*
이게 무슨 문제일까.. 
한참을 고민에 빠지게 한 문제 ..
진짜 아무리 봐도 몰라서 위키백과 보면서 식을 써내려가도 너무 헷갈린다.
내가 구현한 로직은 다음과 같다.
1. 논문 인용 횟수의 길이를 구해준다.
2. 변수 하나를 돌려서(answer) 인용횟수와, 논문에 대해서 비교를 해준다 (이 부분이 절대 이해가 안감, 진짜 위키보고 그대로 때려박음)
3. 변수가 인용횟수보다 커지게 되면 무한 루프를 빠져나오고 0번부터 비교했기 때문에 값을 -1 한 값을 리턴해준다.

아마 내 생각으로는 변수하나가 계속 증감을 하는데, 증감을 한 변수가 인용 횟수보다 작은 순간이 오면 그 값이 H-index가 되는 것 같다. 
그런식으로 문제를 이해해야만 코드리뷰가 되는 부분인 것 같다. JS에서 filter를 상기시켜주는 문제다!.
*/
