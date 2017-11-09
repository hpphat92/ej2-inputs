import { Component, EventHandler, Property, Event, Browser, CreateBuilder, L10n, EmitType } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, INotifyPropertyChanged, BaseEventArgs } from '@syncfusion/ej2-base';
import { createElement, attributes, addClass, removeClass, setStyleAttribute, detach } from '@syncfusion/ej2-base';
import { isNullOrUndefined, getValue, formatUnit, setValue, merge } from '@syncfusion/ej2-base';
import { Internationalization, NumberFormatOptions, getNumericObject } from '@syncfusion/ej2-base';
import { NumericTextBoxModel } from './numerictextbox-model';
import { NumericTextBoxHelper } from './numerictextbox-builder';
import { Input, InputObject, FloatLabelType } from '../input/input';

const ROOT: string = 'e-numeric';
const SPINICON: string = 'e-input-group-icon';
const SPINUP: string = 'e-spin-up';
const SPINDOWN: string = 'e-spin-down';
const ERROR: string = 'e-error';
const INCREMENT: string = 'increment';
const DECREMENT: string = 'decrement';
const INTREGEXP: RegExp = new RegExp('/^(-)?(\d*)$/');
const DECIMALSEPARATOR: string = '.';

/**
 * Represents the NumericTextBox component that allows the user to enter only numeric values.
 * ```html
 * <input type='text' id="numeric"/>
 * ```
 * ```typescript
 * <script>
 *   var numericObj = new NumericTextBox({ value: 10 });
 *   numericObj.appendTo("#numeric");
 * </script>
 * ```
 */

@NotifyPropertyChanges
export class NumericTextBox extends Component<HTMLInputElement> implements INotifyPropertyChanged {

    /* Internal variables */
    private container: HTMLElement;
    private cloneElement: HTMLElement;
    private hiddenInput: HTMLInputElement;
    private spinUp: HTMLElement;
    private spinDown: HTMLElement;
    private timeOut: number;
    private prevValue: number;
    private isValidState: boolean;
    private isFocused: boolean;
    private isPrevFocused: boolean = false;
    private instance: Internationalization;
    private cultureInfo: NumberFormatOptions;
    private inputStyle: string;
    private inputName: string;
    private decimalSeparator: string = '.';
    private angularTagName: string;
    private intRegExp: RegExp = new RegExp('/^(-)?(\d*)$/');
    private l10n: L10n;
    private isCalled: boolean = false;
    private changeEventArgs: ChangeEventArgs;

    /*NumericTextBox Options */

    /**
     * Gets or Sets the CSS classes to root element of the NumericTextBox which helps to customize the
     * complete UI styles.
     * @default null
     */
    @Property('')
    public cssClass: string;

    /**
     * Sets the value of the NumericTextBox.
     * @default null
     */
    @Property(null)
    public value: number;

    /**
     * Specifies a minimum value that is allowed a user can enter.
     * @default null
     */
    @Property(-(Number.MAX_VALUE))
    public min: number;

    /**
     * Specifies a maximum value that is allowed a user can enter.
     * @default null
     */
    @Property(Number.MAX_VALUE)
    public max: number;

    /**
     * Specifies the incremental or decremental step size for the NumericTextBox.
     * @default 1
     */
    @Property(1)
    public step: number;

    /**
     * Specifies the width of the NumericTextBox.
     * @default null
     */
    @Property(null)
    public width: number | string;

    /**
     * Gets or sets the string shown as a hint/placeholder when the NumericTextBox is empty.
     * It acts as a label and floats above the NumericTextBox based on the
     * <b><a href="#floatlabeltype-string" target="_blank">floatLabelType.</a></b>
     * @default null
     */
    @Property(null)
    public placeholder: string;

    /**
     * Specifies whether the up and down spin buttons should be displayed in NumericTextBox.
     * @default true
     */
    @Property(true)
    public showSpinButton: boolean;

    /**
     * Sets a value that enables or disables the readonly state on the NumericTextBox. If it is true, 
     * NumericTextBox will not allow your input.
     * @default false
     */
    @Property(false)
    public readonly: boolean;

