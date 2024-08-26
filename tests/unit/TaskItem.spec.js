/* eslint-disable */

import { shallowMount } from '@vue/test-utils';
import TaskItem from '@/components/TaskItem.vue';

describe('TaskItem.vue', () => {
  it('renders task title correctly', () => {
    const task = { id: '1', title: 'Test Task', completed: false };
    const wrapper = shallowMount(TaskItem, {
      props: { task },
    });

    expect(wrapper.text()).toContain(task.title);
  });

  it('emits "toggle" event when checkbox is clicked', async () => {
    const task = { id: '1', title: 'Test Task', completed: false };
    const wrapper = shallowMount(TaskItem, {
      props: { task },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked();

    expect(wrapper.emitted('toggle')).toBeTruthy();
    expect(wrapper.emitted('toggle')[0]).toEqual([{ ...task, completed: true }]);
  });

  it('emits "delete" event when delete button is clicked', async () => {
    const task = { id: '1', title: 'Test Task', completed: false };
    const wrapper = shallowMount(TaskItem, {
      props: { task },
    });

    const deleteButton = wrapper.find('button');
    await deleteButton.trigger('click');

    expect(wrapper.emitted('delete')).toBeTruthy();
    expect(wrapper.emitted('delete')[0]).toEqual([task.id]);
  });

  it('applies "line-through" class when task is completed', async () => {
    const task = { id: '1', title: 'Test Task', completed: true };
    const wrapper = shallowMount(TaskItem, {
      props: { task },
    });

    expect(wrapper.find('span').classes()).toContain('line-through');
  });
});
