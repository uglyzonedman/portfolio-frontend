import MarkSvg from '@/src/components/ui/mark/Mark'
import React from 'react'
import styles from '../../Home.module.scss'

const HomeIntroPhrase = ({
	item,
	isFading,
}: {
	item: {
		id: number
		phrase: string
		author: string
	}
	isFading: boolean
}) => {
	return (
		<div
			key={item.id}
			className={`${styles.home__intro__phrase} ${isFading ? styles.fade : ''}`}
		>
			<div className={styles.home__intro__phrase__text}>
				<div className={styles.home__intro__phrase__text__marks}>
					<MarkSvg />
				</div>
				<p>{item.phrase}</p>
			</div>
			<div className={styles.home__intro__phrase__author}>
				<p>- {item.author}</p>
				<div className={styles.home__intro__phrase__author__marks}>
					<MarkSvg />
				</div>
			</div>
		</div>
	)
}

export default HomeIntroPhrase
