import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>USER</Text>
      <View style={styles.homeInputContainer}>
        <Icon name="user" size={20} color="#8A2BE2" style={styles.icon} />
        <TextInput
          style={styles.homeInput}
          placeholder="Enter your name"
          placeholderTextColor="#9095A0"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={handleGetStarted}>
        <Text>GET STARTED ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 10,
  },
  homeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '#9095A0',
  },
  icon: {
    marginRight: 10,
    color: 'black',
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  homeInput: {
    fontSize: 16,
    color: 'black',
    flex: 1,
  },
});

export default UserScreen;