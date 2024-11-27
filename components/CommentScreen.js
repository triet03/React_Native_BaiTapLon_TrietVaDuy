import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const API_URL = 'https://run.mocky.io/v3/bb726434-c3d2-415a-a6e2-d3e36f78dbba';

const CommentScreen = ({ navigation }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState('');
  const [userHasCommented, setUserHasCommented] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  // Fetch all comments
  const fetchComments = async () => {
    try {
      const response = await axios.get(`${API_URL}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Add a new comment
  const handleAddComment = async () => {
  if (userHasCommented) {
    alert('You can only add one comment!');
    return;
  }

  if (!newComment || !rating || parseInt(rating) < 1 || parseInt(rating) > 5) {
    alert('Please provide a valid comment and rating (1-5).');
    return;
  }

  try {
    const userId = 'user123'; // Thay bằng logic lấy `userId` phù hợp
    const newCommentData = {
      userId,
      text: newComment,
      rating: parseInt(rating),
    };

    // API giả lập: Không trả về dữ liệu mới, cần cập nhật thủ công
    const response = await axios.post(`${API_URL}/comment`, newCommentData);

    // Cập nhật danh sách bình luận ngay lập tức
    setComments([...comments, newCommentData]);

    setUserHasCommented(true);
    setNewComment('');
    setRating('');
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};


  // Calculate satisfaction
  const calculateSatisfaction = () => {
  if (comments.length === 0) return 0; // Xử lý khi không có bình luận nào
  const satisfiedComments = comments.filter((c) => c.rating >= 4);
  return (satisfiedComments.length / comments.length) * 100;
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ Customer Comments ✨</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            
            <View style={styles.commentText}>
              <Text style={styles.comment}>{item.text}</Text>
              <Text style={styles.rating}>⭐ {item.rating} Stars</Text>
            </View>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Write your comment"
        value={newComment}
        onChangeText={setNewComment}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating (1-5)"
        keyboardType="numeric"
        value={rating}
        onChangeText={setRating}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddComment}>
        <Text style={styles.buttonText}>Submit Comment</Text>
      </TouchableOpacity>
      <Text style={styles.satisfaction}>
        Satisfaction: {calculateSatisfaction().toFixed(2)}%
      </Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentText: {
    flex: 1,
  },
  comment: {
    fontSize: 16,
    color: '#555',
  },
  rating: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  satisfaction: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  backButton: {
    marginTop: 10,
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default CommentScreen;
