function Validator(options){

    var selectorRules = {};

    function validate(inputElement, rule){

        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage ;

        //lay cac rule cua selecto
        var rules = selectorRules[rule.selector];

        //lap qua tung rule va kiem tra
        //neu co loi thi dung
        for(var i = 0; i < rules.length; ++i){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage; 
            inputElement.parentElement.classList.add('invalid')

        }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);

    if(formElement){

        formElement.onsubmit = function(e){

            e.preventDefault();

            var isFormValid = true;
            //lap qua tung rule va validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            

            if(isFormValid){
                if(typeof options.onsubmit === 'function'){
                  var enableInputs = formElement.querySelectorAll('[name]');

                  var FormValues = Array.from(enableInputs).reduce(function(values, input){
                   return (values[input.name] = input.value) && values;
                 }, {});


                 options.onsubmit(FormValues);

                }
            }

        }

        //lap qua tung rule va xu ly
        options.rules.forEach(function(rule){

            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector]=[rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement) {
                inputElement.onblur = function (){
                    validate(inputElement, rule);
                }

                //xu ly nguoi dung nhap input
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
        

        
    }
}

Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : message || 'Vui lòng nhập thông tin trường này'
        }
    }
}

Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined: message || 'Vui lòng nhập Email'
        }
    }
}

Validator.minLength = function(selector, min, message){
    return {
        selector: selector,
        test: function(value){
            
            return value.length >= min ? undefined: message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined: message || 'Giá trị nhập vào không chính xác';

        }
    }
}