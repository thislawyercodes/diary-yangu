import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { getToken } from '@/lib/baseService';
import { styles } from '../styles/styles';
import { addCategory, fetchCategories } from '@/lib/apiService';
import Button from '@/components/Button';

interface Category {
  id: string;
  title: string;
  description: string;
  color: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#FFFFFF');

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data.results);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = async () => {
    try {
      const token = await getToken();
      const newCategory = { title, description, color };
      const response = await addCategory(token, newCategory);
      console.log('Category added successfully:', response);
      Alert.alert('Success', 'Category added successfully!');
      fetchAllCategories();
      setTitle('');
      setDescription('');
      setColor('#FFFFFF');
    } catch (error) {
      console.error('Error adding category:', error);
      Alert.alert('Error', 'Failed to add category. Please try again later.');
    }
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.cardContainer}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
        <View style={[styles.buttonStyle, { backgroundColor: item.color }]} />
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.categoriesContainer}>
        <ActivityIndicator size="large" color="#FF6347" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No categories found. Add a category to start.</Text>
        )}
        contentContainerStyle={styles.categoriesContainer}
      />
      {/* <View style={styles.addCategoryContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Color (e.g., #FFFFFF)"
          value={color}
          onChangeText={setColor}
        />
        <Button title="Add Category" onPress={handleAddCategory} />
      </View> */}
    </View>
  );
};

export default Categories;
