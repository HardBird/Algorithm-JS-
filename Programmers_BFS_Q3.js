//문제
/*
문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

carpet.png

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
입출력 예
brown	yellow	return
10	2	[4, 3]
8	1	[3, 3]
24	24	[8, 6]
*/

//해답
function solution(brown, red) {
    const sum = (brown/2)+2;
    for(let len=3;(2*len)<=sum;len++){ 
        if((len-2)*(sum-len-2)==red)return[sum-len,len]; //4번의 식이다.
    }
}

//느낀점
/*
나는 이런 공식을 잘 찾지 못하는것 같다..
방법은 일단 적어두도록하겠다.
1. 세로길이 <= 가로길이 
2. brown/2 = 가로 + 세로 - 2 
3. 가로+세로 = brown/2 + 2가 되는데 이를 식으로 이용하면 된다.

4. 가운데 격자는 테두리 격자들의 크기보다 -2씩 작으므로 각각 -2 해주면된다. 즉 3번의 식에서 (가로-2)(세로-2)= yellow가 된다.
단 가로와 세로의 차이는 -2이만큼되기에 -2를 해주면된다 ! 
*/