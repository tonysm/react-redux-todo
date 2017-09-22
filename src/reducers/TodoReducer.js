const DEFAULT_STATE = {
    items: [
        {id: 1, task: 'Get milk', done: false},
        {id: 2, task: 'Lorem ipsum', done: true}
    ],
    filters: [
        'all',
        'incomplete',   
        'done'
    ],
    currentFilter: 'all'
}

export const TOGGLE_TODO = 'TOGGLE_TODO';

export function toggleTodo(todo) {
    return {
        type: TOGGLE_TODO,
        todo,
    };
}

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return Object.assign(
                {}, 
                state,
                {
                    items: state.items.map(i => {
                        if (i.task === action.todo.task) {
                            i.done = !i.done;
                        }
    
                        return i;
                    })
                }
            );
        default:
            return state;
    }
}

export default reducer;