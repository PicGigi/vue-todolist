new Vue({
    el:'#app',
    data:{
        todos: [
            {
                text: 'Comprare un set Lego',
                done: false
            },
            {
                text: 'Comprare una bustina di carte Pokémon',
                done: false
            },
            {
                text: 'Mettere qualche soldo da parte',
                done: false
            },
        ],
        newTodo: '',
    },
    methods: {
        deleteTodo(index){
            this.todos.splice(index,1);
        },
        addTodo(){
            if(this.newTodo.trim()) {
                let newObjTodo = {
                    text: this.newTodo.trim(),
                    done: false,
                }
                this.todos.push(newObjTodo);
                this.newTodo = '';
            }
        },
        isItDone(index){
            this.todos[index].done = !this.todos[index].done;
            console.log(this.todos[index].done);
        }
    }
}
)