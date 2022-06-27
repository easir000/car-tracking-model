/* footer component */
import React, { Component } from 'react';
import '../styles/footer.css';

export default class footer extends Component {
    render() {
        return (
            <div className="footer-parent">
                <div className="footer">
                    <p>Email us: <a href="mailto:easir@carshare.com">easir@carshare.com</a></p>
                    <p>Call us: (03) 1234 5678</p>
                    <p>Visit us: MZA Car Share, 124 La Trobe St, Melbourne VIC 3000</p>
                </div>
            </div>
        )
    }
}
