import MarkSvg from '@/src/components/ui/mark/Mark'
import React from 'react'
import styles from '../../Home.module.scss'

const HomeIntroPhrase = () => {
	return (
		<div className={styles.home__intro__phrase}>
			<div className={styles.home__intro__phrase__block}></div>
			<div className={styles.home__intro__phrase__text}>
				<div className={styles.home__intro__phrase__text__marks}>
					<MarkSvg />
				</div>
				<p>With great power comes great electricity bill</p>
			</div>
			<div className={styles.home__intro__phrase__author}>
				<p>- Dr. Who</p>
				<div className={styles.home__intro__phrase__author__marks}>
					<MarkSvg />
				</div>
			</div>
		</div>
	)
}

export default HomeIntroPhrase
