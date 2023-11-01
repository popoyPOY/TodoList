import { StyleSheet, Text, View, Image } from "react-native";


export default function Header() {
    return (
        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4021/4021693.png',
          }}
          style={{width: 60, height:60}}
        />
        <Text style={styles.titleText}>To Do Kiss</Text>
        <Text style={{color: "white", fontSize: 10}}>Todo App</Text>
        <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleText: {
        marginBottom: 30,
        marginTop: 40,
        fontSize: 40,
        fontWeight: 'bold',
        color: "white",
        textShadowColor: 'white',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    }
})