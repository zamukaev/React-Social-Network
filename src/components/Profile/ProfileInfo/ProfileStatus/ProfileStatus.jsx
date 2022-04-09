import React from 'react';
import styles from '../../Profile.module.scss';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});

		this.props.updateStatus(this.state.status)
	}

	onChangeHandler = (event) => {
		this.setState({
			status: event.currentTarget.value
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	render() {
		return (
			<div className={styles.profileStatus}>
				{!this.state.editMode &&
					<div className={styles.status} >
						<b>Status:</b> <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
					</div>
				}
				{
					this.state.editMode &&
					<div className={styles.statusInput} >
						<input onChange={this.onChangeHandler} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;

