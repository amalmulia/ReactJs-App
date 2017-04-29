import React from 'react'

import Players from './Players.js'

class Leaderboard extends React.Component {
	render() {
		const PLAYERS = [
			{id: 1, name: "Amal Mulia", score: 95},
			{id: 2, name: "Andi Rahma", score: 80},
			{id: 3, name: "Dinda", score: 99},
			{id: 4, name: "Bahagia", score: 94}
		]

		const styles = {
			container: {
				padding: 60,
				width: 600,
				margin: 'auto'
			}
		}

	 	return (
			<div style={styles.container}>
				<h1>leaderboard</h1>
				<Players members={PLAYERS}/>
			</div>
		)
	}
}

export default Leaderboard