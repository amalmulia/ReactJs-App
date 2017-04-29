import React from 'react'

import Players from './Players.js'

class Leaderboard extends React.Component {
	render() {
	 	return (
			<div>
				<h1>leaderboard</h1>
				<Players />
			</div>
		)
	}
}

export default Leaderboard