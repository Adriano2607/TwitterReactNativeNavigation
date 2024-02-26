import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import TelaHome from "../screens/TelaHome";
import TelaMensagens from "../screens/TelaMensagens";



const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen
                name="INICIO"
                component={TelaHome} options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="home" size={20} color="white" />
                    ), tabBarActiveBackgroundColor: '#003366',tabBarActiveTintColor:"white",tabBarInactiveTintColor:"black"

                }} />

                <Tab.Screen 
                name="MENSAGENS"
                component={TelaMensagens}
                    options={{
                        tabBarIcon: () => (
                            <MaterialIcons name="message" size={20} color="black" />
                        ), tabBarActiveBackgroundColor: '#003366',tabBarActiveTintColor:"white"

                    }}
                />


        </Tab.Navigator>

    );
};

export default TabRoutes