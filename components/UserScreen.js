import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://source.unsplash.com/random' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Please enter your name</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your name" 
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>GET STARTED ➔</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 50,
    borderColor: '#8A2BE2',
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    color: 'black',
    flex: 1,
  },
});

export default UserScreen;