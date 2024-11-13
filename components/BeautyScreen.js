import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BeautyScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    navigation.navigate('List', { userName: name });
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.home1}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#9095A0" />
          </TouchableOpacity>
          <Text style={{ left: 20, fontWeight: 'bold' }}>Beauty</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name="shopping-cart"
            size={20}
            color="#9095A0"
            style={{ right: 20 }}
          />
          <Icon name="user" size={30} color="#9095A0" />
        </View>
      </View>

      <View style={styles.home2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            width: 240,
            borderColor: '#9095A0',
          }}>
          <Icon name="search" size={15} color="#9095A0" />
          <TextInput
            style={{ fontSize: 12 }}
            placeholder="   Search for product"
            placeholderTextColor="#9095A0"
          />
        </View>
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#9095A0',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="bars" size={15} color="#9095A0" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.home3}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontWeight: 'bold' }}>Recommended for you</Text>
          <Text style={{ color: '#9095A0' }}>View all</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: '#d9cbf6',
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/beauty.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: '#c5d1f7',
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/serum.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: '#f9d8c0',
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/phan.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.home4}>
        <TouchableOpacity
          style={{ backgroundColor: '#f5f2fd', padding: 10, borderRadius: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#9095A0' }}>
            Best Sales
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: '#f5f2fd', padding: 10, borderRadius: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#9095A0' }}>
            Best Matched
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: '#f5f2fd', padding: 10, borderRadius: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#9095A0' }}>Popular</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.home5}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#9095A0',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/beauty.png')}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Smartphone</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Icon name="star" size={10} color="#9095A0" />
                </View>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderRadius: 100,
                  padding: 5,
                  alignItems: 'center',
                  width: 25,
                  borderColor: '#aa89eb',
                }}>
                <Icon name="plus" size={12} color="#aa89eb" />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>$899</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#9095A0',
              marginTop: 10,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/serum.png')}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Smartphone</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Icon name="star" size={10} color="#9095A0" />
                </View>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderRadius: 100,
                  padding: 5,
                  alignItems: 'center',
                  width: 25,
                  borderColor: '#aa89eb',
                }}>
                <Icon name="plus" size={12} color="#aa89eb" />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>$899</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#9095A0',
              marginTop: 10,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/phan.png')}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Smartphone</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Icon name="star" size={10} color="#9095A0" />
                </View>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderRadius: 100,
                  padding: 5,
                  alignItems: 'center',
                  width: 25,
                  borderColor: '#aa89eb',
                }}>
                <Icon name="plus" size={12} color="#aa89eb" />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>$789</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#9095A0',
              marginTop: 10,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/beauty.png')}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text style={{ fontWeight: 'bold' }}>Smartphone</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Image
                    source={require('../assets/Star.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <Icon name="star" size={10} color="#9095A0" />
                </View>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderRadius: 100,
                  padding: 5,
                  alignItems: 'center',
                  width: 25,
                  borderColor: '#aa89eb',
                }}>
                <Icon name="plus" size={12} color="#aa89eb" />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>$999</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            alignItems: 'center',
            borderColor: '#9095A0',
            backgroundColor: '#f3f4f6',
            marginTop: 10,
          }}>
          <Text style={{ color: '#9095A0' }}>See all</Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/serum.png')}
          style={{borderRadius:10, marginTop:10, width:'100%', height:120}}
        />
      </ScrollView>

      <View style={styles.separator} />

      <View style={styles.home7}>
        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="home" size={20} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="search" size={20} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Search</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="heart" size={20} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Favorites</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="comment" size={20} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Comment</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="user" size={20} color="#9095A0" />
            <Text style={{ fontSize: 10 }}>Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  home1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  home2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  home3: {
    marginTop: 10,

    justifyContent: 'space-around',
  },
  home4: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  home5: {
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  home6: {
    flexDirection: 'row',
    marginTop: 10,
  },
  scrollContainer: {
    paddingBottom: 60, // Để tránh nội dung bị che khuất bởi thanh điều hướng
  },
  home7: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default BeautyScreen;
