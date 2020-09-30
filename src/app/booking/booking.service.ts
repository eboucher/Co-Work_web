import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

  constructor(private messageService: MessageService) { }
  
}