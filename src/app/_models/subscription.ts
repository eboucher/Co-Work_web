export enum SubscriptionType {
  NONE = 'NONE',
  SIMPLE = 'SIMPLE',
  RESIDENT = 'RESIDENT'
}


export class Subscription {
  type: SubscriptionType;
  end: Date;
}