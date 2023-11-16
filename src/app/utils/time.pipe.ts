import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timetohours'
})
export class TimePipe implements PipeTransform {
    transform(value: number): string {
        const hours = Math.floor(value / 60);
        const remainingMinutes = value % 60;

        const hoursText = hours > 0 ? `${hours}h` : '';
        const minutesText = remainingMinutes > 0 ? `${remainingMinutes}min` : '';

        return hoursText + minutesText;
    }
}