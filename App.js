import React, {useCallback} from 'react';

import { Button, View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { openBrowserAsync } from 'expo-web-browser';
import  axios from "axios"; 
let subject=""
let result1 =  axios.get(`http://106.221.183.72:8080/api/Subjectdetails/get${subject}`).then(response => {
    result1 = response.data;
    console.log(result1)
    console.log(response)
   // Log the response data (array of addDepartment objects)
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });

//home page screen
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          
            <Image style={styles.home} source={require('./assets/home.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('notification')}>
            <Image style={styles.not} source={require('./assets/noti.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <View style={styles.boxes1}>
                <View style={styles.box1}>
                    <TouchableOpacity onPress={() => navigation.navigate('TRquestions')}>
                    <Text style={styles.botext}>TR Questions</Text></TouchableOpacity>
            </View>
                <View style={styles.box1}>
                    <TouchableOpacity onPress={() => navigation.navigate('HRQuestions')}>
                    <Text style={styles.botext}>HR Questions</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
            <View style={styles.boxes2}>
                <View style={styles.box1} >
                <TouchableOpacity onPress={() => navigation.navigate('McqQuestions')}>
                    <Text style={styles.botext}>MCQ practice questions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxm}>
                <TouchableOpacity onPress={() => navigation.navigate('Mockinterviews')}>
                    <Text style={styles.botext}>MOCk interviews</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.box2}>
            <TouchableOpacity onPress={() => navigation.navigate('Workshopareas')}>
                <Text style={styles.botext}>WORKSHOP areas</Text>
                </TouchableOpacity>
            </View>
            <View />
            <View />
        </View>
        <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
            <Text style={styles.fotext}>FAQ's</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Blog')}>    
            <Text style={styles.fotext}>Blogs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Placements')}>
            <Text style={styles.fotext}>Placements</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
            <Text style={styles.fotext}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
            <Text style={styles.fotext}>About Us</Text>
            </TouchableOpacity>
        </View>
    </View>

    );
}
// footer code this is used in all the pages 
function Footer() {
    return (
        <View style={styles.footers}>
        <Text style={styles.fotext}>FAQ's</Text>
        <Text style={styles.fotext}>Blogs</Text>
        <Text style={styles.fotext}>Placements</Text>
        <Text style={styles.fotext}>Contact us</Text>
        <Text style={styles.fotext}>About Us</Text>
    </View>

    );
}
// college to corporate page screen this page is in menu bar 
function CollegetocorporateScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Button title="Anirudh link here to button" onPress ={ ()=> openBrowserAsync("https://www.bodhasoft.com/college-to-corporate-program#:~:text=We%20provide%20a%20full%20360,crack%20any%20MNC%20with%20ease.")} />

   

        </View>
    );
}
// Workshoparea page screen this page is in menu bar 
function WorkshopareaScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
// Mentoring page screen this page is in menu bar 
function MentoringScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
// Profile page screen this page is in menu bar 
function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
// Logout page screen this page is in menu bar 
function LogoutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
        </View>
    );
}

// HR questions screen this page is in body 

