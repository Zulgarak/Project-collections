import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from "./pages/AuthPage";
import {NotFoundPage} from "./pages/NotFoundPage";
// import {UsersPage} from "./pages/UsersPage";
import {UsersList} from "./components/UsersList";
import {LoginPage} from "./pages/Login";
import {CollectionsPage} from "./pages/CollectionsPage";

export const useRoutes = () => {
  // if (isAuthenticated) {
  //   return (
  //     <Switch>
  //       <Route path="/users" exact>
  //         <UsersPage />
  //       </Route>
  //       <Redirect to="/users" />
  //     </Switch>
  //   )
  // }

  return (
    <Switch>
      {/*<Route path="/" exact>*/}
      {/*<AuthPage />*/}
      {/*</Route>*/}
      <Route path="/" exact component={CollectionsPage} />
      <Route path="/register" exact component={AuthPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/users" exact component={UsersList} />
      <Route path="/users/:id" exact component={CollectionsPage} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  )
}