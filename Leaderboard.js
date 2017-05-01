import React from 'react'

import Players from './Players.js'

import AddPlayer from './AddPlayer.js'

/*global AddPLayer*/
/*eslint-env browser*/

AddPlayer.propTypes = {
  AddPlayer: React.PropTypes.string.isRequired
}


class Leaderboard extends React.Component {

	constructor(props) {
		super(props)

		const PLAYERS = [
			{id: 1, name: "Amal Mulia", score: 95},
			{id: 2, name: "Andi Rahma", score: 80},
			{id: 3, name: "Dinda", score: 99},
			{id: 4, name: "Bahagia", score: 94}
		]

		this.state = {
			members: PLAYERS
		}
	}
	render() {
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
				<Players members={this.state.members} />
				<AddPlayer />
			</div>
		)
	}
}

export default Leaderboard