//imports
import { View, Text } from 'react-native';

import Button from './Button';

export default function Menu ({set_current_view, style, styles}) {
    return(
        <View style={[styles.container, styles.button_container, style]}>
            {/*Menu Title*/}
            <View style={[styles.ui_element, styles.title,]}>
                <Text style={[styles.font_center, styles.font_40,]}>LMS Dragster</Text>
            </View>

            {/*Menu Buttons*/}
            <Button 
                styles={styles}
                func={() => set_current_view('car')}
                button_text={'Play'}
            />

            <Button 
                styles={styles}
                func={() => set_current_view('help')}
                button_text={'Help'}
            />

            <Button 
                styles={styles}
                func={() => set_current_view('options')}
                button_text={'Options'}
            />
        </View>
    );
}