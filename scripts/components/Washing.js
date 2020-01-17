import React from 'react';

class Washing extends React.Component
{

    getStyle = (index) => {
        return{
            padding: '5px',
            background: this.props.symbols[index].display ? '#00ff00' : '#fff'
        }
        
    }

    render() 
    {

        return (
        <div>
            <h2 style={headerStyle}>Washing</h2>
            <div className="container">


                <button style={this.getStyle(0)}
                 onClick={this.props.updateList.bind(this, this.props.symbols[0].id)}>
                    <img src={"../pictures/washing/wash_6.png"} alt="" />
                </button>
                <button style={this.getStyle(1)}
                 onClick={this.props.updateList.bind(this, this.props.symbols[1].id)}>
                    <img src={"../pictures/washing/wash_7.png"} alt="" />
                </button>
                <button style={this.getStyle(2)}
                 onClick={this.props.updateList.bind(this, this.props.symbols[2].id)}>
                    <img src={"../pictures/washing/wash_8.png"} alt="" />
                </button>
                <button style={this.getStyle(3)}
                 onClick={this.props.updateList.bind(this, this.props.symbols[3].id)}>
                    <img src={"../pictures/washing/wash_9.png"} alt="" />
                </button>
                <button style={this.getStyle(4)}
                 onClick={this.props.updateList.bind(this, this.props.symbols[4].id)}>
                    <img src={"../pictures/washing/wash_10.png"} alt="" />
                </button>
            </div>
        </div>
        )
    }
    
    // (

        // <div>
        //     <h2 style={headerStyle}>Washing</h2>
        //     <div className="container">
        //         {/* <input 
        //             type="submit" 
        //             value="Submit" 
        //             className="btn" 
        //             style={{flex: '1'}}
        //         /> */}

        //         this.props.symbols.map((sym) => (

        //         ))

        //         <button><img src={"../pictures/washing/wash_6.png"} alt="" /></button>
        //         <button><img src={"../pictures/washing/wash_7.png"} alt="" /></button>
        //         <button><img src={"../pictures/washing/wash_8.png"} alt="" /></button>
        //         <button><img src={"../pictures/washing/wash_9.png"} alt="" /></button>
        //         <button><img src={"../pictures/washing/wash_10.png"} alt="" /></button>
        //     </div>
        // </div>
        
    // )
}

const headerStyle = {
    // background: '#333',
    // color: '#fff',
    textAlign: 'center',
    padding: '17px'
}


export default Washing;