import { Text, View, Button, StyleSheet, Alert, Image, ScrollView } from "react-native";
import { gatinhos } from "../components/data/gatinhos";
import { useState } from "react";

export default function ListaScreen() {
  return (
    <View style={style = styles.container}>
      <Text style={style = styles.texto}>Essa é a sua Lista de gatinhos! :)</Text>

      {/* {gatinhos.map(item => {
        return(
          <View key={item.id}>
            <Text>{item.url}</Text>
          </View>
        )
      })} */}

      {gatinhos.map(item => (
        <View key={item.id}>
          <Image
            width={200}
            height={200}
            source={{ uri: item.url }}></Image>
          <Text>{item.url}</Text>
        </View>
      )
      )}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: "lightgray",
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})