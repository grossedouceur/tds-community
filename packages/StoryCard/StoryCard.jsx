import React from 'react'
import PropTypes from 'prop-types'
import { safeRest } from '@tds/util-helpers'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'

const StoryCard = ({
  storyType,
  date,
  title,
  description,
  categoryName,
  imgUrl,
  slug,
  ...rest
}) => {
  const media = {
    type: 'image',
    content: <img src={imgUrl} alt={description} width="100%" />,
  }
  const isImage = media && media.type === 'image'
  const renderImage = img => {
    const imageContainer = <div>{img}</div>
    return imageContainer
  }
  return (
    <FlexGrid.Col xs={12} md={6} {...safeRest(rest)}>
      <div key={title}>
        <Paragraph>{storyType}</Paragraph>
        <Paragraph>{date}</Paragraph>
        <Heading level="h3">{title}</Heading>
        <Paragraph>{description}</Paragraph>
        <Paragraph>{categoryName}</Paragraph>
        <a href={slug}>{isImage && renderImage(media.content)}</a>
      </div>
    </FlexGrid.Col>
  )
}

StoryCard.propTypes = {
  /**
   * The title of each story
   */
  title: PropTypes.string,
  /**
   * The description of each story
   */
  description: PropTypes.string,
  /**
   * The URL for the image to be displayed
   */
  imgUrl: PropTypes.string,
  /**
   * The slug for the story
   */
  slug: PropTypes.string,
  /**
   * The type of story
   */
  storyType: PropTypes.string,
  /**
   * The publishing date
   */
  date: PropTypes.string,
  /**
   * The category
   */
  categoryName: PropTypes.string,
}

StoryCard.defaultProps = {
  title: undefined,
  description: undefined,
  imgUrl: undefined,
  slug: undefined,
  storyType: undefined,
  date: undefined,
  categoryName: undefined,
}

export default StoryCard
