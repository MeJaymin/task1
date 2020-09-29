//
//  Bulb.swift
//  ReduxTask
//
//  Created by Heli Shah on 20/09/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(DeviceCheck)
class DeviceCheck: NSObject {
  
@objc
  static var isDevice = false

  @objc
  func checkIsEmulator() {
   
    if Platform.isSimulator {
      DeviceCheck.isDevice = true
 print("Is simulator")
      
    } else {
        print("Is device")
      DeviceCheck.isDevice = false

    }
  }

  @objc
  func getStatusDevice(_ callback: RCTResponseSenderBlock) {
    callback([NSNull(), DeviceCheck.isDevice])
  }
  
@objc
static func requiresMainQueueSetup() -> Bool {
return true
}
}
struct Platform {
    static var isSimulator: Bool {
        #if targetEnvironment(simulator)
            // We're on the simulator
            return true
        #else
            // We're on a device
             return false
        #endif
    }
}
