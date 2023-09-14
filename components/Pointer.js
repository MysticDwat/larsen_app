import { StyleSheet, View } from "react-native";

export default function Pointer ({style,id,displayed_id}) {
    return (
        <View style={displayed_id !== id ? [styles.none] : [styles.pointer, style]} />
    );
}

const styles = StyleSheet.create({
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
    none: {
        display: 'none',
    },
});