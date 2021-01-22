import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Strava = () => {
  const [riderData, setRiderData] = useState({});
  var access_token = process.env.REACT_APP_ACCESS_TOKEN;
  var athlete_id = process.env.REACT_APP_ATHLETE_ID;

  console.log(access_token);
  console.log(athlete_id);

  var url =
    "https://www.strava.com/api/v3/athletes/" +
    athlete_id +
    "/stats?access_token=" +
    access_token;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp);
        setRiderData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => console.log("done"));
    // console.log
  }, []);

  return (
    <div>
      <div>Rides</div>
      {/* <div>{riderData.all_ride_totals["count"]}</div> */}
    </div>
  );
};

export default Strava;
