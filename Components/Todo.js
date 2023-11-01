import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, ScrollView } from "react-native";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Button, Icon } from '@rneui/themed';
import List from "./List";

export default function Todo() {
    const randomEmoji = [
        "❄️",
        "🔥",
        "💧",
        "⚡",
        "☘️"
    ]

    const [inputValue, setInputValue] = useState('');
    const [getItems, setItems] = useState([]);

    const addNotes = () => {
        if (inputValue === null) {
            Alert.alert("no task input", "please place desired tasks");
        } else {
            Keyboard.dismiss();
            setItems([...getItems, randomEmoji[Math.floor(Math.random() * 5)] + " " + inputValue]);
            setInputValue(null);
        }


    };

    const deleteNotes = (index) => {
        let newItems = [...getItems];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    const editNotes = (index, item) => {
        let newItems = [...getItems];
        newItems.splice(index, 1, item);
        console.log(getItems[0]);
        setItems(newItems);

    }

    return (
        <View >
            <View style={style.container}>

                <TextInput style={style.inputStyle}
                    autoFocus={true}
                    value={inputValue}
                    placeholder={"place your tasks here"}
                    onChangeText={text => setInputValue(text)}
                    placeholderTextColor={"white"}>
                </TextInput>

                <KeyboardAvoidingView>
                    <Button radius={"sm"} type="solid" color={"black"} onPress={() => addNotes()} >
                        <Text style={{
                            color: "white",
                            margin: 2
                        }}>Save</Text>
                        <Icon name="save" color="white"></Icon>
                    </Button>
                </KeyboardAvoidingView>
            </View>
            <View style={style.listContainer}>

                {
                    getItems.map((item, index) => {
                        return <List index={index} key={index} text={item} delete={deleteNotes} edit={editNotes}></List>
                    })
                }
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },

    textStyle: {
        color: "white"
    },
    inputStyle: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "white",
        borderStyle: "solid",
        borderColor: "white",
        borderRadius: 5
    },
    listContainer: {
        marginTop: 50,
    }
})