// import _ from 'lodash';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { FlatList, View, Text } from 'react-native';
// import { employeesFetch } from '../actions';

// class EmployeeList extends Component {
//   componentDidMount() {
//     this.props.employeesFetch();
//     this.createDataSource(this.props);
//   }

//   componentWillReceiveProps(nextProps) {
//     // nextProps are the next set of props that this component will be rendered with
//     // this.props is still the old set of props
//     this.createDataSource(nextProps);
//   }

//   createDataSource({ employees }) {
//     // const ds = new ListView.DataSource({
//     const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });

//     this.dataSource = ds.cloneWithRows(this.props.employees);
//   }

//   render() {
//     return (
//       <View>
//         <Text>Employee List</Text>
//         <Text>Employee List</Text>
//         <Text>Employee List</Text>
//         <Text>Employee List</Text>
//         <Text>Employee List</Text>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => {
//   const employees = _.map(state.employees, (val, uid) => {
//     return { ...val, uid };
//   });
//   return { employees };
// };

// export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import {Spinner} from './common';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderItem = ({item}) => <ListItem employee={item} />;

  render() {
    return (
      <View styles={styles.container}>
        <FlatList
          data={this.props.employees}
          keyExtractor={(item) => item.key}
          renderItem={this.renderItem}
        />

        <Text style={styles.errorTextStyle}>
          {this.props.error && this.props.error}
        </Text>

        {this.props.loading && <Spinner />}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = Object.keys(state.employees).map((employeeId) => {
    return Object.assign({}, state.employees[employeeId], {uid: employeeId});
  });

  return {employees};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
