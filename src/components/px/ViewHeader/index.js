import React from 'react';
import styled, {css} from 'styled-components';

const VHeader = styled.div`
  height          : 4rem;
  background-color: var(--px-view-header-background-color, whitesmoke);
  padding-left    : 1rem;
  padding-right   : 1rem;
  display         : flex;
  align-items     : center;
  flex-direction  : row;
  position: relative;
`;
const VHeaderText = styled.div`
  padding-left : 1rem;
  padding-right: 1rem;
  flex         : initial;
  min-width    : 0;
  margin-left  : auto;
  margin-right : auto;
  min-width: 1px; 
`;
const VHeaderTitle = styled.div`
  text-align: center;
  color     : var(--px-view-header-title-color, black);
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
`;
const VHeaderSubTitle = styled.div`
  text-align: center;
  color     : var(--px-view-header-subtitle-color, gray);
  font-size  : 0.8rem;
  line-height: 1.66667;
  font-weight: 400;
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
`;
const VHeaderLeft = styled.div`
  position: absolute;
  left: 1rem;
`;
const VHeaderRight = styled.div`
  position: absolute;
  right: 1rem;
`;

export default ({
  title,
  subtitle,
  onMenuButtonClick,
  onBackButtonClick,
  showMenuButton,
  showBackButton,
  backButtonLabel,
  leftContent, 
  rightContent, 
  children 
}) => (

  <VHeader>
    <VHeaderLeft>
      {leftContent}
      {children && React.Children.map(children[0], child => child)}
    </VHeaderLeft>
    <VHeaderText>
      <VHeaderTitle>{title}</VHeaderTitle>
      {subtitle && <VHeaderSubTitle>{subtitle}</VHeaderSubTitle>}
    </VHeaderText>
    <VHeaderRight>
      {rightContent}
      {children && React.Children.map(children[1], child => child)}
    </VHeaderRight>
  </VHeader>
);
