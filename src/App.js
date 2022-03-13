import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

const App = () => {

	return (
		<div className='app'>
			<BrowserRouter>
				<div className='app-wrapper'>
					<HeaderContainer />
					<Navbar />
					<div className='app-wrapper-content'>
						<Routes>
							<Route path="/profile" element={<Profile />} />
							<Route path="/profile/:userId/*" element={<Profile />} />
							<Route path="/message/*" element={<DialogsContainer />} />
							<Route path="/news" element={<News />} />
							<Route path="/music" element={<Music />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/users" element={<UsersContainer />} />
							<Route path="/login" element={<LoginContainer />} />
						</Routes>
					</div>
				</div>

			</BrowserRouter>
		</div>
	);
}

export default App;