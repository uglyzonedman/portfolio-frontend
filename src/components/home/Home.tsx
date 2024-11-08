import React from 'react'
import styles from './Home.module.scss'
const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__container}>
				<section className={styles.home__intro}>
					<div className={styles.home__intro__content}>
						<div className={styles.home__intro__content__left}>
							<h3 className={styles.home__intro__content__left__title}>
								Elias is a <span>web designer</span> and
								<span>front-end developer</span>
							</h3>
							<p className={styles.home__intro__content__left__description}>
								He crafts responsive websites where technologies meet creativity
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Home
