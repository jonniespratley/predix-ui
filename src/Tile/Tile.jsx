import React from 'react';
import PropTypes from 'prop-types';
import styled from '../styled';

const Tile = styled.div`
  width: var(--px-tile-width,20rem);
  max-width: var(--px-tile-width,20rem);
  height: var(--px-tile-height,20rem);
  max-height: var(--px-tile-height,20rem);
  overflow: hidden;
  
`;

const TileContainer = styled.div`
  position: relative;
  width: var(--px-tile-width,20rem);
  max-width: var(--px-tile-width,20rem);
  max-height: var(--px-tile-height,20rem);
  overflow: hidden;
`;
const TileTextContainer = styled.div`
  padding: 1rem;
  
  bottom: 0;
  width: 100%;
  background-color: var(--px-tile-text-background-color,#d3d3d3);
`;

const TileOverlay = styled.div`
  width: var(--px-tile-width,20rem);
  max-width: var(--px-tile-width,20rem);
  height: var(--px-tile-height,20rem);
  max-height: var(--px-tile-height,20rem);
  overflow: hidden;
  position: absolute; 
  top: 0; 
  background-color: var(--px-tile-overlay-background-color, black); 
  color: var(--px-tile-overlay-text-color, white); 
  opacity: 0; 
  transition: opacity 0.4s cubic-bezier(0.78, 0.13, 0.16, 0.87); 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
`;
const TileTitle = styled.div`
  font-size: 1.33333rem;
  line-height: 1;
  font-weight: 400;
`;
const TileSubTitle = styled.div``;
const TileDescription = styled.div``;
const TileThumbnail = styled.div`
  width: var(--px-tile-thumbnail-width, 100%);
  height: var(--px-tile-thumbnail-height, 11.66667rem);
  background-color: var(--px-tile-thumbnail-background-color, white);
`;

/**
 * Tile component
 */
const Component = ({
  title,
  subtitle,
  description,
  overlayDescription,
  image,
  className,
  actionButtons,
  children
}) => (
  <Tile className={className}>
    <TileContainer className="tile__container">
      {image
        && (
        <TileThumbnail>
          <img src={image} alt={title} />
        </TileThumbnail>
        )
        }
      <TileTextContainer>
        {title && <TileTitle>{title}</TileTitle>}
        {subtitle && <TileSubTitle>{subtitle}</TileSubTitle>}
        {description && <TileDescription>{description}</TileDescription>}
      </TileTextContainer>


      <TileOverlay id="overlay" className="overlay">
        <header className="title epsilon">
          <span className="title-span truncate">{title}</span>
        </header>
        <section className="text">
          {overlayDescription && overlayDescription}
          {children && children}
        </section>
        {actionButtons && <footer className="footer">{actionButtons}</footer>}
      </TileOverlay>
    </TileContainer>
  </Tile>
);

Component.defaultProps = {
  title: null,
  subtitle: null,
  description: null,
  overlayDescription: null,
  image: null,
  className: null,
  actionButtons: null,
  children: null
};
Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  overlayDescription: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
  actionButtons: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

export default Component;
