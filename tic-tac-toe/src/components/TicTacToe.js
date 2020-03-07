import React, { Component } from 'react'
import Grid from './Grid';

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { boxs: Array(9).fill(null) }
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const boxs = current.boxs.slice();
        const winner = calculateWinner(boxs);
        if (winner || boxs[i]) {
            return;
        }
        boxs[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                boxs: boxs
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.boxs);
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to #' + move : 'New Game';
            return (
                <li key={move}>
                    <button className="btnHistory" onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        });
        let status;
        if (winner) {
            status = 'Winner is ' + winner;
        } else {
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
        }


        return (
            <div className="ticTacToe">
                <div className="ticTacToe-board">
                    <Grid onClick={(i) => this.handleClick(i)}
                        boxs={current.boxs} />
                </div>
                <div className="ticTacToe-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>

            </div>
        )
    }
}

function calculateWinner(boxs) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (boxs[a] && boxs[a] === boxs[b] && boxs[b] === boxs[c]) {
            return boxs[a];
        }
    }

    return null;
}
