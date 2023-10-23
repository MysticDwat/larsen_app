import { useState } from 'react';
import { StyleSheet, View, Pressable, Image, Text } from 'react-native';
import InfoBlock from './InfoBlock';
import InfoPressable from './InfoPressable';
import Pointer from './Pointer';

import car_data from '../data/car_data.json';

export default function Car({car_source, set_current_view, use_outlines}) {
    const [displayed_id, set_displayed_id] = useState(false);

    const info_blocks = car_data.map((info_set) => info_set.info);
    const info_pointers = car_data.map((info_set) => info_set.pointer);
    const info_pressables = car_data.map((info_set) => info_set.pressables[0]);

    return(
        <View style={[styles.container, styles.wrapper]}>
            <Pressable
                onPress={() => {
                    set_displayed_id(-1);
                    console.log('Tapped',-1);
                }}
                style={[styles.car_pressable, styles.container]}
            >
                <Image 
                    style={[styles.car]}
                    source={car_source} 
                />
            </Pressable>

            {info_blocks.map(
                (block, id) => {
                    return (
                        <InfoBlock 
                            displayed_id={displayed_id}
                            id={id}
                            key={`info_block_${id}`}
                            info_text={block.text}
                            info_styles={[styles.info, block.style]}
                        />
                    );
                }
            )}

            {info_pressables.map(
                (pressable, id) => {
                    return (
                        <InfoPressable 
                            displayed_id={displayed_id}
                            set_displayed_id={set_displayed_id}
                            id={id}
                            key={`pressable_${id}`}
                            pressable_style={[pressable]}
                            use_outlines={use_outlines}
                        />
                    );
                }
            )}

            {info_pointers.map(
                (pointer, id) => {
                    return (
                        <Pointer 
                            style={pointer}
                            displayed_id={displayed_id}
                            id={id}
                            key={`pointer_${id}`}
                        />
                    );
                }
            )}

            <Pressable
                onPress={() => set_current_view('')}
                style={styles.button_container}
            >
                <Text style={styles.button}>Back</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        position: 'relative',
        zIndex: -2,
        width: '100%',
        height: '100%',
    },
    info: {
      position: 'absolute',
      height: 'auto',
      backgroundColor: '#a82727',
      color: 'black',
      padding: 5,
      borderRadius: 5,
      shadowColor: '#5e1515',
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 1,
      shadowRadius: 2,
    },
    car: {
      zIndex: -1,
      width: '80%',
      top: 0,
    },
    car_pressable: {
        width: '100%',
        height: '100%',
    },
    button_container: {
        position: 'absolute',
        top:'81%',
    },
    button:{
        height: 'auto',
        backgroundColor: '#a82727',
        color: 'black',
        padding: 5,
        borderRadius: 5,
        shadowColor: '#5e1515',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 2,
        minWidth: '10%',
        textAlign: 'center',
        fontSize: 24,
    }
});