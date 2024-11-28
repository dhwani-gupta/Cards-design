
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Flatcards from './components/flatcards';
import Elevated from './components/Elevatedcards';
import Fancycards from './components/Fancycards';
import Actioncards from './components/Actioncards';
import ContactList from './components/Contactlist';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Flatcards/>
        <Elevated/>
        <Fancycards/>
        <Actioncards/>
        <ContactList/>
        
        
      </ScrollView>

      
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#3d3f3f",
    width:"100%",
    height:"100%"
    
  },
});
