

import {Text, View ,StyleSheet} from "react-native";

const TelaErro = () => {

return(
  <View style={styles.container}>
      <Text style={styles.texto}> Erro 404</Text>
  </View>
)
}


const styles  = StyleSheet.create({
container:{
  flex: 1,
  justifyContent:'center',
alignItems:'center'
},texto:{
  fontWeight:'bold',
  fontSize:50,
  color:'red'
}

})

export default TelaErro