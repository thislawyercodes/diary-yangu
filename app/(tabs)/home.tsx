import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import { editEntry, fetchEntries, deleteEntry } from '@/lib/apiService';
import { getToken } from '@/lib/baseService';
import { router } from 'expo-router';

interface JournalEntry {
  id: string;
  title: string;
  content: string | null;
  created_at: string;
  categories: {
    title: string;
    description: string;
    color: string;
  }[];
}

const Home = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  const fetchData = async (start?: string, end?: string) => {
    setLoading(true);
    try {
      const token = await getToken();
      if (!token) {
        console.error('Token not found');
        return;
      }
      const data = await fetchEntries(token, start, end);
      setEntries(data.results);
    } catch (error) {
      console.error('Error fetching entries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    setSearchLoading(true);
    fetchData(startDate, endDate).finally(() => setSearchLoading(false));
  };

  const handleEditEntry = async (entry: JournalEntry) => {
    // Assuming you have a state to hold current entry data for editing
    const [editTitle, setEditTitle] = useState(entry.title);
    const [editContent, setEditContent] = useState(entry.content);
    const [editCategory, setEditCategory] = useState(entry.categories.map(cat => cat.title).join(', '));

    setLoading(true);
    try {
      const token = await getToken();
      const entryData = { title: editTitle, content: editContent, category: editCategory };
      const response = await editEntry(token, entry.id, entryData);
      console.log('Entry edited successfully:', response);
      Alert.alert('Success', 'Entry edited successfully!');
      router.push('/home');
    } catch (error) {
      console.error('Error editing entry:', error);
      Alert.alert('Error', 'Failed to edit entry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const confirmDeleteEntry = (entryId: string) => {
    Alert.alert(
      'Delete Entry',
      'Are you sure you really want to delete this entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => handleDeleteEntry(entryId) },
      ],
      { cancelable: false }
    );
  };

  const handleDeleteEntry = async (entryId: string) => {
    setLoading(true);
    try {
      const token = await getToken();
      await deleteEntry(token, entryId);
      Alert.alert('Success', 'Entry deleted successfully!');
      fetchData(); // Refresh the list
    } catch (error) {
      console.error('Error deleting entry:', error);
      Alert.alert('Error', 'Failed to delete entry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderEntry = ({ item }: { item: JournalEntry }) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Ionicons name="calendar-outline" size={20} color="#4682B4" style={styles.calendarIcon} />
        <Text style={styles.cardDate}>{new Date(item.created_at).toLocaleString()}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardContent}>{item.content || 'No content available'}</Text>
      {item.categories && item.categories.length > 0 && (
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories:</Text>
          {item.categories.map((category, index) => (
            <View key={index} style={styles.category}>
              <Text style={styles.categoryTitle}>Title: {category.title}</Text>
              <Text style={styles.categoryDescription}>Description: {category.description}</Text>
              <Text style={styles.categoryColor}>Color: {category.color}</Text>
            </View>
          ))}
        </View>
      )}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleEditEntry(item)}>
          <Ionicons name="pencil-outline" size={24} color="#4682B4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => confirmDeleteEntry(item.id)}>
          <Ionicons name="trash-outline" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color="#FF6347" /> 
      </SafeAreaView>
    );
  }

  if (!entries || entries.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>You do not have any entries. Add an entry to start.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Start Date (YYYY-MM-DD)"
          value={startDate}
          onChangeText={setStartDate}
        />
        <TextInput
          style={styles.input}
          placeholder="End Date (YYYY-MM-DD)"
          value={endDate}
          onChangeText={setEndDate}
        />
        <Button title="Search" onPress={handleSearch} disabled={searchLoading} />
        {searchLoading && <ActivityIndicator size="small" color="#FF6347" />}
      </View>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={renderEntry}
      />
    </SafeAreaView>
  );
};

export default Home;
