"LIRI" bot (siri-"ish" clone)
====

Welcome to my first 'NodeJS' App!  

This is a simple NodeJS app that takes in certain commands and outputs (hopefully) desired output. 

```
**Note**:  
This app uses the following APIs: 
* Band In Town 
* Spotify
* OMDB

You will need your own keys/ids to make it work.  
```
Here are the commands and syntax to use:

Call the app:  
`node liri.js` `command` `arguments`

| Command | Arguments | Description
| --- | --- | --- |
| `concert-this` | {Artist/Band Name, search-string} | **Searches for Concert Dates for a supplied Artist** |
| `spotify-this-song` | {Song Title, search-string} | **Searches for up to 10 songs with this title** |
| `movie-this` | {Movie Title, search-string} | **Searches for a movie with supplied name** |
| `do-what-it-says` | N/A | **Takes input from "random.txt** |

See below for examples:

## concert-this  
`concert-this` Ed Sheeran  
#
<img src="figure1.gif" width="800"> 

## spotify-this-song  
`spotify-this-song` A Cover is Not the Book  
#
<img src="figure2.gif" width="800"> 


## movie-this
`movie-this` Mary Poppins Returns  
#
<img src="figure3.gif" width="800"> 


### `do-what-it-says`  
`do-what-it-says` (no parameters)
> ##### random.txt contains the following:
> spotify-this-song,"I Want it That Way"  
> movie-this,"Pulp Fiction"  
> concert-this,Katy Perry  
#
<img src="figure4.gif" width="800"> 
