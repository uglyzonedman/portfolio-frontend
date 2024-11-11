import React from 'react'
import styles from './Project.module.scss'
import Image from 'next/image'
import project from '../../../assets/project1.png'
import ProjectTechnology from './project-technology/ProjectTechnology'
import Link from 'next/link'
const Project = () => {
	return (
		<div className={styles.project}>
			<Image src={project} alt='project' />
			<div className={styles.project__techologies}>
				<ProjectTechnology />
				<ProjectTechnology />
				<ProjectTechnology />
				<ProjectTechnology />
			</div>
			<div className={styles.project__info}>
				<h3 className={styles.project__info__title}>ProtectX</h3>
				<p className={styles.project__info__description}>
					Discord anti-crash bot
				</p>
				<div className={styles.project__links}>
					<Link className={styles.project__links__item} href='/'>
						Live &lt;~&gt;
					</Link>

					<Link className={styles.project__links__item} href='/'>
						Code &lt;~&gt;
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Project
