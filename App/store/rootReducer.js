const initialState = {
    todos: [
        {
            text: 'Learn RN',
            done: false,
            id: 1
        }
    ]
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.payload.text !== '') {
                return {
                    ...state, todos:[...state.todos, action.payload]
                }
            }
            return state;

        case 'REMOVE_TODO':
            const todos = state.todos.filter(todo => todo.id !== action.payload);
            
            return {
                ...state, todos
            }

        case 'COMPLETE_TODO': 
            const todo = state.todos.map(todo => todo.id === action.payload);

            if(action.payload.value) {
                todo.done = true;
            } else {
                todo.done = false;
            }
            
            console.log(state);

            return state;
    
        default:
           return state;
    }
}