import React, { useEffect } from 'react';
import { chartOperations, chartSelector } from '../../store/modules/chart';
import { connect } from 'react-redux';
import HomeView from './HomeView';

const Home = ({ fetchChart, item }) => {
  useEffect(() => {
    fetchChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <HomeView item={item} />;
};

function mapStateToProps(state) {
  return {
    item: chartSelector.getChart(state),
    isLoading: state.charts.isLoading,
  };
}

const mapDispatchToProps = {
  fetchChart: chartOperations.fetchChart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
