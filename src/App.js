import React, { Component } from "react";
import { connect } from 'react-redux';
import { setTea } from './actions/teas';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import Menu from './components/Menu';
import TeaCard from './components/TeaCard';
import { Card } from 'semantic-ui-react';


class App extends Component {

  componentWillMount() {

    const { setTea } = this.props;
    axios.get('/list.json').then(({ data }) => {
      setTea(data);
    });
  }

  render() {
    const { teas, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Загрузка...' : teas.map((tea, i) => <TeaCard key={i} {...tea} />)}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ teas }) => ({
  teas: teas.items,
  isReady: teas.isReady
});

const mapDispatchToProps = dispatch => ({
  setTea: teas => dispatch(setTea(teas))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
