export interface ITaskGroupProps {
  /**
   * The titile of the task group
   */
  title: string;

  /**
   * The task volunteer details
   */
  taskVolunteers: ITaskVolunteer[];
}

export interface ITaskGroupStyleProps {
  /**
   * Controls if the details tray is open or closed
   */
  $isOpen: boolean;
}

export interface ITaskVolunteer {
  id: number;
  fullName: string;
}
