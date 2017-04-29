import React from 'react'

import Players from './Players.js'

class Leaderboard extends React.Component {
	render() {
		const PLAYERS = [
			{id: 1, name: "Amal Mulia", score: 95},
			{id: 2, name: "Andi Rahma", score: 80},
			{id: 3, name: "Dinda", score: 100}
		]

	 	return (
			<div>
				<h1>leaderboard</h1>
				<Players members={PLAYERS}/>
			</div>
		)
	}
}

export default Leaderboard