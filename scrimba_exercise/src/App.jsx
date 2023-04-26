import React, { Component } from 'react';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import { nanoid } from 'nanoid';
import Display from './components/Display';
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			general: {
				editable: true,
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
			},
			education: [
				{
					editable: true,
				},
				{
					id: nanoid(),
					schoolName: '',
					titleOfStudy: '',
					graduatedYear: '',
				},
			],
			experience: [
				{
					editable: true,
				},
				{
					id: nanoid(),
					companyName: '',
					positionTitle: '',
					mainTasks: '',
					fromDate: '',
					toDate: '',
				},
			],
		};
	}

	handleChange = e => {
		this.setState(prevState => {
			return {
				general: {
					...prevState.general,
					[e.target.name]: e.target.value,
				},
			};
		});
	};

	handleSubmit = () => {
		this.setState(prevState => {
			return {
				general: {
					...prevState.general,
					editable: !prevState.general.editable,
				},
			};
		});
	};

	handleAddNew = () => {
		//
		console.log('addNew clicked');
	};

	render() {
		//console.log('App state: ', this.state);
		/* 	console.log(this.state.general.editable);
		console.log(this.state.education[0].editable);
		console.log(this.state.experience[0].editable); */

		return (
			<>
				<nav className="navbar">
					<h1>RESUME CREATOR</h1>
				</nav>
				<main>
					<section class="input">
						<General
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editStatus={this.state.general.editable}
							firstName={this.state.general.firstName}
							lastName={this.state.general.lastName}
							email={this.state.general.email}
							phoneNumber={this.state.general.phoneNumber}
						/>
						<Education
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							handleAddNew={this.handleAddNew}
							editStatus={this.state.education[0].editable}
							schoolName={this.state.education[1].schoolName}
							titleOfStudy={this.state.education[1].titleOfStudy}
							graduatedYear={this.state.education[1].graduatedYear}
						/>
						<Experience
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							handleAddNew={this.handleAddNew}
							editStatus={this.state.experience[0].editable}
							companyName={this.state.experience[1].companyName}
							positionTitle={this.state.experience[1].positionTitle}
							mainTasks={this.state.experience[1].mainTasks}
							fromDate={this.state.experience[1].fromDate}
							toDate={this.state.experience[1].toDate}
						/>
					</section>
					<nav className="nav-preview">
						<h4>Preview Resume</h4>
						<button
							className="
						display"
							onClick={this.props.handleSubmit}
						>
							{this.props.editStatus ? 'Submit' : 'Display Resume'}
						</button>
					</nav>
					<section class="display">
						<Display />
					</section>
				</main>
				<footer>
					<p>© JustWaveThings</p>
				</footer>
			</>
		);
	}
}

export default App;
