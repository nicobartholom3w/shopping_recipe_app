import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    constructor(private dropdownRef: ElementRef, private renderer: Renderer2) {

    }

    // @Output() public clickOutside = new EventEmitter();
    
    // @HostListener('document:click' ['$event.target'])
    // public onClick(targetElement) {
    //     const clickedInside = this.dropdownRef.nativeElement.contains(targetElement);
    //     if(!clickedInside) {
    //         this.clickOutside.emit(null);
    //     }
    // }
}