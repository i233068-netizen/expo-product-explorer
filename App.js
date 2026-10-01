import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', name: 'Everyday Backpack', category: 'Accessories', price: '$48' },
  { id: '2', name: 'Ceramic Travel Mug', category: 'Kitchen', price: '$18' },
  { id: '3', name: 'Wireless Headphones', category: 'Electronics', price: '$79' },
  { id: '4', name: 'Cotton Tote Bag', category: 'Accessories', price: '$16' },
  { id: '5', name: 'Desk Plant', category: 'Home', price: '$22' },
  { id: '6', name: 'Notebook Set', category: 'Stationery', price: '$12' },
];

export default function App() {
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
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
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
