import React from 'react'
import {render} from 'react-dom'
import {Link, Router} from 'react-router'

const MDL = require('mdl-react');


module.exports = React.createClass({
    mixins: [
        Router.State,
        Router.Navigation,
    ],
    componentDidMount: function () {
        global._transitionTo = this.transitionTo;
    },
    componentDidUpdate: function(prevProps, prevState) {
        console.log('App.componentDidUpdate');
        this.refs.layout.scrollTop(0);
    },
    render() {
        const headerLinks = [
            <a href='https://github.com/' target='_blank'>
                <i className="fa fa-github" style={{fontSize: '15px', marginRight: '5px'}}> </i> GitHub
            </a>,
        ];
        const drawerLinks = [
            <li><Link to="/Home">Home</Link></li>,
            <li><Link to="/Appliances">Appliances</Link></li>,
            <li><Link to="/Generic">Generic Node</Link></li>,
            <li><Link to="/Danger">Danger Node</Link></li>,
            <li><Link to="/About">About</Link></li>
        ];
        return (
            <MDL.Layout ref='layout'
                        title='web-家控介面'
                        href='#'
                        isFixedHeader={true}
                        isFixedDrawer={true}
                        headerLinks={headerLinks}
                        drawerLinks={drawerLinks}
                        contentStyle={{minHeight: '1000px'}}
                        noDrawerTitle={true}
            >
                {this.props.children}
            </MDL.Layout>
        )
    }
});