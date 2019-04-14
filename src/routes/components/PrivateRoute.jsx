import React, { useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveToken } from 'src/store/User/actions';
import { Route } from 'react-router-dom';

export const parseHashParams = hash => {
  const hashString = hash[0] === '#' ? hash.substring(1) : hash;
  const pieces = hashString.split('&');
  const data = {};

  pieces.map(piece => {
    const parts = piece.split('=');
    if (parts.length < 2) {
      parts.push('');
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    return piece;
  });

  return data;
};

const useToken = (access_token, saveToken) => {
  useMemo(() => {
    if (access_token) {
      saveToken(access_token);
    } else {
      window.location.href = process.env.REACT_APP_AUTH_URL;
    }
  }, [access_token]);
};

const PrivateRouteComponent = props => {
  if (!props.token) {
    const { access_token } = parseHashParams(props.location.hash);
    useToken(access_token, props.saveToken);
    return null;
  } else {
    return <Route {...props} />;
  }
};

const mapStateToProps = state => ({ token: state.user.token });

const mapDispatchToProps = {
  saveToken
};

const PrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PrivateRouteComponent));

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
