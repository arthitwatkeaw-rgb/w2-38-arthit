import { View,Text ,Image, TouchableOpacity } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import { Profiler, useState } from "react"

/**/
type PostProps ={
    username :string,
    caption :string,
    image? : string,
    profile :string
}
/*dd */
export default function Post({username,caption ,image,profile}:PostProps){

    const [like,setLike] =useState(0)
    const [coment,setComent] =useState(0)
    const [share,setShare] =useState(0)
  return(
      
    /*กรอบรูป*/
    <View style={{  backgroundColor:"white",padding:16,borderRadius:5,marginHorizontal:20,}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        
        {
            /*โปรไฟล์เล็ก*/
        <Image source={{uri: profile}} style={{width:50,height:50,borderRadius:50,margin:4}}/>
        }
        <Text style={{fontSize:18,fontWeight:"800"}}>{username}</Text>
        </View>
        <Text style={{margin: 5}}>{caption}</Text>
        {
            /*โพส*/
        image && <Image source={{uri: image}} style={{width:"100%",height:200}} />  
        }
        
        {/*อีโม*/}
        <View style={{flexDirection:"row",gap:18,}}>
            <TouchableOpacity style={{flexDirection:"row", margin:2,gap:11}} onPress={() => setLike(like +1)}>
            <FontAwesome6  name="heart" size={20} color="black"/>
            <Text>{like}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:"row", margin:2,gap:11}} onPress={() => setComent(coment +1)} >
            <FontAwesome6  name="circle-user" size={20} color="black"/>
            <Text>{coment}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:"row", margin:2,gap:11}} onPress={() => setShare(share +1)}>
            <FontAwesome6  name="ankh" size={20} color="black"/>
            <Text>{share}</Text>
            </TouchableOpacity>

        </View>
        

        
      </View>
  )
}