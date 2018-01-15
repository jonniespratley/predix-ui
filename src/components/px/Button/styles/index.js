import styled, {css} from 'styled-components';


const Button = styled.button`
outline: none;
user-select: none;
  display: inline-block;
  overflow: visible;
  height: var(--px-btn-height, 2em);
  min-width: var(--px-btn-min-width, 4.66667em);
  margin: 0;
  border: 1px solid var(--px-btn-border-color, transparent);
  border-radius: 0 !important;
  padding: 0 calc(var(--px-btn-height, 2em) / 2);
  box-shadow: var(--px-btn-shadow--light, none);
  font: inherit;
  line-height: calc(var(--px-btn-height, 2em) - 2px);
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  white-space: nowrap;
  background-color: var(--px-btn-background, #d8e0e5);
  transition: background .4s, border-color .4s, color .4s;


  /* Sizes */
  ${props => props.icon && css`
    height: var(--px-btn-height, 2em);
    width: var(--px-btn-height, 2em);
    min-width: var(--px-btn-height, 2em);
    padding-right: 0;
    padding-left: 0;
    border: var(--px-btn-icon-border, 0px solid) !important;
    background-color: var(--px-btn-icon-background, transparent) !important;
  `}
  ${props => props.small && css`
    height: 1.66667em;
    font-size: 0.8rem;
    line-height: calc(1.66667em - 2px);
  `}
  ${props => props.large && css`
    font-size: 1.33333rem;
  `}
  ${props => props.huge && css`
    font-size: 2rem;
  `}
  ${props => props.full && css`
    width: 100%;

    padding-right: 0;
    padding-left: 0;
  `}


  /* Colors - primary, tertiary bare */
  ${props => props.primary && css`
    color: var(--px-btn-primary-color, white);
    border-color: var(--px-btn-primary-border-color, transparent);
    box-shadow: var(--px-btn-shadow, none);
    background-color: var(--px-btn-primary-background, #364c59);

    &:hover,
    &:focus {
      border-color: transparent;
      background-color: var(--px-btn-primary-background--hover, #23343f);
    }
  `}
  ${props => props.tertiary && css`

  `}
  ${props => props.bare && css`
    color: var(--px-btn-bare-color, #2c404c);
    /*&:hover
      color: var(--px-btn-bare-color--hover, #007acc);
     * */
  `}







`;

export default Button;
