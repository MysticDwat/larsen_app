//imports
import { StyleSheet, View, Pressable, Text } from 'react-native';

import Button from './Button';

export default function Options({set_current_view, set_use_outlines, use_outlines, style, styles}) {
    return (
        <View style={[styles.container, styles.button_container, style]}>
            {/*Outline Option*/}
            <Button 
                styles={styles}
                func={() => set_use_outlines(current => !current)}
                button_text={'Outlines: ' + (use_outlines ? 'On' : 'Off')}
            />

            {/*Back to Menu*/}
            <Button 
                styles={styles}
                func={() => set_current_view('')}
                button_text={'Back'}
            />
        </View>
    );
}