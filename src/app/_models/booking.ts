import { User } from '@app/_models';
import { Room } from './room';

export interface Booking {
  id: string,
  room: string,
  date: string,
  start: string,
  end: string,
  user: User,
  mealTray: boolean,
  laptop: boolean,
}