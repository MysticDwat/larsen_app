//imports
import { Pressable, StyleSheet } from "react-native";

export default function InfoPressable ({
    use_outlines,
    set_displayed_id,
    id,
    pressable_style=[],
    styles,
}) {
    return (
        <Pressable
            style={[styles.absolute, pressable_style, (use_outlines ? [styles.outline] : [])]} 
            onPress={() => {
                set_displayed_id(id);
                console.log('Tapped',id);
            }}
        />
    );
}