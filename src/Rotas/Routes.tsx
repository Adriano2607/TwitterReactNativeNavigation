import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};