import { CoworkEvent } from './cowork-event';
import { Timetable } from './timetable';
import { Room } from './room';
import { Tool } from './tool';
import { Avatar } from './avatar';

export class Workspace {
  id: string; // ou _id ?
  name: string;
  description: string;
  rooms: Room[];
  tools: Tool[];
  events: CoworkEvent[];
  avatar: Avatar;
  mealTray: true;
  WiFi: true;
  unlimitedDrinks: true;
  city: string;
  laptops: true;
  mondayOp: string;
  mondayCl: string;
  tuesdayOp: string;
  tuesdayCl: string;
  wednesdayOp: string;
  wednesdayCl: string;
  thursdayOp: string;
  thursdayCl: string;
  fridayOp: string;
  fridayCl: string;
  saturdayOp: string;
  saturdayCl: string;
  sundayOp: string;
  sundayCl: string;
}

export class OpenSpaceID {
  id: string;
}

