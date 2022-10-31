import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import PageHome from "../pages/home";
import PageRegister from "../pages/register";
import PagePatients from '../pages/patients';

export interface IPageProps {
  navigation : any
}

const Navigator: React.FC = () => {
    const Stack = createStackNavigator() 
    return (
        <NavigationContainer >
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen options={{
              title: '',
              headerTransparent: true,
              headerShown:false
          }} 
          name="home" 
          component={PageHome} />
          <Stack.Screen options={{
              title: '',
              headerTransparent: true,
              headerShown:false
          }} 
          name="register"
          component={PageRegister}/>
          <Stack.Screen options={{
              title: '',
              headerTransparent: true,
              headerShown:false
          }} 
          name="patients" 
          component={PagePatients} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}


export default Navigator