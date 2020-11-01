export class DaySchedule {

  constructor(public opening: any = '09:00', public closing: any = '21:00') {}

  static convertDayScheduleToString(daySchedule: DaySchedule): DaySchedule {
    const schedule = new DaySchedule();
    schedule.opening = daySchedule.opening.toString() + ':00';
    schedule.closing = daySchedule.closing.toString() + ':00';
    return schedule;
  }

  convertDayScheduleToInt(): DaySchedule {
    const schedule = new DaySchedule();
    schedule.opening = parseInt(this.opening);
    schedule.closing = parseInt(this.closing);
    return schedule;
  }
}


export class Timetable {

  monday: DaySchedule = new DaySchedule();
  tuesday: DaySchedule = new DaySchedule();
  wednesday: DaySchedule = new DaySchedule();
  thursday: DaySchedule = new DaySchedule();
  friday: DaySchedule = new DaySchedule();
  saturday: DaySchedule = new DaySchedule();
  sunday: DaySchedule = new DaySchedule();


  static convertTimetableToString(timetable: Timetable): Timetable {
    const schedule = new Timetable();
    schedule.monday = DaySchedule.convertDayScheduleToString(timetable.monday);
    schedule.tuesday = DaySchedule.convertDayScheduleToString(timetable.tuesday);
    schedule.wednesday = DaySchedule.convertDayScheduleToString(timetable.wednesday);
    schedule.thursday = DaySchedule.convertDayScheduleToString(timetable.thursday);
    schedule.friday = DaySchedule.convertDayScheduleToString(timetable.friday);
    schedule.saturday = DaySchedule.convertDayScheduleToString(timetable.saturday);
    schedule.sunday = DaySchedule.convertDayScheduleToString(timetable.sunday);
    return schedule;
  }


  convertTimetableToInt(): Timetable {
    const schedule = new Timetable();
    schedule.monday = this.monday.convertDayScheduleToInt();
    schedule.tuesday = this.tuesday.convertDayScheduleToInt();
    schedule.wednesday = this.wednesday.convertDayScheduleToInt();
    schedule.thursday = this.thursday.convertDayScheduleToInt();
    schedule.friday = this.friday.convertDayScheduleToInt();
    schedule.saturday = this.saturday.convertDayScheduleToInt();
    schedule.sunday = this.sunday.convertDayScheduleToInt();
    return schedule;
  }
}