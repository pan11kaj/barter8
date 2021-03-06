import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Drawer from '../compo/drawer';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {BottomTab} from '../compo/tab';
import Update from '../Screens/setting';
import MyExchenges from '../Screens/Mybarter'
import Notifications from '../Screens/Notification'
export const SideDrawer = createDrawerNavigator({
  Home:{screen:BottomTab},
  Settings:{screen:Update},
  MyBarters:{screen:MyExchenges},
  YourNotification:{screen:Notifications},
}
,
  {
      contentComponent:Drawer
  }
  ,{
      initialRouteName:'Home'
  }
)
export default SideDrawer;