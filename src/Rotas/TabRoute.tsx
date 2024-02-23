import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import TelaHome from "../screens/TelaHome";
import  TelaSettings  from "../screens/TelaSettings";


const Tab = createBottomTabNavigator();

 const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} >
      <Tab.Screen
        name="HOME"
        component={TelaHome}   options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={20} color="black" />
          ),tabBarActiveBackgroundColor:'#6c788e',tabBarActiveTintColor:'black',
          
          
        }} />

  <Tab.Screen
        name="Settings"
        component={TelaSettings}   options={{
          tabBarIcon: () => (
            <MaterialIcons name="settings" size={20} color="black" />
          ),tabBarActiveBackgroundColor:'#6c788e',tabBarActiveTintColor:'black'
        }} />
    </Tab.Navigator>
    
  );
};

export default TabRoutes