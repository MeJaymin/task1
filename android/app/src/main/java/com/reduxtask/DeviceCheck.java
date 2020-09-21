package com.reduxtask;

import android.os.Build;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceCheck extends ReactContextBaseJavaModule {

    private static Boolean isDevice=false;

    public DeviceCheck(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @ReactMethod
    public void checkIsEmulator(){
        isDevice = isEmulator();
    }

    @ReactMethod
    public void getStatusDevice(
            Callback successCallback) {
        successCallback.invoke(null, isDevice);

    }



    public static boolean isEmulator() {
        return Build.FINGERPRINT.startsWith("generic")
                || Build.FINGERPRINT.startsWith("unknown")
                || Build.MODEL.contains("google_sdk")
                || Build.MODEL.contains("Emulator")
                || Build.MODEL.contains("Android SDK built for x86")
                || Build.MANUFACTURER.contains("Genymotion")
                || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
                || "google_sdk".equals(Build.PRODUCT);
    }

    @Override
    public String getName() {
        return "DeviceCheck";
    }
}
