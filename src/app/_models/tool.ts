
export enum ToolType {
  TOOL = 'TOOL',
  PRINTER = 'PRINTER',
  LAPTOP = 'LAPTOP'
}


export class Tool {
  id: string;
  name: string;
  type: ToolType;
}