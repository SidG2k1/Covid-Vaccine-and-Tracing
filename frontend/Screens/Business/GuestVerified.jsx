import React from 'react';
import { View } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';

const GuestVerified = ({ route, navigation }) => {
  console.log(route.params.data);
  return (
    <View>
      <Title>GUEST VERIFIED</Title>
      <Svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="0.5" y="0.5" width="239" height="239" rx="19.5" fill="#FFC7C7" stroke="black"/>
        <G clip-path="url(#clip0)">
        <Path d="M99.1079 166.669L56.7651 124.326C54.2212 121.783 54.2212 117.658 56.7651 115.114L65.9775 105.901C68.5213 103.357 72.6462 103.357 75.1901 105.901L103.714 134.425L164.81 73.3298C167.354 70.7859 171.479 70.7859 174.022 73.3298L183.235 82.5424C185.779 85.0863 185.779 89.2109 183.235 91.755L108.321 166.67C105.776 169.213 101.652 169.213 99.1079 166.669Z" fill="black"/>
        </G>
        <Defs>
        <ClipPath id="clip0">
        <Rect width="130.286" height="130.286" fill="white" transform="translate(54.8572 54.8569)"/>
        </ClipPath>
        </Defs>
      </Svg>
      <Title>John Smith</Title>
      <Subtitle>Let’s get you set up with your scanning system to verify the vaccination status of your guests.</Subtitle>
    </View>
  );
}

export default GuestVerified;