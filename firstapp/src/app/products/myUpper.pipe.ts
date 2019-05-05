import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myUpperText'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindof: string, uname: string) {
        if (kindof === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}


/*
 value = value.toUpperCase();
        value = uname + '-' + value;
*/
