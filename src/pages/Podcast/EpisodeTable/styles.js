import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoxShadowCSS, ContainerPaddingCSS } from '../../../styles';

export const TableContainer = styled.div`
    ${BoxShadowCSS}
    ${ContainerPaddingCSS}
`;
export const Table = styled.table`
    border-collapse: collapse;
`;

export const Row = styled.tr`
    border-bottom: 1px solid lightgray;
    &:nth-child(odd) {
        background-color: #f9f9f9;
    }
`;

export const THead = styled.thead`
    & > ${Row} {
        background-color: transparent;
    }
`;

export const TBody = styled.tbody``;

export const Header = styled.th`
    text-align: left;
    padding: 0.5rem;
`;

export const Cell = styled.td`
    text-align: ${(props) => props.textAlign || 'left'};
    padding: 0.5rem;
    &:first-of-type {
        width: 100%;
    }
`;

export const EpisodeLink = styled(Link)``;
