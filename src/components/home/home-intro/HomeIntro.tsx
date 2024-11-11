import React from 'react'
import styles from '../Home.module.scss'
import HomeIntroUser from './home-intro-user/HomeIntroUser'
import MarkSvg from '../../ui/mark/Mark'
import HomeIntroPhrase from './home-intro-phrase/HomeIntroPhrase'

const HomeIntro = () => {
	return (
		<section className={styles.home__intro}>
			<div className={styles.home__intro__content}>
				<div className={styles.home__intro__content__left}>
					<h3 className={styles.home__intro__content__left__title}>
						uglyzonedman is a <span>front-end</span> and
						<span> back-end developer</span>
					</h3>
					<p className={styles.home__intro__content__left__description}>
						He crafts responsive websites where technologies meet creativity
					</p>
					<button className={styles.home__intro__content__left__contact}>
						Contact me!!
					</button>
				</div>
				<HomeIntroUser />
			</div>
			<HomeIntroPhrase />
		</section>
	)
}

export default HomeIntro
