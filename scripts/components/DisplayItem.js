import React from 'react';

class DisplayItem extends React.Component
{
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #333 solid'
        }
    }
    render()
    {
        if(this.props.sym.display === true)
        {
            return (
                <div style={this.getStyle()}>
                    <p>
                        {this.props.sym.text}
                    </p>
                    
                </div>
            )
        }
        else
        {
            return null;
        }
        
    }
}

export default DisplayItem;