import React, { useState } from 'react';
import { CalenderSvg } from '../../../assets/svg';
import FullCalendar from '../../calendar/FullCalendar';
import { ControllerRenderProps } from 'react-hook-form';
import { ITasksControlFormInput } from '../TasksControl';
import ModalView from '../../base/ModalView';

interface Props {
  field: ControllerRenderProps<ITasksControlFormInput, 'when'>;
}
function When({ field }: Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const openCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const onClickWhen = (date: Date) => {
    field.onChange(date);
    setShowCalendar(false);
  };

  return (
    <>
      <div className='flex justify-between items-center py-1, text-white'>
        <span className='font-bold'>When:</span>
        <div className='text-rouge-blue font-bold px-2'>{field.value?.toDateString()}</div>
        <CalenderSvg className='mr-2' onClick={openCalendar} />
      </div>
      <ModalView isOpen={showCalendar}>
        <div className='w-full text-black'>
          <FullCalendar selectedDate={field.value || new Date()} onSelectDate={onClickWhen} />
        </div>
      </ModalView>
    </>
  );
}

export default When;
