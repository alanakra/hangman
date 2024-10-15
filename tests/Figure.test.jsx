import { render } from '@testing-library/react'
import Figure from '../src/components/Figure'
import { describe, it, expect } from 'vitest'


describe('<Figure>', () => {
    it('Should render correctly', () => {
        const {figure} = render(<Figure count={6}></Figure>)
        expect(figure.firstChild).toMatchInlineSnapshot(`
                <div class="hangman hangman hang0 hang1 hang2 hang3 hang4 hang5 ">
            `)
    })
})
