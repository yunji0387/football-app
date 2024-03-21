import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface StatItem {
  id: string;
  type: string;
  value: number;
  imageUrl: string;
}

const mockStatItems: StatItem[] = [
  {
    id: '1',
    type: 'Goals',
    value: 23,
    imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=Player1',
  },
  {
    id: '2',
    type: 'Assists',
    value: 23,
    imageUrl: 'https://via.placeholder.com/150/008000/FFFFFF?Text=Player2',
  },
  {
    id: '3',
    type: 'Club Goals',
    value: 78,
    imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Club1',
  },
  {
    id: '4',
    type: 'Clean Sheets',
    value: 15,
    imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?Text=Club2',
  },
];

export default function TopStats() {
    return (
        <View style={styles.container}>
          {mockStatItems.map((item) => (
            <View key={item.id} style={styles.statItem}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#eaeaea',
    },
    statItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 5,
    },
    type: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    value: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });