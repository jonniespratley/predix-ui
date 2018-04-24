import React from 'react';
import classnames from 'classnames';

import styled, { css, keyframes } from 'styled-components';

const Tile = styled.div`
  max-width: var(--px-tile-width, 20rem);
  max-height: var(--px-tile-height, 20rem);
`;

const TileContainer = styled.div`
  position: relative;
  width: var(--px-tile-width, 20rem);
  max-width: var(--px-tile-width, 20rem);
  max-height: var(--px-tile-height, 20rem);
  overflow: hidden;
`;

const TileOverlay = styled.div`
  max-width: var(--px-tile-width, 20rem);
  max-height: var(--px-tile-height, 20rem);
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
const TileTitle = styled.div``;
const TileSubTitle = styled.div``;
const TileThumbnail = styled.div`
  width: var(--px-tile-thumbnail-width, 100%);
  height: var(--px-tile-thumbnail-height, 11.66667rem);
  background-color: var(--px-tile-thumbnail-background-color, white);
`;

/**
 * Tile component
 */
export default ({
  title,
  subtitle,
  description,
  overlayDescription,
  image,
  className,
  actionButtons,
  children,
  imgStyle = {}
}) => (
  <Tile>
    <TileContainer className="tile__container">
      {image &&
        <TileThumbnail>
          <img src={image} alt={title} style={imgStyle} />
        </TileThumbnail>
        }

      {title && <TileTitle>{title}</TileTitle>}
      {subtitle && <TileSubTitle>{subtitle}</TileSubTitle>}


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
