import React from 'react';
import DisplayItem from './DisplayItem'

class DisplayResults extends React.Component{

    render()
    {
        
        return this.props.symbols.map((sym) =>(
            <DisplayItem sym={sym} key={sym.id} />
        ));
        
    }

}


export default DisplayResults;