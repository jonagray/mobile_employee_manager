import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {SafeAreaView} from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 30}}>
      <Scene key="root">
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            navigationBarStyle={{height: 80, paddingTop: 15}}
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            navigationBarStyle={{height: 80, paddingTop: 15}}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            navigationBarStyle={{height: 80, paddingTop: 15}}
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
            navigationBarStyle={{height: 80, paddingTop: 15}}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
