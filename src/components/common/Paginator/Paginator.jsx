import React, { useState } from "react";
import styles from './Paginator.module.css';
import cn from 'classnames'
import Preload from "../Preload/Preload";

const Paginator = ({ totalCount, count, portionSize, onClickHandler, pages, isFetching }) => {
	let pagesCount = Math.ceil(totalCount / count);

	let page = [];
	for (let i = 1; i < pagesCount; i++) {
		page.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	if (isFetching) {
		return <Preload />
	}
	return (
		<div className={styles.pagination}>
			{portionNumber > 1 &&
				<button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
			{
				page
					.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => (<span key={p} onClick={() => onClickHandler(p)} className={cn({ [styles.selectPages]: pages === p }, styles.portionNumber)}>{p}</span>))
			}
			{
				portionCount > portionNumber &&
				<button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
			}
		</div >
	)
}

export default Paginator;