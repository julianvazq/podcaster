import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PodcastFilter from '.';

const setup = () => {
    const utils = render(
        <PodcastFilter
            filterValue='Norah Jones Is Playing Along'
            onChangeHandler={() => {}}
        />
    );
    const input = screen.getByPlaceholderText('Filter podcasts...');
    return {
        input,
        ...utils,
    };
};

describe('PodcastFilter', () => {
    it('should display received value prop', () => {
        const { input } = setup();
        expect(input.value).toBe('Norah Jones Is Playing Along');
    });
});
