import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import Welcome from "./pages/Welcome";
import Repositories from "./pages/Repositories";
import Organizations from "./pages/Organizations";

import GitIssues from "./pages/GitIssues";
import Issues from "./pages/Issues";

import { colors } from "./styles";

const Routes = (userLogged = false) =>
  createAppContainer(
    //  PRIMEIRA APICAÇÃO
    // createSwitchNavigator(
    //   {
    //     Welcome,
    //     User: createBottomTabNavigator(
    //       {
    //         Repositories,
    //         Organizations
    //       },
    //       {
    //         tabBarOptions: {
    //           showIcon: true,
    //           showLabel: false,
    //           activeTintColor: colors.white, // cor de item ativo
    //           inactiveTintColor: colors.whiteTransparent,
    //           //style da aba
    //           style: {
    //             backgroundColor: colors.secundary
    //           }
    //         }
    //       }
    //     )
    //   },
    //   {
    //     initialRouteName: userLogged ? "User" : "Welcome"
    //   }
    // )
    //  SEGUNDA APLICAÇÃO - DEF02

    // createStackNavigator({
    //   GitIssues,
    //   Issues
    // })
    createDrawerNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organizations
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white, // cor de item ativo
              inactiveTintColor: colors.whiteTransparent,
              //style da aba
              style: {
                backgroundColor: colors.secundary
              }
            }
          }
        ),
        GitIssues,
        Issues
      },
      {
        initialRouteName: userLogged ? "User" : "Welcome"
      }
    )
  );

export default Routes;
