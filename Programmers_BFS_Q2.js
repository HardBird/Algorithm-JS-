//문제
/*
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
입출력 예
numbers	return
17	3
011	2
입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.
*/
//해답
function solution(numbers) {
    let answer = 0;
    let primeNumbers = [];

    const numbersArr = numbers.split("");

    // 소수 판별 함수 기본적인 소수판별 함수 어렵지 않게 구현 
    const determinePrime = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
            if (count >= 3) {
                break;
            }
        }
        if (count === 2 && !primeNumbers.includes(num)) {
            primeNumbers.push(num);
        }
    };

    // 숫자 만들기 
    const mergeNumbers = (arr, str) => {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const temp = [...arr];
                temp.splice(i, 1);
                mergeNumbers(temp, str + arr[i]);
            }
        }

        if (str.length > 0) {
            determinePrime(+str);
        }
    };

    mergeNumbers(numbersArr, "");

    answer = primeNumbers.length;
    return answer;
}


//느낀점
/*
재귀에 대한 중요성을 알려주는데 복습하면서 이해하는대에 어려움이 있었다.
문제에 대한 접근방식은 하나의 문자열이나 여러값들을 가지고 모든 경우의 수 즉 BFS에 접근하게 되면
재귀의 형식으로 접근하는 공식으로 나는 이해해야겠다.
재귀에 대해서 조금 더 좋은 자료가 생기게 되면 추가 레퍼로 정리를 하도록 하겠다.
*/