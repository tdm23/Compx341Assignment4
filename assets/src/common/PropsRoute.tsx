// Name: Thevinu Mathusinghe  ID: 1365619

import React from "react";
import { Route } from "react-router";

//@ts-ignore
export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;