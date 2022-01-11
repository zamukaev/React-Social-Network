import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = ({ dialogsData, messageItem, postsItem }) => {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>

				<Header />
				<Navbar />
				<div className='app-wrapper-content'>

					<Routes>
						<Route path="/profile" element={<Profile postsItem={postsItem} />} />
						<Route path="/message*" element={<Dialogs dialogsData={dialogsData} messageItem={messageItem} />} />
						<Route path="/news" element={<News />} />
						<Route path="/music" element={<Music />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>




				</div>

			</div>
		</BrowserRouter>
	);
}

export default App;