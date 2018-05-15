import React from 'react'

class ThemedDecorations extends React.Component {
  render(){
    const currentTheme = this.props.theme
    const decorations = React.Children.map(this.props.children,
      function(child){
        return React.cloneElement(child,{
          className: currentTheme
          });
        });
    return (
      <div>{decorations}</div>
    )
  }
}

export default ThemedDecorations;
