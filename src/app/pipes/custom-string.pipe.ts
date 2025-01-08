import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString'
})
export class CustomStringPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let newWord = '';
    for (let index = 0; index < value.length; index++) {
      if (index % 2 == 0)
        newWord += value[index].toUpperCase();
      else
        newWord += value[index].toLowerCase();

    }

    return newWord;
  }

}
