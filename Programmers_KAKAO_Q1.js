//카카오문제1.
//[https://programmers.co.kr/learn/courses/30/lessons/64061]


function solution(board,moves){
    let result = 0;
    let size = board.length;
    let pocket = [];
    moves.forEach(move=>{
        let cnt = 0;
        while(true){
            if (board[cnt][move-1] !== 0){
                // 바구니에 인형이 있는데 잡은 인형과 같으면 터트린다
                if (pocket.length !== 0 && pocket[pocket.length-1] === board[cnt][move-1]){
                    pocket.pop();
                    result += 2;
                }else{
                // 그렇지 않다면 잡아서 옮긴다
                    pocket.push(board[cnt][move-1]);
                }
                board[cnt][move-1] = 0;
                break;
            }
            cnt ++;
            if(cnt === size)
                break;
        }
    })
    return result;
}


//느낀점
/*
처음에는 보자마자 이걸 어떻게 푸냐 생각했는데 사실 전부다 주어주었고,
해당 문제를 통해서 코드로 작성하기만 하면되는것같다. 다만 헷갈렸던점은 
실배열과 주어진숫자는 -1씩차이가 나는것이다. 배열은 0부터시작하기 때문이다.
근데 문제를 풀면서 JS에 기능보다는 일단 아는 for문과 if문 while문을 사용했는데
map이나 reduce, foreach등 다양한 JS문법에 접근을 해야될것 같다고 생각했다.
*/