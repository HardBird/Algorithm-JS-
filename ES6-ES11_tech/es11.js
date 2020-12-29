//Optional Chaining 
{
    const person1 = {
      name: 'Ellie',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'Bob',
        },
      },
    };
    const person2 = {
      name: 'Bob',
    };
  
    // 💩💩💩💩💩💩
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);
    }
  
    // 💩💩💩
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    // 💩
    {
      function printManager(person) {
        console.log(person.job && person.job.manager && person.job.manager.name);
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ✨
    {
      function printManager(person) {
        console.log(person.job?.manager?.name);
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
//협업 프로젝트를 할 때 협업자들도 설명을 잘안해줘서 이거쓸때가 있고 저거쓸때가 있구나라고 잘못 생각한 문법
//어떤걸써도 맞으나 대게로 깔끔해지기를 원한다면 최종적인 문법을 사용한다. 


///////////////////////////////////////////////////////////////////////////////////////
//Nullish Coalescing Operator 
{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
      const name = 'Ellie';
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    {
      const name = null;
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    // 💩
    {
      const name = '';
      const userName = name || 'Guest';
      console.log(userName);
  
      const num = 0;
      const message = num || 'undefined';
      console.log(message);
    }
  
    // ✨
    {
      const name = '';
      const userName = name ?? 'Guest';
      console.log(userName);
  
      const num = 0;
      const message = num ?? 'undefined';
      console.log(message);
    }

    //&&는 ??처럼 사용할수는 없다. 그이유는 
    //&& : 있으면 뒤의 있는 값을 출력하라 
    //?? : 있으면 그 값을 출력하라 의 차이를 가지고 있다
  }