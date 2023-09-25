import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Car from './components/Car';

export default function App() {
  return (
    <View style={styles.container}>
      <Car 
        car_source={require('./assets/larsen_car.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383333',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -2,
  },
});
