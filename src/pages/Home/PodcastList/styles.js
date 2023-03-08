import styled from 'styled-components';

export const PodcastList = styled.ul`
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
    column-gap: 2rem;
    row-gap: 8rem;
    margin-top: 8rem;
    & > * {
        align-self: start;
    }
`;
