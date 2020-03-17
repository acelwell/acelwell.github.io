// import React from 'react';

class Drying extends React.Component
{
    getStyle = (index) => {
        return{
            padding: '5px',
            background: this.props.symbols[index].display ? '#00ff00' : '#fff'
        }
        
    }

    render()
    {
        return(
            <div>
                <h2 style={headerStyle}>Drying</h2>
                <div className="container">
                    <button style={this.getStyle(5)}
                     onClick={this.props.updateList.bind(this, this.props.symbols[5].id)}>
                        <img src={"../../things/drying/dry_1.png"} alt="" />
                    </button>
                    
                    <button style={this.getStyle(6)}
                     onClick={this.props.updateList.bind(this, this.props.symbols[6].id)}>
                        <img src={"../../things/drying/dry_2.png"} alt="" />
                    </button>

                    <button style={this.getStyle(7)}
                     onClick={this.props.updateList.bind(this, this.props.symbols[7].id)}>
                        <img src={"../../things/drying/dry_3.png"} alt="" />
                    </button>

                    <button style={this.getStyle(8)}
                     onClick={this.props.updateList.bind(this, this.props.symbols[8].id)}>
                        <img src={"../../things/drying/dry_4.png"} alt="" />
                    </button>

                    <button style={this.getStyle(9)}
                     onClick={this.props.updateList.bind(this, this.props.symbols[9].id)}>
                        <img src={"../../things/drying/dry_5.png"} alt="" />
                    </button>
    
                </div>
            </div>
            
        )
    }

}

const headerStyle = {
    // background: '#333',
    // color: '#fff',
    textAlign: 'center',
    padding: '17px'
}


export default Drying;