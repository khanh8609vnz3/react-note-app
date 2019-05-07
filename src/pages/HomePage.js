import React from 'react';
import axios from 'axios';
import moment from 'moment';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listNote: [],
			selectedNote: {}
		}

		this.getOneNote = this.getOneNote.bind(this);
	}

	componentDidMount() {
		this.getListNote();
	}

	getListNote() {
		axios.get("/api/notes")
			.then(res => {
				this.setState({
					listNote: res.data
				});
			})
	}

	getOneNote(id) {
		axios.get("/api/notes/" + id)
			.then(res => {
				this.setState({
					selectedNote: res.data
				});
			})
	}

	formatDate(date) {
		return moment(date).format("DD-MM-YYYY HH:MM");
	}

	render() {
		var { listNote, selectedNote } = this.state;
		const listNoteRender = listNote.map((note) =>
			<div className="note-item" key={note.id} onClick={() => this.getOneNote(note.id)}>
				<div>Id: {note.id}</div>
				<div>Name: {note.name}</div>
				{(note.group) &&
					<div>
						<div>GroupId: {note.group.groupId}</div>
						<div>Group name: {note.group.groupName}</div>
					</div>
				}
				<div>Date created: {this.formatDate(note.createdAt)}</div>
				<div>Date updated: {this.formatDate(note.updatedAt)}</div>
			</div>
		)

		const selectedNoteRender = (
			selectedNote.id && <div className="note-item selected">
				<div>Id: {selectedNote.id}</div>
				<div>Name: {selectedNote.name}</div>
				{(selectedNote.group) &&
					<div>
						<div>GroupId: {selectedNote.group.groupId}</div>
						<div>Group name: {selectedNote.group.groupName}</div>
					</div>
				}
				<div>Date created: {this.formatDate(selectedNote.createdAt)}</div>
				<div>Date updated: {this.formatDate(selectedNote.updatedAt)}</div>
			</div>
		)

		return (
			<div className="flex-display">
				<div className="width-50">
					<h3 className="center">List Note</h3>
					{listNoteRender}
				</div>
				<div className="width-50">
					<h3 className="center">Selected note</h3>
					{selectedNoteRender}
				</div>
			</div>
		)
	}
}
export default HomePage;