import React from 'react'
import styles from './Headling.module.scss'
import Link from 'next/link'

const Headling = ({
	title,
	link,
	nameLink,
	width,
}: {
	title: string
	link: string
	nameLink: string
	width: number
}) => {
	return (
		<div className={styles.headling}>
			<div className={styles.headling__left}>
				<h3 className={styles.headling__left__title}>
					<span>#</span>
					{title}
				</h3>
				<div
					className={styles.headling__left__line}
					style={{ width: `${width}px` }}
				></div>
			</div>
			<Link href={`/${link}`} className={styles.headling__right}>
				{nameLink} ~~{'>'}
			</Link>
		</div>
	)
}

export default Headling
