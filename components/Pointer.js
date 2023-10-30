//imports
import { StyleSheet, View } from "react-native";

//pointer triangle
export default function Pointer ({style,id,displayed_id, styles}) {
    return (
        <View style={displayed_id !== id ? [styles.hide] : [_styles.pointer, style]} />
    );
}

/*
    style sheet
    pointer to make a triangle
    none to hide
*/
const _styles = StyleSheet.create({
    pointer: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderBottomWidth: 20,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomColor: '#ff0000',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
});