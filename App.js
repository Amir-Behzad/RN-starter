import React from "react";
import { StyleSheet, Text, Image, TextInput, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
        <Text>Well Hi</Text>
        {/* style={styles.container */}
      <View style={styles.container}>
        <Text>Nasıl Gidiyor?</Text>
        <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 200, height:200}} />
      </View>
      <TextInput
        style={{
          height: 40,
          width:500,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
