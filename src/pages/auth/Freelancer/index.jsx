import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SignUpStepOne from './SignUpStepOne';
import SignUpStepTwo from './SignUpStepTwo';
import SignUpStepThree from './SignUpStepThree';
import Approach from '../../../components/Approach';

export default function Freelancer() {
  let { path } = useRouteMatch();

  useEffect(() => {
    document.title = 'StrategyConnect | Freelance';
    window.scrollTo(0, 0);
  }, []);
  return (
    <Switch>
      <Route exact path={`${path}`} component={Approach} />
      <Route
        exact
        path={`${path}/sign-up/step-one`}
        component={SignUpStepOne}
      />
      <Route
        exact
        path={`${path}/sign-up/step-two`}
        component={SignUpStepTwo}
      />
      <Route
        exact
        path={`${path}/sign-up/step-three`}
        component={SignUpStepThree}
      />
    </Switch>
  );
}
