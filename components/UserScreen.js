import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserScreen = ({ navigation, route }) => {
  const { userName } = route.params; // Nhận tên người dùng từ params

  const handleLogout = () => {
    Alert.alert(
      "Xác nhận đăng xuất",
      "Bạn có muốn đăng xuất không?",
      [
        {
          text: "Không",
          onPress: () => console.log("Đăng xuất bị hủy"),
          style: "cancel"
        },
        {
          text: "Có",
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }], // Quay lại màn hình đăng nhập
          })
        }
      ]
    );
  };

  return (
    <LinearGradient colors={['#FF6347', '#FF4500']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, {userName}!</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
});

export default UserScreen;