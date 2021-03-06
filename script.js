var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testArr = ["сделать", "хорошо подумать", "не делать"];

function Todoslines(props) {

    var intArr = props.Arr;
    return intArr.map(function (elem, index) {
        return React.createElement(
            "div",
            { className: "todos__list" },
            React.createElement("input", { className: "todos__check", type: "checkbox", id: index, name: index, value: "something_to_do" }),
            React.createElement(
                "label",
                { "for": index },
                " ",
                elem
            )
        );
    });
}

var Inputform = function (_React$Component) {
    _inherits(Inputform, _React$Component);

    function Inputform(props) {
        _classCallCheck(this, Inputform);

        var _this = _possibleConstructorReturn(this, (Inputform.__proto__ || Object.getPrototypeOf(Inputform)).call(this, props));

        _this.state = {
            value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Inputform, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            testArr.push(this.state.value);
            event.preventDefault();
            console.log(this.state.value);
            console.log(testArr);
            this.state.value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { className: "todos__form", onSubmit: this.handleSubmit },
                React.createElement("input", { className: "todos__input", type: "text", value: this.state.value, placeholder: "Something To Do", onChange: this.handleChange })
            );
        }
    }]);

    return Inputform;
}(React.Component);

var Todos = function (_React$Component2) {
    _inherits(Todos, _React$Component2);

    function Todos() {
        _classCallCheck(this, Todos);

        return _possibleConstructorReturn(this, (Todos.__proto__ || Object.getPrototypeOf(Todos)).apply(this, arguments));
    }

    _createClass(Todos, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "todos" },
                React.createElement(
                    "div",
                    { className: "todos__header" },
                    React.createElement(
                        "h1",
                        null,
                        "todo list:"
                    )
                ),
                React.createElement(Inputform, null),
                React.createElement(
                    "div",
                    null,
                    React.createElement(Todoslines, { Arr: testArr })
                ),
                React.createElement(
                    "div",
                    { className: "todos__controls" },
                    "todos control here soon"
                )
            );
        }
    }]);

    return Todos;
}(React.Component);

//*******************************<div className='todos__input'>
//<Inputform />
//</div>

ReactDOM.render(React.createElement(Todos, null), document.getElementById('root'));