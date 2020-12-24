import React from "react"
import SearchBar from "./SearchBar"

class Home extends React.Component {

    state={
        movies: []
    }
    
    componentDidMount(){
        // fetch()
            // .then()
    }

    render(){
        return(
            <>    
                <SearchBar />
            </>
        )
    }
}

export default Home