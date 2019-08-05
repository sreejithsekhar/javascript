import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import getStops from "../services/getStops";
import getAlerts from "../services/getAlerts";

import Stops from "./Stops";
import Alerts from "./Alerts";
import Routes from "./Routes";

import getRoutes from "../services/getRoutes";

const ContainerDiv = styled.div`
  display: flex;
`;

const ContainerSideDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = ({ routes, currentId, loadRoutes, saveCurrentRoute }) => {
  const [alerts, setAlerts] = useState([]);
  const [stops, setStops] = useState([]);

  useEffect(() => {
    getRoutes().then(data => {
      loadRoutes(data);
    });
    if (currentId) {
      getStops(currentId).then(newStops => setStops(newStops));
      getAlerts(currentId).then(newAlerts => setAlerts(newAlerts));
    }
  }, [loadRoutes, currentId]);

  const handleRouteChange = id => {
    saveCurrentRoute(id);
    getStops(id).then(newStops => setStops(newStops));
    getAlerts(id).then(newAlerts => setAlerts(newAlerts));
  };

  return (
    <ContainerDiv>
      <Routes
        routes={routes}
        routeClick={handleRouteChange}
        currentId={currentId}
      />
      <Stops stops={stops} routeId={currentId} />
      <ContainerSideDiv>
        <Alerts alerts={alerts} />
      </ContainerSideDiv>
    </ContainerDiv>
  );
};

export default Home;
