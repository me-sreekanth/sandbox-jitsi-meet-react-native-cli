package com.sandboxjitsi;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableNativeArray;

/**
 * Expose Java to JavaScript. Methods annotated with {@link ReactMethod} are exposed.
 */
public final class ConferenceModule extends ReactContextBaseJavaModule {

    ConferenceModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     * from JavaScript.
     */
    @Override
    public String getName() {
        return "ActivityStarter";
    }

    @ReactMethod
    public void startTeleconsultation(String serverUrl, String roomName, String displayName, String email, String config) {
//        Timber.d("openMeeting called with facility: " + facility
//                + " and room: " + room);
        Activity activity = getCurrentActivity();
       if (activity != null) {
           Intent intent = new Intent(activity, ConferenceActivity.class);
        //    intent.putExtra("serverUrl", serverUrl);
        //    intent.putExtra("roomName", roomName);
        //    intent.putExtra("displayName", displayName);
        //    intent.putExtra("email", email);       
        //    intent.putExtra("config", config);
           activity.startActivity(intent);
       }
    }


}
