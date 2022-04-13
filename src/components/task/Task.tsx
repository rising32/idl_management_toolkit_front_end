import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WeekCalendar from '../../components/calendar/WeekCalendar';
import { RootState } from '../../store';
import TaskFilter from './TaskFilter';

function Task() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { userInfo } = useSelector((state: RootState) => state.user);

  const onSelectDate = (date: Date) => {
    setSelectedDate(date);
  };
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <>
      <WeekCalendar selectedDate={selectedDate} onSelectDate={onSelectDate} />
      <div className='flex items-center p-4'>
        <span className='flex-1 font-bold truncate'>{new Date(selectedDate).toLocaleDateString(undefined, options)}</span>
        <span>On time: 90%</span>
      </div>
      <TaskFilter />
    </>
  );
}

export default Task;