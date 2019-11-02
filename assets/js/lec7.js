
Vue.component('task-list', {
    template: `
            <ul>
                <task v-for="task in tasks" v-text="task.task"></task>      
            </ul>
    `,
    data(){
        return{
            tasks:[
                {task:'one', complete: true},
                {task:'two', complete: true},
                {task:'three', complete: false},
                {task:'four', complete: true}
            ]
        }
    }
});

Vue.component('task',{
    template: '<li></li>',
});


new Vue({
    el: '#root',
});