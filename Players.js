import React from 'react'

class Players extends React.Component {
	render() {
		// console.log(this.props);
		return (
			<div>
			{this.props.members.map( (players) => {
				return (
					<div>
						<div>
							Amal Mulia
						</div>
						<div>
							<div>
								<button>-</button>
								<span>30</span>
								<button>+</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
		)
	}
}

export default Players