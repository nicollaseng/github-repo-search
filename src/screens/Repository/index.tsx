import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import {WebView} from 'react-native-webview';
import {isIphoneX} from 'react-native-iphone-x-helper';

import {SafeArea} from './styles';

const Repository = (props: any = {}) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <StatusBar barStyle="light-content" />
      {isIphoneX && <SafeArea />}
      <WebView
        source={{uri: props.url}}
        onLoadStart={(syntheticEvent: any) => {
          const {nativeEvent} = syntheticEvent;
          setLoading(nativeEvent.loading);
        }}
        onLoadEnd={(syntheticEvent: any) => {
          const {nativeEvent} = syntheticEvent;
          setLoading(nativeEvent.loading);
        }}
      />
    </>
  );
};

export default Repository;
