let React = require('react');
let MDL = require('mdl-react');

module.exports = React.createClass({
    render: function () {
        let btnStyle = {
            margin: '5px',
            display: 'inline-block',
        };

        return <div style={{padding: '20px'}}>
            <MDL.Card shadow={4} style={{
                margin: '0 auto',
                maxWidth: '600px',
                width: '100%',
                padding: '20px',
                textAlign: 'center',
            }}>
                <h1 className='mdl-color-text--grey-800'>WEB-家控介面</h1>
                <h5 className='mdl-color-text--grey-600'>
                    由 Lab301 小組開發
                </h5>
                <p>
                    <MDL.Button type="RaisedButton">
                        <a href='https://github.com/'
                           style={btnStyle}>
                            GitHub
                        </a>
                    </MDL.Button>
                </p>
            </MDL.Card>
        </div>
    }
});
