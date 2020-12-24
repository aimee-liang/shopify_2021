import React from "react"
import NomineeCard from "./NomineeCard"

class Nominees extends React.Component{

    state={
        nominees: []
    }

    componentDidMount(){
        /* fetch all nominees that have been posted on the backend, then
        update state */
    }

    renderNominees = this.state.nominees.map((nominee, index) => <NomineeCard key={index} nominee={nominee} /> )

    render(){
        return (
            <>
                {this.renderNominees}
            </>
        )
    }
}

export default Nominees