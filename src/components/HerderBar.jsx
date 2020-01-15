import React from 'react'
import './css/herderBar.styl'
import {TextBar} from './widget/Text.jsx'


class HerderBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      typeIndex: this.props.selectedIndex
    }
  this.index = 1
  }
  componentDidMount(){}
  render() {
    return (
      <div className='textHeader'>
        {this.props.titles.map((title, i) => (
          <TextBar  key={i} style={{ borderBottomColor:this.state.typeIndex == i ? '#35be7a' : 'white',color:this.state.typeIndex == i ? '#35be7a' : '#333' }}
                    onClick={() => {
                       this.setState({
                         typeIndex:i
                       });
                      this.index = i
                      console.log(this.index);
                      this.props.onSelected(i)
                    }}>
            {title}
          </TextBar>
        ))
        }
      </div>
    )
  }
}
//es6
HerderBar.defaultProps = {
  selectedIndex: 0
};
export default HerderBar
