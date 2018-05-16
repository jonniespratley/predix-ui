import styled, { css } from 'styled-components';

// app-nav-item__icon
const AppNavItemIcon = styled.div`
  max-width: 32px;

  ${props => props.empty && css`
    display: block;
    width: var(--px-app-nav-item-icon-size, 2rem);
    height: var(--px-app-nav-item-icon-size, 2rem);
    background-color: var(--px-app-nav-item-background-color--empty, lightgray);
    flex: none;
  `}

  ${props => props.withLabel && css`
    margin-right: 0.33333rem;
  `}

  ${props => props.dropdownIcon && css`
    margin-left: 0.3rem;
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
  `}
`;
AppNavItemIcon.defaultProps = { className: 'app-nav-item__icon' };
AppNavItemIcon.displayName = 'AppNavItemIcon';

export default AppNavItemIcon;

