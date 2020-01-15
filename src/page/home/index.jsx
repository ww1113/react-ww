import React from 'react'
import HerderBar from "../../components/HerderBar.jsx"
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }
  componentDidMount(){}
  render() {
    return (
      <div>
        <HerderBar
          titles={['全部', '待支付','已支付']}
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
export default Home
