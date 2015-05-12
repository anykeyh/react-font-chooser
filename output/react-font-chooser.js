(function() {
  window.FontChooser = React.createClass({
    getInitialState: function() {
      return {
        expanded: false,
        value: this.props.value
      };
    },
    selectValue: function(value) {
      return (function(_this) {
        return function(evt) {
          var _base;
          _this.setState({
            value: value
          });
          if (typeof (_base = _this.props).onChange === "function") {
            _base.onChange(value, _this);
          }
          return void 0;
        };
      })(this);
    },
    toggleActive: function(evt) {
      if (!this.state.expanded) {
        evt.target.focus();
      }
      this.setState({
        expanded: !this.state.expanded
      });
      return evt.stopPropagation();
    },
    desactivate: function(evt) {
      this.setState({
        expanded: false
      });
      return evt.stopPropagation();
    },
    render: function() {
      var expandedClass, x;
      expandedClass = this.state.expanded ? "active" : "";
      return React.createElement("div", {
        "tabIndex": "0",
        "className": "react-font-chooser",
        "onClick": this.toggleActive,
        "onBlur": this.desactivate
      }, React.createElement("div", {
        "className": "react-font-chooser-button",
        "dangerouslySetInnerHTML": {
          __html: "&#x25BE;"
        }
      }), React.createElement("div", null, React.createElement("span", {
        "className": "react-font-block react-font-selected",
        "style": {
          fontFamily: this.state.value
        }
      }, this.state.value), React.createElement("ul", {
        "className": "react-font-chooser-options " + expandedClass
      }, React.createElement("input", {
        "type": "hidden",
        "name": this.props.name,
        "value": this.state.value,
        "style": {
          display: "none"
        }
      }), (function() {
        var _i, _len, _ref, _results;
        _ref = this.props.fontList;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          x = _ref[_i];
          _results.push(React.createElement("li", {
            "className": "react-font-block",
            "key": "font-" + x,
            "style": {
              fontFamily: x
            },
            "onClick": this.selectValue(x)
          }, x));
        }
        return _results;
      }).call(this))));
    }
  });

}).call(this);