    /**
     * Sets a value that enables or disables the NumericTextBox control.
     * @default true
     */
    @Property(true)
    public enabled: boolean;

    /**
     * Sets a value that enables or disables the RTL mode on the NumericTextBox. If it is true, 
     * NumericTextBox will display the content in the right to left direction.
     * @default false
     */
    @Property(false)
    public enableRtl: boolean;

    /**
     * Enable or disable persisting NumericTextBox state between page reloads. If enabled, the `value` state will be persisted.
     * @default false
     */
    @Property(false)
    public enablePersistence: boolean;

    /**
     * Specifies the number format that indicates the display format for the value of the NumericTextBox.
     * @default 'n2'
     */
    @Property('n2')
    public format: string;

    /**
     * Specifies the number precision applied to the textbox value when the NumericTextBox is focused.
     * @default null
     */
    @Property(null)
    public decimals: number;

    /**
     * Specifies the currency code to use in currency formatting.
     * Possible values are the ISO 4217 currency codes, such as 'USD' for the US dollar,'EUR' for the euro.
     * @default null
     */
    @Property(null)
    public currency: string;

    /**
     * Specifies a value that indicates whether the NumericTextBox control allows the value for the specified range.
     * * If it is true, the input value will be restricted between the min and max range.
     * The typed value gets modified to fit the range on focused out state.
     * ```html
     * <input type='text' id="numeric"/>
     * ```
     * ```typescript
     * <script>
     *   var numericObj = new NumericTextBox({ min: 10, max: 20, value: 15 });
     *   numericObj.appendTo("#numeric");
     * </script>
     * ```
     * * Else, it allows any value even out of range value,
     * At that time of wrong value entered, the error class will be added to the component to highlight the error.
     * ```html
     * <input type='text' id="numeric"/>
     * ```
     * ```typescript
     * <script>
     *   var numericObj = new NumericTextBox({ strictMode: false, min: 10, max: 20, value: 15 });
     *   numericObj.appendTo("#numeric");
     * </script>
     * ```
     * @default true
     */
    @Property(true)
    public strictMode: boolean;

    /**
     * Specifies whether the decimals length should be restricted during typing.
     * @default false
     */
    @Property(false)
    public validateDecimalOnType: boolean;

    /**
     * Sets the type of floating label which enables or disables the floating label in the NumericTextBox.
     * The <b><a href="#placeholder-string" target="_blank">placeholder</a></b> acts as a label
     * and floats above the NumericTextBox based on the below values.
     * Possible values are:
     * * `Never` - Never floats the label in the NumericTextBox when the placeholder is available.
     * * `Always` - The floating label always floats above the NumericTextBox.
     * * `Auto` - The floating label floats above the NumericTextBox after focusing it or when enters the value in it.
     * @default Never
     */
    @Property('Never')
    public floatLabelType: FloatLabelType;

    /**
     * Triggers when the NumericTextBox component is created.
     * @event
     */
    @Event()
    public created: EmitType<Object>;

    /**
     * Triggers when the NumericTextBox component is destroyed.
     * @event
     */
    @Event()
    public destroyed: EmitType<Object>;

    /**
     * Triggers when the value of the NumericTextBox changes.
     * @event
     */
    @Event()
    public change: EmitType<ChangeEventArgs>;

    constructor(options?: NumericTextBoxModel, element?: string | HTMLInputElement) {
        super(options, <HTMLInputElement | string>element);
    }

