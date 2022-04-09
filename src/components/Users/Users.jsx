import React from "react";

import Paginator from "../common/Paginator/Paginator";

import User from "./User";

const Users = ({ follow, portionSize, unFollow, onClickHandler, totalCount, count, pages, users, isFetching, followingInProgress }) => {
	const btnFollowHandler = (id) => {
		follow(id);

	};

	const btnUnFollowHandler = (id) => {
		unFollow(id);
	};

	return (
		<div>
			<Paginator
				totalCount={totalCount}
				count={count}
				onClickHandler={onClickHandler}
				pages={pages}
				portionSize={portionSize}
				isFetching={isFetching} />
			{
				users.map((item) => (
					<User
						key={item.id}
						user={item}
						btnFollowHandler={btnFollowHandler}
						btnUnFollowHandler={btnUnFollowHandler}
						followingInProgress={followingInProgress} />
				))
			}
		</div >
	)
};

export default Users;