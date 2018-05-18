import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VHeader = styled.div`
  height          : 4rem;
  background-color: var(--px-view-header-background-color, whitesmoke);
  padding-left    : 1rem;
  padding-right   : 1rem;
  display         : flex;
  align-items     : center;
  flex-direction  : row;
  position: relative;
  user-select:none;
`;
VHeader.displayName = 'ViewHeader';

const VHeaderText = styled.div`
  padding-left : 1rem;
  padding-right: 1rem;
  flex         : initial;
  min-width    : 0;
  margin-left  : auto;
  margin-right : auto;
  min-width: 1px;
`;
VHeaderText.displayName = 'ViewHeaderText';

const VHeaderTitle = styled.div`
  text-align: center;
  color     : var(--px-view-header-title-color, black);
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
`;
VHeaderTitle.displayName = 'ViewHeaderTitle';

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
VHeaderSubTitle.displayName = 'ViewHeaderSubTitle';

const VHeaderLeft = styled.div`
  position: absolute;
  left: 1rem;
`;
VHeaderLeft.displayName = 'ViewHeaderLeft';

const VHeaderRight = styled.div`
  position: absolute;
  right: 1rem;
`;
VHeaderRight.displayName = 'ViewHeaderRight';

const ViewHeader = ({
  title,
  subtitle,
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

ViewHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rightContent: PropTypes.node,
  leftContent: PropTypes.node,
  children: PropTypes.node
};

ViewHeader.defaultProps = {
  title: null,
  subtitle: null,
  rightContent: null,
  leftContent: null,
  children: null
};

export default ViewHeader;
