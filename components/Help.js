import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Help({set_current_view}) {
    return (
        <View style={styles.container}>
            <View style={styles.help_container}>
                <Text style={styles.help}>
                    Welcome to LMS Dragster! This companion educational app will help you learn more about our dragsters. 
                    Simply tap on a part to learn more about that part. Every part of the dragster can be tapped and if you 
                    are having trouble finding the parts, feel free to turn on outlines in the options menu.
                </Text>
            </View>

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
    help_container: {
        width: '33%',
    },
    help: {
        fontSize: 20,
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