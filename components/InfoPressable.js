import { View, Pressable, StyleSheet } from "react-native";

export default function InfoPressable ({
    displayed_id,
    set_displayed_id,
    id,
    pressable_style=[],
}) {
    return (
        <View style={styles.pressable}>
            <Pressable
                style={[pressable_style]} 
                onPress={() => {
                    set_displayed_id(id);
                    console.log('Tapped',id);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pressable: {
        position: 'absolute',
    },
});