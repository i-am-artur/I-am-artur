import { Content, Image, Title } from '../portfolio.styled';
import { content } from '../content';
import * as PropTypes from 'prop-types';

export function Project(props) {
	return (
		<>
			<Image
				src={require(`../../../assets/portfolio/${props.project.thumb}`)}
			/>
			<Content>
				<Title>{props.project.title[props.language]}</Title>
				<div>
					{`${content.languages[props.language]}: `}
					{props.project.languages[props.language].join(', ')}
				</div>
				<div>
					{`${content.technologies[props.language]}: `}
					{props.project.technologies.join(', ')}
				</div>
			</Content>
		</>
	);
}

Project.propTypes = {
	project: PropTypes.any.isRequired,
	language: PropTypes.any.isRequired,
};
