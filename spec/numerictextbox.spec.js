define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base/dom", "@syncfusion/ej2-base/util", "../src/numerictextbox/numerictextbox"], function (require, exports, ej2_base_1, dom_1, util_1, numerictextbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('Numerictextbox Control', function () {
        describe('NumericTextBox creation', function () {
            var numerictextbox;
            var numerictextbox1;
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Control rendering test with other than input element', function () {
                var divElement = dom_1.createElement('div', { id: 'divElement' });
                document.body.appendChild(divElement);
                numerictextbox1 = new numerictextbox_1.NumericTextBox();
                numerictextbox1.appendTo('#divElement');
                expect(document.getElementById('divElement').classList.contains('e-input')).toEqual(false);
            });
            it('Control rendering test with other (EJ-NUMERICTEXTBOX) than input element', function () {
                var divElement = dom_1.createElement('EJ-NUMERICTEXTBOX', { id: 'divElement' });
                document.body.appendChild(divElement);
                numerictextbox1 = new numerictextbox_1.NumericTextBox();
                numerictextbox1.appendTo('#divElement');
                expect(document.getElementById('divElement').classList.contains('e-input')).toEqual(true);
            });
            it('Control class testing without options', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox();
                numerictextbox.appendTo('#tsNumeric');
                expect(document.getElementById('tsNumeric').classList.contains('e-numerictextbox')).toEqual(true);
            });
            it('Control class testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 });
                numerictextbox.appendTo('#tsNumeric');
                expect(document.getElementById('tsNumeric').classList.contains('e-numerictextbox')).toEqual(true);
            });
            it('Control rendering test with element as option', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').classList.contains('e-numerictextbox')).toEqual(true);
            });
            it('Control rendering test with obj as option', function () {
                var inptElement = dom_1.createElement('input', { id: 'tsNumeric1' });
                document.body.appendChild(inptElement);
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: true }, inptElement);
                expect(document.getElementById('tsNumeric1').classList.contains('e-numerictextbox')).toEqual(true);
            });
            it('Get component name testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: true }, '#tsNumeric');
                expect(numerictextbox.getModuleName()).toEqual('numerictextbox');
            });
            it('Destroy method testing', function () {
                var numerictextbox1 = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                numerictextbox1.destroy();
                expect(document.getElementById('tsNumeric').classList.contains('e-input')).toEqual(false);
            });
        });
        describe('Render numeric textbox with basic values', function () {
            var numerictextbox;
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Render numeric textbox with value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: null }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render numeric textbox with value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: undefined }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render numeric textbox with value as NaN value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: NaN }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render percentage textbox with value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: null, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render percentage textbox with value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: undefined, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render percentage textbox with value as NaN value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: NaN, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render currency textbox with value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: null, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render currency textbox with value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: undefined, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render currency textbox with value as NaN value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: NaN, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Render numeric textbox with min value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: null }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render numeric textbox with min value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: undefined }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render numeric textbox with min value as NaN ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: NaN }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render percentage textbox with min value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: null, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render percentage textbox with min value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: undefined, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render percentage textbox with min value as NaN ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: NaN, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render currency textbox with min value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: null, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render currency textbox with min value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: undefined, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render currency textbox with min value as NaN ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: NaN, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
            });
            it('Render numeric textbox with max value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: null }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render numeric textbox with max value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: undefined }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render numeric textbox with max value as NaN ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: NaN }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render percentage textbox with max value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: null, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render percentage textbox with max value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: undefined, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render percentage textbox with max value as NaN ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: NaN, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render currency textbox with max value as null', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: null, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render currency textbox with max value as undefined', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: undefined, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render currency textbox with max value as NaN ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ max: NaN, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.max).toEqual((Number.MAX_VALUE));
            });
            it('Render numeric textbox with value as 5', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Render currency textbox with value as 5', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Render percentage textbox with value as 0.5', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
            });
            it('Render numeric textbox with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-5.00');
            });
            it('Render currency textbox with negative numeric value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$5.00');
            });
            it('Render percentage textbox with negative numeric value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00%');
            });
            it('Disable the numeric textbox control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').getAttribute('aria-disabled')).toEqual('true');
            });
            it('Enable the numeric textbox control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(false);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(false);
            });
            it('Enable the spin button option in numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ showSpinButton: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up") !== undefined);
            });
            it('Disable the spin button option in numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ showSpinButton: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up") === undefined);
            });
            it('Enable the RightToLeft option in numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enableRtl: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-rtl')).toEqual(true);
            });
            it('Disable the RightToLeft option in numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enableRtl: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-rtl')).toEqual(false);
            });
            it('Add custom css class to numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ cssClass: 'custom-css' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('custom-css')).toEqual(true);
            });
            it('Set the readonly to numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ readonly: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').readOnly).toBe(true);
            });
            it('Set the read only value as false to numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ readonly: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').readOnly).not.toBe(true);
            });
            it('Set the custom width to numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ width: "400px" }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.getAttribute("style")).toEqual("width: 400px;");
            });
            it('Set the custom height to numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ height: "40px" }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.getAttribute("style")).toEqual("height: 40px;");
            });
            it('Set the watermarkText to numerictextbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ placeholder: 'Enter the numeric value' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').getAttribute("placeholder")).toEqual('Enter the numeric value');
            });
            it('Set the format as numeric', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'n2', value: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Set the format as percentage', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'p2', value: 0.5 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                expect(numerictextbox.value).toEqual(0.5);
            });
            it('Set the format as currency', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c2', value: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Set the custom currency symbol', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c2', value: 10, currency: 'EUR' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('€10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Set the custom format as ###.###', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: '###.###', value: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Set the custom format as ###.###', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: '###.###', value: 10.88888 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.889');
                expect(numerictextbox.value).toEqual(10.88888);
            });
            it('Set the custom format as 00##.0000', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: '00##.0000', value: 100.5 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('0100.5000');
                expect(numerictextbox.value).toEqual(100.5);
            });
            it('Set the custom format as ##.### KG', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: '##.### KG', value: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10 KG');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Set the custom format as ##.### KG', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: '##.### KG', value: 10.88888 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.889 KG');
                expect(numerictextbox.value).toEqual(10.88888);
            });
            it('Set the custom format as ##.### %', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: '##.### %', value: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('1000 %');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Set the custom format as ##.### $', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: '##.### $', value: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10 $');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Set the decimals value as 3 with min/ max and step in numeric', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'n4', value: 10.88888, decimals: 3, min: 2.877888, max: 25.888888, step: 1.346666 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.8890');
                expect(numerictextbox.value).toEqual(10.889);
                expect(numerictextbox.min).toEqual(2.878);
                expect(numerictextbox.max).toEqual(25.889);
                expect(numerictextbox.step).toEqual(1.347);
            });
            it('Set the decimals value as 3 in numeric', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'n4', value: 10.88888, decimals: 3 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.8890');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('10.889');
                expect(numerictextbox.value).toEqual(10.889);
            });
            it('Set the decimals value as 3 in currency', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c4', value: 15.88888, decimals: 3 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.8890');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('15.889');
                expect(numerictextbox.value).toEqual(15.889);
            });
        });
        describe('Numeric textbox with element attribute', function () {
            var numerictextbox;
            var mouseEvent = document.createEvent('MouseEvents');
            var mouseEvent2 = document.createEvent('MouseEvents');
            beforeEach(function () {
                numerictextbox = undefined;
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Add the html attribute (value) to input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(numerictextbox.value).toEqual(20);
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
            });
            it('Add the html attribute (value) to input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: 'hello' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(numerictextbox.value).toEqual(null);
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Add the html attribute (value) and also set the value API in input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 40 }, ele);
                expect(numerictextbox.value).toEqual(20);
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
            });
            it('Add the html attribute (value) and also set the value API in input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 40 }, ele);
                expect(numerictextbox.value).toBeNull();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Add the html attribute (value) to currency input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c2' }, ele);
                expect(numerictextbox.value).toEqual(20);
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
            });
            it('Add the html attribute (value) and also set the value API to currency input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c2', value: 40 }, ele);
                expect(numerictextbox.value).toEqual(20);
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
            });
            it('Add the html attribute (value) and also set the value API to currency input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c2', value: 40 }, ele);
                expect(numerictextbox.value).toBeNull();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Add the html attribute (value) to percentage input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '0.5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'p2' }, ele);
                expect(numerictextbox.value).toEqual(0.5);
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
            });
            it('Add the html attribute (value) and also set the value API in percentage input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '0.5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'p2', value: 34 }, ele);
                expect(numerictextbox.value).toEqual(0.5);
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
            });
            it('Add the html attribute (value) and also set the value API in percentage input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'p2', value: 34 }, ele);
                expect(numerictextbox.value).toBeNull();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Add the html attribute (min & max) to input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20', min: '5', max: '10' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Add the html attribute (min & max) to input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20', min: 'hello', max: 'world' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                expect(numerictextbox.min).toEqual(-(Number.MAX_VALUE));
                expect(numerictextbox.max).toEqual(Number.MAX_VALUE);
            });
            it('Add the html attribute (min & max) and also set min & max API to input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20', min: '5', max: '10' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 20, max: 25 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Add the html attribute (min & max) to percentage input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '2', min: '0.5', max: '1' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'p2' }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                expect(numerictextbox.min).toEqual(0.5);
                expect(numerictextbox.max).toEqual(1);
            });
            it('Add the html attribute (min & max) and also set min & max API in  percentage input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '2', min: '0.5', max: '1' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'p2', min: 20, max: 25 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                expect(numerictextbox.min).toEqual(0.5);
                expect(numerictextbox.max).toEqual(1);
            });
            it('Add the html attribute (min & max) to currency input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20', min: '5', max: '10' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c2' }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Add the html attribute (min & max) and also set min & max API in currency input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { value: '20', min: '5', max: '10' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ format: 'c2', min: 20, max: 25 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Add the html attribute (step) in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { step: '5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                var spin = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                spin.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                spin.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
            });
            it('Add the html attribute (step) in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { step: 'hello' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                var spin = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                spin.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                spin.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('11.00');
                expect(numerictextbox.step).toEqual(1);
            });
            it('Add the html attribute (step) and also set the step API value in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { step: '5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 2 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                var spin = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                spin.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                spin.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
            });
            it('Add the html attribute (step) in the percentage input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { step: '5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1, format: 'p2' }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                var spin = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                spin.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                spin.dispatchEvent(mouseEvent2);
                document.getElementById('tsNumeric').blur();
                expect(document.getElementById('tsNumeric').value).toEqual('600.00%');
            });
            it('Add the html attribute (step) and also set the step API value in the percentage input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { step: '5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1, format: 'p2', step: 2 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                var spin = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                spin.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                spin.dispatchEvent(mouseEvent2);
                document.getElementById('tsNumeric').blur();
                expect(document.getElementById('tsNumeric').value).toEqual('600.00%');
            });
            it('Add the html attribute (step) in the currency input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { step: '5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, format: 'c2' }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                var spin = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                spin.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                spin.dispatchEvent(mouseEvent2);
                document.getElementById('tsNumeric').blur();
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
            });
            it('Add the html attribute (step) and also set the step API value in the currency input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { step: '5' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, format: 'c2', step: 2 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                var spin = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                spin.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                spin.dispatchEvent(mouseEvent2);
                document.getElementById('tsNumeric').blur();
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
            });
            it('Add the html attribute (disabled) in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { disabled: 'disabled' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').getAttribute('aria-disabled')).toEqual('true');
            });
            it('Add the html attribute (disabled) and also set the enabled API in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { disabled: 'disabled' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: false }, ele);
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').getAttribute('aria-disabled')).toEqual('true');
            });
            it('Add the html attribute (disabled) value as true in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { disabled: 'true' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').getAttribute('aria-disabled')).toEqual('true');
            });
            it('Add the html attribute (disabled) value as false in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { disabled: 'false' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(false);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(false);
            });
            it('Add the html attribute (readonly) in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { readonly: 'readonly' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').readOnly).toBe(true);
            });
            it('Add the html attribute (readonly) and also set the readonly API in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { readonly: 'readonly' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ readonly: false }, ele);
                expect(document.getElementById('tsNumeric').readOnly).toBe(true);
            });
            it('Add the html attribute (readonly) value as true in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { readonly: 'true' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').readOnly).toBe(true);
            });
            it('Add the html attribute (readonly) value as false in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { readonly: 'false' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').readOnly).toBe(false);
            });
            it('Add the html attribute (style) in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { style: 'width:100px;height:50px;' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').parentElement.getAttribute("style")).toEqual("width:100px;height:50px;");
            });
            it('Add the html attribute (name) in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric', attrs: { name: 'custom' } });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').parentElement.querySelector("input[type='hidden']").getAttribute('name')).toEqual('custom');
            });
            it('Add the html attribute (name) in the input element', function () {
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({}, ele);
                expect(document.getElementById('tsNumeric').parentElement.querySelector("input[type='hidden']").getAttribute('name')).toEqual('tsNumeric');
            });
        });
        describe('Numerictextbox public methods testing ', function () {
            var numerictextbox;
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Call the increment operation', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                numerictextbox.increment();
                expect(document.getElementById('tsNumeric').value).toEqual('11.00');
            });
            it('Call the decrement operation', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                numerictextbox.decrement();
                expect(document.getElementById('tsNumeric').value).toEqual('9.00');
            });
            it('Call the increment operation in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                numerictextbox.increment();
                expect(document.getElementById('tsNumeric').value).toEqual('150.00%');
                expect(numerictextbox.value).toEqual(1.5);
            });
            it('Call the decrement operation in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.5, format: 'p2' }, '#tsNumeric');
                numerictextbox.decrement();
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                expect(numerictextbox.value).toEqual(0.5);
            });
            it('Call the increment operation in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, format: 'c2' }, '#tsNumeric');
                numerictextbox.increment();
                expect(document.getElementById('tsNumeric').value).toEqual('$6.00');
                expect(numerictextbox.value).toEqual(6);
            });
            it('Call the decrement operation in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, format: 'c2' }, '#tsNumeric');
                numerictextbox.decrement();
                expect(document.getElementById('tsNumeric').value).toEqual('$4.00');
                expect(numerictextbox.value).toEqual(4);
            });
            it('Call the increment operation with custom model step value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5 }, '#tsNumeric');
                numerictextbox.increment();
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
            });
            it('Call the decrement operation with custom model step value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5 }, '#tsNumeric');
                numerictextbox.decrement();
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Call the increment operation with custom model in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                numerictextbox.increment();
                expect(document.getElementById('tsNumeric').value).toEqual('60.00%');
                expect(numerictextbox.value).toEqual(0.6);
            });
            it('Call the decrement operation with custom model in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                numerictextbox.decrement();
                expect(document.getElementById('tsNumeric').value).toEqual('40.00%');
                expect(numerictextbox.value).toEqual(0.4);
            });
            it('Call the increment operation with custom model in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, step: 2, format: 'c2' }, '#tsNumeric');
                numerictextbox.increment();
                expect(document.getElementById('tsNumeric').value).toEqual('$7.00');
                expect(numerictextbox.value).toEqual(7);
            });
            it('Call the decrement operation with custom model in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, step: 2, format: 'c2' }, '#tsNumeric');
                numerictextbox.decrement();
                expect(document.getElementById('tsNumeric').value).toEqual('$3.00');
                expect(numerictextbox.value).toEqual(3);
            });
            it('Call the increment operation with custom model step value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5 }, '#tsNumeric');
                numerictextbox.increment(3);
                expect(document.getElementById('tsNumeric').value).toEqual('13.00');
            });
            it('Call the decrement operation with custom model step value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5 }, '#tsNumeric');
                numerictextbox.decrement(3);
                expect(document.getElementById('tsNumeric').value).toEqual('7.00');
            });
            it('Call the increment operation with custom model in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                numerictextbox.increment(0.2);
                expect(document.getElementById('tsNumeric').value).toEqual('70.00%');
                expect(numerictextbox.value).toEqual(0.7);
            });
            it('Call the decrement operation with custom model in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                numerictextbox.decrement(0.2);
                expect(document.getElementById('tsNumeric').value).toEqual('30.00%');
                expect(numerictextbox.value).toEqual(0.3);
            });
            it('Call the increment operation with custom model in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, step: 2, format: 'c2' }, '#tsNumeric');
                numerictextbox.increment(3);
                expect(document.getElementById('tsNumeric').value).toEqual('$8.00');
                expect(numerictextbox.value).toEqual(8);
            });
            it('Call the decrement operation with custom model in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, step: 2, format: 'c2' }, '#tsNumeric');
                numerictextbox.decrement(3);
                expect(document.getElementById('tsNumeric').value).toEqual('$2.00');
                expect(numerictextbox.value).toEqual(2);
            });
            it('Call the getText method in numeric textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                var value = numerictextbox.getText();
                expect(document.getElementById('tsNumeric').value).toEqual(value);
            });
            it('Call the getText method in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, format: 'p2' }, '#tsNumeric');
                var value = numerictextbox.getText();
                expect(document.getElementById('tsNumeric').value).toEqual(value);
            });
            it('Call the getText method in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, format: 'c2' }, '#tsNumeric');
                var value = numerictextbox.getText();
                expect(document.getElementById('tsNumeric').value).toEqual(value);
            });
        });
        describe('NumericTextBox control with value min,max and strictMode combination', function () {
            var numerictextbox;
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Render numeric textbox with min and max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 6, min: 5, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('6.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(20);
            });
            it('Render numeric textbox with value less than min value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -6, min: 5, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-6.00');
            });
            it('Render numeric textbox with value greater than max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 5, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00');
            });
            it('Render numeric textbox with min value greater than max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 15, max: 10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00');
                expect(numerictextbox.min).toEqual(10);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Render numeric textbox with max value less than min value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 20, max: 5 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(5);
            });
            it('Render numeric textbox with negative min and max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, min: -20, max: -5 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-10.00');
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-5);
            });
            it('Render numeric textbox with negative numeric value less than min value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -30, min: -20, max: -10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-30.00');
            });
            it('Render numeric textbox with negative numeric value greater than max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5, min: -20, max: -10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-5.00');
            });
            it('Min value greater than max value with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -15, max: -20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00');
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-20);
            });
            it('Max value less than min value with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -10, max: -15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00');
                expect(numerictextbox.min).toEqual(-15);
                expect(numerictextbox.max).toEqual(-15);
            });
            it('Max value less than min value with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -10, max: -15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00');
                expect(numerictextbox.min).toEqual(-15);
                expect(numerictextbox.max).toEqual(-15);
            });
            it('Render numeric textbox with value as null and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: null, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render numeric textbox with value as undefined and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: undefined, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render numeric textbox with value as NaN and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: NaN, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render numeric textbox with numeric value and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Render numeric textbox with negative numeric value and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-5.00');
            });
            it('Render strict mode numeric textbox with min and max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 6, min: 5, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('6.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(20);
            });
            it('Value less than min value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -6, min: 5, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-6.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-6);
            });
            it('Value greater than max value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 5, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(50);
            });
            it('Min value greater than max value with numeric value and strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 15, max: 10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(50);
                expect(numerictextbox.min).toEqual(10);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Max value less than min value with numeric value and strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 20, max: 5, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(50);
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(5);
            });
            it('Render strict mode numeric textbox with negative min and max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, min: -20, max: -5, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-10.00');
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-5);
            });
            it('Negative numeric value less than min value with strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -30, min: -20, max: -10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-30.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-30);
            });
            it('Negative numeric value greater than max value with strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5, min: -20, max: -10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-5);
            });
            it('Min value greater than max value with negative numeric value and strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -15, max: -20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-50);
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-20);
            });
            it('Max value less than min value with numeric value and strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -10, max: -15, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-50);
                expect(numerictextbox.min).toEqual(-15);
                expect(numerictextbox.max).toEqual(-15);
            });
            it('Render percentage textbox with min and max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.6, min: 0.5, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('60.00%');
                expect(numerictextbox.min).toEqual(0.5);
                expect(numerictextbox.max).toEqual(1);
            });
            it('Render percentage textbox with value less than min value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.6, min: 0.5, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-60.00%');
            });
            it('Render percentage textbox with value greater than max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 0.5, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('5,000.00%');
            });
            it('Render percentage textbox with min value greater than max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 1.5, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('5,000.00%');
                expect(numerictextbox.min).toEqual(1);
                expect(numerictextbox.max).toEqual(1);
            });
            it('Render percentage textbox with max value less than min value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 20, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('5,000.00%');
                expect(numerictextbox.min).toEqual(1);
                expect(numerictextbox.max).toEqual(1);
            });
            it('Render percentage textbox with negative min and max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.6, min: -1, max: -0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-60.00%');
                expect(numerictextbox.min).toEqual(-1);
                expect(numerictextbox.max).toEqual(-0.5);
            });
            it('Render percentage textbox with negative numeric value less than min value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -2, min: -1, max: -0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-200.00%');
            });
            it('Render percentage textbox with negative numeric value greater than max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.2, min: -1, max: -0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-20.00%');
            });
            it('Min value greater than max value with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -0.5, max: -1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-5,000.00%');
                expect(numerictextbox.min).toEqual(-1);
                expect(numerictextbox.max).toEqual(-1);
            });
            it('Max value less than min value with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -0.5, max: -1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-5,000.00%');
                expect(numerictextbox.min).toEqual(-1);
                expect(numerictextbox.max).toEqual(-1);
            });
            it('Render percentage textbox with value as null and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: null, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render percentage textbox with value as undefined and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: undefined, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render percentage textbox with value as NaN and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: NaN, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render percentage textbox with numeric value and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
            });
            it('Render percentage textbox with negative numeric value and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00%');
            });
            it('Render strict mode percentage textbox with min and max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.6, min: 0.5, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('60.00%');
                expect(numerictextbox.min).toEqual(0.5);
                expect(numerictextbox.max).toEqual(1);
            });
            it('Value less than min value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.6, min: 0.5, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-60.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-0.6);
            });
            it('Value greater than max value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2, min: 0.5, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(2);
            });
            it('Min value greater than max value with numeric value and strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 3, min: 1, max: 0.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('300.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(3);
                expect(numerictextbox.min).toEqual(0.5);
                expect(numerictextbox.max).toEqual(0.5);
            });
            it('Max value less than min value with numeric value and strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 4, min: 1, max: 0.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('400.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(4);
                expect(numerictextbox.min).toEqual(0.5);
                expect(numerictextbox.max).toEqual(0.5);
            });
            it('Render strict mode percentage textbox with negative min and max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.6, min: -1, max: -0.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-60.00%');
                expect(numerictextbox.min).toEqual(-1);
                expect(numerictextbox.max).toEqual(-0.5);
            });
            it('Negative numeric value less than min value with strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -2, min: -1, max: -0.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-200.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-2);
            });
            it('Negative numeric value greater than max value with strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.2, min: -1, max: -0.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-20.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-0.2);
            });
            it('Min value greater than max value with negative numeric value and strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -3, min: -0.5, max: -1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-300.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-3);
                expect(numerictextbox.min).toEqual(-1);
                expect(numerictextbox.max).toEqual(-1);
            });
            it('Render currency textbox with min and max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 6, min: 5, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$6.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(20);
            });
            it('Render currency textbox with value less than min value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -6, min: 5, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$6.00');
            });
            it('Render currency textbox with value greater than max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 5, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$50.00');
            });
            it('Render currency textbox with min value greater than max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 15, max: 10, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$50.00');
                expect(numerictextbox.min).toEqual(10);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Render currency textbox with max value less than min value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 20, max: 5, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$50.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(5);
            });
            it('Render currency textbox with negative min and max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, min: -20, max: -5, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$10.00');
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-5);
            });
            it('Render currency textbox with negative numeric value less than min value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -30, min: -20, max: -10, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$30.00');
            });
            it('Render currency textbox with negative numeric value greater than max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5, min: -20, max: -10, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$5.00');
            });
            it('Min value greater than max value with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -15, max: -20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$50.00');
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-20);
            });
            it('Max value less than min value with negative numeric value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -10, max: -15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$50.00');
                expect(numerictextbox.min).toEqual(-15);
                expect(numerictextbox.max).toEqual(-15);
            });
            it('Render currency textbox with value as null and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: null, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render currency textbox with value as undefined and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: undefined, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render currency textbox with value as NaN and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: NaN, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Render currency textbox with numeric value and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Render currency textbox with negative numeric value and strict mode combination', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$5.00');
            });
            it('Render strict mode currency textbox with min and max value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 6, min: 5, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$6.00');
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(20);
            });
            it('Value less than min value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -6, min: 5, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$6.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-6);
            });
            it('Value greater than max value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 5, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(50);
            });
            it('Min value greater than max value with numeric value and strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 15, max: 10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(50);
                expect(numerictextbox.min).toEqual(10);
                expect(numerictextbox.max).toEqual(10);
            });
            it('Max value less than min value with numeric value and strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 50, min: 20, max: 5, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(50);
                expect(numerictextbox.min).toEqual(5);
                expect(numerictextbox.max).toEqual(5);
            });
            it('Render strict mode currency textbox with negative min and max value ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, min: -20, max: -5, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$10.00');
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-5);
            });
            it('Negative numeric value less than min value with strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -30, min: -20, max: -10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$30.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-30);
            });
            it('Negative numeric value greater than max value with strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -5, min: -20, max: -10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-5);
            });
            it('Min value greater than max value with negative numeric value and strict mode ', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -15, max: -20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-50);
                expect(numerictextbox.min).toEqual(-20);
                expect(numerictextbox.max).toEqual(-20);
            });
            it('Max value less than min value with numeric value and strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -50, min: -10, max: -15, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$50.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-50);
                expect(numerictextbox.min).toEqual(-15);
                expect(numerictextbox.max).toEqual(-15);
            });
        });
        describe('Increment,Decrement operation with spinner', function () {
            var numerictextbox;
            var timerCallback;
            var mouseEvent = document.createEvent('MouseEvents');
            var mouseEvent2 = document.createEvent('MouseEvents');
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                timerCallback = jasmine.createSpy("timerCallback");
                jasmine.clock().install();
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
                jasmine.clock().uninstall();
            });
            it('Increment numeric value with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('11.00');
            });
            it('Decrement numeric value with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('9.00');
            });
            it('Increment negative numeric value with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('-9.00');
            });
            it('Decrement negative numeric value with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('-11.00');
            });
            it('Increment numeric value (max) with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, min: 5, max: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Decrement numeric value(min) with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 5, max: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Increment negative numeric value (max) with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, min: -15, max: -10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('-10.00');
            });
            it('Decrement negative numeric value(min) with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -15, max: -10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('-15.00');
            });
            it('Increment numeric value with empty textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 5, max: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Decrement numeric value with empty textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 5, max: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Increment numeric value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 30, min: 5, max: 10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('30.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('31.00');
            });
            it('Decrement numeric value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 3, min: 5, max: 10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('3.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('2.00');
            });
            it('Increment numeric value by step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
            });
            it('Decrement numeric value by step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Increment numeric value by negative step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: -5 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Decrement numeric value by negative step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: -5 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
            });
            it('Increment numeric value (max) with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, min: 5, max: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Decrement numeric value(min) with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 5, max: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Increment numeric value (near max) by step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 8, min: 5, max: 10, step: 4 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('8.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Decrement numeric value (near min) by step using spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 6, min: 5, max: 10, step: 4 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('6.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
            });
            it('Increment numeric value with readonly textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, readonly: true }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Decrement numeric value with readonly textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, readonly: true }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Increment numeric value in disabled numeric textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, enabled: false }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Decrement numeric value in disabled numeric textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, enabled: false }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Increment currency value with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$11.00');
            });
            it('Increment currency value with spin up button after focusing the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('10');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$11.00');
            });
            it('Decrement currency value with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$9.00');
            });
            it('Increment negative currency value with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('-$9.00');
            });
            it('Decrement negative currency value with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('-$11.00');
            });
            it('Increment currency value (max) with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, min: 5, max: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
            });
            it('Decrement currency value(min) with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 5, max: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Increment negative currency value (max) with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -10, min: -15, max: -10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('-$10.00');
            });
            it('Decrement negative currency value(min) with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -15, max: -10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('-$15.00');
            });
            it('Increment currency value with empty textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 5, max: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Decrement currency value with empty textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 5, max: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Increment currency value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 30, min: 5, max: 10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$30.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$31.00');
            });
            it('Decrement currency value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 3, min: 5, max: 10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$3.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$2.00');
            });
            it('Increment currency value by step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
            });
            it('Decrement currency value by step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: 5, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Increment currency value by negative step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: -5, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Decrement currency value by negative step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, step: -5, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
            });
            it('Increment currency value (max) with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, min: 5, max: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
            });
            it('Decrement currency value(min) with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 5, max: 10, format: 'c2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Increment currency value (near max) by step using spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 8, min: 5, max: 10, step: 4, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$8.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
            });
            it('Decrement currency value (near min) by step using spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 6, min: 5, max: 10, step: 4, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$6.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
            });
            it('Increment percentage value with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('60.00%');
            });
            it('Decrement percentage value with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('40.00%');
            });
            it('Increment negative percentage value with spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('-40.00%');
            });
            it('Decrement negative percentage value with spin down button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('-60.00%');
            });
            it('Increment percentage value with empty textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 0.5, max: 1, step: 0.1, format: 'p2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
            });
            it('Decrement percentage value with empty textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 0.5, max: 1, step: 0.1, format: 'p2' }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
            });
            it('Increment percentage value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.5, min: 0.5, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('150.00%');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('250.00%');
            });
            it('Decrement percentage value with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.3, min: 0.5, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('30.00%');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('-70.00%');
            });
            it('Right click on the spin up button', function () {
                var eventArgs = { which: 3, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                numerictextbox.mouseDownOnSpinner(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
            });
            it('Right click on the spin down button', function () {
                var eventArgs = { button: 2, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                numerictextbox.mouseDownOnSpinner(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
            });
            it('Click on the spin button and release the mouse in document', function () {
                var eventArgs = { stopPropagation: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 100 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                numerictextbox.mouseUpClick(util_1.extend({}, {}, eventArgs));
                expect(ele.classList.contains('e-active')).toEqual(false);
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
            });
            it('Long mouse down on the spin up button', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                setInterval(function () {
                    mouseEvent2.initEvent("mouseup", true, true);
                    ele.dispatchEvent(mouseEvent2);
                    expect(document.getElementById('tsNumeric').value).toEqual('11.00');
                }, 300);
                jasmine.clock().tick(301);
            });
            it('Paste handler on the input element for code coverage', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10 }, '#tsNumeric');
                numerictextbox.focusIn();
                var ele = document.getElementById('tsNumeric');
                numerictextbox.pasteHandler();
                setInterval(function () {
                    numerictextbox.pasteHandler();
                }, 300);
                jasmine.clock().tick(301);
            });
        });
        describe('Set model combination', function () {
            var numerictextbox;
            var mouseEvent = document.createEvent('MouseEvents');
            var mouseEvent2 = document.createEvent('MouseEvents');
            ej2_base_1.L10n.load({
                'en': {
                    'numerictextbox': {
                        incrementTitle: 'Increment value', decrementTitle: 'Decrement value',
                        placeholder: 'Enter the value'
                    }
                },
                'de': {
                    'numerictextbox': {
                        incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert',
                        placeholder: 'Geben Sie den Wert ein'
                    }
                },
            });
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('notify enabled property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').getAttribute('aria-disabled')).toEqual('true');
                numerictextbox.enabled = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(false);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(false);
            });
            it('notify enabled property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(false);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(false);
                numerictextbox.enabled = false;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').getAttribute('aria-disabled')).toEqual('true');
            });
            it('notify enableRtl property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enableRtl: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-rtl')).toEqual(true);
                numerictextbox.enableRtl = false;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-rtl')).toEqual(false);
            });
            it('notify enableRtl property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enableRtl: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-rtl')).toEqual(false);
                numerictextbox.enableRtl = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-rtl')).toEqual(true);
            });
            it('notify readonly property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ readonly: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').readOnly).toBe(true);
                numerictextbox.readonly = false;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').readOnly).not.toBe(true);
            });
            it('notify readonly property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ readonly: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').readOnly).not.toBe(true);
                numerictextbox.readonly = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').readOnly).toBe(true);
            });
            it('notify cssClass property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ cssClass: 'custom-css' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('custom-css')).toEqual(true);
                numerictextbox.cssClass = 'customClass';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('customClass')).toEqual(true);
            });
            it('notify SpinButton property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ showSpinButton: true }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up") !== undefined);
                numerictextbox.showSpinButton = false;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up") === undefined);
            });
            it('notify SpinButton property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ showSpinButton: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up") === undefined);
                numerictextbox.showSpinButton = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up") !== undefined);
            });
            it('notify watermarkText property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ placeholder: 'Enter the numeric value' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').getAttribute("placeholder")).toEqual('Enter the numeric value');
                numerictextbox.placeholder = 'Enter the number';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').getAttribute("placeholder")).toEqual('Enter the number');
            });
            it('notify step property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 100, step: 2 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('17.00');
                numerictextbox.step = 5;
                numerictextbox.dataBind();
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('22.00');
            });
            it('notify step property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 5, max: 100, step: -2 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-up");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('13.00');
                numerictextbox.step = -5;
                numerictextbox.dataBind();
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('8.00');
            });
            it('notify step property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 5, max: 100, step: 2 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('13.00');
                numerictextbox.step = 5;
                numerictextbox.dataBind();
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('8.00');
            });
            it('notify step property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 5, max: 100, step: -2 }, '#tsNumeric');
                var ele = document.getElementById('tsNumeric').parentElement.querySelector(".e-spin-down");
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('17.00');
                numerictextbox.step = -5;
                numerictextbox.dataBind();
                mouseEvent.initEvent("mousedown", true, true);
                ele.dispatchEvent(mouseEvent);
                mouseEvent2.initEvent("mouseup", true, true);
                ele.dispatchEvent(mouseEvent2);
                expect(document.getElementById('tsNumeric').value).toEqual('22.00');
            });
            it('notify width property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ width: "400px" }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.getAttribute("style")).toEqual("width: 400px;");
                numerictextbox.width = '300px';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.getAttribute("style")).toEqual("width: 300px;");
            });
            it('notify height property change testing', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ height: "40px" }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.getAttribute("style")).toEqual("height: 40px;");
                numerictextbox.height = '30px';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').parentElement.getAttribute("style")).toEqual("height: 30px;");
            });
            it('Set the format as percent dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('1.00');
                numerictextbox.format = "p2";
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
            });
            it('Set the format as percent dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 4, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$4.00');
                numerictextbox.format = "p2";
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('400.00%');
            });
            it('Set the format as currency dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.format = "c2";
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
            });
            it('Set the format as currency dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.format = "c2";
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$0.50');
            });
            it('Set the format as deciaml dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.format = 'n2';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
            });
            it('Set the format as decimal dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.format = 'n2';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('0.50');
            });
            it('Set the currency symbol value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.currency = 'EUR';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('€15.00');
            });
            it('Set the format as ##.#### dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10.88889, format: 'n3' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.889');
                numerictextbox.format = '##.####';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('10.8889');
                expect(numerictextbox.value).toEqual(10.88889);
            });
            it('Set the format as 00##.#### dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10.88889, format: 'n3' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.889');
                numerictextbox.format = '00##.####';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('0010.8889');
                expect(numerictextbox.value).toEqual(10.88889);
            });
            it('Set the format as ##.0000 dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10.88, format: 'n3' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.880');
                numerictextbox.format = '##.0000';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('10.8800');
                expect(numerictextbox.value).toEqual(10.88);
            });
            it('Set the deciaml value as 4 dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10.8888888, format: 'n3' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.889');
                expect(numerictextbox.value).toEqual(10.8888888);
                numerictextbox.decimals = 4;
                numerictextbox.format = '##.00';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('10.89');
                expect(numerictextbox.value).toEqual(10.8889);
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('10.8889');
            });
            it('Set the deciaml value as null dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10.8888888, format: 'n3', decimals: 4 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.889');
                expect(numerictextbox.value).toEqual(10.8889);
                numerictextbox.decimals = null;
                numerictextbox.format = '##.00';
                numerictextbox.value = 15.788888888;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('15.79');
                expect(numerictextbox.value).toEqual(15.788888888);
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('15.788888888');
            });
            it('Set the deciaml value as 4 dynamically in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10.8888888, format: 'c3' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$10.889');
                expect(numerictextbox.value).toEqual(10.8888888);
                numerictextbox.decimals = 4;
                numerictextbox.format = '##.00';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('10.89');
                expect(numerictextbox.value).toEqual(10.8889);
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('10.8889');
            });
            it('Set the deciaml value as null dynamically in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10.8888888, format: 'c3', decimals: 4 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$10.889');
                expect(numerictextbox.value).toEqual(10.8889);
                numerictextbox.decimals = null;
                numerictextbox.format = '##.00';
                numerictextbox.value = 15.788888888;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('15.79');
                expect(numerictextbox.value).toEqual(15.788888888);
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('15.788888888');
            });
            it('Set the locale value dynamically in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 12.34, format: 'c2', locale: 'de' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$12.34');
                numerictextbox.locale = 'en';
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$12.34');
                expect(numerictextbox.value).toEqual(12.34);
            });
            it('Set the value as null dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = null;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as undefined dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = undefined;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as NaN dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = NaN;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = 10;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Set the value as negative number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = -10;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-10.00');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = 12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('12.00');
            });
            it('Set the value greater than max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = 25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
            });
            it('Set the value less than min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = 5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
            });
            it('Set the negative numeric value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-15.00');
                numerictextbox.value = -12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-12.00');
            });
            it('Set the negative numeric value greater than max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-15.00');
                numerictextbox.value = -5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-10.00');
            });
            it('Set the negative numeric value less than min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-15.00');
                numerictextbox.value = -25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-20.00');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = 12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('12.00');
            });
            it('Set the value greater than max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = 25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(25);
            });
            it('Set the value less than min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                numerictextbox.value = 5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(5);
            });
            it('Set the negative numeric value as number dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-15.00');
                numerictextbox.value = -12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-12.00');
            });
            it('Set the negative numeric value greater than max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-15.00');
                numerictextbox.value = -5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-5);
            });
            it('Set the negative numeric value less than min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-15.00');
                numerictextbox.value = -25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-25);
            });
            it('Set the value as null dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = null;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as undefined dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = undefined;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as NaN dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = NaN;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = 10;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
            });
            it('Set the value as negative number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = -10;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-$10.00');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = 12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$12.00');
            });
            it('Set the value greater than max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = 25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
            });
            it('Set the value less than min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = 5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
            });
            it('Set the negative numeric value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$15.00');
                numerictextbox.value = -12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-$12.00');
            });
            it('Set the negative numeric value greater than max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$15.00');
                numerictextbox.value = -5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-$10.00');
            });
            it('Set the negative numeric value less than min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$15.00');
                numerictextbox.value = -25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-$20.00');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = 12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$12.00');
            });
            it('Set the value greater than max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = 25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(25);
            });
            it('Set the value less than min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                numerictextbox.value = 5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(5);
            });
            it('Set the negative numeric value as number dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$15.00');
                numerictextbox.value = -12;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-$12.00');
            });
            it('Set the negative numeric value greater than max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$15.00');
                numerictextbox.value = -5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-$5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-5);
            });
            it('Set the negative numeric value less than min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -15, min: -20, max: -10, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-$15.00');
                numerictextbox.value = -25;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-$25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-25);
            });
            it('Set the value as null dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = null;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as undefined dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = undefined;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as NaN dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = NaN;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = 1;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
            });
            it('Set the value as negative number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = -1;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-100.00%');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 0.1, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = 0.4;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('40.00%');
            });
            it('Set the value greater than max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 0.1, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = 2.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
            });
            it('Set the value less than min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 0.3, max: 1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = 0.2;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('30.00%');
            });
            it('Set the negative numeric value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -1.5, min: -2, max: -1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-150.00%');
                numerictextbox.value = -1.2;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-120.00%');
            });
            it('Set the negative numeric value greater than max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -1.5, min: -2, max: -1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-150.00%');
                numerictextbox.value = 1;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-100.00%');
            });
            it('Set the negative numeric value less than min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -1.5, min: -2, max: -1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-150.00%');
                numerictextbox.value = -2.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-200.00%');
            });
            it('Set the value as number dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 0.1, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = 0.6;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('60.00%');
            });
            it('Set the value greater than max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 0.1, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = 2;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(2);
            });
            it('Set the value less than min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 0.4, max: 1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.value = 0.3;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('30.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(0.3);
            });
            it('Set the negative numeric value as number dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -1.5, min: -2, max: -1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-150.00%');
                numerictextbox.value = -1.2;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-120.00%');
            });
            it('Set the negative numeric value greater than max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -1.5, min: -2, max: -1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-150.00%');
                numerictextbox.value = 1;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(1);
            });
            it('Set the negative numeric value less than min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: -1.5, min: -2, max: -1, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('-150.00%');
                numerictextbox.value = -2.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('-250.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(-2.5);
            });
            it('Dynamically update the strict mode value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 25, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(25);
                numerictextbox.strictMode = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                expect(numerictextbox.value).toEqual(20);
            });
            it('Dynamically update the strict mode value', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(5);
                numerictextbox.strictMode = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Dynamically update the strict mode value and value of the textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                expect(numerictextbox.value).toEqual(15);
                numerictextbox.strictMode = false;
                numerictextbox.value = 35;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('35.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(35);
            });
            it('Dynamically update the strict mode value in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 25, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(25);
                numerictextbox.strictMode = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                expect(numerictextbox.value).toEqual(20);
            });
            it('Dynamically update the strict mode value in currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(5);
                numerictextbox.strictMode = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Dynamically update the strict mode value and value of the currency textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 15, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                expect(numerictextbox.value).toEqual(15);
                numerictextbox.strictMode = false;
                numerictextbox.value = 35;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$35.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(35);
            });
            it('Dynamically update the strict mode value in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2.5, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('250.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(2.5);
                numerictextbox.strictMode = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                expect(numerictextbox.value).toEqual(2);
            });
            it('Dynamically update the strict mode value in percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(0.5);
                numerictextbox.strictMode = true;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(numerictextbox.value).toEqual(1);
            });
            it('Dynamically update the strict mode value and value of the percentage textbox', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.5, min: 1, max: 2, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('150.00%');
                expect(numerictextbox.value).toEqual(1.5);
                numerictextbox.strictMode = false;
                numerictextbox.value = 3.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('350.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(3.5);
            });
            it('Set the min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 16, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('16.00');
                numerictextbox.min = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('16.00');
                expect(numerictextbox.value).toEqual(16);
            });
            it('Set the min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 11, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('11.00');
                numerictextbox.min = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                expect(numerictextbox.value).toEqual(15);
            });
            it('Set the min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 11, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('11.00');
                numerictextbox.min = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('11.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(11);
            });
            it('Set the min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 8, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('8.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(8);
                numerictextbox.min = 5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('8.00');
                expect(numerictextbox.value).toEqual(8);
            });
            it('Set the max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 14, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('14.00');
                numerictextbox.max = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('14.00');
                expect(numerictextbox.value).toEqual(14);
            });
            it('Set the max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 18, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('18.00');
                numerictextbox.max = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('15.00');
                expect(numerictextbox.value).toEqual(15);
            });
            it('Set the max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 18, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('18.00');
                numerictextbox.max = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('18.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(18);
            });
            it('Set the max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 28, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('28.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(28);
                numerictextbox.max = 30;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('28.00');
                expect(numerictextbox.value).toEqual(28);
            });
            it('Set the min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 16, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$16.00');
                numerictextbox.min = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$16.00');
                expect(numerictextbox.value).toEqual(16);
            });
            it('Set the min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 11, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$11.00');
                numerictextbox.min = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                expect(numerictextbox.value).toEqual(15);
            });
            it('Set the min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 11, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$11.00');
                numerictextbox.min = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$11.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(11);
            });
            it('Set the min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 8, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$8.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(8);
                numerictextbox.min = 5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$8.00');
                expect(numerictextbox.value).toEqual(8);
            });
            it('Set the max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 14, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$14.00');
                numerictextbox.max = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$14.00');
                expect(numerictextbox.value).toEqual(14);
            });
            it('Set the max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 18, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$18.00');
                numerictextbox.max = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$15.00');
                expect(numerictextbox.value).toEqual(15);
            });
            it('Set the max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 18, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$18.00');
                numerictextbox.max = 15;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$18.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(18);
            });
            it('Set the max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 28, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$28.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(28);
                numerictextbox.max = 30;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('$28.00');
                expect(numerictextbox.value).toEqual(28);
            });
            it('Set the min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.6, min: 1, max: 2, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('160.00%');
                numerictextbox.min = 1.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('160.00%');
                expect(numerictextbox.value).toEqual(1.6);
            });
            it('Set the min value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.1, min: 1, max: 2, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('110.00%');
                numerictextbox.min = 1.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('150.00%');
                expect(numerictextbox.value).toEqual(1.5);
            });
            it('Set the min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.1, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('110.00%');
                numerictextbox.min = 1.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('110.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(1.1);
            });
            it('Set the min value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.8, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('80.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(0.8);
                numerictextbox.min = 0.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('80.00%');
                expect(numerictextbox.value).toEqual(0.8);
            });
            it('Set the max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.4, min: 1, max: 2, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('140.00%');
                numerictextbox.max = 1.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('140.00%');
                expect(numerictextbox.value).toEqual(1.4);
            });
            it('Set the max value dynamically', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.8, min: 1, max: 2, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('180.00%');
                numerictextbox.max = 1.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('150.00%');
                expect(numerictextbox.value).toEqual(1.5);
            });
            it('Set the max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1.8, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('180.00%');
                numerictextbox.max = 1.5;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('180.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(1.8);
            });
            it('Set the max value dynamically with strict mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2.8, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('280.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(2.8);
                numerictextbox.max = 3;
                numerictextbox.dataBind();
                expect(document.getElementById('tsNumeric').value).toEqual('280.00%');
                expect(numerictextbox.value).toEqual(2.8);
            });
        });
        describe('Keyboard navigation up/down and enter key press', function () {
            var numerictextbox;
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('up arrow keypress in numeric textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('21.00');
                expect(numerictextbox.value).toEqual(21);
            });
            it('up arrow keypress in Percentage textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('60.00%');
                expect(numerictextbox.value).toEqual(0.6);
            });
            it('up arrow keypress in Currency textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$21.00');
                expect(numerictextbox.value).toEqual(21);
            });
            it('down arrow keypress in numeric textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('19.00');
                expect(numerictextbox.value).toEqual(19);
            });
            it('down arrow keypress in Percentage textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, step: 0.1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('40.00%');
                expect(numerictextbox.value).toEqual(0.4);
            });
            it('down arrow keypress in Currency textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$19.00');
                expect(numerictextbox.value).toEqual(19);
            });
            it('up arrow keypress in numeric textbox with value as max', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                expect(numerictextbox.value).toEqual(20);
            });
            it('up arrow keypress in Percentage textbox with value as max', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2, min: 1, max: 2, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                expect(numerictextbox.value).toEqual(2);
            });
            it('up arrow keypress in Currency textbox with value as max', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                expect(numerictextbox.value).toEqual(20);
            });
            it('down arrow keypress in numeric textbox with value as min', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, min: 10, max: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('down arrow keypress in Percentage textbox with value as min', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 1, min: 1, max: 2, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(numerictextbox.value).toEqual(1);
            });
            it('down arrow keypress in Currency textbox with value as min', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 10, min: 10, max: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('up arrow keypress in numeric textbox with strict mode', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 25, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(25);
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('26.00');
                expect(numerictextbox.value).toEqual(26);
            });
            it('up arrow keypress in currency textbox with strict mode', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 25, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$25.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(25);
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$26.00');
                expect(numerictextbox.value).toEqual(26);
            });
            it('up arrow keypress in percentage textbox with strict mode', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2.5, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('250.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(2.5);
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('350.00%');
                expect(numerictextbox.value).toEqual(3.5);
            });
            it('down arrow keypress in numeric textbox with strict mode', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(5);
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('4.00');
                expect(numerictextbox.value).toEqual(4);
            });
            it('down arrow keypress in Percentage textbox with strict mode', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 0.5, min: 1, max: 2, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('50.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(0.5);
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('-50.00%');
                expect(numerictextbox.value).toEqual(-0.5);
            });
            it('down arrow keypress in Currency textbox with strict mode', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, min: 10, max: 20, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$5.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(5);
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$4.00');
                expect(numerictextbox.value).toEqual(4);
            });
            it('up arrow keypress in numeric textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('36.00');
                expect(numerictextbox.value).toEqual(36);
            });
            it('up arrow keypress in numeric textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 5, max: 25 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('25.00');
                expect(numerictextbox.value).toEqual(25);
            });
            it('up arrow keypress in percent textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2, step: 0.1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                document.getElementById('tsNumeric').value = '3';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('310.00%');
                expect(numerictextbox.value).toEqual(3.1);
            });
            it('up arrow keypress in currency textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$36.00');
                expect(numerictextbox.value).toEqual(36);
            });
            it('up arrow keypress in currency textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 5, max: 25, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$25.00');
                expect(numerictextbox.value).toEqual(25);
            });
            it('down arrow keypress in numeric textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('34.00');
                expect(numerictextbox.value).toEqual(34);
            });
            it('down arrow keypress in numeric textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 25 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                document.getElementById('tsNumeric').value = '5';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('down arrow keypress in percentage textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2, step: 0.1, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                document.getElementById('tsNumeric').value = '3.5';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('340.00%');
                expect(numerictextbox.value).toEqual(3.4);
            });
            it('down arrow keypress in currency textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$34.00');
                expect(numerictextbox.value).toEqual(34);
            });
            it('down arrow keypress in currency textbox after typing the value in textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 25, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                document.getElementById('tsNumeric').value = '5';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('up arrow keypress after empty the numeric textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('up arrow keypress after empty the currency textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('up arrow keypress after empty the percentage textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2, min: 1, max: 3, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(numerictextbox.value).toEqual(1);
            });
            it('down arrow keypress after empty the numeric textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30 }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('down arrow keypress after empty the Currency textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('down arrow keypress after empty the percentage textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 2, min: 1, max: 3, format: 'p2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(numerictextbox.value).toEqual(1);
            });
            it('up arrow keypress in empty numeric textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30 }, '#tsNumeric');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('up arrow keypress in empty percentage textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 3, format: 'p2' }, '#tsNumeric');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(numerictextbox.value).toEqual(1);
            });
            it('up arrow keypress in empty currency textbox', function () {
                var eventArgs = { keyCode: 38, which: 38, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('down arrow keypress in empty numeric textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30 }, '#tsNumeric');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('down arrow keypress in empty percentage textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 3, format: 'p2' }, '#tsNumeric');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(numerictextbox.value).toEqual(1);
            });
            it('down arrow keypress in empty currency textbox', function () {
                var eventArgs = { keyCode: 40, which: 40, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Press enter key after typing the value in the numeric textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30 }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '25';
                numerictextbox.isFocused = true;
                expect(numerictextbox.value).toBeNull();
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('25.00');
                expect(numerictextbox.value).toEqual(25);
            });
            it('Press enter key after typing the value in the percentage textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 3, format: 'p2' }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '2';
                expect(numerictextbox.value).toBeNull();
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('200.00%');
                expect(numerictextbox.value).toEqual(2);
            });
            it('Press enter key after typing the value in the currency textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '25';
                numerictextbox.isFocused = true;
                expect(numerictextbox.value).toBeNull();
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$25.00');
                expect(numerictextbox.value).toEqual(25);
            });
            it('Press enter key after typing the value greater than max value in numeric textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30 }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '35';
                expect(numerictextbox.value).toBeNull();
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('30.00');
                expect(numerictextbox.value).toEqual(30);
            });
            it('Press enter key after typing the value greater than max value in percentage textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 3, format: 'p2' }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '35';
                expect(numerictextbox.value).toBeNull();
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('300.00%');
                expect(numerictextbox.value).toEqual(3);
            });
            it('Press enter key after typing the value greater than max value in currency textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '35';
                expect(numerictextbox.value).toBeNull();
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$30.00');
                expect(numerictextbox.value).toEqual(30);
            });
            it('Press enter key after typing the value less than min value in numeric textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30 }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '5';
                expect(numerictextbox.value).toBeNull();
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Press enter key after typing the value less than min value in percentage textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 3, format: 'p2' }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '0.5';
                expect(numerictextbox.value).toBeNull();
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('100.00%');
                expect(numerictextbox.value).toEqual(1);
            });
            it('Press enter key after typing the value less than min value in currency textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                document.getElementById('tsNumeric').value = '5';
                expect(numerictextbox.value).toBeNull();
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                expect(numerictextbox.value).toEqual(10);
            });
            it('Press enter key after typing the value in the numeric textbox with strictmode', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, strictMode: false }, '#tsNumeric');
                expect(numerictextbox.value).toBeNull();
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('35.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(35);
            });
            it('Press enter key after typing the value in the percentage textbox with strictmode', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 3, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(numerictextbox.value).toBeNull();
                document.getElementById('tsNumeric').value = '3.5';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('350.00%');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(3.5);
            });
            it('Press enter key after typing the value in the currency textbox with strictmode', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(numerictextbox.value).toBeNull();
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('$35.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(35);
            });
            it('Press enter key after removing the value in the textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 25, format: 'n2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(25);
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the percentage textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 2, value: 1.5, format: 'p2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(1.5);
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the currency textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 25, format: 'c2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(25);
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 25, format: 'n2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(25);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the percentage textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 2, value: 1.5, format: 'p2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(1.5);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the currency textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 25, format: 'c2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(25);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the strict mode textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 35, strictMode: false, format: 'n2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(35);
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(false);
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the strict mode percentage textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 2, value: 3.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(3.5);
                document.getElementById('tsNumeric').value = '';
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                numerictextbox.isFocused = true;
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(false);
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the strict mode currency textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 35, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(35);
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(false);
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the strict mode textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 35, strictMode: false, format: 'n2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(35);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(false);
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the strict mode percentage textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 1, max: 2, value: 3.5, strictMode: false, format: 'p2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(3.5);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(false);
                expect(numerictextbox.value).toBeNull();
            });
            it('Press enter key after removing the value in the strict mode currency textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { } };
                numerictextbox = new numerictextbox_1.NumericTextBox({ min: 10, max: 30, value: 35, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(35);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '';
                numerictextbox.isFocused = true;
                numerictextbox.keyDownHandler(util_1.extend({}, {}, eventArgs));
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(false);
                expect(numerictextbox.value).toBeNull();
            });
            it('Call the paste handler method', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 35 }, '#tsNumeric');
                expect(numerictextbox.value).toEqual(35);
                numerictextbox.focusIn();
                numerictextbox.isFocused = true;
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("paste", false, true);
                (document.getElementById('tsNumeric')).dispatchEvent(evt);
                numerictextbox.focusOut();
                expect(document.getElementById('tsNumeric').value).toEqual('35.00');
            });
        });
        describe('Keyboard navigation key validation', function () {
            var numerictextbox;
            beforeEach(function () {
                numerictextbox = undefined;
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Enter the letters in the numeric textbox', function () {
                var eventArgs = { keyCode: 65, which: 65, altKey: false, ctrlKey: false, shiftKey: false, stopPropagation: function () { }, preventDefault: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('5');
                expect(numerictextbox.value).toEqual(5);
            });
            it('Enter the lower letters in the numeric textbox', function () {
                var eventArgs = { keyCode: 97, which: 97, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('5');
                expect(numerictextbox.value).toEqual(5);
            });
            it('Enter the special characters in the numeric textbox', function () {
                var eventArgs = { keyCode: 64, which: 64, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('5');
                expect(numerictextbox.value).toEqual(5);
            });
            it('Enter the special characters (comma) in the numeric textbox with en-US culture', function () {
                var eventArgs = { keyCode: 64, which: 64, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('5');
                expect(numerictextbox.value).toEqual(5);
            });
            it('Enter the special characters (dot) in the numeric textbox with en-US culture', function () {
                var eventArgs = { keyCode: 46, which: 46, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(true);
                document.getElementById('tsNumeric').value = "5.";
                var eventArgs1 = { keyCode: 53, which: 53, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var result1 = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs1));
                expect(result).toEqual(true);
            });
            it('Trying to enter dot characters in the numeric textbox with en-US culture when decimal value as 0', function () {
                var eventArgs = { keyCode: 46, which: 46, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5, decimals: 0 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(false);
            });
            it('Trying to enter two dot characters in the numeric textbox with en-US culture', function () {
                var eventArgs = { keyCode: 46, which: 46, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(true);
                document.getElementById('tsNumeric').value = "5.";
                var eventArgs1 = { keyCode: 46, which: 46, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var result1 = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs1));
                expect(result1).toEqual(false);
            });
            it('Allow to enter negative sign in the numeric textbox intial', function () {
                var eventArgs = { keyCode: 45, which: 45, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: null }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('');
                numerictextbox.focusIn();
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(true);
            });
            it('Enter negative sign in the numeric textbox', function () {
                var eventArgs = { keyCode: 45, which: 45, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.element.selectionStart = 1;
                numerictextbox.element.selectionEnd = 1;
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(false);
            });
            it('Replace the number with selected text in the numeric textbox', function () {
                var eventArgs = { keyCode: 57, which: 57, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 55 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('55.00');
                numerictextbox.focusIn();
                ele.selectionStart = 0;
                ele.selectionEnd = 2;
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(true);
            });
            it('Replace the character with selected text in the numeric textbox', function () {
                var eventArgs = { keyCode: 35, which: 35, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 55 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('55.00');
                ele.selectionStart = 0;
                ele.selectionEnd = 2;
                numerictextbox.focusIn();
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(false);
            });
            it('Press enter in the numeric textbox', function () {
                var eventArgs = { keyCode: 13, which: 13, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('5');
                expect(numerictextbox.value).toEqual(5);
            });
            it('Enter the value after reaching the maximum decimal value', function () {
                var eventArgs = { keyCode: 53, which: 53, altKey: false, ctrlKey: false, shiftKey: false, preventDefault: function () { }, stopPropagation: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5.56, decimals: 3, validateDecimalOnType: true }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.56');
                numerictextbox.focusIn();
                numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                var result = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result).toEqual(true);
                document.getElementById('tsNumeric').value = '5.565';
                var result1 = numerictextbox.keyPressHandler(util_1.extend({}, {}, eventArgs));
                expect(result1).toEqual(false);
            });
        });
        describe('increment decrement operation using mousewheel', function () {
            var numerictextbox;
            beforeEach(function () {
                numerictextbox = undefined;
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Increment numeric value using mousewheel on the input', function () {
                var eventArgs = { wheelDelta: 240, preventDefault: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.mouseWheel(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('6');
                expect(numerictextbox.value).toEqual(6);
            });
            it('Decrement numeric value using mousewheel on the input', function () {
                var eventArgs = { wheelDelta: -240, preventDefault: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.mouseWheel(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('4');
                expect(numerictextbox.value).toEqual(4);
            });
            it('Increment numeric value using mousewheel on the input', function () {
                var eventArgs = { detail: -6, preventDefault: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.mouseWheel(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('6');
                expect(numerictextbox.value).toEqual(6);
            });
            it('Decrement numeric value using mousewheel on the input', function () {
                var eventArgs = { detail: 6, preventDefault: function () { } };
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 5 }, ele);
                expect(document.getElementById('tsNumeric').value).toEqual('5.00');
                numerictextbox.focusIn();
                numerictextbox.mouseWheel(util_1.extend({}, {}, eventArgs));
                expect(document.getElementById('tsNumeric').value).toEqual('4');
                expect(numerictextbox.value).toEqual(4);
            });
        });
        describe('Focus In and Focus Out handler', function () {
            var numerictextbox;
            var timerCallback;
            beforeEach(function () {
                numerictextbox = undefined;
                var ele = dom_1.createElement('input', { id: 'tsNumeric' });
                document.body.appendChild(ele);
                timerCallback = jasmine.createSpy("timerCallback");
                jasmine.clock().install();
            });
            afterEach(function () {
                if (numerictextbox) {
                    numerictextbox.destroy();
                }
                document.body.innerHTML = '';
                jasmine.clock().uninstall();
            });
            it('Trying to focus the disabled the numeric textbox control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ enabled: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-disabled')).toEqual(true);
                expect(document.getElementById('tsNumeric').classList.contains('e-disabled')).toEqual(true);
                document.getElementById("tsNumeric").focus();
                expect(document.getElementById('tsNumeric').getAttribute('aria-disabled')).toEqual('true');
            });
            it('type the value and focus out the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('35.00');
                    expect(numerictextbox.value).toEqual(35);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value and focus out the currency control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, format: 'c2' }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('$35.00');
                    expect(numerictextbox.value).toEqual(35);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value greater than max and focus out the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30 }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('30.00');
                    expect(numerictextbox.value).toEqual(30);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value greater than max and focus out the currency control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '35';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('$30.00');
                    expect(numerictextbox.value).toEqual(30);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value less than min and focus out the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30 }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '5';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('10.00');
                    expect(numerictextbox.value).toEqual(10);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value less than min and focus out the currency control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30, format: 'c2' }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '5';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('$10.00');
                    expect(numerictextbox.value).toEqual(10);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value out of min & max range and focus out the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30, strictMode: false }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '55';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('55.00');
                    expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                    expect(numerictextbox.value).toEqual(55);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value out of min & max range and focus out the currency control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20, min: 10, max: 30, strictMode: false, format: 'c2' }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '55';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('$55.00');
                    expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                    expect(numerictextbox.value).toEqual(55);
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value within the min & max range and focus out the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 55, min: 10, max: 30, strictMode: false }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('55.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(55);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '20';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('20.00');
                }, 300);
                jasmine.clock().tick(301);
            });
            it('type the value within the min & max range and focus out the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 55, min: 10, max: 30, strictMode: false, format: 'c2' }, '#tsNumeric');
                expect(document.getElementById('tsNumeric').value).toEqual('$55.00');
                expect(document.getElementById('tsNumeric').parentElement.classList.contains('e-error')).toEqual(true);
                expect(numerictextbox.value).toEqual(55);
                numerictextbox.focusIn();
                document.getElementById('tsNumeric').value = '20';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('$20.00');
                }, 300);
                jasmine.clock().tick(301);
            });
            it('Remove the existing value and focus out the control', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 20 }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('20');
                document.getElementById('tsNumeric').value = '';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('');
                    expect(numerictextbox.value).toBeNull();
                }, 300);
                jasmine.clock().tick(301);
            });
            it('Remove the existing value and focus out the control with strict Mode', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 25, min: 10, max: 20, strictMode: false }, '#tsNumeric');
                numerictextbox.focusIn();
                expect(document.getElementById('tsNumeric').value).toEqual('25');
                expect(numerictextbox.value).toEqual(25);
                document.getElementById('tsNumeric').value = '';
                numerictextbox.focusOut();
                setInterval(function () {
                    expect(document.getElementById('tsNumeric').value).toEqual('');
                    expect(numerictextbox.value).toBeNull();
                }, 300);
                jasmine.clock().tick(301);
            });
            it('code coverage for roundNumber method', function () {
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 25, min: 10, max: 20 }, '#tsNumeric');
                numerictextbox.roundNumber(2.7572425275725724e+26, 4);
            });
        });
        describe('enable persistance testing', function () {
            var numerictextbox;
            var ele = dom_1.createElement('input', { id: 'tsNumeric' });
            beforeEach(function () {
                document.body.appendChild(ele);
                numerictextbox = new numerictextbox_1.NumericTextBox({ value: 25, min: 10, max: 30, format: 'n2', enablePersistence: true }, ele);
            });
            afterAll(function () {
                dom_1.detach(ele);
            });
            it('property localStorage updated test', function () {
                numerictextbox.destroy();
                expect(JSON.parse(window.localStorage.getItem('numerictextboxtsNumeric')).value).toEqual(25);
                dom_1.detach(ele);
            });
            it('Rendering from persistance property', function () {
                expect(numerictextbox.element.value).toEqual('25.00');
            });
        });
    });
});
