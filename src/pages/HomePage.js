import React from 'react';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listNote: []
		}
	}

	componentDidMount() {
		fetch("/api/notes")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						listNote: result
					})
				})
	}

	render() {
		const listNoteRender = this.state.listNote.map((note) => 
			<div className="note-item" key={note.id}>
				<div>Id: {note.id}</div>
				<div>Name: {note.name}</div>
				<div>Date created: {note.createdAt}</div>
				<div>Date updated: {note.updatedAt}</div>
			</div>
		)

		return (
			<div>
				<h2 className="center">List Note</h2>
				{listNoteRender}
			</div>
		)
	}
}
export default HomePage;