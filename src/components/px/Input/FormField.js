import React from 'react';
import styled, { css } from 'styled-components';

import Label from './Label';

const FormField = styled.div`
    margin-bottom: 1.3rem;
    &:last-child {
        margin-bottom: 2.6rem;
    }
`;
export default ({label, children}) => (
    <FormField>
        <Label>{label}</Label>
        {children}
    </FormField>
);