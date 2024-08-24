import { useState } from 'react';
import { useTasksDispatch } from '../store/TaskContext';
import React from 'react';

let nextId = 3;
export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch() || {};
    return (
        <>
            <input placeholder="添加任务" value={text} onChange={e => setText(e.target.value)}>
                <button
                    onClick={() => {
                        setText('');
                        dispatch({
                            type: 'add',
                            text: text,
                            id: nextId++,
                        });
                    }}
                >
                    添加
                </button>
                <button
                    onClick={e => {
                        this.setState('');
                    }}
                ></button>
            </input>
        </>
    );
}
