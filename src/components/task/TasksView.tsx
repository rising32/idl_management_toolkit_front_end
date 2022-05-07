import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SmallLayout from '../../container/common/SmallLayout';
import useRequest from '../../lib/hooks/useRequest';
import { RootState, useAppDispatch } from '../../store';
import { getUserTasks } from '../../lib/api';
import { toast } from 'react-toastify';
import { TaskState } from '../../modules/task';
import { PenSvg } from '../../assets/svg';
import ModalView from '../base/ModalView';
import CreateAndEidtTaskTempleate from './CreateAndEidtTaskTempleate';
import { removeLoading, showLoading } from '../../store/features/coreSlice';

function TasksView() {
  const [myTaskList, setMyTaskList] = useState<TaskState[]>([]);
  const [selectedTask, setSelectedTask] = useState<TaskState | null>(null);
  const [showModal, setShowModal] = useState(false);

  const { userInfo } = useSelector((state: RootState) => state.user);
  const [_getUserTasks, , getUserTasksRes] = useRequest(getUserTasks);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(showLoading());
    const creator_id = userInfo?.user_id;
    _getUserTasks(creator_id);
  }, []);
  React.useEffect(() => {
    if (getUserTasksRes) {
      setMyTaskList(getUserTasksRes.task);
      dispatch(removeLoading());
    }
  }, [getUserTasksRes]);
  const onCreateTask = () => {
    setSelectedTask(null);
    setShowModal(!showModal);
  };
  const onSelectTask = (task: TaskState) => {
    if (selectedTask?.task_id === task.task_id) {
      setSelectedTask(null);
    } else {
      setShowModal(true);
      setSelectedTask(task);
    }
  };
  const onClose = () => {
    setShowModal(false);
    setSelectedTask(null);
  };
  const onSuccess = (task: TaskState) => {
    if (selectedTask) {
      const newMyTaskList = myTaskList.map(item => {
        if (item.task_id === task.task_id) {
          return task;
        } else {
          return item;
        }
      });
      toast.success('task updated successfully!');
      setMyTaskList(newMyTaskList);
      onSelectTask(task);
      onClose();
    } else {
      const newMyTaskList = myTaskList;
      newMyTaskList.unshift(task);
      toast.success('task created successfully!');
      setMyTaskList(newMyTaskList);
      onCreateTask();
      onClose();
    }
    dispatch(removeLoading());
  };

  return (
    <SmallLayout className='flex flex-1 flex-col bg-white py-4 mt-4 text-black'>
      <div className='flex flex-row px-4 items-center justify-between pb-2'>
        <div className='text-lg text-black font-bold'>Tasks</div>
        <div className='text-base text-blue' onClick={onCreateTask}>
          Create
        </div>
      </div>
      <ul role='list' className='p-4'>
        {myTaskList.map(task => (
          <li key={task.task_id} className='py-1 first:pt-0 last:pb-0'>
            <div className='flex p-2'>
              <div className={`flex flex-1 text-lg capitalize truncate ${task.task_id === selectedTask?.task_id && 'text-rouge-blue'}`}>
                {task.task_name}
              </div>
              <PenSvg
                className={`w-6 h-6 ${task.task_id === selectedTask?.task_id && 'stroke-rouge-blue'}`}
                onClick={() => onSelectTask(task)}
              />
            </div>
          </li>
        ))}
      </ul>
      <ModalView isOpen={showModal} onClose={onClose}>
        <CreateAndEidtTaskTempleate selectedTask={selectedTask} onCancel={onClose} onSuccess={onSuccess} />
      </ModalView>
    </SmallLayout>
  );
}

export default TasksView;
