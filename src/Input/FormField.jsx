import React from 'react';
import PropTypes from 'prop-types';
import styled from '../styled';

import Label from './Label';

const FormFieldStyled = styled.div`
    margin-bottom: 1.3rem;
    &:last-child {
        margin-bottom: 2.6rem;
    }
`;

const FormField = ({ label, htmlFor, children }) => (
  <FormFieldStyled>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </FormFieldStyled>
);

FormField.displayName = 'FormField';

FormField.defaultProps = {
  label: null,
  htmlFor: null,
  children: null
};

FormField.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node
};

export default FormField;
