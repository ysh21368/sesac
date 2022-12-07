<mission 1>
node.js 이용하여 콘솔에서 실행가능한 계산기 만들어보기 
1. node.js 환경셋팅하기 (node.js 다운로드)
2. 기본적인 사칙연산이 가능하도록 구현 
3. 추가적인 연산에 확장이 용이하도록 구현
4. 입력과 출력은 아래의 함수의 형태로 실행이 되도록
5. (추가)입력의 갯수가 2개 초과 일때 가능하도록
cal('add', 1, 2); // 3
cal('sub', 1, 2); // -1
cal('mul', 1, 2); // 2
cal('div', 1, 2); // 0.5

==========================================
1차로 파이썬 방식으로 구현

def add (a,b) :
   print(a+b)

def sub (a,b) :
   print(a-b)

def mul (a,b) :
    print(a*b)

def div (a,b) :
    print(a/b)

2차로 자바스크립트 방식으로 구현 

function calc(oper, val1 ,val2) {
    if(oper === 'add'){
        add(val1,val2)
    }
    else if(oper === 'sub'){
        sub(val1,val2)
    }
    else if(oper === 'mul'){
        mul(val1,val2)
    }
    else if(oper === 'div'){
        div(val1,val2)
    }
}

3차로 함수선언

function add(a,b) {
    console.log(a+b)
}

function sub(a,b) {
    console.log(a-b)
}

function mul(a,b) {
    console.log(a*b)
}

function div(a,b) {
    console.log(a/b)
}

-----
calc('div',2,3)
