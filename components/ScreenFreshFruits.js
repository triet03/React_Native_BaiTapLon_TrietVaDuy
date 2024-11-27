import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import pearImage from '../assets/pear.png';
import avocadoImage from '../assets/avocado.png';
import cherryImage from '../assets/cherry.png';
import orangeImage from '../assets/orange.png';
import peachImage from '../assets/peach.jpg';
import pomegranateImage from '../assets/pomegranate.jpg';

const products = [
  { id: '1', name: 'Pear', price: '$3', rating: 4, image: pearImage },
  { id: '2', name: 'Avocado', price: '$4', rating: 5, image: avocadoImage },
  { id: '3', name: 'Cherry', price: '$10', rating: 4, image: cherryImage },
  { id: '4', name: 'Orange', price: '$7', rating: 4, image: orangeImage },
];

const relevantProducts = [
  { id: '5', name: 'Peach', price: '$15', rating: 4, image: peachImage },
  {
    id: '6',
    name: 'Pomegranate',
    price: '$23',
    rating: 5,
    image: pomegranateImage,
  },
];

const FreshFruitsScreen = () => {
  const route = useRoute();
  const { userName } = route.params;
  const navigation = useNavigation();
  
  const handleNavigateToUser = () => {
    navigation.navigate('User', { userName }); // Truyền userName đến UserScreen
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={styles.productCard}
      key={item.id}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const renderRelevantProduct = (item) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={styles.relevantProductCard}
      key={item.id}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.home1}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Beauty</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon
              name="shopping-cart"
              size={30}
              color="#9095A0"
              style={{ right: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToUser}>
            <Icon name="user" size={30} color="#9095A0" />
          </TouchableOpacity>
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
            width: '85%',
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
      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
      />
      {/* See All Button */}
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>

      {/* Relevant Products Section */}
      <Text style={styles.relevantProductsTitle}>Relevant products</Text>
      <View style={styles.relevantProductsContainer}>
        {relevantProducts.map((item) => renderRelevantProduct(item))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    left: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 20,
  },
  productGrid: {
    justifyContent: 'center',
  },
  productCard: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9095A0',
  },
  productImage: {
    width: 75,
    height: 75,
    marginBottom: 8,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: '#9095A0',
  },
  seeAllButton: {
    alignItems: 'center',
    marginVertical: 16,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  relevantProductsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  relevantProductsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  relevantProductCard: {
    width: 120,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9095A0',
  },
  relevantProductImage: {
    width: 75,
    height: 75,
    marginBottom: 8,
  },
});

export default FreshFruitsScreen;
