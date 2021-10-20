import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';

interface ButtonComponentProps {
    name: string,
    handle: any,
}

const ButtonComponent = (props: ButtonComponentProps) => {
    console.log()
    // props.handle("play")
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.handle(props.name)}>
                <Text style={styles.text}>{props.name}</Text>
            </TouchableOpacity>
        </View>

    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 100,
        backgroundColor: "blue",
        // width: 20,
        borderColor: "white",
    },
    text: {
        color: "#fff",
        fontWeight: "bold"
    }
});
