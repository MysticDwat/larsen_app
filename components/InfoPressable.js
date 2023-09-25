import { View, Pressable, StyleSheet } from "react-native";

export default function InfoPressable ({
    displayed_id,
    set_displayed_id,
    id,
    pressable_style=[],
}) {
    return (
        <Pressable
            style={[styles.pressable, pressable_style,]} 
            onPress={() => {
                set_displayed_id(id);
                console.log('Tapped',id);
            }}
        />
    );
}

const styles = StyleSheet.create({
    pressable: {
        position: 'absolute',
    },
    outline: {
        borderWidth: 1,
        borderColor: 'red',
    }
});