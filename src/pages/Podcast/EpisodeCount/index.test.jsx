import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EpisodeCount from '.';

describe('EpisodeCount', () => {
    it('render count', () => {
        const { getByText } = render(<EpisodeCount count={100} />, {
            wrapper: BrowserRouter,
        });
        expect(getByText(/Episodes: 100/i)).toBeInTheDocument();
    });
});
