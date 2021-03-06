import React, { Component } from 'react'
import axios from 'axios'
import Logo from '../Logo/Logo.js'
import './EditDog.css'

class EditDog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dog_id: this.props.match.params.id,
			dog: {},
			dog_name: '',
			dog_photo: '',
			dog_breed: '',
			dog_sex: '',
			dog_age: 0,
			dog_weight: 0,
			dog_spayneuter: false,
			dog_description: ''
		}
	}

	componentWillMount() {
		axios
			.get(`https://ipaws-back-end.herokuapp.com/api/dogs/${this.state.dog_id}`)
			.then(response => {
				console.log(response)
				this.setState({
					dog: response.data
				})
			})
			.then(() => {
				this.setState({
					dog_name: this.state.dog.name,
					dog_photo: this.state.dog.photo,
					dog_breed: this.state.dog.breed,
					dog_sex: this.state.dog.sex,
					dog_age: this.state.dog.age,
					dog_weight: this.state.dog.weight,
					dog_spayneuter: this.state.dog.spayneuter,
					dog_description: this.state.dog.description
				})
			})
			.catch(err => console.log(err))
	}

	handleSubmit(e) {
		e.preventDefault()
		axios
			.post(
				`https://ipaws-back-end.herokuapp.com/api/dogs/update/${
					this.state.dog_id
				}`,
				{
					name: this.state.dog_name,
					photo: this.state.dog_photo,
					breed: this.state.dog_breed,
					weight: this.state.dog_weight,
					spayneuter: this.state.dog_spayneuter,
					sex: this.state.dog_sex,
					age: this.state.dog_age,
					description: this.state.dog_description
				}
			)
			.then(response => {
				console.log(response)
				window.location.href = `/#/dogs/${this.state.dog_id}`
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleNameInput(e) {
		this.setState({
			dog_name: e.target.value
		})
		console.log(this.state.dog_name)
	}
	handlePhotoInput(e) {
		this.setState({
			dog_photo: e.target.value
		})
		console.log(this.state.dog_photo)
	}
	handleBreedInput(e) {
		this.setState({
			dog_breed: e.target.value
		})
		console.log(this.state.dog_breed)
	}
	handleAgeInput(e) {
		this.setState({
			dog_age: e.target.value
		})
		console.log(this.state.dog_age)
	}
	handleSexInput(e) {
		this.setState({
			dog_sex: e.target.value
		})
		console.log(this.state.dog_sex)
	}
	handleWeightInput(e) {
		this.setState({
			dog_weight: e.target.value
		})
		console.log(this.state.dog_weight)
	}
	handleFixedInput(e) {
		this.setState({
			dog_spayneuter: e.target.value
		})
		console.log(this.state.dog_spayneuter)
	}
	handleDescriptionInput(e) {
		this.setState({
			dog_description: e.target.value
		})
		console.log(this.state.dog_description)
	}

	render() {
		return (
			<div>
				<Logo />
				<div className='dog-details-container'>
					<div className='dog-details-left'>
						<h1>Editing {this.state.dog.name}</h1>
						<img src={this.state.dog.photo} alt={this.state.dog.name} />
					</div>
					<div>
						<div className='dog-details-right'>
							<p>
								<strong>Breed:</strong> {this.state.dog.breed}
							</p>
							<p>
								<strong>Age:</strong> {this.state.dog.age}
							</p>
							<p>
								<strong>Sex:</strong>{' '}
								{this.state.dog.sex === 'M' ? 'Male' : 'Female'}
							</p>
							<p>
								<strong>Weight:</strong> {this.state.dog.weight}
							</p>
							<p>
								<strong>Spayed/Neutered:</strong>{' '}
								{this.state.dog.spayneuter ? 'Yes' : 'No'}
							</p>
							<p>
								<strong>Description:</strong>
							</p>
							<p>{this.state.dog.description}</p>
						</div>
					</div>
				</div>
				<div className='edit-dog-form'>
					<form className='addDog' onSubmit={e => this.handleSubmit(e)}>
						<div className='couple'>
							<div>
								<label>Name </label>
								<p>
									<input
										type='text'
										onChange={e => this.handleNameInput(e)}
										value={this.state.dog_name}
									/>
								</p>
							</div>
							<div>
								<label>Breed </label>
								<p>
									<input
										type='text'
										onChange={e => this.handleBreedInput(e)}
										value={this.state.dog_breed}
									/>
								</p>
							</div>
						</div>

						<div className='couple'>
							<div>
								<label>Age </label>
								<p>
									<input
										type='text'
										onChange={e => this.handleAgeInput(e)}
										value={this.state.dog_age}
									/>
								</p>
							</div>
							<div>
								<label>Sex </label>
								<p>
									<input
										list='sex'
										type='text'
										onChange={e => this.handleSexInput(e)}
										value={this.state.dog_sex}
									/>
									<datalist id='sex'>
										<option value='male' />
										<option value='female' />
									</datalist>
								</p>
							</div>
						</div>

						<div className='couple'>
							<div>
								<label>Weight </label>
								<p>
									<input
										type='text'
										onChange={e => this.handleWeightInput(e)}
										value={this.state.dog_weight}
									/>
								</p>
							</div>
							<div>
								<label>Spayed/Neutered </label>
								<p>
									<input
										list='spayed'
										type='text'
										onChange={e => this.handleFixedInput(e)}
										value={this.state.dog_spayneuter}
									/>
									<datalist id='spayed'>
										<option value='true' />
										<option value='false' />
									</datalist>
								</p>
							</div>
						</div>

						<div>
							<label>Photo </label>
							<p>
								<input
									id='photo'
									type='text'
									onChange={e => this.handlePhotoInput(e)}
									value={this.state.dog_photo}
								/>
							</p>
						</div>

						<div>
							<label>Description: </label>
							<p>
								<textarea
									type='text'
									onChange={e => this.handleDescriptionInput(e)}
									value={this.state.dog_description}
									rows='6'
									column='80'
								/>
							</p>
						</div>

						<input id='bttn' type='submit' />
					</form>
				</div>
			</div>
		)
	}
}

export default EditDog
