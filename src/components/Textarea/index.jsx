import { Container} from './style'
import PropTypes from 'prop-types'

export function Textarea ({value, ...rest}) {

    return (
        <Container {...rest}>
            {value}
        </Container>
    )
}

Textarea.propTypes = {
    value: PropTypes.string
}