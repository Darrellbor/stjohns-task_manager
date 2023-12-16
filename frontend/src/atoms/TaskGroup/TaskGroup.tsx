import React, { useState } from 'react';
import { ITaskGroupProps } from './types';
import styles from './TaskGroup.styles';
import TaskGroupLine from 'atoms/Icons/TaskGroupLine';
import TaskGroupAdd from 'atoms/Icons/TaskGroupAdd';

const { TaskWrapper, TaskTitle, TaskAdd, TaskDetails, TaskDetailsItem } = styles;

const TaskGroup: React.FC<ITaskGroupProps> = ({ title, taskVolunteers }) => {
  const [isDetailsOpen, toggleDetails] = useState<boolean>(false);

  return (
    <TaskWrapper className="TaskGroup" data-testid="test-TaskGroup">
      <TaskTitle $isOpen={isDetailsOpen} onClick={() => toggleDetails(!isDetailsOpen)}>
        {title}
        <TaskAdd
          onClick={e => {
            e.stopPropagation();
            console.log('I clicked add!');
          }}>
          <TaskGroupAdd />
          <span>Click to Volunteer</span>
        </TaskAdd>
      </TaskTitle>
      <TaskDetails $isOpen={isDetailsOpen}>
        {taskVolunteers &&
          taskVolunteers.length > 0 &&
          taskVolunteers.map(taskVolunteer => (
            <TaskDetailsItem key={taskVolunteer.id}>
              <TaskGroupLine />
              <h3>{taskVolunteer.fullName}</h3>
            </TaskDetailsItem>
          ))}
      </TaskDetails>
    </TaskWrapper>
  );
};

export default TaskGroup;
