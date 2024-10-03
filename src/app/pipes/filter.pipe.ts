import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const resultPosts = [];
    const validacion = /^\s*$/;
    if (validacion.test(arg)) return value;
    for (const post of value) {
      if (post.displayName.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        console.log(arg);
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }
}
