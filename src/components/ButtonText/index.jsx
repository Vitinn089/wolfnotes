import PropTypes from 'prop-types'

import { Container } from "./styles";

export function ButtonText ({title, isActivite = false, ...rest}) {
    return (
        <Container
            type="button"
            isActivite = {isActivite}
            {...rest}
        >
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string.isRequired,
    isActivite: PropTypes.bool
}