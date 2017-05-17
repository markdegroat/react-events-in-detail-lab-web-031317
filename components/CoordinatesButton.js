import React from 'react'

class CoordinatesButton extends React.Component {

  constructor(){
    super()
    this.onReceiveCoordinates = this.onReceiveCoordinates
  }

  whenClicked(event){

    var array = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)

  }

  render(){
    return(
      <div>
        <button onClick={this.whenClicked.bind(this)}></button>
      </div>
    )
  }

}

export default CoordinatesButton
