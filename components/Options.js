import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Options({set_current_view, set_use_outlines, use_outlines}) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => set_use_outlines(current => !current)}
            >
                <Text style={styles.button}>Outlines: {use_outlines ? 'True' : 'False'}</Text>
            </Pressable>

            <Pressable
                onPress={() => set_current_view('')}
            >
                <Text style={styles.button}>Back</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        height: 'auto',
        backgroundColor: '#a82727',
        color: 'black',
        padding: 5,
        borderRadius: 5,
        shadowColor: '#5e1515',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 2,
        minWidth: '15%',
        textAlign: 'center',
        fontSize: 30,
    },
    title: {
        minWidth: "33%",
        fontSize: 40,
        height: 'auto',
        backgroundColor: '#a82727',
        color: 'black',
        padding: 5,
        borderRadius: 5,
        shadowColor: '#5e1515',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 2,
        textAlign: 'center',
    }
});