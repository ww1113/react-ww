import React from 'react'
import '../css/button.styl'


class Button extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      typeIndex: this.props.selectedIndex
    }
  this.index = 1
  }
  componentDidMount(){}
  render() {
    let {onClick} = this.prop;
    return (
          <p  style={{ borderBottomColor:this.state.typeIndex == i ? '#35be7a' : 'white',color:this.state.typeIndex == i ? '#35be7a' : '#333' }}
                    onClick={() => {
                       this.setState({
                         typeIndex:i
                       });
                      this.index = i
                      console.log(this.index);
                      this.props.onSelected(i)
                    }}>
            {title}
          </p>
    )
  }
}
//es6
HerderBar.defaultProps = {
  selectedIndex: 0
};
export default HerderBar
