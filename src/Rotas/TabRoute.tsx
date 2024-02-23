import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import TelaHome from "../screens/TelaHome";
import TelaMensagens from "../screens/TelaSettings";


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
        name="MENSAGENS"
        component={TelaMensagens}   options={{
          tabBarIcon: () => (
            <MaterialIcons name="message" size={20} color="black" />
          ),tabBarActiveBackgroundColor:'#6c788e',tabBarActiveTintColor:'black',
          
        }} />

 
    </Tab.Navigator>
    
  );
};

export default TabRoutes