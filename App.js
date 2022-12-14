// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <view style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Text>Hi...</Text>
        <Button title="Add goal"/>
      </view>
      <view>
        <Text>List of goals...</Text>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textInput: {
    borderWidth:1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding:8,
  }
});
