  // 배열의 중복제거 컴파일러 
  [https://hianna.tistory.com/422]
  
  // Q1. make a string out of an array
  const question_1=()=>
  {
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log('Q1 Answer:',result);
  }
  question_1();
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log('Q2 Answer',result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log('Q3 Answer',result);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(2,3);
    // console.log('Q4 Answer',result);
    //위와 같은 방식은 새로운 배열을 만드는 것이 아니기 때문에 새로운 배열은 Slice를 사용하자 ! 
    //위 방식을 사용하면 기존 배열을 재사용하기가 어려워지기 때문에 Slice를 애용하삼 ! 
    const result_edit = array.slice(2,5); // 2부터 시작해서 4까지 (n-1)
    console.log('Q4 Answer_edit',result_edit);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      //@ts-ignore
      this.name = name;
      //@ts-ignore
      this.age = age;
      //@ts-ignore
      this.enrolled = enrolled;
      //@ts-ignore
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90 (find응용)
  {
      const result = students.find((student)=>{
          if(student.score===90) return student
      })
      console.log('Q5 Answer',result)
      //그렇다면 find와 filter의 차이점은 ?? 
      //find는 한번에 true가 있으면 해당 값을 반환 후 바로 종료된다.
      //filter는 true들을 다 확인후에 배열로 반환된다.
  }
  
  // Q6. make an array of enrolled students (filter응용)
  {
      const result = students.filter((student)=>{
          if(student.enrolled) return student
      })
      console.log('Q6 Answer',result)
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student,index)=>{
        return student.score 
      })
      console.log('Q7 Answer',result)
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      const result = students.some((student)=>{
          if(student.score<50) return student
      })

      console.log('Q8 Answer',result)
      //some은 OR / every는 AND 로 생각하면 편하다 !
  }
  // Q9. compute students' average score
  {
      //reduceRight은 거꾸로 시작하는 함수이다! (reduce 젤 중요함@@@@@@@@@@@@@)
      const result = students.reduce((prev,curr)=>{
          console.log('------------------')
          console.log(prev);
          console.log(curr);
          return prev+curr.score;
      },0)
      console.log('Q9 Answer',(result/students.length))
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students.map((student)=>student.score)
                             .filter(score=>score>=50)
                             .join()
                             console.log('Q10 Answer',result)

  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map((student)=>student.score)
                           .sort((a,b)=>a-b)
                           .join()
                           console.log('Q-Bonus Answer',result)
  }