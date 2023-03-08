import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoxShadowCSS, ContainerPadding } from '../../../styles';

export const TableContainer = styled.div`
    ${BoxShadowCSS}
    ${ContainerPadding}
`;
export const Table = styled.table`
    border-collapse: collapse;
`;

export const Row = styled.tr`
    border-bottom: 1px solid lightgray;
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Header = styled.th`
    text-align: left;
    padding: 0.5rem;
`;

export const Cell = styled.td`
    padding: 0.5rem;
    &:first-of-type {
        width: 100%;
    }
`;

export const EpisodeLink = styled(Link)``;
