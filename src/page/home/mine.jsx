import React from 'react'
import HerderBar from "../../components/HerderBar.jsx"
class Mine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }
  componentDidMount(){}
  render() {
    return (
      <div>
        <HerderBar
          titles={['全部', '开始','完成']}
          selectedIndex={this.state.selectedIndex}
          onSelected={(index) => {
            this.selectedIndex = index
          }}
        />
        <div>
          text
        </div>
      </div>
    )
  }
}
export default Mine
