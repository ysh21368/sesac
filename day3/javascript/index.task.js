const taskManager= {
    tasks:[],
    complete:[],
    // 완료목록을 새로 만들어야 한다
    addTask : function(x){
        console.log('할일추가 :', x)
        this.tasks.push(x)
    },
    completeTask : function(x){
        index= this.tasks.indexOf(x)
        console.log('완료 :', x)
        this.tasks.splice(index,1)
    },
    listAllTasks : function(){
        console.log('목록 :',this.tasks)
    },
    cancelCompletedTask : function(x){
        index = this.complete.indexOf(x)
        // indexOf 주어야 x 내부에 인덱싱을 할수 있음 / 특정문자의 위치를 찾기 위해
        console.log('취소 :',x)
        this.complete.splice(index,1)
        // 위에서 indexOf 선언한 뒤에 실 사용시 (index,정수(position))
        this.tasks.push(x)
        // 문제에서 취소후 다시 할일목록으로 돌아가야 해서 push 적용
    }
};
taskManager.addTask('a')
taskManager.addTask('b')
taskManager.addTask('c')
taskManager.completeTask('a')
taskManager.listAllTasks('b')
taskManager.completeTask('c')
taskManager.listAllTasks()
taskManager.cancelCompletedTask('a')
taskManager.listAllTasks()#<misson2>
# console.log 출력함수
# taskManager 만들기

const taskManager={
    tasks:[],
    complete: [],
    addTask:function(x){
        console.log('할일추가 :',x)
        this.tasks.push(x)
    },
    completeTask:function(x){
        console.log('완료 :',x)
        this.tasks.pop(x)
    },
    listAllTasks:function(){
        console.log('목록',this.tasks)
    },
    cancelCompletedTask:function(x){
        console.log('취소')
    }
};

taskManager.addTask('a')
taskManager.addTask('b')
taskManager.addTask('c')
taskManager.completeTask('a')
taskManager.listAllTasks('b')
taskManager.completeTask('c')
taskManager.listAllTasks()
taskManager.cancelCompletedTask('a')
taskManager.listAllTasks()





