import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PodcastList from './index';

describe('PodcastList', () => {
    it('render "no podcasts found" when there are no podcasts', () => {
        const { getByText } = render(<PodcastList podcasts={[]} />, {
            wrapper: BrowserRouter,
        });
        expect(getByText(/no podcasts found/i)).toBeInTheDocument();
    });
    it('renders podcasts', () => {
        const { getAllByTestId } = render(
            <PodcastList podcasts={mockPodcasts} />,
            { wrapper: BrowserRouter }
        );
        const podcastNames = getAllByTestId('podcast-name').map(
            (el) => el.textContent
        );
        const mockPodcastNames = mockPodcasts.map((p) => p?.['im:name']?.label);
        expect(podcastNames).toEqual(mockPodcastNames);
    });
});

const mockPodcasts = [
    {
        'im:name': {
            label: 'The Joe Budden Podcast',
        },
        'im:image': [
            {
                label: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
                attributes: {
                    height: '55',
                },
            },
            {
                label: 'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
                attributes: {
                    height: '60',
                },
            },
            {
                label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
                attributes: {
                    height: '170',
                },
            },
        ],
        summary: {
            label: 'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
        },
        'im:price': {
            label: 'Get',
            attributes: {
                amount: '0',
                currency: 'USD',
            },
        },
        'im:contentType': {
            attributes: {
                term: 'Podcast',
                label: 'Podcast',
            },
        },
        rights: {
            label: '© All rights reserved',
        },
        title: {
            label: 'The Joe Budden Podcast - The Joe Budden Network',
        },
        link: {
            attributes: {
                rel: 'alternate',
                type: 'text/html',
                href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
            },
        },
        id: {
            label: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
            attributes: {
                'im:id': '1535809341',
            },
        },
        'im:artist': {
            label: 'The Joe Budden Network',
            attributes: {
                href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
            },
        },
        category: {
            attributes: {
                'im:id': '1310',
                term: 'Music',
                scheme: 'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
                label: 'Music',
            },
        },
        'im:releaseDate': {
            label: '2023-03-08T00:00:00-07:00',
            attributes: {
                label: 'March 8, 2023',
            },
        },
    },
    {
        'im:name': {
            label: 'New Rory & MAL',
        },
        'im:image': [
            {
                label: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/55x55bb.png',
                attributes: {
                    height: '55',
                },
            },
            {
                label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/60x60bb.png',
                attributes: {
                    height: '60',
                },
            },
            {
                label: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/170x170bb.png',
                attributes: {
                    height: '170',
                },
            },
        ],
        summary: {
            label: 'New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal.',
        },
        'im:price': {
            label: 'Get',
            attributes: {
                amount: '0',
                currency: 'USD',
            },
        },
        'im:contentType': {
            attributes: {
                term: 'Podcast',
                label: 'Podcast',
            },
        },
        rights: {
            label: '© All Rights Reserved',
        },
        title: {
            label: 'New Rory & MAL - Rory Farrell & Jamil "Mal" Clay',
        },
        link: {
            attributes: {
                rel: 'alternate',
                type: 'text/html',
                href: 'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
            },
        },
        id: {
            label: 'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2',
            attributes: {
                'im:id': '1572182022',
            },
        },
        'im:artist': {
            label: 'Rory Farrell & Jamil "Mal" Clay',
        },
        category: {
            attributes: {
                'im:id': '1310',
                term: 'Music',
                scheme: 'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
                label: 'Music',
            },
        },
        'im:releaseDate': {
            label: '2023-03-10T01:45:00-07:00',
            attributes: {
                label: 'March 10, 2023',
            },
        },
    },
];
