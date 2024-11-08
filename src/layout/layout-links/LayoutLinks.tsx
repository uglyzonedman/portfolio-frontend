import React from 'react'
import styles from '../Layout.module.scss'
import Link from 'next/link'
import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa'
const LayoutLinks = () => {
	return (
		<div className={styles.links}>
			<div className={styles.links__line}></div>
			<div className={styles.links__items}>
				<Link href={'/'} className={styles.links__items__item}>
					<FaGithub color='#ABB2BF' size={32} />
				</Link>
				<Link href={'/'} className={styles.links__items__item}>
					<FaTelegram color='#ABB2BF' size={32} />
				</Link>
				<Link href={'/'} className={styles.links__items__item}>
					<FaDiscord color='#ABB2BF' size={32} />
				</Link>
			</div>
		</div>
	)
}

export default LayoutLinks
