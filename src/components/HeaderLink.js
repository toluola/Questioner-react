/* eslint-disable react/prop-types */
import React from 'react';

export const HeaderLink = props => {
    const { links } = props
    return (
        <a href={links}>login</a>
    );
  };