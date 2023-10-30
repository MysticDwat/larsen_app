//imports
import { useState } from 'react';
import { StyleSheet, View, Pressable, Image, Text } from 'react-native';

//components
import InfoBlock from './InfoBlock';
import InfoPressable from './InfoPressable';
import Pointer from './Pointer';
import Button from './Button';

//car data file
import car_data from '../data/car_data.json';

export default function Car({style,
                             styles, 
                             use_outlines,
                             car_source, 
                             set_current_view,}) {
    //state to track current displayed info
    const [displayed_id, set_displayed_id] = useState(false);

    //splitting the car data into separate parts
    const info_blocks = car_data.map((info_set) => info_set.info);
    const info_pointers = car_data.map((info_set) => info_set.pointer);
    const info_pressables = car_data.map((info_set) => info_set.pressables[0]);

    return(
        <View style={[styles.container, styles.far_back, styles.full_size, style]}>
            {/*Car Image and Pressable*/}
            <Pressable
                onPress={() => {
                    set_displayed_id(-1);
                    console.log('Tapped',-1);
                }}
                style={[styles.full_size, styles.container]}
            >
                <Image 
                    style={[_styles.car]}
                    source={car_source} 
                />
            </Pressable>
            
            {/*Generate Info Blocks*/}
            {info_blocks.map(
                (block, id) => {
                    return (
                        <InfoBlock 
                            styles={styles}
                            displayed_id={displayed_id}
                            id={id}
                            key={`info_block_${id}`}
                            info_text={block.text}
                            info_styles={[block.style]}
                        />
                    );
                }
            )}

            {/*Generate Pressables*/}
            {info_pressables.map(
                (pressable, id) => {
                    return (
                        <InfoPressable
                            styles={styles} 
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

            {/*Generate Pointers*/}
            {info_pointers.map(
                (pointer, id) => {
                    return (
                        <Pointer 
                            styles={styles}
                            style={pointer}
                            displayed_id={displayed_id}
                            id={id}
                            key={`pointer_${id}`}
                        />
                    );
                }
            )}

            {/*Back Button to Main Menu*/}
            <Button 
                styles={styles}
                style={[_styles.button_position, styles.absolute]}
                func={() => set_current_view('')}
                button_text={'Back'}
            />
        </View>
    );
}

/* 
    style sheet
    container to center children
    wrapper to encompass the entire screen
    info to define info blocks
    car to define car image
    car pressable to define car pressable
    button container to position and size back button
    button to define back button
*/
const _styles = StyleSheet.create({
    car: {
      zIndex: -1,
      width: '80%',
      top: 0,
    },
    button_position: {
        top:'81%',
    },
});