import { useState } from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import InfoBlock from './InfoBlock';
import InfoPressable from './InfoPressable';
import Pointer from './Pointer';

import car_data from '../data/car_data.json';

export default function Car({car_source}) {
    const [displayed_id, set_displayed_id] = useState(false);

    return(
        <View style={[styles.container, styles.wrapper]}>
            <Pressable
                onPress={() => {
                    set_displayed_id(-1);
                    console.log('Tapped',-1);
                }}
            >
                <Image 
                    style={[styles.car]}
                    source={car_source} 
                />
            </Pressable>

            {car_data.map(
                (info_set, id) => {
                    let info_block = info_set.info;
                    let info_pressables = info_set.pressables;

                    return(
                        <View key={`view_${id}`} style={{position: 'absolute', width:0, height:0}}>
                            {info_pressables.map(
                                (pressable_style, id_) => {
                                    return (
                                        <InfoPressable 
                                            displayed_id={displayed_id}
                                            set_displayed_id={set_displayed_id}
                                            id={id}
                                            key={`pressable_${id}_${id_}`}
                                            pressable_style={pressable_style}
                                        />
                                    );
                                }
                            )}

                            <Pointer 
                                style={info_set.pointer}
                                displayed_id={displayed_id}
                                id={id}
                            />

                            <InfoBlock 
                                displayed_id={displayed_id}
                                id={id}
                                key={`info_block_${id}`}
                                info_text={info_block.text}
                                info_styles={[styles.info, info_block.style]}
                            />
                        </View>
                    );
                }
            )}
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
        transform: [{rotate:'90deg'}],
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
      height: 182,
      width: 700,
      top: -20,
    },
});