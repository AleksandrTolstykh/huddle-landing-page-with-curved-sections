import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled from 'styled-components';

export function CustomFaceBookIcon(props) {
  const StyledFaceBookIcon = styled(FacebookIcon)`
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    &:hover {
      color: hsl(224, 93%, 58%);
      cursor: pointer;
    }
  `;

  return (
    <StyledFaceBookIcon />
  );
}

export function CustomTwitterIcon(props) {
  const StyledTwitterIcon = styled(TwitterIcon)`
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    &:hover {
      color: hsl(224, 93%, 58%);
      cursor: pointer;
    }
  `;

  return (
    <StyledTwitterIcon />
  );
}

export function CustomInstagramIcon(props) {
  const StyledInstagramIcon = styled(InstagramIcon)`
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    &:hover {
      color: hsl(224, 93%, 58%);
      cursor: pointer;
    }
  `;

  return (
    <StyledInstagramIcon />
  );
}
