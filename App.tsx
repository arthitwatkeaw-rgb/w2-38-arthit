import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './components/Post';
import postData from './post-data.json'

export default function App() {
  return (
    <SafeAreaView style={{ paddingHorizontal:1 ,gap:15, backgroundColor:"lightgrey"}}>
      
      <View  style={{flexDirection:"row", backgroundColor:"white"}}>
      <Text style={{fontSize:20,fontWeight:500,margin:10}}> Jotragarm</Text>
      </View>

      <FlatList style={{marginBottom:20}}
        data={postData}
        keyExtractor={(item) =>item.id.toString()}
        renderItem={({item}) => 
        <Post
        profile={item.profile}
        username={item.username}
        caption={item.caption}
        image={item.image}
        />
        }
        contentContainerStyle={{gap:22}}

      />
    </SafeAreaView>
  );
}


