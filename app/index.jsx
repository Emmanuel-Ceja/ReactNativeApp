import { StyleSheet, Text, View, Button, Platform, TouchableOpacity} from 'react-native'
import * as DocumentPicker from 'expo-document-picker';
import React, {useState} from 'react'

function Home() { 
  const [document, setDocument] = useState(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*', // all file types

      copyToCacheDirectory: true, // copy the file to the app's cache directory
    });

    if (!result.canceled) {
      setDocument(result.assets[0]);
      console.log('File: ', result.assets[0]);
  }
  };
  
  return (
    <View style= {styles.container}>
      <Text style= {styles.title}>AI Summarizer and Translator</Text>
      <Text style= {styles.text}>Upload your docutment to start the translation and summarization process and then click start</Text>

      
      <TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={pickDocument}>
        <Text style={styles.buttonText}> click to insert file</Text>
      </TouchableOpacity>

      {document && (
        <View style={{marginTop: 20}}>
          <Text>Selected: {document.name}</Text>
          <Text>Size: {document.size} bytes</Text>
        </View>
      )}

     
      
    </View>
  )
}

export default Home; 


const friendlyFont = Platform.select({
  ios: 'Avenir Next',
  android: 'Roboto',
  default: 'System',
})

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    minWidth: 250,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#FFB6C1',
    fontSize: 20,
    fontWeight: 'bold',
  },

  topSection: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001F3F', 
  
  },
  text: {
    fontFamily: friendlyFont,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFB6C1',
  },
  
  title: {
    position: 'absolute',
    top: 60,
    fontFamily: friendlyFont,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFB6C1',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    minWidth: 250,
  
  }
})