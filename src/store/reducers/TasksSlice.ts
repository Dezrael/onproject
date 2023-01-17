import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { json } from 'stream/consumers';
import { IResource } from '../../models/IResource';
import { ITask } from '../../models/ITask';
import { simUpdateData } from '../../utils/backSimulation';

interface ITaskSlice {
    tasks: ITask[];
    resources: IResource[];
    error: string;
}

const initialState: ITaskSlice = {
    tasks: [],
    resources: [],
    error: '',
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        initTasks(state, action: PayloadAction<ITask[]>) {
            state.tasks = action.payload;
        },
        initResources(state, action: PayloadAction<IResource[]>) {
            state.resources = action.payload;
        },
        addTask(state, action: PayloadAction<ITask>) {
            state.error = '';
            if (state.tasks.map((task) => task.name).includes(action.payload.name)) {
                state.error = 'Задача с таким именем уже существует';
            } else {
                state.tasks.push(action.payload);
            }
            simUpdateData('tasks', JSON.stringify(state.tasks));
        },
        addResource(state, action: PayloadAction<IResource>) {
            state.error = '';
            if (state.resources.map((resource) => resource.name).includes(action.payload.name)) {
                state.error = 'Ресурс с таким именем уже существует';
            } else {
                state.resources.push(action.payload);
            }
            simUpdateData('resources', JSON.stringify(state.tasks));
        },
        editTask(state, action: PayloadAction<ITask>) {
            state.error = '';
            let task = state.tasks.find((t) => t.name === action.payload.name);
            if (task) {
                task = { ...task, ...action.payload };
            } else {
                state.error = 'Произошла ошибка при редактировании задачи';
            }
            simUpdateData('tasks', JSON.stringify(state.tasks));
        },
        editResource(state, action: PayloadAction<IResource>) {
            state.error = '';
            let resource = state.resources.find((r) => r.name === action.payload.name);
            if (resource) {
                resource = { ...resource, ...action.payload };
            } else {
                state.error = 'Произошла ошибка при редактировании ресурса';
            }
            simUpdateData('resources', JSON.stringify(state.tasks));
        },
        removeTask(state, action: PayloadAction<string>) {
            state.error = '';
            state.tasks.filter((task) => task.name !== action.payload);
            simUpdateData('tasks', JSON.stringify(state.tasks));
        },
        removeResource(state, action: PayloadAction<string>) {
            state.error = '';
            state.tasks.filter((task) => task.name !== action.payload);
            simUpdateData('resources', JSON.stringify(state.tasks));
        },
    },
});

export const {
    initTasks,
    initResources,
    addResource,
    addTask,
    editResource,
    editTask,
    removeResource,
    removeTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
