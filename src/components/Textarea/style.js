import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
    outline: none;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`