import { Text, Image, View, StyleSheet } from 'react-native';
import { useState, useEffect, useContext, } from 'react';
import PantallasContext from './Context';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function Pantalla2({ navigation }) {
  const [current, setCurrent] = useState(0);
  const { name, setName } = useContext(PantallasContext);
  const [track, setTrack] = useState([{ banda: "", url: "", title: "", album: "", cover: "" }]);
  const [url, setUrl] = useState([{ url: "" }]);
  const [bPlay, setBPlay] = useState(true)
  const [songState, setSongState] = useState(null);


  useEffect(() => {
    getData(name);
  }, []);

  const stopAudio = async () => {
    await songState.stopAsync();
  };


  const play = async () => {

    if (bPlay === true) {
      try {
        const playbackObject = new Audio.Sound();
        await playbackObject.loadAsync({ uri: url[current].url }, { shouldPlay: true })
        setSongState(playbackObject)
        setBPlay(false);
      } catch (error) {
        console.log("Error en el metodo play", error.message)
      }
    } else if (bPlay === false) {
      try {
        const result = await songState.getStatusAync();
        if (result.isLoaded) {
          if (result.isPlaying === true) {
            songState.pauseAsync();
            setBPlay(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const getData = async (searchTerm) => {
    const endpoint =
      'https://api.deezer.com/search?q=' + `${searchTerm}`;
    try {
      const response = await fetch(endpoint, { cache: 'no-cache' });
      if (response.ok) {
        const jsonResponse = await response.json();
        try {
          const endpoint2 = jsonResponse.data[0].artist.tracklist;
          const response2 = await fetch(endpoint2, { cache: 'no-cache' });
          if (response2.ok) {
            const jsonResponse2 = await response2.json();
            let newArr = [...track];
            newArr[0] = {
              banda: jsonResponse.data[0].artist.name,
              url: jsonResponse.data[0].artist.picture,
              title: jsonResponse2.data[0].title,
              album: jsonResponse2.data[0].album.title,
              cover: jsonResponse2.data[0].album.cover_big,
            };
            newArr.push({
              banda: jsonResponse.data[1].artist.name,
              url: jsonResponse.data[1].artist.picture,
              title: jsonResponse2.data[1].title,
              album: jsonResponse2.data[1].album.title,
              cover: jsonResponse2.data[1].album.cover_big,
            });
            newArr.push({
              banda: jsonResponse.data[2].artist.name,
              url: jsonResponse.data[2].artist.picture,
              title: jsonResponse2.data[2].title,
              album: jsonResponse2.data[2].album.title,
              cover: jsonResponse2.data[2].album.cover_big,
            });
            newArr.push({
              banda: jsonResponse.data[3].artist.name,
              url: jsonResponse.data[3].artist.picture,
              title: jsonResponse2.data[3].title,
              album: jsonResponse2.data[3].album.title,
              cover: jsonResponse2.data[3].album.cover_big,
            });
            newArr.push({
              banda: jsonResponse.data[4].artist.name,
              url: jsonResponse.data[4].artist.picture,
              title: jsonResponse2.data[4].title,
              album: jsonResponse2.data[4].album.title,
              cover: jsonResponse2.data[4].album.cover_big,
            });
            var arr2 = [5];
            arr2[0] = { url: jsonResponse2.data[0].preview };
            arr2.push({ url: jsonResponse2.data[1].preview })
            arr2.push({ url: jsonResponse2.data[2].preview })
            arr2.push({ url: jsonResponse2.data[3].preview })
            arr2.push({ url: jsonResponse2.data[4].preview })
            setUrl(arr2);
            setTrack(newArr);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleSiguiente() {
    setBPlay(true);
    if (current === 4) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);

    }
  }

  function handleAnterior() {
    setBPlay(true);
    if (current === 0) {
      setCurrent(4);
    } else {
      setCurrent(current - 1);

    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: track[current].url }}></Image>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>{track[current].banda}</Text>
      </View>
      <Image
        marginTop={50}
        style={{ width: 250, height: 250 }}
        source={{ uri: track[current].cover }}
        marginBottom={25}></Image>
      <Text>Song: {track[current].title}</Text>
      <Text>Album: {track[current].album}</Text>
      <View style={{ marginTop: 50, flexDirection: 'row' }}>
        <AntDesign name="stepbackward" size={75} color="black" onPress={handleAnterior} />
        <Ionicons name={bPlay ? "play-circle-outline" : 'pause-circle-outline'} size={75} color="black" onPress={play} />
        <Entypo name="controller-stop" size={75} color="black" onPress={stopAudio} />
        <AntDesign name="stepforward" size={75} color="black" onPress={handleSiguiente} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row'
  },
  container: {
    marginLeft: 50
  }
})