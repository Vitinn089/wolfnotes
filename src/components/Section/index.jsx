import PropTypes from 'prop-types'

import { Container } from "./styles"

export function Section ({title, children, ...rest}) {
    return (
        <Container {...rest}>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}