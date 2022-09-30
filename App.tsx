import Navigator from './src/navigators/Navigator';
import { Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/roboto';
import { fontsToImport } from './src/styles/fonts';



export default function App() {
  let [fontsLoaded] = useFonts(fontsToImport);
  
  if (!fontsLoaded) return <View><Text>App is loading...</Text></View>
  return (

    <Navigator />
    

  );
}


