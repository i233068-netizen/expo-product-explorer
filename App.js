import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', name: 'Everyday Backpack', category: 'Accessories', price: '$48' },
  { id: '2', name: 'Ceramic Travel Mug', category: 'Kitchen', price: '$18' },
  { id: '3', name: 'Wireless Headphones', category: 'Electronics', price: '$79' },
  { id: '4', name: 'Cotton Tote Bag', category: 'Accessories', price: '$16' },
  { id: '5', name: 'Desk Plant', category: 'Home', price: '$22' },
  { id: '6', name: 'Notebook Set', category: 'Stationery', price: '$12' },
  { id: '7', name: 'Insulated Water Bottle', category: 'Accessories', price: '$26' },
  { id: '8', name: 'Wireless Mouse', category: 'Electronics', price: '$34' },
  { id: '9', name: 'Scented Candle', category: 'Home', price: '$20' },
  { id: '10', name: 'Linen Tea Towel', category: 'Kitchen', price: '$14' },
  { id: '11', name: 'Gel Pen Set', category: 'Stationery', price: '$9' },
  { id: '12', name: 'Phone Stand', category: 'Electronics', price: '$17' },
  { id: '13', name: 'Woven Storage Basket', category: 'Home', price: '$32' },
  { id: '14', name: 'Travel Pouch', category: 'Accessories', price: '$19' },
];

export default function App() {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    setFavourites((currentFavourites) =>
      currentFavourites.includes(id)
        ? currentFavourites.filter((favouriteId) => favouriteId !== id)
        : [...currentFavourites, id],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.name}>Ayesha Naveed</Text>
      <Text style={styles.roll}>Roll No: 23i-3068</Text>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isFavourite = favourites.includes(item.id);

          return (
          <Pressable
            onPress={() => toggleFavourite(item.id)}
            style={[styles.productCard, isFavourite && styles.favouriteCard]}
            accessibilityRole="button"
            accessibilityLabel={`${item.name}, ${isFavourite ? 'favourite' : 'not favourite'}`}
            accessibilityState={{ selected: isFavourite }}
          >
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
            <View style={styles.productTrailing}>
              <Text style={styles.price}>{item.price}</Text>
              {isFavourite && <Text style={styles.heart}>♥</Text>}
            </View>
          </Pressable>
        );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1ff',
    alignItems: 'center',
    paddingTop: 64,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4b2bbd',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    color: '#222',
  },
  roll: {
    fontSize: 18,
    color: '#555',
    marginTop: 6,
  },
  list: {
    width: '100%',
    marginTop: 24,
  },
  listContent: {
    paddingBottom: 24,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  favouriteCard: {
    borderColor: '#4b2bbd',
  },
  productTrailing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heart: {
    color: '#4b2bbd',
    fontSize: 20,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#30205f',
  },
  category: {
    fontSize: 14,
    color: '#71669a',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4b2bbd',
    marginLeft: 12,
  },
});
