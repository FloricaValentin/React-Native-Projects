import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import ModalForm from '../shared/ModalForm';

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: 'Game 1', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Game 2', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Game 3', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleFormSubmit = (newReview) => {
    setReviews(prevReviews => [
      ...prevReviews,
      { ...newReview, key: (prevReviews.length + 1).toString() }
    ]);
  };

  return (
    <View style={globalStyles.container}>
      <Button title="Add game" onPress={() => setModalVisible(true)} />

      <ModalForm
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleFormSubmit}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item })}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};



export default Home;
