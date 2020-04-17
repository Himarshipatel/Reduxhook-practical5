import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "./action";
import { Bar } from "react-chartjs-2";
import { Row, Container } from "reactstrap";
import { Images } from "../../components";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.loading,
    stats: state.HomeReducers.stats,
  }));

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);
  console.log(stats);

  return (
    <>
      <Images />

      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          {stats !== null && (
            <Row className="graph">
              <Bar
                data={{
                  labels: [
                    "Active",
                    "Cases",
                    "TodayCases",
                    "Recovered",
                    "Deaths",
                  ],
                  datasets: [
                    {
                      label: "Covid-19",
                      backgroundColor: "rgba(75,192,192,1)",
                      borderColor: "rgba(0,0,0,1)",
                      borderWidth: 2,
                      data: [
                        stats.active,
                        stats.cases,
                        stats.todayCases,
                        stats.recovered,
                        stats.deaths,
                      ],
                    },
                  ],
                }}
                options={{
                  title: {
                    display: true,
                    text: "Covid-19 Graph",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default Home;
