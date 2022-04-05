import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { initialize } from './redux/appReducer'
import Preload from './components/common/Preload/Preload';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer'
import Error_404 from './components/Error_404/Error_404';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));

class App extends React.Component {
	componentDidMount() {
		this.props.initialize()
	}

	render() {
		if (!this.props.initialized) {
			return <Preload />
		}

		return (
			<div className='app'>
				<div className='app-wrapper'>
					<HeaderContainer />
					<Navbar />
					<div className='app-wrapper-content'>
						<React.Suspense fallback={<Preload />}>
							<Routes>
								<Route path="/profile" element={<Profile />} />
								<Route path="/profile/:userId/*" element={<Profile />} />
								<Route path="/" element={<Navigate to={"/profile"} />} />
								<Route path="/message/*" element={<DialogsContainer />} />
								<Route path="/news" element={<News />} />
								<Route path="/music" element={<Music />} />
								<Route path="/settings" element={<Settings />} />
								<Route path="/users" element={<UsersContainer />} />
								<Route path="/login" element={<LoginContainer />} />
								<Route path="*" element={<Error_404 />} />
							</Routes>
						</React.Suspense>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
};

export default compose(
	connect(mapStateToProps, { initialize })
)(App);