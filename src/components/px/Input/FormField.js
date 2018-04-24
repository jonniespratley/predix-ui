import React from 'react';
import styled, { css } from 'styled-components';

import Label from './Label';

const FormFieldStyled = styled.div`
    margin-bottom: 1.3rem;
    &:last-child {
        margin-bottom: 2.6rem;
    }
`;
// FormField.displayName = 'FormField';

const FormField = ({ label, htmlFor, children }) => (
  <FormFieldStyled>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </FormFieldStyled>
);
FormField.displayName = 'FormField';
export default FormField;
