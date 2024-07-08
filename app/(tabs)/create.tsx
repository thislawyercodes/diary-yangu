import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { addEntry } from '@/lib/apiService';
import { getToken } from '@/lib/baseService';
import { router } from 'expo-router';
import CustomFormField from '@/components/CustomFormField';
import Button from '@/components/Button';
import images from '@/constants/images';
import { styles } from '../styles/styles';

const AddEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleAddEntry = async () => {
    setLoading(true); // Start loading indicator
    try {
      const token = await getToken();
      const entryData = { title, content, category };
      const response = await addEntry(token, entryData);
      console.log("response: ", response);
      Alert.alert('Success', 'Entry added successfully!');
      router.push('/home');
      setTitle('');
      setContent('');
      setCategory('');
    } catch (error) {
      console.error('Error adding entry:', error);
      Alert.alert('Error', 'Failed to add entry. Please try again later.');
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <CustomFormField
          title="Title"
          placeholder="Enter Journal Title"
          value={title}
          handleChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]} 
          value={content}
          onChangeText={setContent}
          placeholder="Enter your journal content here"
          multiline
          numberOfLines={25}
        />
        <CustomFormField
          title="Category"
          placeholder="Select a category(optional)"
          value={category}
          handleChangeText={setCategory}
        />

        <Button
          title="Add Entry"
          onPress={handleAddEntry}
        />
        
        {loading && (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#0000ff"
          />
        )}

      </ScrollView>
    </SafeAreaView>
  );
};


export default AddEntry;
