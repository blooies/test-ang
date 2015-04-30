export class TodoStore {
    constructor(){
        this.todoList = [];
    }
    add(item){
        this.todoList.unshift({text:item,done:false});
    }
    remove(item) {
        for (var i=0; i<this.todoList.length;i++) {
            if (item.text === this.todoList[i].text) {
                this.todoList.splice(i,1)
            }
        }
    }
}