    protected preRender(): void {
        let ejInstance: Object = getValue('ej2_instances', this.element);
        this.cloneElement = <HTMLElement>this.element.cloneNode(true);
        this.angularTagName = null;
        if (this.element.tagName === 'EJ-NUMERICTEXTBOX') {
            this.angularTagName = this.element.tagName;
            let input: HTMLElement = <HTMLElement>createElement('input');
            let index: number = 0;
            for (index; index < this.element.attributes.length; index++) {
                input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                input.innerHTML = this.element.innerHTML;
            }
            this.element.parentNode.appendChild(input);
            this.element.parentNode.removeChild(this.element);
            this.element = <HTMLInputElement>input;
            setValue('ej2_instances', ejInstance, this.element);
        }
        attributes(this.element, { 'role': 'spinbutton', 'tabindex': '0', 'autocomplete': 'off', 'aria-live': 'assertive' });
        let localeText: object = { incrementTitle: 'Increment value', decrementTitle: 'Decrement value', placeholder: '' };
        this.l10n = new L10n('numerictextbox', localeText, this.locale);
        this.isValidState = true;
        this.inputStyle = null;
        this.inputName = null;
        this.cultureInfo = {};
        this.initCultureInfo();
        this.initCultureFunc();
        this.checkAttributes();
        this.prevValue = this.value;
        this.validateMinMax();
        this.validateStep();
        if (this.placeholder === null) {
            this.updatePlaceholder();
        }
    }

    /**
     * To Initialize the control rendering
     * @private
     */
    public render(): void {
        if (this.element.tagName.toLowerCase() === 'input') {
            this.createWrapper();
            if (this.showSpinButton) { this.spinBtnCreation(); }
            if (!isNullOrUndefined(this.width)) { setStyleAttribute(this.container, { 'width': formatUnit(this.width) }); }
            this.changeValue(this.value);
            this.wireEvents();
            if (this.value !== null && !isNaN(this.value)) {
                if (this.decimals) {
                    this.setProperties({ value: this.roundNumber(this.value, this.decimals) }, true);
                }
            }
        }
    }

    private checkAttributes(): void {
        let attributes: string[] = ['value', 'min', 'max', 'step', 'disabled', 'readonly', 'style', 'name'];
        for (let prop of attributes) {
            if (!isNullOrUndefined(this.element.getAttribute(prop))) {
                switch (prop) {
                    case 'disabled':
                        let enabled: boolean = this.element.getAttribute(prop) === 'disabled' ||
                            this.element.getAttribute(prop) === 'true' ? false : true;
                        this.setProperties({ enabled: enabled }, true);
                        break;
                    case 'readonly':
                        let readonly: boolean = this.element.getAttribute(prop) === 'readonly'
                            || this.element.getAttribute(prop) === 'true' ? true : false;
                        this.setProperties({ readonly: readonly }, true);
                        break;
                    case 'style':
                        this.inputStyle = this.element.getAttribute(prop);
                        break;
                    case 'name':
                        this.inputName = this.element.getAttribute(prop);
                        break;
                    default:
                        let value: number = this.instance.getNumberParser({ format: 'n' })(this.element.getAttribute(prop));
                        if ((value !== null && !isNaN(value)) || (prop === 'value')) {
                            this.setProperties(setValue(prop, value, {}), true);
                        }
                        break;
                }
            }
        }
    }

    private updatePlaceholder(): void {
        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
    }

    private initCultureFunc(): void {
        this.instance = new Internationalization(this.locale);
    }

    private initCultureInfo(): void {
        this.cultureInfo.format = this.format;
        if (getValue('currency', this) !== null) { setValue('currency', this.currency, this.cultureInfo); }
    }

    /* Wrapper creation */
    private createWrapper(): void {
        let inputObj: InputObject = Input.createInput({
            element: this.element,
            customTag: this.angularTagName,
            floatLabelType: this.floatLabelType,
            properties: {
                readonly: this.readonly,
                placeholder: this.placeholder,
                cssClass: this.cssClass,
                enableRtl: this.enableRtl,
                enabled: this.enabled
            }
        });
        this.container = inputObj.container;
        addClass([this.container], ROOT);
        if (this.readonly) { attributes(this.element, { 'aria-readonly': 'true' }); }
        this.hiddenInput = <HTMLInputElement>(createElement('input', { attrs: { type: 'hidden' } }));
        this.inputName = this.inputName !== null ? this.inputName : this.element.id;
        this.element.removeAttribute('name');
        attributes(this.hiddenInput, { 'name': this.inputName });
        this.container.insertBefore(this.hiddenInput, this.element);
        if (this.inputStyle !== null) { attributes(this.container, { 'style': this.inputStyle }); }
    }

