import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Title from "../../components/Title";
import styledComponentsNativeCjs from 'styled-components/native';
import Svg, { Path, Rect } from 'react-native-svg';
import Subtitle from '../../components/Subtitle';
import PrimaryButton from '../../components/PrimaryButton';
import Alternate from '../../components/Alternate';

const CamView = styledComponentsNativeCjs.View`
box-shadow: -4px 4px 8px #CFD7E9;
/* UI White */
background: #FFFFFF;

/* outline */
border: 1px solid #FAFBFF;
border-radius: 20px;
height: 408px;
margin-bottom: 5px;
overflow: hidden;
`;

const SmallText = styledComponentsNativeCjs.Text`
font-family: 'Montserrat';
font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;

  text-align: center;
  letter-spacing: -0.408px;

  color: #252525;
`

const QRVerification = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
   
          <View>

          <Title style={{ marginTop: 30, marginBottom: 5}}>{ scanned ? "User 1000-01" : "QR Code Scan"}</Title>
      <CamView>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            height: 408,
            width: '100%',
            overflow: "hidden",
          }}
        />
        {scanned ? (
          <View style={{position: "absolute", height: "100%", width: "100%", backgroundColor: "rgba(255,255,255,0.5)"}}>
          <Svg style={{ position: "absolute", top: 28, left: -10}} width="354" height="262" viewBox="0 0 354 262" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M125.57 8.8L114.59 34H109.982L98.9665 8.8H104.042L112.43 28.24L120.89 8.8H125.57ZM144.428 24.496C144.428 24.808 144.404 25.252 144.356 25.828H129.272C129.536 27.244 130.22 28.372 131.324 29.212C132.452 30.028 133.844 30.436 135.5 30.436C137.612 30.436 139.352 29.74 140.72 28.348L143.132 31.12C142.268 32.152 141.176 32.932 139.856 33.46C138.536 33.988 137.048 34.252 135.392 34.252C133.28 34.252 131.42 33.832 129.812 32.992C128.204 32.152 126.956 30.988 126.068 29.5C125.204 27.988 124.772 26.284 124.772 24.388C124.772 22.516 125.192 20.836 126.032 19.348C126.896 17.836 128.084 16.66 129.596 15.82C131.108 14.98 132.812 14.56 134.708 14.56C136.58 14.56 138.248 14.98 139.712 15.82C141.2 16.636 142.352 17.8 143.168 19.312C144.008 20.8 144.428 22.528 144.428 24.496ZM134.708 18.16C133.268 18.16 132.044 18.592 131.036 19.456C130.052 20.296 129.452 21.424 129.236 22.84H140.144C139.952 21.448 139.364 20.32 138.38 19.456C137.396 18.592 136.172 18.16 134.708 18.16ZM153.035 17.584C154.331 15.568 156.611 14.56 159.875 14.56V18.844C159.491 18.772 159.143 18.736 158.831 18.736C157.079 18.736 155.711 19.252 154.727 20.284C153.743 21.292 153.251 22.756 153.251 24.676V34H148.751V14.776H153.035V17.584ZM163.692 14.776H168.192V34H163.692V14.776ZM165.96 11.608C165.144 11.608 164.46 11.356 163.908 10.852C163.356 10.324 163.08 9.676 163.08 8.908C163.08 8.14 163.356 7.504 163.908 7C164.46 6.472 165.144 6.208 165.96 6.208C166.776 6.208 167.46 6.46 168.012 6.964C168.564 7.444 168.84 8.056 168.84 8.8C168.84 9.592 168.564 10.264 168.012 10.816C167.484 11.344 166.8 11.608 165.96 11.608ZM181.91 10.672C180.014 10.672 179.066 11.704 179.066 13.768V14.92H184.358V18.52H179.21V34H174.71V18.52H171.542V14.92H174.71V13.696C174.71 11.632 175.31 10.012 176.51 8.836C177.71 7.636 179.402 7.036 181.586 7.036C183.314 7.036 184.67 7.384 185.654 8.08L184.394 11.464C183.626 10.936 182.798 10.672 181.91 10.672ZM190.27 14.776H194.77V34H190.27V14.776ZM192.538 11.608C191.722 11.608 191.038 11.356 190.486 10.852C189.934 10.324 189.658 9.676 189.658 8.908C189.658 8.14 189.934 7.504 190.486 7C191.038 6.472 191.722 6.208 192.538 6.208C193.354 6.208 194.038 6.46 194.59 6.964C195.142 7.444 195.418 8.056 195.418 8.8C195.418 9.592 195.142 10.264 194.59 10.816C194.062 11.344 193.378 11.608 192.538 11.608ZM218.749 24.496C218.749 24.808 218.725 25.252 218.677 25.828H203.593C203.857 27.244 204.541 28.372 205.645 29.212C206.773 30.028 208.165 30.436 209.821 30.436C211.933 30.436 213.673 29.74 215.041 28.348L217.453 31.12C216.589 32.152 215.497 32.932 214.177 33.46C212.857 33.988 211.369 34.252 209.713 34.252C207.601 34.252 205.741 33.832 204.133 32.992C202.525 32.152 201.277 30.988 200.389 29.5C199.525 27.988 199.093 26.284 199.093 24.388C199.093 22.516 199.513 20.836 200.353 19.348C201.217 17.836 202.405 16.66 203.917 15.82C205.429 14.98 207.133 14.56 209.029 14.56C210.901 14.56 212.569 14.98 214.033 15.82C215.521 16.636 216.673 17.8 217.489 19.312C218.329 20.8 218.749 22.528 218.749 24.496ZM209.029 18.16C207.589 18.16 206.365 18.592 205.357 19.456C204.373 20.296 203.773 21.424 203.557 22.84H214.465C214.273 21.448 213.685 20.32 212.701 19.456C211.717 18.592 210.493 18.16 209.029 18.16ZM241.899 7.288V34H237.579V31.516C236.835 32.428 235.911 33.112 234.807 33.568C233.727 34.024 232.527 34.252 231.207 34.252C229.359 34.252 227.691 33.844 226.203 33.028C224.739 32.212 223.587 31.06 222.747 29.572C221.907 28.06 221.487 26.332 221.487 24.388C221.487 22.444 221.907 20.728 222.747 19.24C223.587 17.752 224.739 16.6 226.203 15.784C227.691 14.968 229.359 14.56 231.207 14.56C232.479 14.56 233.643 14.776 234.699 15.208C235.755 15.64 236.655 16.288 237.399 17.152V7.288H241.899ZM231.747 30.4C232.827 30.4 233.799 30.16 234.663 29.68C235.527 29.176 236.211 28.468 236.715 27.556C237.219 26.644 237.471 25.588 237.471 24.388C237.471 23.188 237.219 22.132 236.715 21.22C236.211 20.308 235.527 19.612 234.663 19.132C233.799 18.628 232.827 18.376 231.747 18.376C230.667 18.376 229.695 18.628 228.831 19.132C227.967 19.612 227.283 20.308 226.779 21.22C226.275 22.132 226.023 23.188 226.023 24.388C226.023 25.588 226.275 26.644 226.779 27.556C227.283 28.468 227.967 29.176 228.831 29.68C229.695 30.16 230.667 30.4 231.747 30.4ZM247.21 8.8H252.538L251.638 25.648H248.074L247.21 8.8ZM249.874 34.252C249.034 34.252 248.338 33.988 247.786 33.46C247.234 32.908 246.958 32.236 246.958 31.444C246.958 30.652 247.234 29.992 247.786 29.464C248.338 28.936 249.034 28.672 249.874 28.672C250.69 28.672 251.362 28.936 251.89 29.464C252.442 29.992 252.718 30.652 252.718 31.444C252.718 32.236 252.442 32.908 251.89 33.46C251.362 33.988 250.69 34.252 249.874 34.252Z" fill="#2165ED"/>
            <Path d="M149.419 237.612L93.5188 181.712C90.1604 178.354 90.1604 172.909 93.5188 169.55L105.681 157.388C109.039 154.029 114.485 154.029 117.843 157.388L155.5 195.044L236.157 114.388C239.515 111.03 244.961 111.03 248.319 114.388L260.481 126.55C263.839 129.909 263.839 135.354 260.481 138.712L161.581 237.613C158.222 240.971 152.777 240.971 149.419 237.612V237.612Z" fill="#2165ED"/>
          </Svg>
          </View>
          
        ) : (
          <Svg style={{ position: "absolute", top: 58, left: 40}} width="238" height="302" viewBox="0 0 238 302" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="0.5" y="0.5" width="237" height="301" rx="9.5" stroke="#2165ED"/>
            <Path d="M111.383 120.283V181.132" stroke="#2165ED" stroke-width="3" stroke-linecap="round"/>
            <Path d="M81 151H141.849" stroke="#2165ED" stroke-width="3" stroke-linecap="round"/>
          </Svg>
        )}
      </CamView>
      {scanned ? (
        <View>
        <SmallText>This guest has been logged to your guestbook, if any covid-19 exposure may occur, this guest will be notified immediately.</SmallText>
        <View style={styles.formGroup}>
          <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
            <PrimaryButton style={{ width: "100%", marginBottom: 10 }} title="Scan Again" onPress={() => setScanned(false)}/>
            <Alternate>
              <Text>Check guestbook</Text>
            </Alternate>
          </View>
        </View>
      </View>
      ) : (
        <Subtitle>Please place the guest’s QR code in the centre of the screen until the QR code is captured by this device.</Subtitle>
      )}
          </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  formGroup: {
    marginTop: 8,
    marginBottom: 8
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  }
})

export default QRVerification;