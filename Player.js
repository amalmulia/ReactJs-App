import React from 'react'


class Player extends React.Component {
	render() {
		const styles = {
			player: {
				display: 'flex',
				padding: 10
			},
			name: {
				flex: '1'
			},
			playerScore: {
				width: 200
			},
			score: {
				padding: 20
			},
			button: {
				padding: 10
			}
		}
		return  (
			<div style={styles.player}>
				<div style={styles.name}>
					{this.props.name}
				</div>
				<div style={styles.playerScore}>
					<div>
						<button style={styles.button}>-</button>
						<span style={styles.score}>{this.props.score}</span>
						<button style={styles.button}>+</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Player