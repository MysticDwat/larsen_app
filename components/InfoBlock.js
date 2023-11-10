//imports
import { View, Text } from "react-native";

//displays block of info text
export default function InfoBlock ({
    displayed_id,
    id,
    info_text='', 
    info_styles=[],
    text_styles=[],
    styles,
}) {
    return (
        <View style={displayed_id !== id ? [styles.hide] : [styles.ui_element, styles.absolute, styles.container, info_styles]}>
            <Text style={[styles.font_16, styles.font_justify, text_styles]}>{info_text}</Text>
        </View>
    );
}