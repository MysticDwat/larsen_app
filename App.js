//imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

//components
import Car from './components/Car';
import Menu from './components/Menu';
import Help from './components/Help';
import Options from './components/Options';

export default function App() {
  //state to control current view
  const [current_view, set_current_view] = useState('');
  //state to track outline option
  const [use_outlines, set_use_outlines] = useState(false);

  return (
    <View style={[styles.container, styles.app_background, styles.far_back]}>
      {/*Main Menu*/}
      <Menu 
        styles={styles}
        style={current_view == '' ? [] : styles.hide}
        set_current_view={set_current_view}
      />

      {/*Options Menu*/}
      <Options
        styles={styles}
        style={current_view == 'options' ? [] : styles.hide}
        set_current_view={set_current_view}
        set_use_outlines={set_use_outlines}
        use_outlines={use_outlines}
      />

      {/*Help View*/}
      <Help
        styles={styles}
        style={current_view == 'help' ? [] : styles.hide}
        set_current_view={set_current_view}
      />

      {/*Car View*/}
      <Car 
        styles={styles}
        style={current_view == 'car' ? [] : styles.hide}
        car_source={require('./assets/larsen_car.png')}
        set_current_view={set_current_view}
        use_outlines={use_outlines}
      />

      <StatusBar style="auto" />
    </View>
  );
}

/*
  style sheet
  container to center app view
  hide to hide components when not viewed.
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  app_background: {
    backgroundColor: '#383333',
  },
  button_container: {
    rowGap: 10,
  },
  ui_element: {
    height: 'auto',
    padding: 5,
    borderRadius: 5,
    color: 'black',
    backgroundColor: '#a82727',
    borderColor: '#5e1515',
    borderWidth: 3,
  },
  button: {
    minWidth: '15%',
  },
  title: {
    minWidth: '33%',
  },
  font_16: {
    fontSize: 16,
  },
  font_20: {
    fontSize: 20,
  },
  font_30: {
    fontSize: 30,
  },
  font_40: {
    fontSize: 40,
  },
  font_bold: {
    fontWeight: 'bold',
  },
  font_justify: {
    textAlign: 'justify',
  },
  font_center: {
    textAlign: 'center',
  },
  full_size: {
    width: '100%',
    height: '100%',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  far_back: {
    zIndex: -2,
  },
  hide: {
    display: "none"
  },
  outline: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
