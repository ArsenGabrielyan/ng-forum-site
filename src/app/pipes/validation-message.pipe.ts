import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationMessage'
})
export class ValidationMessagePipe implements PipeTransform {
  transform(value:any):string {
    if(!value) return "";
    if(value.required) return "Don't Leave The Input Blank";
    if(value.hasSpaces) return "Remove Any Blank Spaces";
    if(value.invalidURL) return "That URL is Invalid"
    return "";
  }
}
