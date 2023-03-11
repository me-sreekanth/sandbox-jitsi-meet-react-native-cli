/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { joinAppointment } from './src/Teleconsultation/TeleconsultationModule';
import { config } from './src/Teleconsultation/config';
import JitsiMeet from './src/Teleconsultation/JitsiMeet';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isConferenceVisible, setIsConferenceVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const onConferenceTerminated = nativeEvent => {
    /* Conference terminated event */
    console.log('onConferenceTerminated', nativeEvent);
    // setMeetView(false);
    setIsConferenceVisible(false)
  };

  const onConferenceJoined = nativeEvent => {
    /* Conference joined event */
    console.log('onConferenceJoined', nativeEvent);
  };

  const onConferenceWillJoin = nativeEvent => {
    /* Conference will join event */
    console.log('onConferenceWillJoin', nativeEvent);
  };

  return (
      <View style={{flex: 1}}>

        {Platform.OS === 'ios' && isConferenceVisible && <JitsiMeet
            onConferenceJoined={onConferenceJoined}
            onConferenceTerminated={onConferenceTerminated}
            onConferenceWillJoin={onConferenceWillJoin}
            />
          }
          {Platform.OS === 'android' && <Button
           onPress={() => joinAppointment({serverUrl: 'https://meet.jit.si', roomName: "qwerty", displayName: "Sreekanth T", email: "me.sreekantht@gmail.com", config: config})}
          title='Start Android Jitsi Modulue'
          />}
          {Platform.OS === 'ios' && isConferenceVisible === false && 
          <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
            <Button 
            onPress={() => setIsConferenceVisible(true)}
            title='Start iOS Jitsi Modulue' />
          </View>}
          </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
