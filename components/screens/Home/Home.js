import { ActivityIndicator, Image, View } from "react-native";
import Background from "../../global/Background/Background";
import YoutubeIframe from "react-native-youtube-iframe";
import useViewportUnits from "../../../hooks/useViewportUnits";
import { useState } from "react";

import dbsColoredText from '../../../assets/images/homeIntroText.png'
import styles from "./HomeStyles";

const YOUTUBE_WIDTH = 344;
const YOUTUBE_HEIGHT = 194;

export default function Home () {

    const { vw, vh } = useViewportUnits();
    const [error, setError] = useState({youtube: ''});
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleYoutubeError = (e) => {
      console.log(e);
      setError(last => { return { ...last, youtube: e} });
    };

    return (
      <Background style={styles.background}>
        <View style={styles.content}>
          <Image 
            source={dbsColoredText} 
            style={[styles.titleImage, { width: vw(94) }]}
            resizeMode="contain"
          />
          <View style={[styles.videoContainer, { maxWidth: YOUTUBE_WIDTH, minHeight: YOUTUBE_HEIGHT }]}>
            <YoutubeIframe 
              width={YOUTUBE_WIDTH}
              height={!videoLoaded ? 0 : YOUTUBE_HEIGHT}
              videoId={"sxKB91RWCOE"}
              onReady={(e) => setVideoLoaded(true)}
              onError={handleYoutubeError}
            />
            {!videoLoaded && <ActivityIndicator color={'grey'} size={'large'} />}
          </View>
          <View style={styles.titleImage}></View>
        </View>
      </Background>
    );
}