import { User } from '@app/_models';

export interface Booking {
  start: string,
  end: string,
  user: User,
  call_room: string, //CallRoom
  cozy_louge: string, //CozyLouge
  meeting_room: string, //MeetingRoom
  mealTray: true,
  laptop: true,
  date: string,
  created_by: string,
  updated_by: string
}