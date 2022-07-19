
import { StyleSheet, Text, View } from 'react-native';
import FlexDirectionBasics from './components/flex_Direction';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlexDirectionBasics></FlexDirectionBasics>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
