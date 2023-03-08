import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--blue);
    color: var(--blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.h1`
    font-size: 1.25rem;
`;

export const HomeLink = styled(Link)``;
