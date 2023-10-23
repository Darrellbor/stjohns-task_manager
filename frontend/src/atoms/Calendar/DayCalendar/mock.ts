import { IDayCalendarProps } from './types';

const CurrentDay: IDayCalendarProps = {
  date: 5,
  isActive: true,
  isToday: true,
  tasksFilled: false
};

const EmptyDay: IDayCalendarProps = {
  date: 10,
  isActive: false,
  isToday: false,
  tasksFilled: false
}

const TasksFilled: IDayCalendarProps = {
  date: 6,
  isActive: true,
  isToday: false,
  tasksFilled: true
};

const TasksFilledAndCurrentDay: IDayCalendarProps = {
  date: 5,
  isActive: true,
  isToday: true,
  tasksFilled: true
};

const NotInMonth: IDayCalendarProps = {
  date: 5,
  isActive: false,
  isToday: false,
  tasksFilled: false,
  notInMonth: true
};

export default {
  EmptyDay,
  CurrentDay,
  TasksFilled,
  TasksFilledAndCurrentDay,
  NotInMonth
};
