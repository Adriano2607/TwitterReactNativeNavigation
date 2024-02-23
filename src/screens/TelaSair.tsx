import { useNavigation } from "@react-navigation/native";
import { Text, View,StyleSheet, Pressable } from "react-native";


const TelaSair = () => {

    const navigation = useNavigation<any>();
    
    return (
        <View style={styles.container}>
        <Pressable style={styles.btn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Logout</Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#F7F7F7"
    },btn:{
        borderWidth:1,
        padding:10,
        backgroundColor: 'silver',
        borderRadius:15
       
    },text:{
        fontSize:35
    }
})


export default TelaSair;
