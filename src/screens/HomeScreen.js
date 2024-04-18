import { Text, View, Button, StyleSheet, Alert } from "react-native";

export default function HomeScreen({navigation}) {
  // navigation.navigate('nome da rota')
  return(
    <View style={style= styles.container}>
      <Text style={style= styles.texto}>HomeScreen</Text>
      <Button title='Ir para Perfil'
      // onPress={() => Alert.alert('Alerta', "Você clicou no botão")}>
      onPress={() => navigation.navigate('profile')}>
      </Button>

      <Button title='Ir para sua Lista'
      onPress={() => navigation.navigate('lista')}>
      </Button>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: "lightgray",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})