import React, { useState } from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaSettings from '../screens/TelaSair';
import TelaFifa from '../screens/TelaFifa';
import TelaHome from '../screens/TelaHome';
import TabRoutes from './TabRoute';
import { Switch } from 'react-native';


const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {


  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HOME"
        component={TabRoutes}
      />

<Drawer.Screen
        name="EA FC 24"
        component={TelaFifa}
      />

      <Drawer.Screen
        name="SAIR"
        component={TelaSettings}
      />
    </Drawer.Navigator>
  );
};
