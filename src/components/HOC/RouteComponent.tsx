import { IRouteobj } from "../../routeObj";
import { Route } from 'react-router-dom';
import WithSuspense from "./WithSuspense";


  // We get route elements from an object with investments
  const getRouteElement = (routes: IRouteobj[]): JSX.Element[] => routes.map((e, i) =>
    <Route key={e.linkText + i} path={e.path} element={WithSuspense(e.Component)({ ...e.componentProps })}>
      {e.childrRout !== undefined ? getRouteElement(e.childrRout) : null}
    </Route>
  );

  export default getRouteElement;