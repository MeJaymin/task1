//
//  Bulb.m
//  ReduxTask
//
//  Created by Heli Shah on 20/09/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(DeviceCheck, NSObject)

//RCT_EXTERN_METHOD(turnOn)
//RCT_EXTERN_METHOD(turnOff)
//RCT_EXTERN_METHOD(getStatus: (RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(checkIsEmulator)
RCT_EXTERN_METHOD(getStatusDevice: (RCTResponseSenderBlock)callback)

@end
