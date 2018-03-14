import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../IconSet/Icon';

const NotificationIcon = styled.div`
	color: white;
  width: 1.06667rem;
  height: 1.06667rem;
	--iron-icon-width: 100%;
  --iron-icon-height: 100%;
`;
const NotificationLeft = styled.div`
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	margin-right: .33333rem;
`;
const NotificationRight = NotificationLeft.extend`
	margin-right: 0;
	margin-left: 1rem;
	cursor: pointer;
`;
const NotificationContent = styled.div`
	flex: 1 1 auto;
  display: flex;
  align-items: center;
  min-width: 0;
  margin-top: 0.66667rem;
  margin-bottom: 0.66667rem;
`;
const Notification = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  width: inherit;
  opacity: 0;
  height: 0;
  transition: height .5s ease-in-out, opacity .5s ease-in-out;
	box-sizing: border-box;
	
	${props => props.type === 'error' && css`
		background-color: var(--px-alert-label-background-color--error, yellow);
		color: var(--px-alert-label-text-color--error, black);
  `}
	${props => props.type === 'important' && css`
		background-color: var(--px-alert-label-background-color--important, red);
  	color: var(--px-alert-label-text-color--important, white);
  `}
	${props => props.type === 'warning' && css`
		background-color: var(--px-alert-label-background-color--warning, orange);
  	color: var(--px-alert-label-text-color--warning, white);
  `}
	${props => props.type === 'info' && css`
		background-color: var(--px-alert-label-background-color--information, blue);
		color: var(--px-alert-label-text-color--information, white);
  `}
	${props => props.type === 'healthy' && css`
		background-color: var(--px-alert-label-background-color--healthy, green);
		color: var(--px-alert-label-text-color--healthy, white);
  `}
	${props => props.type === 'unknown' && css`
		background-color: var(--px-alert-label-background-color--unknown, gray);
		color: var(--px-alert-label-text-color--unknown, white);
  `}

	${props => props.opened && css`
		opacity: 1;
		font-size: 1rem;
  	height: var(--px-notification-height, 5.33333rem);
		@media screen and (min-width: 45em) {
  		height: var(--px-notification-height, 2.66667rem);
		}
  `}

	${props => props.small && css`
		font-size: 0.8rem;
		height: var(--px-notification-height, 2.66667rem);
		@media screen and (min-width: 45em) {  
	 		height: var(--px-notification-height, 1.33333rem);
		}
	`}
`;
export default ({ opened, type, actionIcon, statusIcon, slotRight, onClick, children}) => (
	<Notification opened={opened} type={type}>
		<NotificationLeft>
			<Icon size={16} icon={statusIcon}/>
		</NotificationLeft>
		<NotificationContent>
			{children}
		</NotificationContent>
		<NotificationRight>
		{slotRight && slotRight}
		{actionIcon && 
			<NotificationIcon onClick={onClick}>
				<Icon size={16} viewBox={`0 0 22 22`} icon={actionIcon}/>
			</NotificationIcon>
		}
			
		</NotificationRight>
	</Notification>
);