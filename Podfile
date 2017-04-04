platform :ios, '8.0'
use_frameworks!

project 'index.ios.js'

target 'AwesomeProject' do

  pod 'LyftSDK'

  pod 'Yoga', :path => '../../node_modules/react-native/ReactCommon/yoga/Yoga.podspec'
  pod 'React', path: '../../node_modules/react-native', :subspecs => [
    'Core',
    'RCTActionSheet',
    'RCTAnimation',
    'RCTGeolocation',
    'RCTImage',
    'RCTLinkingIOS',
    'RCTNetwork',
    'RCTSettings',
    'RCTText',
    'RCTVibration',
    'RCTWebSocket'
  ]

  pod 'react-native-maps', :path => '../node_modules/react-native-maps'

  # pod 'GoogleMaps'  # <~~ remove this line if you do not want to support GoogleMaps on iOS
  # pod 'react-native-maps', path: '../../'
  # pod 'react-native-google-maps', path: '../../'  # <~~ if you need GoogleMaps support on iOS

end


post_install do |installer|
  installer.pods_project.targets.each do |target|
    if target.name == "react-native-google-maps"
      target.build_configurations.each do |config|
        config.build_settings['CLANG_ENABLE_MODULES'] = 'No'
      end
    end
  end
end
