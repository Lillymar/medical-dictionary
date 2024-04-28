import React, {useState} from "react";
import axios from "axios";
import Results from "./Results"
import "./MedicalDictionary.css";
import Photos from "./Photos"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults]= useState(null);
    let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response){
    setResults(response.data[0]);
}
function handlePexelsResponse(response){
console.log(response.data);
setPhotos(response.data.photos);
}

    function search(event){
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001c255634b3a7b4793949396d2a9364a84";

    let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers ={"Authorization" : `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }
    
    function handleKeywordChange(event){
        setKeyword (event.target.value);
    }

    return( 
    <div className="Dictionary">
        <section>
    <form className="search-form" onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
    </form>
     <div className="hint">
       <em> <strong> 
            suggestion words:</strong> sun, forest, wood, color...</em>
    </div>
    </section>
   
    <Results results={results} />

    <Photos photos={photos} />
      </div>
    );
}