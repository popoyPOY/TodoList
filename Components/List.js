import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Button, Icon, Overlay } from '@rneui/themed';
import { useState } from "react";

export default function List(todo) {

    const [visible, setVisible] = useState(false);

    const [editText, setText] = useState('');

    const toggleOverlay = () => {
        setVisible(!false);
    }


    const editNotes = () => {
        if (editText === '') {
            Alert.alert("empty tasks", "Please replace new tasks")
        }
        else {
            setVisible(false)
            todo.edit(todo.index, editText)
        }
    }


    return (
        <View style={style.container}>
            <View style={style.listStyle}>  
                <TextInput editable={false} style={{ color: "white", fontWeight: "500" }}>{todo.text}</TextInput>

                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>

                    <Button style={{ marginRight: 6 }} radius={"sm"} type="solid" color={"grey"} onPress={() => toggleOverlay()} >
                        <Icon name="edit" color="white"></Icon>
                    </Button>

                    {/** delete button */}
                    <Button radius={"sm"} type="solid" color={"black"} onPress={() => todo.delete()} >
                        <Icon name="delete" color="red"></Icon>
                    </Button>
                </View>
            </View>

            {/** This is overlay */}
            <View>
                <Overlay overlayStyle={style.overlay} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text style={{ fontWeight: "bold" }}>{todo.text}</Text>
                    <TextInput style={style.edit} value={editText} onChangeText={(text) => setText(text)}></TextInput>

                    {/** save edited Notes */}
                    <View style={{ flexDirection: "row", }}>
                        <Button style={style.buttonSave} color={"green"} onPress={() => editNotes()}>
                            Save
                            <Icon name="save" color="white"></Icon>
                        </Button>
                        {/** cancel button */}
                        <Button style={style.buttonSave} color={"red"} onPress={() => setVisible(false)}>
                            cancel
                            <Icon name="cancel" color="white"></Icon>
                        </Button>
                    </View>
                </Overlay>
            </View>
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "black",
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        borderRadius: 10,
        margin: 6
    },
    listStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
    },
    buttonSave: {
        width: 100,
        margin: 5
    },
    overlay: {
        padding: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center"
    },
    edit: {
        color: "white",
        fontWeight: "500",
        backgroundColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        width: 200,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})  