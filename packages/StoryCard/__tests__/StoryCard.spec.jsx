import React from 'react'
import { shallow } from 'enzyme'

import StoryCard from '../StoryCard'

describe('StoryCard', () => {
  const doShallow = (props = {}) => shallow(<StoryCard {...props} />)

  it('renders', () => {
    const storyCard = doShallow()

    expect(storyCard).toMatchSnapshot()
  })

  it('passes additional attributes to the element', () => {
    const storyCard = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(storyCard).toHaveProp('id', 'the-id')
    expect(storyCard).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const storyCard = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(storyCard).not.toHaveProp('className', 'my-custom-class')
    expect(storyCard).not.toHaveProp('style')
  })
})
