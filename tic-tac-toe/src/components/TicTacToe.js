import React, { Component } from 'react'
import Grid from './Grid';


export default class TicTacToe extends Component {
  constructor(props) {
      super(props);
      // set default state
      this.state = {
        // determines who is going next
        xIsNext: true,
        stepNumber: 0,

        }
      }

    render() {

      return(
          <div className="ticTacToe">
            <div className="ticTacToe-grid">
              <Grid onClick={(i) => this.handleClick(i)}
              boxs={current.boxs} />
            </div>
          </div>
      )
    }
  }
