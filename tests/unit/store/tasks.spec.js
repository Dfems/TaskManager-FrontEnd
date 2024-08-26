/* eslint-disable */

import tasks from '@/store/modules/tasks';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('Vuex Store - tasks', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetchTasks action commits SET_TASKS', async () => {
    const commit = jest.fn();
    const mockTasks = [{ id: '1', title: 'Task 1', completed: false }];

    fetchMock.mockResponseOnce(JSON.stringify(mockTasks));

    await tasks.actions.fetchTasks({ commit });

    expect(commit).toHaveBeenCalledWith('SET_TASKS', mockTasks);
  });

  it('addTask action commits ADD_TASK', async () => {
    const commit = jest.fn();
    const newTask = { id: '2', title: 'Task 2', completed: false };

    fetchMock.mockResponseOnce(JSON.stringify(newTask));

    await tasks.actions.addTask({ commit }, newTask);

    expect(commit).toHaveBeenCalledWith('ADD_TASK', newTask);
  });

  it('updateTask action commits UPDATE_TASK', async () => {
    const commit = jest.fn();
    const updatedTask = { id: '1', title: 'Updated Task', completed: true };

    fetchMock.mockResponseOnce(JSON.stringify(updatedTask));

    await tasks.actions.updateTask({ commit }, updatedTask);

    expect(commit).toHaveBeenCalledWith('UPDATE_TASK', updatedTask);
  });

  it('deleteTask action commits DELETE_TASK', async () => {
    const commit = jest.fn();
    const taskId = '1';

    fetchMock.mockResponseOnce(JSON.stringify({}));

    await tasks.actions.deleteTask({ commit }, taskId);

    expect(commit).toHaveBeenCalledWith('DELETE_TASK', taskId);
  });
});
