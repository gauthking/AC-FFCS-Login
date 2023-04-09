import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './src/components/button/button';
import { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const handleInputUsername = (e) => {
    setUsername(e)
    console.log(username)
  }

  const handleInputPassword = (e) => {
    setPassword(e)
    console.log(password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login Page</Text>
      <View style={styles.inputFields}>
        <TextInput onChangeText={e => handleInputUsername(e)} defaultValue={username} style={styles.inputs} placeholder="Username" />
        <TextInput onChangeText={e => handleInputPassword(e)} defaultValue={password} style={styles.inputs} placeholder="Password" secureTextEntry />
      </View>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4FE38A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 44,
    marginBottom: 30
  },
  inputFields: {
    width: "87%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    padding: 8,
    width: "90%",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 6,
  },
  buttonComponent: {
    color: '#540505'
  }
});
