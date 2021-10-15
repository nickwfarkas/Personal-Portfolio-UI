import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateConversionService {
  dateToString(date: Date): string{
    switch(date.getMonth()){
        case 0: return ("January/"+date.getFullYear());
        case 1: return ("February/"+date.getFullYear());
        case 2: return ("March/"+date.getFullYear());
        case 3: return ("April/"+date.getFullYear());
        case 4: return ("May/"+date.getFullYear());
        case 5: return ("June/"+date.getFullYear());
        case 6: return ("July/"+date.getFullYear());
        case 7: return ("August/"+date.getFullYear());
        case 8: return ("September/"+date.getFullYear());
        case 9: return ("October/"+date.getFullYear());
        case 10: return ("November/"+date.getFullYear());
        case 11: return ("December/"+date.getFullYear()); 
        default: return ("Current"); 
    }
}
}
