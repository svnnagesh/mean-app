import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'short'
})
export class ShortPipe implements PipeTransform {
    transform(value: any, limit:number) {
        return value.substr(0, limit) + '...';
    }
}