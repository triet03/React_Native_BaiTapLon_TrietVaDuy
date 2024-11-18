import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart, useFavorites } from './CartContext';  // Sử dụng context cho giỏ hàng và yêu thích

const ElectonicDetailScreen = ({ route }) => {
  const { electronic } = route.params;  // Nhận dữ liệu từ màn hình trước
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();  // Hàm thêm vào yêu thích

  const handleRatingPress = () => {
    navigation.navigate('ReviewScreen');  // Điều hướng đến màn hình đánh giá
  };

  const handleBuyNow = () => {
    addToCart(electronic);  // Thêm trái cây vào giỏ hàng
    Alert.alert('Đã thêm vào giỏ hàng');
  };

  const handleFavoritePress = () => {
    addToFavorites(electronic);  // Thêm sản phẩm vào yêu thích
    Alert.alert('Đã thêm vào yêu thích');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={{fontWeight:'bold'}}>Giỏ Hàng</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{electronic.name}</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Icon name="person-circle-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* electronic Image */}
      <Image source={electronic.image} style={styles.electronicImage} />

      {/* electronic Price and Rating */}
      <View style={styles.priceRatingContainer}>
        <Text style={styles.price}>${electronic.price}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{electronic.rating}</Text>
          <Text style={styles.reviewCount}>({electronic.reviews} đánh giá)</Text>
        </View>
      </View>

      {/* electronic Description */}
      <Text style={styles.sectionTitle}>Mô tả</Text>
      <Text style={styles.description}>{electronic.description}</Text>

      {/* Rating Button */}
      <TouchableOpacity style={styles.ratingButton} onPress={handleRatingPress}>
        <Text style={styles.ratingButtonText}>Đánh giá</Text>
      </TouchableOpacity>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
        <Text style={styles.buyNowText}>Mua ngay</Text>
      </TouchableOpacity>

      {/* Favorite Button */}
      <TouchableOpacity style={styles.favoriteButton} onPress={handleFavoritePress}>
        <Icon name="heart-outline" size={30} color="#ff6347" />
        <Text style={styles.favoriteButtonText}>Yêu thích</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    padding: 8,
  },
  electronicImage: {
    width: '100%',
    height: 350,
    borderRadius: 8,
    marginBottom: 16,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
  },
  reviewCount: {
    marginLeft: 4,
    fontSize: 14,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  ratingButton: {
    backgroundColor: '#ff6347',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowButton: {
    backgroundColor: '#00A86B',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  favoriteButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#ff6347',
  },
});

export default ElectonicDetailScreen;
