import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Switch, useColorScheme, TouchableHighlight, } from 'react-native';
// import { EvilIcons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [mode, setMode] = useState('light');
  const [thewebview, setThewebview] = useState(false);

  const colorScheme = useColorScheme() === mode;


  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled ===true)
    {setMode('light');}
    else {setMode('dark');}
  };
  const webviewSwitch = () => {
    setThewebview(!thewebview);
  };




  return (
      <SafeAreaView style={colorScheme ? styles.cont: darkstyles.cont }>
      <StatusBar style={colorScheme ? 'auto' : 'light'} />

{/* The WebView and it tenary operator to toggle it */}
{thewebview ? 
      <View style={colorScheme ? styles.webviewview : darkstyles.webviewview } >
        <Ionicons name="arrow-back" style={colorScheme ? styles.webviewicon: darkstyles.webviewicon } onPress={webviewSwitch}/>
    <WebView
  source={{ uri: 'https://github.com/Mongopark' }}
  style={colorScheme ? styles.webview: darkstyles.webview }/>
  </View> : <View></View> }

      <SafeAreaView
       style={colorScheme ? styles.modal: darkstyles.modal }>
        <View style={colorScheme ? styles.switchcontainer: darkstyles.switchcontainer }>
      <Text style={colorScheme ? styles.switchlabel: darkstyles.switchlabel }>switch to {isEnabled ? 'light' : 'dark'} mode</Text>
      <Switch
    thumbColor={isEnabled ? 'blue' : 'black'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={colorScheme ? styles.switch: darkstyles.switch }
      />
    </View>
        <View style={colorScheme ? styles.modalView: darkstyles.modalView }>
        <View style={colorScheme ? styles.modalHead: darkstyles.modalHead }>
        <Image source={require('./assets/profilepic.jpeg')} style={colorScheme ? styles.loadingpng: darkstyles.loadingpng } />
</View>
<View style={colorScheme ? styles.modalFirstrow: darkstyles.modalFirstrow }>
</View>


<View style={colorScheme ? styles.modalFourthrow: darkstyles.modalFourthrow }>
<View style={colorScheme ? styles.modalThirdrow: darkstyles.modalThirdrow }>
            <View style={colorScheme ? styles.modalTextwrapper: darkstyles.modalTextwrapper }>
            <Text style={colorScheme ? styles.modalThirdtext: darkstyles.modalThirdtext }>DISPLAY NAME</Text>
            <Text style={colorScheme ? styles.modalFourthtext: darkstyles.modalFourthtext }>Mongopark</Text>
            </View>
</View>
<View>              
            <Text style={colorScheme ? styles.modalThirdtext: darkstyles.modalThirdtext }>X USERNAME</Text>
            <Text style={colorScheme ? styles.modalFourthtext: darkstyles.modalFourthtext }>dev_mong</Text>
            </View>
            </View>


<View style={colorScheme ? styles.modalFirstrow: darkstyles.modalFirstrow }>
</View>



<View style={[colorScheme ? styles.modalFourthrow: darkstyles.modalFourthrow,{paddingBottom: 40, }] }>
<View style={colorScheme ? styles.modalThirdrow: darkstyles.modalThirdrow }>
            <View style={colorScheme ? styles.modalTextwrapper: darkstyles.modalTextwrapper }>
            <Text style={colorScheme ? styles.modalThirdtext: darkstyles.modalThirdtext }>STACK</Text>
            <Text style={colorScheme ? styles.modalFourthtext : darkstyles.modalFourthtext }>Mobile Development & Web Development</Text>
            </View>
</View>
            <View>
              <View style={colorScheme ? styles.modalIconwrapper: darkstyles.modalIconwrapper }>
            <Text style={colorScheme ? styles.modalThirdtext: darkstyles.modalThirdtext }>GITHUB PROFILE</Text>
            {/* <EvilIcons name="external-link" style={colorScheme ? styles.modalThirdicon: darkstyles.modalThirdicon } onPress={webviewSwitch} /> */}

            {/* custom button component below */}
            <TouchableHighlight onPress={webviewSwitch} style={colorScheme ? styles.modalThirdbutton: darkstyles.modalThirdbutton }>
              <Text style={colorScheme ? styles.modalThirdbuttontext: darkstyles.modalThirdbuttontext } >Open Github</Text>
              </TouchableHighlight>
</View>
            <Pressable onPress={webviewSwitch}><Text style={colorScheme ? styles.modalFourthtext: darkstyles.modalFourthtext }>https://github.com/Mongopark</Text></Pressable>
            </View>
        </View>
        </View>

        </SafeAreaView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex:1,
  },
  modal: {
    flex:1,
    backgroundColor: 'white',
  },
  modalView: {
    flex: 3,
    borderRadius: 20,
  },
  modalHead: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    backgroundColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingpng: {
    width: 145,
    height: 145,
    borderRadius: 80,
  },
  modalFirstrow: {
    backgroundColor: 'white',
    height: 20,
    paddingLeft: 20,
  },
  modalThirdrow: {
    borderBottomColor: 'black',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 1,
    borderRadius: 50,
  },
  modalFourthrow: {
    backgroundColor: '#ececec',
  },
    modalTextwrapper: {
      paddingBottom: 10,
    },
    modalThirdtext: {
      fontSize: 15, 
      paddingLeft: 18,
      color: 'grey',
    },
    modalThirdbutton: {
      marginTop: 3,
      borderRadius: 50,
      backgroundColor: '#36454f',
      fontSize: 24, 
      fontWeight: 'bold',
      color: 'white',
      marginHorizontal: 20,
    },
    modalThirdbuttontext: {
      paddingHorizontal: 14,
      fontSize: 14, 
      fontWeight: 'bold',
      color: '#cccccc',
    },
    modalFourthtext: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 18, 
      color: 'blue',
    },
    modalIconwrapper: {
      flexDirection: 'row',
    },
    switchcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      justifyContent: 'flex-end',
    },
    switchlabel: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    switch: {
      trackColor: { false: '#cccccc', true: 'grey' },
    },
    webviewview: {
      width: '100%',
      height: '120%',
      backgroundColor: 'white',
      },
        webviewicon: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        marginTop: 25,
        fontSize: 24,
        color: 'black',
        },
        webview: { flex: 1,
        backgroundColor: 'white',
        },
});





