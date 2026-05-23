import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';
import AppTextInput from './src/components/inputs/AppTextInput';

export default function App() {
  return (
    <>
    <FlashMessage position={"top"}/>
    <AppSaveView style={styles.container}>
      <AppTextInput 
      placeholder='Enter Name'
      
      />
    </AppSaveView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
