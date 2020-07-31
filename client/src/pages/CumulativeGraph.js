import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import ActiveGraph from "../components/cumulative/ActiveGraph";

class CumulativeGraph extends Component {
  state = {
    dateReported: [],
    active: [],
    confirmed: [],
    recovered: [],
    deceased: [],
    tested: [],
  };

  loadDailyData = () => {
    API.getCumulativeCount().then((res) => {
      let dateReported = [];
      let active = [];
      let confirmed = [];
      let recovered = [];
      let deceased = [];
      let tested = [];

      res.data.data.forEach((data) => {
        dateReported.push(data.dateReported);
        confirmed.push(data.confirmed);
        active.push(data.active);
        recovered.push(data.recovered);
        deceased.push(data.deceased);
        tested.push(data.tested);
      });

      this.setState({
        dateReported,
        active,
        confirmed,
        recovered,
        deceased,
        tested,
      });
    });
  };

  componentDidMount() {
    this.loadDailyData();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="6">
            {this.state.dateReported.length > 0 ? (
              <ActiveGraph
                graphlabels={this.state.dateReported}
                graphdata={this.state.active}
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CumulativeGraph;
