import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from '.';
import { LoadingContext } from '../../contexts/LoadingContext';

describe('AppHeader', () => {
    it('render header text', () => {
        const { getByText } = render(<AppHeader />, {
            wrapper: BrowserRouter,
        });
        expect(getByText(/Podcaster/i)).toBeInTheDocument();
    });
    it('render loader', () => {
        const { getByTestId } = render(
            <LoadingContext.Provider value={{ loading: true }}>
                <AppHeader />
            </LoadingContext.Provider>,
            {
                wrapper: BrowserRouter,
            }
        );
        expect(getByTestId('loader')).toBeInTheDocument();
    });
    it('hide loader', async () => {
        render(
            <LoadingContext.Provider value={{ loading: false }}>
                <AppHeader />
            </LoadingContext.Provider>,
            {
                wrapper: BrowserRouter,
            }
        );
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
});
