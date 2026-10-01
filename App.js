import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.name}>Ayesha Naveed</Text>
      <Text style={styles.roll}>Roll No: 23i-3068</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1ff',
    alignItems: 'center',
    justifyContent: 'center',
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
});