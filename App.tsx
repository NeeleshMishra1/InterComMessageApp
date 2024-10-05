
import React from 'react';
import Rootnavigation from './src/navigation/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Rootnavigation />
    </SafeAreaProvider>
  )
    ;
};

export default App;

