import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
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
      <SafeAreaView style={{marginTop: 50}}>
        <View styles={styles.container}>
          <FlatList
            data={this.props.employees}
            keyExtractor={(item) => item.key}
            renderItem={this.renderItem.bind(this)}
          />

          <Text style={styles.errorTextStyle}>
            {this.props.error && this.props.error}
          </Text>

          {this.props.loading && <Spinner />}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
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
