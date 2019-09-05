import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    constructor(private dropdownRef: ElementRef, private renderer: Renderer2) {

    }
    // @HostBinding('class.visible') isVisible = false;

    @HostListener('click') toggleOpen() {
        this.renderer.setStyle(this.dropdownRef.nativeElement, 'visibility', 'visible');
    }
}