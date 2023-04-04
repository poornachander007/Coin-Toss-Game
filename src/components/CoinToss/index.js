// Write your code here
import {Component} from 'react'

import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    display: headsUrl,
  }

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(preState => ({
        total: preState.total + 1,
        heads: preState.heads + 1,
        display: headsUrl,
      }))
    } else {
      this.setState(preState => ({
        total: preState.total + 1,
        tails: preState.tails + 1,
        display: tailsUrl,
      }))
    }
  }

  render() {
    const {total, heads, tails, display} = this.state
    return (
      <div className="app_container">
        <div className="game_container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails </p>
          <img src={display} alt="toss result" className="image" />
          <div>
            <button
              type="button"
              className="tossButton"
              onClick={this.onClickTossButton}
            >
              Toss Coin
            </button>
          </div>
          <ul className="countsContainer">
            <p className="counts">Total: {total}</p>
            <p className="counts">Heads: {heads}</p>
            <p className="counts">Tails: {tails}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
