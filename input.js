window.onload = function() {
    var input_list = {
        id: "input-component",
        maxLength: 10,
    }

    function inputComponent(obj) {
        this.initData(obj);
    }

    inputComponent.prototype = {
        id: "",
        maxLength: 0,
        className: "",
        spanText: "还可以输入{num}个字",
        initData: function(obj) {
            this.id = obj.id;
            this.maxLength = obj.maxLength;
        },

        initDOM: function() {
            var $input = document.createElement("input");
            var $span = document.createElement("span");
            var span_text = this.spanText.replace("{num}", this.maxLength);
            $span.textContent = span_text;
            $input.className = "input";
            $input.maxLength = this.maxLength;
            this.className = "input";
            var node = document.getElementById(this.id);
            node.appendChild($input);
            node.appendChild($span);
        },

        $focus: function() {
            var self = this;
            var value = document.getElementsByClassName(self.className)[0].value;

            this.calculate(value);
        },

        calculate: function(val) {
            var remainLen = this.maxLength - val.length;
            var span_text = '';
            if (remainLen >= 0) {
                span_text = this.spanText.replace("{num}", remainLen);
            } else {
                document.getElementsByClassName(this.className)[0].value = val.slice(0, 10);
                span_text = this.spanText.replace("{num}", 0);
                return false;
            }
            document.getElementById(this.id).querySelector("span").textContent = span_text;
        }
    }


    var input = new inputComponent(input_list);
    input.initDOM();

    ['keyup', 'change', 'keydown'].forEach(function(evt) {
        document.getElementsByClassName("input")[0].addEventListener(evt, function() {
            input.$focus();
        }, false);
    });
}