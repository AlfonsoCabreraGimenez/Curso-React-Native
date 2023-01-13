import React from 'react';
// import {HolaMundoScreen} from '../02-MiPrimeraApp/src/screens/HolaMundoScreens'
// import {ContadorScreen} from "./src/screens/ContadorScreen";
import {BoxModelObjectScreen} from './src/screens/BoxModelObjectScreen';
import {SafeAreaView} from 'react-native';
import {DimesionScreen} from "./src/screens/DimesionScreen";
import {PositionScreen} from "./src/screens/PositionScreen";
import {FlexScreen} from "./src/screens/FlexScreen";
import {TareaScreen} from "./src/screens/TareaScreen";

export const App = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
        <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
