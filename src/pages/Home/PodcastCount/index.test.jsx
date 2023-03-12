import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PodcastCount from '.';

describe('PodcastCount', () => {
    it('render count', () => {
        const { getByText } = render(<PodcastCount count={100} />, {
            wrapper: BrowserRouter,
        });
        expect(getByText(/100/i)).toBeInTheDocument();
    });
});
