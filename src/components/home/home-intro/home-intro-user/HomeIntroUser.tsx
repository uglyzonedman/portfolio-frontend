import React from 'react'
import styles from '../../Home.module.scss'
import Image from 'next/image'
import user from '../../../../assets/user.png'

const HomeIntroUser = () => {
	return (
		<div className={styles.home__intro__content__user}>
			<Image alt='user' src={user} />
			<div className={styles.home__intro__content__user__info}>
				<div className={styles.home__intro__content__user__info__color}></div>
				<p className={styles.home__intro__content__user__info__text}>
					Currently working on <span>Portfolio</span>
				</p>
			</div>
		</div>
	)
}

export default HomeIntroUser
