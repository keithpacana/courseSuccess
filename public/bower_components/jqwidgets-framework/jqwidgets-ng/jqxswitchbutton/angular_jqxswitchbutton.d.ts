/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class jqxSwitchButtonComponent implements ControlValueAccessor, OnChanges {
    attrChecked: boolean;
    attrDisabled: boolean;
    attrOrientation: any;
    attrOnLabel: string;
    attrOffLabel: string;
    attrThumbSize: string;
    attrRtl: boolean;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxSwitchButton;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setOptions(options: any): void;
    checked(arg?: boolean): any;
    disabled(arg?: boolean): any;
    height(arg?: string | number): any;
    orientation(arg?: string): any;
    onLabel(arg?: string): any;
    offLabel(arg?: string): any;
    thumbSize(arg?: string): any;
    rtl(arg?: boolean): any;
    width(arg?: string | number): any;
    check(): void;
    disable(): void;
    enable(): void;
    toggle(): void;
    uncheck(): void;
    val(value?: boolean): any;
    onChecked: EventEmitter<{}>;
    onChange: EventEmitter<{}>;
    onUnchecked: EventEmitter<{}>;
    __wireEvents__(): void;
}
