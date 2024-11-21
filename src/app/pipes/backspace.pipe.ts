import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'backspace',
})
export class BackspacePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string): SafeHtml {
    if (!value) return value;
    const transformedValue = value.replace(/\\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(transformedValue);
  }
}
