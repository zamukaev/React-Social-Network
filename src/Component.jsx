const Component = () => {
	return (
		<div className="wrapper">
			<header className="header">
				<div className="headerContainer">
					<div className="logo"><img src={logo} alt="" /></div>

					<nav className="nav">
						<ul className="menu">
							<li className="link">
								<a href="profile">
									<img src={profIcon} alt="" />
									<span>profile</span>
								</a>
							</li>
							<li className="link">
								<a href="chat">
									<img src={chatIcon} alt="" />
									<span>chat</span>
								</a>
							</li>
							<li className="link">
								<a href="users">
									<img src={userIcon} alt="" />
									<span>users</span>
								</a></li>
						</ul>
					</nav>
					<div className="user">
						<div className="icon">
							<img src={profImg} alt="" />
						</div>
						<div className="info">
							<div className="name">D. Kargaev</div>
						</div>
					</div>
					<div className="logout">
						logout
					</div>
				</div>
			</header>
			<main className="page">
				<div className='_container'>

					<div className="sideBar">
						<div className="content">
							<div className="profileImage">
								<img src={profImg2} alt="" />
							</div>
							<div className="profileInfo">
								<div className="name">
									Dmitry Kargaev
								</div>
								<div className="status">
									Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.
								</div>
							</div>
						</div>
					</div>

					<div className="content">
						<div className="myPosts">
							<div className="addNewPost">
								<div className="title">
									new post
								</div>
								<div className="input">
									<input type="text" placeholder="What’s on your mind?" />
									<button className="btn"></button>
								</div>
							</div>
						</div>
						<div className="post">
							<div className="author">
								<div className="authorImg">
									<img src={profImg} alt="" />
								</div>
								<div className="authorName">
									Theresa Steward
								</div>

							</div>
							<div className="PostText">
								What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
							</div>

						</div>

					</div>

				</div>
			</main>
		</div>
	)
}