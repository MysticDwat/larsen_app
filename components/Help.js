//imports
import { StyleSheet, View, Pressable, Text } from 'react-native';

import Button from './Button';

export default function Help({set_current_view, 
                              style, 
                              styles}) {
    return (
        <View style={[styles.container, styles.button_container, style]}>
            {/*Help Text*/}
            <View style={[_styles.help_container, styles.ui_element]}>
                <Text style={[styles.font_20, styles.font_center]}>
                    Welcome to LMS Dragster! This companion educational app will help you learn more about our dragsters. 
                    Simply tap on a part to learn more about that part. Every part of the dragster can be tapped and if you 
                    are having trouble finding the parts, feel free to turn on outlines in the options menu.
                </Text>
            </View>

            {/*Back to Menu*/}
            <Button 
                styles={styles}
                func={() => set_current_view('')}
                button_text={'Back'}
            />
        </View>
    );
}

/*
    style sheet
    container to center children
    button to define button
    help container to define help text width and position
    help to define help text
*/

const _styles = StyleSheet.create({
    help_container: {
        width: '33%',
    },
});