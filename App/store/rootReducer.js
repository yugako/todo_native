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
    
        default:
           return state;
    }
}