/*
문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
같은 이름을 가진 의상은 존재하지 않습니다.
clothes의 모든 원소는 문자열로 이루어져 있습니다.
모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
스파이는 하루에 최소 한 개의 의상은 입습니다.

입출력 예
clothes	return
[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	5
[[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]	3
입출력 예 설명

예제 #1
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.
1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses

예제 #2
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.
1. crow_mask
2. blue_sunglasses
3. smoky_makeup
*/

//해답
function solution(clothes){
    var answer=1;
    var temp = clothes.reduce((prev,curr)=>{
        if(!prev[curr[1]])prev[curr[1]]=1;
        prev[curr[1]]++;
        console.log('-------------------');
        console.log(prev);
        console.log(curr);
        console.log('-------------------');
        return prev;
    },{})
 
    for (var i in temp)
    {
        answer *= temp[i]
    }
    answer = answer - 1 ; 
    return answer;
}
//느낀점
/*
자바스크립트의 문턱... 어렵다. Reduce는 React.redux처럼 굉장히 골이 아픈 친구이다.
처음에는 ES6 문법없이 하드코딩으로 문제를 풀어보려고했다. 근데 JS에서는
이중배열에서 값을 뽑아서 만들자니 코드가 너무 길어지는 것이기에 비효율적이라고 생각했다.
결과는 역시 효율성이 떨여저서, Reduce를 사용하기로 했다. 그리고 새롭게 알게 된 문법도 
for (var X in Obj)이다.
이는 배열형에서는 그냥 a[0],a[1] 형식으로 접근하면 되지만 
객체형 원소들에게 접근할때는 위에 식처럼 접근을 하면된다.
그렇다면 문제에 대한 느낀점을 이야기해보도록 하겠다.
이 문제는 사실상 쉽다 생각하고 접근하면, 예제만 맞추고 다 틀릴수도 있다.
옷은 기본적으로 다 입어야 되는건데, 이 예제는 모자만쓰고 다 벗고다닐수 있다. 그렇기에 결과값에 +1을 해주고
다 벗고다니는 조건제외하면 말이다. 그렇기에 최종 결과값에 -1을 해주면되고,
그 결과 값들을 다 곱해주면된다. 그렇기에 Reduce를 사용한거다. 기존 값들을 누적시키기 위함이기 때문
자바스크립트의 문법에 익숙해지지 않으면 삽질을 하니까 다른 언어를 찾는것도 좋은 방법이다.
*/