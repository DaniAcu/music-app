import React, { Fragment } from 'react';
import { Container, IconContainer, Title } from './styled';
import { Icon } from 'src/components/Icon';
import { withRouter } from 'react-router-dom';

const LayoutComponent = ({ children, title, image, match, history }) => {
  return (
    <Fragment>
      <Title image={image}>
        {match.path !== '/' && (
          <IconContainer onClick={() => history.goBack()}>
            <Icon type="arrow-back" />
          </IconContainer>
        )}
        {title}
      </Title>
      <Container>{children}</Container>
    </Fragment>
  );
};

export const Layout = withRouter(LayoutComponent);

export default Layout;
