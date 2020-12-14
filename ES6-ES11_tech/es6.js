//Shorthand property named
const temp = {
    name : 'bang',
    age :'25',
};
const name = 'bang';
const age = '25';
const temp2 = {
    name,
    age,
};
//위와 아래는 선언이 동일한 방법이다. 간단하게 넣어버릴 수 있는 문법이다.

///////////////////////////////////////////////////////////////////////////////////////

//Destruct assignment
//object 
const temp_student = {
    name :'bang',
    level : 1,
};
//array
const temp_num = [1,2];

//과거방식
{
    const name = temp_student.name;
    const level = temp_student.level;
    console.log(name,level);
};
{
    const first = temp_num[0];
    const second = temp_num[1];
    console.log(first,second);
};
//현재방식(ES6)
{
    const {name,level} = temp_student;
    console.log(name,level);
};
{
    const {temp2:name,temp3:level} = temp_student;
    console.log(name,level);
};
{
    const [first,second] = temp_num;
    console.log(first,second)
};
//코딩테스트 문제에서 자주나왔던 데이터 바로 뽑아쓰기이다. 

///////////////////////////////////////////////////////////////////////////////////////

//Spread Syntax (배열오브젝트 두달다 가능)
{
    const obj1 = {key:'key1'};
    const obj2 = {key:'key2'};
    const array = [obj1,obj2];
    const arrayCopy= [...array];
    const arrayCopy2 = [...array, {key:'key3'}];

    console.log(array,arrayCopy,arrayCopy2);

    
    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
    console.clear();
};

//스프레드 연산자는 새로운 데이터를 복제해서 값을 넣는것이 아닌,
//기본값에 데이터 주소값을 가져오는 것이기에 참조 되어있는 값을 변동하면 
//전체 배열이 영향이 끼쳐진다. (배열은 항상 새로 복제해서 사용하자.)

//중복된 key를 가지고 있는 부분에서 병합을 이루면 맨 뒤에 값이 앞에 있는 값들을 덮어 씌운다.


///////////////////////////////////////////////////////////////////////////////////////

//Default parameters 
//초기방법
{
    function printMessage(msg){
        if(msg==null){
            msg = 'default msg';
        }
        console.log(msg);
    }

    printMessage('hello');
    printMessage(); 
}

//ES6방법
{
    function printMessage(msg='default msg'){
        console.log(msg);
    }
    printMessage('hello');
    printMessage(); 
}
//아직도 많이사용되고 있는 default 관리법이다. ES6 방법을 사용하면 코드를 조금더 간결하게 사용할 수 있다.

///////////////////////////////////////////////////////////////////////////////////////

//Ternary Operator
{
    const isCat = true;

    //초기방법
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }

    //ES6 방법
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }
    console.clear();
  }

///////////////////////////////////////////////////////////////////////////////////////

//Template Literals 
{
    const weather = '🌤';
    const temparature = '16°C';
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }
