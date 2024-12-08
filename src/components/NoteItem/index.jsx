import PropTypes from 'prop-types'

import { FiPlus, FiX } from "react-icons/fi";

import {Container } from './styled'

export function NoteItem ({isNew, value, onClick, onKeyDown, ...rest}) {
    return (
        <Container isNew={isNew}>
            <input 
                type="text" 
                value={value}
                readOnly={!isNew}
                onKeyDown={onKeyDown}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add ' : 'button-delete'}
            >
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}

NoteItem.propTypes = {
    isNew: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func.isRequired
}