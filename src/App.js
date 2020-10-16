import React, { Component } from "react";
import { connect } from 'react-redux';
import { setTea } from './actions/teas';
import list from './list.json';

class App extends Component {

  /* componentWillMount() {

    const { teas } = this.props;
    axios.get('/list.json').then(({ data }) => {
      teas(data);
    });
  } */

  render() {
    //const { teas } = this.props
    return (
      <ul>
        {list.map(tea => (
          <li>
            <b>{tea.title}</b> - {tea.brand}
          </li>
        ))
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ teas }) => ({
  teas: teas.items
});

const mapDispatchToProps = dispatch => ({
  setTea: teas => dispatch(setTea(teas))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
