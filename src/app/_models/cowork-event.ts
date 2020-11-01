import { Workspace } from './workspace';


export class CoworkEvent {
  id: string;
  name: string;
  description: string;
  date: Date;
  workspace: Workspace;
}