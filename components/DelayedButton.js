import React from 'react'

class DelayedButton extends React.Component {


  whenClicked(e){
    // this.props.onDelayedClick()
    // console.log('"this" in whenClicked', this);
    var eventHolder = e
    e.persist()
    // debugger;
    // console.log(`${e} log of e`);
    var holder = this

    setTimeout(function() {
      // console.log(`${this} inside the setTimeout`)
      console.log(`${e} log of e inside timeout`);

      this.props.onDelayedClick(e)
    }.bind(this), this.props.delay)

  //  setTimeout(this.props.onDelayedClick.bind(this, e), this.props.delay)
  }

  render(){
    return(
      <div>
        <button onClick={this.whenClicked.bind(this)}></button>
      </div>
    )
  }

}

export default DelayedButton
