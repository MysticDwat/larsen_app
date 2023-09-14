import { StyleSheet, View, Text } from "react-native";

export default function InfoBlock ({
    displayed_id,
    id,
    info_text='', 
    info_styles=[],
}) {
    return (
        <View style={displayed_id !== id ? [styles.none] : info_styles}>
            <Text>{info_text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    none: {
        display: 'none',
    },
});