function HRQuestions({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>   
        </View>
    );
}
// MCQ questions screen this page is in body 
function McqQuestions({ navigation }) {
    return (
        <View style={styles.mcq}>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
            </View>
            <View style={styles.cvr}>
        
            <View style={styles.cv}>
            <TouchableOpacity onPress={() => navigation.navigate('C language')}>
             <Text>c language</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cv}>
            <TouchableOpacity onPress={() => navigation.navigate('C++ language')}>
                <Text>c++</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.cvrm}>
            <View style={styles.cvm}>
            <TouchableOpacity onPress={() => navigation.navigate('Python')}>
                <Text>python</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cvm}>
            <TouchableOpacity onPress={() => navigation.navigate('java')}>
                <Text>java</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cvm}>
            <TouchableOpacity onPress={() => navigation.navigate('sql')}>
                <Text>sql</Text>
                </TouchableOpacity>
            </View>
            </View>
      
            <View style={styles.footerst}>
        <Text style={styles.fotextt}>FAQ's</Text>
        <Text style={styles.fotextt}>Blogs</Text>
        <Text style={styles.fotextt}>Placements</Text>
        <Text style={styles.fotextt}>Contact us</Text>
        <Text style={styles.fotextt}>About Us</Text>
    </View>
        </View>
    );
}
// TR questions screen this page is in body 
function TRQuestions({ navigation }) {
    const departmentsArray = [];
    const imagearray= [];
    for(let i = 0;i<result1.length;i++){
        departmentsArray.push(result1[i].Name)
        imagearray.push(result1[i].Logo)
      }
    return (
        <View style={styles.mcq}>
        <View style={styles.header}>
        
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
            </View>
            <View style={styles.cvr}>
        
            <View style={styles.cv}>
            <TouchableOpacity onPress={() => navigation.navigate('Name')}>
            {imagearray.map((Logo,index)=>(
          <View key={index}>
            <Image source={{uri:Logo}} style={{height:'100px',width:'100px'}} ></Image>
          </View>
          ))}
            {departmentsArray.map((Name, index) => (
            <View key={index} >
            <Text style={styles.depar}>{Name}</Text>
            </View>
        ))}
  
            </TouchableOpacity>
            </View>
            </View>
            <View style={styles.footerst}>
        <Text style={styles.fotextt}>FAQ's</Text>
        <Text style={styles.fotextt}>Blogs</Text>
        <Text style={styles.fotextt}>Placements</Text>
        <Text style={styles.fotextt}>Contact us</Text>
        <Text style={styles.fotextt}>About Us</Text>
    </View>
          
        </View>
    );
}
// C LAnguage  screen this page is in TR Questions  and also MOCk interview pages
function Cmock({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Text style={{textAlign:"center"}}>hi am in c page</Text>
        <Footer/>
        </View>
    );
}
// C++ LAnguage  screen this page is in TR Questions  and also MOCk interview pages
function Cq({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Text style={{textAlign:"center"}}>hi am in c++ page</Text>
        <Footer/>
        </View>
    );
}
// Python Language  screen this page is in TR Questions  and also MOCk interview pages
function Pythonq({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Text style={{textAlign:"center"}}>hi am in python page</Text>
        <Footer/>
        </View>
    );
}
// JAVA LAnguage  screen this page is in TR Questions  and also MOCk interview pages
function Javaq({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Text style={{textAlign:"center"}}>hi am in java page</Text>
        <Footer/>
        </View>
    );
}
// SQL LAnguage  screen this page is in TR Questions  and also MOCk interview pages
function Sqlq({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Text style={{textAlign:"center"}}>hi am in sql page</Text>
        <Footer/>
        </View>
    );
}
// MOCK INTERVIEWS  screen this page is in body
function Mockinterviews({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
// NOTIFICATION  this page will open when we click the notification icon in body
function Notificationpage({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            
        </View>
        <Footer/>
        </View>
    );
}
// WORKSHOP AREAS  screen this page is in body
function Workshopareas({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
  
        <View>
    <View style={styles.poll}>
    <TouchableOpacity onPress={() => navigation.navigate('Poll division')}>
    <Text>Poll division</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.poll}>
    <TouchableOpacity onPress={() => navigation.navigate('coding')}>
        <Text>Coding environment</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.footerstr}>
        <Text style={styles.fotextr}>FAQ's</Text>
        <Text style={styles.fotextr}>Blogs</Text>
        <Text style={styles.fotextr}>Placements</Text>
        <Text style={styles.fotextr}>Contact us</Text>
        <Text style={styles.fotextr}>About Us</Text>
    </View>
        </View>
    );
}
//Coding page this page will open in workshop area page 
function Coding({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//POLL page this page will open in workshop area page 
function Poll({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//FAQ page this page will open when we touch the FAQ in HOMESCREEN PAGE
function FAQ({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//BLOGS page this page will open when we touch the BLOGS in HOMESCREEN PAGE
function Blogs({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//CONTACT US page this page will open when we touch the CONTACT US in HOMESCREEN PAGE
function ContactUS({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//PLACEMENTS page this page will open when we touch the PLACEMENTS in HOMESCREEN PAGE
function Placementspage({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//ABOUT US page this page will open when we touch the ABOUT US in HOMESCREEN PAGE
function Aboutus({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//menu bar code 
const Drawer = createDrawerNavigator();
function Mystack() {
    return (
        <Drawer.Navigator initialRouteName="Home2">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="College to corporate" component={CollegetocorporateScreen} />
    <Drawer.Screen name="Workshoparea" component={WorkshopareaScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Mentoring" component={MentoringScreen} />
    <Drawer.Screen name="Log out" component={LogoutScreen} />
   
</Drawer.Navigator> 
 );
}
  
const Stack = createStackNavigator();
//STACK NAVIGATION code
 function Apps() {
    return (
        
    <Stack.Navigator>
    <Stack.Screen name='Stackstack1' component={Mystack}  options={{headerShown:false}}/>
    
      <Stack.Screen name ="HomeScreen1" component={HomeScreen}/>
      <Stack.Screen name ="TRquestions" component={TRQuestions}/>
      <Stack.Screen name ="HRQuestions" component={HRQuestions}/>
      <Stack.Screen name ="McqQuestions" component={McqQuestions}/>
      <Stack.Screen name ="Mockinterviews" component={Mockinterviews}/>
      <Stack.Screen name ="Workshopareas" component={Workshopareas}/>
      <Stack.Screen name ="FAQs" component={FAQ}/>
      <Stack.Screen name ="Blog" component={Blogs}/>
      <Stack.Screen name ="Placements" component={Placementspage}/>
      <Stack.Screen name ="Contact Us" component={ContactUS}/>
      <Stack.Screen name ="About Us" component={Aboutus}/>
      <Stack.Screen name ="entoring" component={Footer}/>
      <Stack.Screen name ="C language" component={Cmock}/>
      <Stack.Screen name ="C++ language" component={Cq}/>
      <Stack.Screen name ="Python" component={Pythonq}/>
      <Stack.Screen name ="java" component={Javaq}/>
      <Stack.Screen name ="sql" component={Sqlq}/>
      <Stack.Screen name ="notification" component={Notificationpage}/>
      <Stack.Screen name ="Poll division" component={Poll}/>
      <Stack.Screen name ="coding" component={Coding}/>
</Stack.Navigator> 
        

        
    );
}
export default function App() {
    return (
        <NavigationContainer>
           
                <Apps/>

        </NavigationContainer>
    );
}
// css code that is used in all the pages
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',


    }, header: {
        
        height: "15%",
        width: "100%",
        flexDirection: "row-reverse"
    },
    home: {
        marginLeft: 45,
        height: 50,
        width: 50
    },
    homei: {
        marginLeft: 45,
        height: 50,
        width: 50
    },
    not: {
        marginRight:5,
        height: 50,
        width: 50
    },
    body: {

        height: "60%",

    },
    box1: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
    },
    boxes1: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 40,
        marginLeft: 35
    },
    boxes2: {

        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 35
    },
    box2: {
        justifyContent: "center",
        marginTop: 30,
        height: 100,
        width: 100,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        textAlign: "center",
        marginLeft: 125
    },
    boxm: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 50,
     
      justifyContent:"center",
      alignItems:"center"
    },
    footer: {
        flexDirection: "row",
        marginTop: 140,
        justifyContent: "space-evenly"
    },
    fotext: {
        color: "blue"
    },
    botext: {
        textAlign: "center"
    },
    manasa:{borderWidth : 2, boderColor : "black", borderRadius : 10, width : 220, marginBottom : 30, justifyContent : "center", alignItems : "center"}
,
footers:{
    marginTop: 550,
    justifyContent: "space-evenly",
    flexDirection:"row"
},
cvr:{
    marginTop:20,
   flexDirection:"row",
justifyContent:"space-evenly"
   
 },
 cvrm:{
    flexDirection:"row",
 justifyContent:"space-evenly"
    
  },
cv:{
    alignItems:"center",
    justifyContent:"center",
     marginTop:10,
     height:100,
     width:100,
     backgroundColor:"skyblue",
     borderRadius:15,
     flexDirection:"column",
 },
cvm:{
    alignItems:"center",
    justifyContent:"center",
    marginRight:0,
     marginTop:50,
     height:100,
     width:100,
     backgroundColor:"skyblue",
     borderRadius:15
 },
poll:{
    height:200,
    width:"50%",
    marginTop:10,
    backgroundColor:"violet",
    marginLeft:90,
    justifyContent:"center",
    alignItems:"center"
},
footerst:{
    marginTop: 290,
    justifyContent: "space-evenly",
    flexDirection:"row"
},
fotextt: {
    color: "blue"
},
fotextr: {
    color: "blue"
},
footerstr:{
    marginTop: 130,
    justifyContent: "space-evenly",
    flexDirection:"row"
},
});