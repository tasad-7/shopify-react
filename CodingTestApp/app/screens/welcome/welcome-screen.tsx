/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from "react"
import axios from "axios"
import { View, Text, Image, SafeAreaView, StyleSheet, FlatList, Button, Alert } from "react-native"
import { Searchbar } from "react-native-paper"


const Styles = StyleSheet.create({
  CONTAINER: { backgroundColor: "white", flex: 1, paddingHorizontal: 15 },
  DIVIDER: { backgroundColor: "gray", height: 1, marginTop: 10, width: "100%" },
  FULL: { flex: 1 },
  HEADINGTEXT: { alignSelf: "center", color: "black", fontSize: 30 },
  SEARCHBAR: {marginVertical: 30},
  SIDETEXT: { color: "black", fontSize: 16 }
  })

interface MovieInfo {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}


export const WelcomeScreen = () => {
  const [ pageNumber, setPageNumber ] = React.useState(1)
  const [ searchQuery, setSearchQuery ] = React.useState("");
  const [ data, setData ] = React.useState<MovieInfo[]>([]);
  const [ movieReviews, setMovieReviews ] = React.useState(0);

  const SearchResultView = (item: any) => {
    // render flatlist data
    return (
      <View key={item.index}>
      <Text style={Styles.HEADINGTEXT}>{item.item.Title}</Text>
      <Image source={{ uri: item.item.Poster}} style={{height: 300, width: "100%"}}/>
      <Text style={Styles.SIDETEXT}>YEAR: {item.item.Year}</Text>
      <Text style={Styles.SIDETEXT}>CATEGORY: {item.item.Type}</Text>
      <Text style={Styles.SIDETEXT}>IMDB ID: {item.item.imdbID}</Text>
      </View>
    )
    }

    const FlatListSeparator = () => {
      // divider between each items
      return (
      <View style={Styles.DIVIDER} />
      )
    }

    const apiCall = async () => {
      // api call to get data 
      const apiKey = "9e22caae"
      const title = "titanic"
      const page = 1
      try {
        Alert.alert("1")
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=movie&page=${page}`)
       Alert.alert(JSON.stringify(response))
        if(response.data.Search){
          setData([...data, ...response.data.Search])
          setMovieReviews(response.data.totalResults)
        }
      } catch (error) {
        console.log(error)
      }
    }

  // const paginationFunc = () =>{
  //   // pagination
  //   setPageNumber(pageNumber+1)
  //   apiCall()
  // }

  // const clearRecord=()=>{
  //   // clear all movie records
  //   setSearchQuery("")
  //   setData([])
  //   setMovieReviews(0)
  //   setPageNumber(1)
  // }

return ( 
<SafeAreaView testID="WelcomeScreen" style={Styles.FULL}>
  <View style={Styles.CONTAINER}>
    <Text style={Styles.HEADINGTEXT}>Search Movies</Text>
    {/* didnt load icons so the left icon on Search bar is Clear Record functionality */}
      {/* <Searchbar
        placeholder="Enter Movie Name"
        onChangeText={(item) => setSearchQuery(item)}
        value={searchQuery}
        style={Styles.SEARCHBAR}
        onIconPress={() => clearRecord()}
      /> */}
      <Button
        onPress={apiCall}
        title="Search"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
{/* {data.length === 0 ? 
      <Text style={{alignSelf: "center", marginTop: 150, fontStyle: "italic"}}>Nothing to display, use search bar</Text>
      :
      <>  */}
      <Text style={{ marginBottom: 30, fontWeight: "bold" }}>Total Results: {movieReviews}</Text>
      <FlatList
        data={data}
        renderItem={SearchResultView}
        keyExtractor={(item) => item.imdbID}
        // onEndReached={paginationFunc}
        // ItemSeparatorComponent={FlatListSeparator}
      />
      {/* </>
} */}
  </View>
</SafeAreaView>     
    )
  }