    /* Spinner creation */
    private spinBtnCreation(): void {
        this.spinDown = Input.appendSpan(SPINICON + ' ' + SPINDOWN, this.container);
        attributes(this.spinDown, {
            'title': this.l10n.getConstant('decrementTitle'),
            'aria-label': this.l10n.getConstant('decrementTitle')
        });
        this.spinUp = Input.appendSpan(SPINICON + ' ' + SPINUP, this.container);
        attributes(this.spinUp, {
            'title': this.l10n.getConstant('incrementTitle'),
            'aria-label': this.l10n.getConstant('incrementTitle')
        });
        this.wireSpinBtnEvents();
    }

    private validateMinMax(): void {
        if (!(typeof (this.min) === 'number' && !isNaN(this.min))) {
            this.setProperties({ min: -(Number.MAX_VALUE) }, true);
        }
        if (!(typeof (this.max) === 'number' && !isNaN(this.max))) {
            this.setProperties({ max: Number.MAX_VALUE }, true);
        }
        if (this.decimals !== null) {
            if (this.min !== -(Number.MAX_VALUE)) {
            this.setProperties({ min: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.min)) }, true);
            }
            if (this.max !== (Number.MAX_VALUE)) {
            this.setProperties({ max: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.max)) }, true);
            }
        }
        this.setProperties({ min: this.min > this.max ? this.max : this.min }, true);
        attributes(this.element, { 'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString() });
    }

    private formattedValue(decimals: number, value: number): string {
        return this.instance.getNumberFormat({
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals, useGrouping: false
        })(value);
    }

    private validateStep(): void {
        if (this.decimals !== null) {
        this.setProperties({ step: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.step)) }, true);
        }
    }

    private action(operation: string): void {
        let value: number = this.isFocused ? this.instance.getNumberParser({ format: 'n' })(this.element.value) : this.value;
        this.changeValue(this.performAction(value, this.step, operation));
        this.raiseChangeEvent();
    }

    private checkErrorClass(): void {
        if (this.isValidState) {
            removeClass([this.container], ERROR);
        } else {
            addClass([this.container], ERROR);
        }
        attributes(this.element, { 'aria-invalid': this.isValidState ? 'false' : 'true' });
    }

    private wireEvents(): void {
        EventHandler.add(this.element, 'focus', this.focusIn, this);
        EventHandler.add(this.element, 'blur', this.focusOut, this);
        EventHandler.add(this.element, 'keydown', this.keyDownHandler, this);
        EventHandler.add(this.element, 'keypress', this.keyPressHandler, this);
        EventHandler.add(this.element, 'change', this.changeHandler, this);
        EventHandler.add(this.element, 'paste', this.pasteHandler, this);
    }

    private wireSpinBtnEvents(): void {
        /* bind spin button events */
        EventHandler.add(this.spinUp, Browser.touchStartEvent, this.mouseDownOnSpinner, this);
        EventHandler.add(this.spinDown, Browser.touchStartEvent, this.mouseDownOnSpinner, this);
        EventHandler.add(this.spinUp, Browser.touchEndEvent, this.mouseUpOnSpinner, this);
        EventHandler.add(this.spinDown, Browser.touchEndEvent, this.mouseUpOnSpinner, this);
        EventHandler.add(this.spinUp, Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
        EventHandler.add(this.spinDown, Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
    }

    private unwireEvents(): void {
        EventHandler.remove(this.element, 'focus', this.focusIn);
        EventHandler.remove(this.element, 'blur', this.focusOut);
        EventHandler.remove(this.element, 'keydown', this.keyDownHandler);
        EventHandler.remove(this.element, 'keypress', this.keyPressHandler);
        EventHandler.remove(this.element, 'change', this.changeHandler);
        EventHandler.remove(this.element, 'paste', this.pasteHandler);
    }

    private unwireSpinBtnEvents(): void {
        /* unbind spin button events */
        EventHandler.remove(this.spinUp, Browser.touchStartEvent, this.mouseDownOnSpinner);
        EventHandler.remove(this.spinDown, Browser.touchStartEvent, this.mouseDownOnSpinner);
        EventHandler.remove(this.spinUp, Browser.touchEndEvent, this.mouseUpOnSpinner);
        EventHandler.remove(this.spinDown, Browser.touchEndEvent, this.mouseUpOnSpinner);
        EventHandler.remove(this.spinUp, Browser.touchMoveEvent, this.touchMoveOnSpinner);
        EventHandler.remove(this.spinDown, Browser.touchMoveEvent, this.touchMoveOnSpinner);
    }

    private changeHandler(event: Event): void {
        if (!this.element.value.length) {
            this.setProperties({ value: null }, true);
        }
        let parsedInput: number = this.instance.getNumberParser({ format: 'n' })(this.element.value);
        this.updateValue(parsedInput, event);
    }

    private raiseChangeEvent(event?: Event): void {
        if (this.prevValue !== this.value) {
            let eventArgs: Object = {};
            this.changeEventArgs = { value: this.value, previousValue: this.prevValue };
            if (event) { this.changeEventArgs.event = event; }
            merge(eventArgs, this.changeEventArgs);
            this.prevValue = this.value;
            this.trigger('change', eventArgs);
        }
    }

    private pasteHandler(): void {
        let beforeUpdate: string = this.element.value;
        setTimeout(() => {
            if (!this.numericRegex().test(this.element.value)) {
                this.setElementValue(beforeUpdate);
            }
        });
    }

    private keyDownHandler(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 38:
                event.preventDefault();
                this.action(INCREMENT);
                break;
            case 40:
                event.preventDefault();
                this.action(DECREMENT);
                break;
            default: break;
        }
        if (!this.element.value.length) {
            this.setProperties({ value: null }, true);
            this.updateValue(this.instance.getNumberParser({ format: 'n' })(this.element.value));
        }
    };

    private performAction(value: number, step: number, operation: string): number {
        if (value === null || isNaN(value)) {
            value = 0;
        }
        let updatedValue: number = operation === INCREMENT ? value + step : value - step;
        updatedValue = this.correctRounding(value, step, updatedValue);
        return this.strictMode ? this.trimValue(updatedValue) : updatedValue;
    };

    private correctRounding(value: number, step: number, result: number): number {
        let floatExp: RegExp = new RegExp('[,.](.*)');
        let valueText: string = value.toString();
        let stepText: string = step.toString();
        let floatValue: boolean = floatExp.test(value.toString());
        let floatStep: boolean = floatExp.test(step.toString());
        if (floatValue || floatStep) {
            let valueCount: number = floatValue ? floatExp.exec(value.toString())[0].length : 0;
            let stepCount: number = floatStep ? floatExp.exec(step.toString())[0].length : 0;
            let max: number = Math.max(valueCount, stepCount);
            return value = this.roundValue(result, max);
        }
        return result;
    };

    private roundValue(result: number, precision: number): number {
        precision = precision || 0;
        let divide: number = Math.pow(10, precision);
        return result *= divide, result = Math.round(result) / divide;
    };

    private updateValue(value: number, event?: Event): void {
        if (value !== null && !isNaN(value)) {
            if (this.decimals) {
                value = this.roundNumber(value, this.decimals);
            }
        }
        this.changeValue(value === null || isNaN(value) ? null : this.strictMode ? this.trimValue(value) : value);
        this.raiseChangeEvent(event);
    }

    private changeValue(value: number): void {
        if (!(value || value === 0)) {
            value = null;
            this.setProperties({ value: value }, true);
        } else {
            let numberOfDecimals: number;
            let decimalPart: string = value.toString().split('.')[1];
            numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
            if (this.decimals !== null) {
                numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
            }
            this.setProperties({ value: this.roundNumber(value, numberOfDecimals) }, true);
        }
        this.modifyText();
        if (!this.strictMode) { this.validateState(); }
    };

    private modifyText(): void {
        if (this.value || this.value === 0) {
            let value: string = this.formatNumber();
            let elementValue: string = this.isFocused ? value : this.instance.getNumberFormat(this.cultureInfo)(this.value);
            this.setElementValue(elementValue);
            attributes(this.element, { 'aria-valuenow': value });
            this.hiddenInput.value = value;
        } else {
            this.setElementValue('');
            this.element.removeAttribute('aria-valuenow');
            this.hiddenInput.value = null;
        }
    };
    private setElementValue(val: string, element ? : HTMLInputElement): void {
        Input.setValue(val, (element ? element : this.element), this.floatLabelType);
    }

    private validateState(): void {
        this.isValidState = true;
        if (this.value || this.value === 0) {
            this.isValidState = !(this.value > this.max || this.value < this.min);
        }
        this.checkErrorClass();
    }

    private formatNumber(): string {
        let numberOfDecimals: number;
        let currentValue: number = this.value;
        let decimalPart: string = currentValue.toString().split('.')[1];
        numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
        if (this.decimals !== null) {
            numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
        }
        return this.instance.getNumberFormat({
            maximumFractionDigits: numberOfDecimals,
            minimumFractionDigits: numberOfDecimals, useGrouping: false
        })(this.value);
    };

    private trimValue(value: number): number {
        if (value > this.max) {
            return this.max;
        }
        if (value < this.min) {
            return this.min;
        }
        return value;
    };
    private roundNumber(value: number, precision: number): number {
        let result: number = value;
        let decimals: number = precision || 0;
        let result1: string[] = result.toString().split('e');
        result = Math.round(Number(result1[0] + 'e' + (result1[1] ? (Number(result1[1]) + decimals) : decimals)));
        let result2: string[] = result.toString().split('e');
        result = Number(result2[0] + 'e' + (result2[1] ? (Number(result2[1]) - decimals) : -decimals));
        return Number(result.toFixed(decimals));
    };
    private cancelEvent(event: Event): boolean {
        event.preventDefault();
        return false;
    }

    private keyPressHandler(event: KeyboardEvent): boolean {
        if (event.which === 0 || event.metaKey || event.ctrlKey || event.keyCode === 8 || event.keyCode === 13) { return true; }
        let currentChar: string = String.fromCharCode(event.which);
        let text: string = this.element.value;
        text = text.substring(0, this.element.selectionStart) + currentChar + text.substring(this.element.selectionEnd);
        if (!this.numericRegex().test(text)) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        } else {
            return true;
        }
    };

    private numericRegex(): RegExp {
        let numericObject: Object = getNumericObject(this.locale);
        let decimalSeparator: string = getValue('decimal', numericObject);
        let fractionRule: string = '*';
        if (decimalSeparator === DECIMALSEPARATOR) {
            decimalSeparator = '\\' + decimalSeparator;
        }
        if (this.decimals === 0) {
            return INTREGEXP;
        }
        if (this.decimals && this.validateDecimalOnType) {
            fractionRule = '{0,' + this.decimals + '}';
        }
        return new RegExp('^(-)?(((\\d+(' + decimalSeparator + '\\d' + fractionRule +
            ')?)|(' + decimalSeparator + '\\d' + fractionRule + ')))?$');
    };

    private mouseWheel(event: MouseWheelEvent): void {
        event.preventDefault();
        let delta: number;
        let rawEvent: WheelEvent = event;
        if (rawEvent.wheelDelta) {
            delta = rawEvent.wheelDelta / 120;
        } else if (rawEvent.detail) {
            delta = -rawEvent.detail / 3;
        }
        if (delta > 0) {
            this.action(INCREMENT);
        } else if (delta < 0) {
            this.action(DECREMENT);
        }
        this.cancelEvent(event);
    }

    private focusIn(event: FocusEvent): void {
        if (!this.enabled || this.readonly) { return; }
        this.isFocused = true;
        removeClass([this.container], ERROR);
        this.prevValue = this.value;
        if ((this.value || this.value === 0)) {
            let formatValue: string = this.formatNumber();
            this.setElementValue(formatValue);
            if (!this.isPrevFocused) {
                this.element.setSelectionRange(0, formatValue.length);
            }
        }
        if (!Browser.isDevice) {
            EventHandler.add(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel, this);
        }
    };

    private focusOut(event: FocusEvent): void {
        if (this.isPrevFocused) {
            event.preventDefault();
            if (Browser.isDevice) {
                let value: string = this.element.value;
                this.element.focus();
                this.isPrevFocused = false;
                let ele: HTMLInputElement = this.element;
                setTimeout(
                    () => {
                        this.setElementValue(value, ele);
                    },
                    200);
            }
        } else {
            this.isFocused = false;
            if (!this.element.value.length) {
                this.setProperties({ value: null }, true);
            }
            let parsedInput: number = this.instance.getNumberParser({ format: 'n' })(this.element.value);
            this.updateValue(parsedInput);
            if (!Browser.isDevice) {
                EventHandler.remove(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel);
            }
        }
    };

    private mouseDownOnSpinner(event: MouseEvent): void {
        if (this.isFocused) {
            this.isPrevFocused = true;
            event.preventDefault();
        }
        if (!this.getElementData(event)) { return; }
        let result: boolean = this.getElementData(event);
        let target: HTMLElement = <HTMLElement>event.currentTarget;
        let action: string = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
        EventHandler.add(target, 'mouseleave', this.mouseUpClick, this);
        this.timeOut = setInterval(() => { this.isCalled = true; this.action(action); }, 150);
        EventHandler.add(document, 'mouseup', this.mouseUpClick, this);
    }

    private touchMoveOnSpinner(event: MouseEvent): void {
        let target: Element = document.elementFromPoint(event.clientX, event.clientY);
        if (!(target.classList.contains(SPINICON))) {
            clearInterval(this.timeOut);
        }
    }

    private mouseUpOnSpinner(event: MouseEvent): void {
        if (this.isPrevFocused) {
            this.element.focus();
            if (!Browser.isDevice) {
                this.isPrevFocused = false;
            }
        }
        if (!Browser.isDevice) { event.preventDefault(); }
        if (!this.getElementData(event)) { return; }
        let target: HTMLElement = <HTMLElement>event.currentTarget;
        let action: string = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
        EventHandler.remove(target, 'mouseleave', this.mouseUpClick);
        if (!this.isCalled) { this.action(action); }
        this.isCalled = false;
        EventHandler.remove(document, 'mouseup', this.mouseUpClick);
    }

    private getElementData(event: MouseEvent): boolean {
        if ((event.which && event.which === 3) || (event.button && event.button === 2)
            || !this.enabled || this.readonly) {
            return false;
        }
        clearInterval(this.timeOut);
        return true;
    }

    private mouseUpClick(event: MouseEvent): void {
        event.stopPropagation();
        clearInterval(this.timeOut);
        this.isCalled = false;
        EventHandler.remove(this.spinUp, 'mouseleave', this.mouseUpClick);
        EventHandler.remove(this.spinDown, 'mouseleave', this.mouseUpClick);
    }

    /**
     * Increments the NumericTextBox value with the specified step value.
     * @param  {number} step - Specifies the value used to increment the NumericTextBox value.
     * if its not given then numeric value will be incremented based on the step property value.
     */
    public increment(step: number = this.step): void {
        this.changeValue(this.performAction(this.value, step, INCREMENT));
    }
    /**
     * Decrements the NumericTextBox value with specified step value.
     * @param  {number} step - Specifies the value used to decrement the NumericTextBox value.
     * if its not given then numeric value will be decremented based on the step property value.
     */
    public decrement(step: number = this.step): void {
        this.changeValue(this.performAction(this.value, step, DECREMENT));
    }

    /**
     * Removes the component from the DOM and detaches all its related event handlers.
     * Also it maintains the initial input element from the DOM.
     * @method destroy
     * @return {void}
     */
    public destroy(): void {
        this.unwireEvents();
        detach(this.hiddenInput);
        if (this.showSpinButton) {
            this.unwireSpinBtnEvents();
            detach(this.spinUp);
            detach(this.spinDown);
        }
        this.container.parentElement.appendChild(this.cloneElement);
        detach(this.container);
        super.destroy();
    }

    /**
     * Returns the value of NumericTextBox with the format applied to the NumericTextBox.
     */
    public getText(): string {
        return this.element.value;
    }

    /**
     * Gets the properties to be maintained in the persisted state.
     * @return {string}
     */
    public getPersistData(): string {
        let keyEntity: string[] = ['value'];
        return this.addOnPersist(keyEntity);
    }
    /**
     * Calls internally if any of the property value is changed.
     * @private
     */
    public onPropertyChanged(newProp: NumericTextBoxModel, oldProp: NumericTextBoxModel): void {
        let elementVal: number;
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'width':
                    setStyleAttribute(this.container, { 'width': formatUnit(newProp.width) });
                    break;
                case 'cssClass':
                    Input.setCssClass(newProp.cssClass, [this.container], oldProp.cssClass);
                    break;
                case 'enabled':
                    Input.setEnabled(newProp.enabled, this.element);
                    break;
                case 'enableRtl':
                    Input.setEnableRtl(newProp.enableRtl, [this.container]);
                    break;
                case 'readonly':
                    Input.setReadonly(newProp.readonly, this.element);
                    if (this.readonly) {
                        attributes(this.element, { 'aria-readonly': 'true' });
                    } else {
                        this.element.removeAttribute('aria-readonly');
                    }
                    break;
                case 'placeholder':
                    Input.setPlaceholder(newProp.placeholder, this.element);
                    break;
                case 'step':
                    this.step = newProp.step;
                    this.validateStep();
                    break;
                case 'showSpinButton':
                    if (newProp.showSpinButton) {
                        this.spinBtnCreation();
                    } else {
                        detach(this.spinUp);
                        detach(this.spinDown);
                    }
                    break;
                case 'value':
                    this.updateValue(newProp.value);
                    break;
                case 'min':
                case 'max':
                    setValue(prop, getValue(prop, newProp), this);
                    this.validateMinMax();
                    this.updateValue(this.value);
                    break;
                case 'strictMode':
                    this.strictMode = newProp.strictMode;
                    this.updateValue(this.value);
                    this.validateState();
                    break;
                case 'locale':
                    this.initCultureFunc();
                    this.l10n.setLocale(this.locale);
                    if (!isNullOrUndefined(this.spinDown)) {
                        attributes(this.spinDown, {
                            'title': this.l10n.getConstant('decrementTitle'),
                            'aria-label': this.l10n.getConstant('decrementTitle')
                        });
                    }
                    if (!isNullOrUndefined(this.spinUp)) {
                        attributes(this.spinUp, {
                            'title': this.l10n.getConstant('incrementTitle'),
                            'aria-label': this.l10n.getConstant('incrementTitle')
                        });
                    }
                    this.updatePlaceholder();
                    Input.setPlaceholder(this.placeholder, this.element);
                    this.updateValue(this.value);
                    break;
                case 'currency':
                    setValue(prop, getValue(prop, newProp), this.cultureInfo);
                    this.updateValue(this.value);
                    break;
                case 'format':
                    setValue(prop, getValue(prop, newProp), this);
                    this.initCultureInfo();
                    this.updateValue(this.value);
                    break;
                case 'decimals':
                    this.decimals = newProp.decimals;
                    this.updateValue(this.value);
            }
        }
    }

    /**
     * Gets the component name
     * @private
     */
    public getModuleName(): string {
        return 'numerictextbox';
    }
}

export interface ChangeEventArgs extends BaseEventArgs {
    /** Returns the entered value of the NumericTextBox. */
    value?: number;
    /** Returns the previously entered value of the NumericTextBox. */
    previousValue?: number;
    /** Returns the event parameters from NumericTextBox. */
    event?: Event;
}

/**
 * Builder for NumericTextBox
 */
export let numerictextboxHelper: NumericTextBoxHelper = <NumericTextBoxHelper>CreateBuilder(NumericTextBox);