import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.viewHead}>
      <Text
        style={styles.textHead}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHead: { 
    flex: 0.18, width: '100%',
    backgroundColor: '#EE9972'  
  },
  textHead: {
          padding: 38,
          fontSize: 30,
          color: '#333',
          textAlign: 'center',
        }
});
