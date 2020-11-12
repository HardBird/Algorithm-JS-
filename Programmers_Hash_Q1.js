/*
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

입출력 예
participant	completion	return
[leo, kiki, eden]	[eden, kiki]	leo
[marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
[mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav

입출력 예 설명
예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

//해답 
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++)
        {
            if(participant[i]!==completion[i])return participant[i]
        }
}

// 느낀점 
/*
자바스크립트에서 배열에 대한 함수만을 생각해서 처음에는 접근하기가 너무 어려웠다.
왜냐면 문제를 보자마자 sort까지는 생각이 났는데 for문이아니라 배열함수인 find와 filter중에 
어떤거를 사용해서 접근해야되나 생각을 했는데 사실상 그냥 for문을 돌리면 되는거였다.
이러한 부분에 대해서는 감을 잡아줘야 될 것 같다.
*/