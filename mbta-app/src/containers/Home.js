import { connect } from "react-redux";

import Home from "../components/Home";
import { setRoutes, setCurrentRoute } from "../redux/actions";

const mapStateToProps = state => {
  return {
    routes: state.routes.allRoutes,
    currentId: state.routes.currentRoute
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRoutes: routes => {
      dispatch(setRoutes(routes));
    },
    saveCurrentRoute: route => {
      dispatch(setCurrentRoute(route));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
