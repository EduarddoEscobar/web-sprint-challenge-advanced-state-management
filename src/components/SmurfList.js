import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

 const SmurfList = ({ loading, smurfs })=> {
    
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {smurfs.map((smurf, ind) => <Smurf key={ind} smurf={smurf}/>)}
    </div>);
}

const mapStateToProps = (state) => {
    return{
        loading: state.loading,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.