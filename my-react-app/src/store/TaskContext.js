import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();
const tasksDispatchContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TaskContext.Provider value={tasks}>
            <tasksDispatchContext.Provider value={dispatch}>{children}</tasksDispatchContext.Provider>
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}

export function useTasksDispatch() {
    return useContext(tasksDispatchContext);
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add':
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        case 'change':
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        case 'delete':
            return tasks.filter(t => t.id !== action.id);

        default:
            throw new Error('未知操作', +action.type);
    }
}

const initialTasks = [
    { id: 0, text: '哲学家之路', done: true },
    { id: 1, text: '哲学家之路', done: true },

    { id: 2, text: '哲学家之路', done: true },
    { id: 3, text: '哲学家之路', done: true },
];