const darkstyles = StyleSheet.create({
  cont: {
    flex:1,
  },modal: {
    flex: 1,
    backgroundColor: '#36454f',
  },
  modalView: {
    flex: 3,
    borderRadius: 20,
  },
  modalHead: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    backgroundColor: '#708090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingpng: {
    width: 145,
    height: 145,
    borderRadius: 80,
  },
  modalFirstrow: {
    backgroundColor: '#36454f',
    height: 20,
    paddingLeft: 20,
  },
  modalThirdrow: {
    borderBottomColor: 'white',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 1,
    borderRadius: 50,
  },
  modalFourthrow: {
    backgroundColor: '#708090',
  },
    modalTextwrapper: {
      paddingBottom: 10,
    },
    modalThirdtext: {
      fontSize: 15, 
      paddingLeft: 18,
      color: 'black',
    },
    modalThirdbutton: {
      marginTop: 3,
      borderRadius: 50,
      backgroundColor: '#cccccc',
      fontSize: 24, 
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    modalThirdbuttontext: {
      paddingHorizontal: 14,
      fontSize: 14, 
      fontWeight: 'bold',
      color: '#36454f',
    },
    modalFourthtext: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 18, 
      color: 'white',
    },
    modalIconwrapper: {
      flexDirection: 'row',
    },
    switchcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      justifyContent: 'flex-end',
      backgroundColor: '#36454f',
    },
    switchlabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
    switch: {
      trackColor: { false: 'grey', true: '#cccccc' },
    },
    webviewview: {
      width: '100%',
      height: '120%',
      backgroundColor: '#36454f',
      },
        webviewicon: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        marginTop: 25,
        fontSize: 24,
        color: 'white',
        },
        webview: { flex: 1,
        backgroundColor: '#36454f',
        },
});

export default App;