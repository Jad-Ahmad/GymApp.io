import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gymAppPipe'
})
export class GymAppPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
