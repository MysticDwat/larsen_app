import { StyleSheet, View, Pressable, Image, Text } from 'react-native';

export default function Button({styles, style, func, button_text}) {
    return (
        <Pressable
            onPress={func}
            style={[styles.ui_element, styles.button, style]}
        >
            <Text style={[styles.font_30, styles.font_center]}>{button_text}</Text>
        </Pressable>
    );
}