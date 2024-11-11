import React, { CSSProperties } from 'react'
import styles from './HomeSkills.module.scss'
import Container from '../../ui/container/Container'
import Headling from '../../ui/headling/Headling'
import HomeSkillsItem from './home-skills-item/HomeSkillsItem'

const HomeSkills = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__skills}>
				<Container>
					<Headling
						width={250}
						link='/skills'
						nameLink='View All Skills'
						title='skills'
					/>
					<div className={styles.home__skills__content}>
						<div className={styles.home__skills__content__left}>
							<div className={styles.home__skills__content__left__dots__upper}>
								{Array.from({ length: 20 }).map((_, index) => (
									<div
										style={{ '--i': index } as CSSProperties}
										key={index}
										className={
											styles.home__skills__content__left__dots__upper__dot
										}
									></div>
								))}
							</div>
							<div className={styles.home__skills__content__left__dots__bottom}>
								{Array.from({ length: 20 }).map((_, index) => (
									<div
										style={{ '--i': index } as CSSProperties}
										key={index}
										className={
											styles.home__skills__content__left__dots__upper__dot
										}
									></div>
								))}
							</div>
							<div
								className={styles.home__skills__content__left__block__bottom}
							></div>
							<div className={styles.home__skills__content__left__purples}>
								<div
									className={styles.home__skills__content__left__purples__left}
								></div>
								<div
									className={styles.home__skills__content__left__purples__right}
								></div>
							</div>
						</div>
						<div className={styles.home__skills__content__right}>
							<div className={styles.home__skills__content__right}>
								<div className={styles.home__skills__content__right__items}>
									<HomeSkillsItem />
									<HomeSkillsItem />
									<HomeSkillsItem />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default HomeSkills
