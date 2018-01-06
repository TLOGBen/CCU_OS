const React = require('react');
const MDL = require('mdl-react');

module.exports = React.createClass({
    displayName: 'CardAbout',

    getDefaultProps: function () {
        return {
            title: '人物名稱',
            text: '職稱描述',
            avatar: 'https://avatars3.githubusercontent.com/u/16316583?v=3&s=460',
            github: 'https://github.com/TLOGBen',
        };
    },

    render: function () {

        const supportTextStyle = {
            fontSize: "40px",
        };

        const titleStyle = {
            color: '#fff',
            background: 'url(' + this.props.avatar + ')' + 'center / cover #46B6AC',
            fontWeight: 'bolder',
        };

        return (
            <a href={this.props.github} target='_blank' style={{textDecoration: 'none'}}>
                <MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
                    <MDL.CardTitle height="460" style={titleStyle}>
                        <h4 className="mdl-card__title-text">
                            {this.props.title}
                        </h4>
                    </MDL.CardTitle>
                    <MDL.CardSupportingText style={supportTextStyle}>
                        <p>{this.props.text}</p>
                    </MDL.CardSupportingText>
                </MDL.Card>
            </a>
        );
    },
});