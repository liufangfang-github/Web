window.onload = function () {
    var tabObj = {
        headId: "tab_switch_ul",
        bodyId: "tab-switch-body",
        selectedClass: "tab_selected"

    }

    function tab(obj) {
        this.init(obj);
    }

    tab.prototype = {
        headId: "",
        bodyId: "",
        selectedClass:"",
        init: function (obj) {
            this.headId = obj.headId;
            this.bodyId = obj.bodyId;
            this.selected = obj.selectedClass;
        },

        $click: function (index) {
            var _switch_body = document.getElementById(this.bodyId);
            var _switch_head = document.getElementById(this.headId);
            for (var i = 0; i < _switch_body.children.length; i++) {
                if (i == index) {
                    _switch_body.children[index].style.display = "block";
                    _switch_head.children[index].className = this.selected;
                } else {
                    _switch_body.children[i].style.display = "none";
                    _switch_head.children[i].className = "";
                }
            }
        }

    }

    var tab_switch = new tab(tabObj);

    var _children = document.getElementById(tab_switch.headId);
    for (var i = 0, len = _children.children.length; i < len; i++) {
        (function (index) {
            _children.children[i].onclick = function () {
                tab_switch.$click(index);
            }
        })(i);
    }
}
