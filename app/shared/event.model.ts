// Tip: use tsc --declaration event.service.ts t generate event.service.d.ts

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: { // ? -> can be null
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions?: ISession[]
}

export interface ISession {
  id: number;
  eventId?: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}