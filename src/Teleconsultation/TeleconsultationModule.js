import {NativeModules} from 'react-native';

/**
 * open jitsi meet
 */
export const joinAppointment = ({serverUrl, roomName, displayName, email, config}) => {
  const activityStarter = NativeModules.ActivityStarter;

  try {
    console.log(NativeModules);
    activityStarter.startTeleconsultation(serverUrl, roomName, displayName, email, JSON.stringify(config));
  } catch (error) {
    console.log(error);
  }
};
