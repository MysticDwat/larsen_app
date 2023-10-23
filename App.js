import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

import Car from './components/Car';
import Menu from './components/Menu';
import Help from './components/Help';
import Options from './components/Options';

export default function App() {
  const [current_view, set_current_view] = useState('');
  const [use_outlines, set_use_outlines] = useState(false);

  const get_view = () => {
    if(current_view === 'car') {
      return (
        <Car 
          car_source={require('./assets/larsen_car.png')}
          set_current_view={set_current_view}
          use_outlines={use_outlines}
        />
      )
    } else if(current_view === 'help') {
      return (
        <Help
          set_current_view={set_current_view}
        />
      )
    } else if(current_view === 'options') {
      return (
        <Options
          set_current_view={set_current_view}
          set_use_outlines={set_use_outlines}
          use_outlines={use_outlines}
        />
      )
    } else {
      return(
        <Menu 
          set_current_view={set_current_view}
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      {get_view()}
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
