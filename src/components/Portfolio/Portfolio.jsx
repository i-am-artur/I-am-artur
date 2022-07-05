import { useContext } from 'react';

import { LanguageContext } from '../../App';
import { content } from './content';
import { PageHeading } from '../../common/Styles/global';
import {
	ProjectWithNoLink,
	Projects,
	ProjectItem,
	ProjectLink,
	ProjectModalImage,
} from './portfolio.styled';
import { Project } from './components/Project';
import useModal from '../../common/Modal/useModal';

export default function Portfolio() {
	const [language] = useContext(LanguageContext);
	const [modal, showModal] = useModal(true);

	return (
		<>
			<PageHeading>{content.heading[language]}</PageHeading>
			<Projects>
				{content.projects.map((project) => (
					<ProjectItem key={project.id}>
						{getProject(project, language, showModal)}
					</ProjectItem>
				))}
			</Projects>
			{modal}
		</>
	);
}

function getProject(project, language, showModal) {
	const projectJSX = <Project project={project} language={language} />;

	if (project.link) {
		return (
			<ProjectLink href={project.link} rel='noreferrer' target='_blank'>
				{projectJSX}
			</ProjectLink>
		);
	} else {
		const modalContent = (
			<ProjectModalImage
				src={`/Portfolio/${project.demo}`}
				alt={project.title[language]}
			/>
		);

		return (
			<ProjectWithNoLink onClick={() => showModal(modalContent)}>
				{projectJSX}
			</ProjectWithNoLink>
		);
	}
}
