window.FontChooser = React.createClass
  getInitialState: ->
    {
      expanded: false
      value: @props.value
    }

  selectValue: (value) ->
    (evt) =>
      @setState value: value
      @props.onChange?(value, this)

      undefined

  toggleActive: (evt) ->
    if !@state.expanded
      evt.target.focus()

    @setState expanded: !@state.expanded
    evt.stopPropagation()

  desactivate: (evt) ->
    @setState expanded: false
    evt.stopPropagation()

  render: ->
    expandedClass = if @state.expanded then "active" else ""
    <div tabIndex="0" className="react-font-chooser" onClick=@toggleActive onBlur=@desactivate>
      <div className="react-font-chooser-button" dangerouslySetInnerHTML={__html:"&#x25BE;"} />
      <div>
        <span className="react-font-block react-font-selected" style={ fontFamily: @state.value } >{@state.value}</span>

        <ul className="react-font-chooser-options #{expandedClass}">
          <input type="hidden" name=@props.name value=@state.value style={display: "none"}></input>
          {
            for x in @props.fontList
              <li className="react-font-block" key="font-#{x}" style={ fontFamily: x } onClick=@selectValue(x)>
                {x}
              </li>
          }
        </ul>
      </div>
    </div>