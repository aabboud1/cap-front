import React, { Component } from 'react';

class Confirm extends Component {
    render() {
        return (
            <div>
                Confirm page
                <a href="http://localhost:3001/confirm"><input className="btn btn-primary" type="submit" value="Looks Good Home" /></a>
            </div>
        );
    }
}

export default Confirm;
