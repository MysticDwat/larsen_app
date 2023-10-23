import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Menu ({set_current_view}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>LMS Dragster</Text>

            <Pressable
                onPress={() => set_current_view('car')}
            >
                <Text style={styles.button}>Play</Text>
            </Pressable>

            <Pressable
                onPress={() => set_current_view('help')}
            >
                <Text style={styles.button}>Help</Text>
            </Pressable>

            <Pressable
                onPress={() => set_current_view('options')}
            >
                <Text style={styles.button}>Options</Text>
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