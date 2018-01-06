const React = require('react');
const MDL = require('mdl-react');
const Components = require('../Component/Card');
const api = require('../js/api.js');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            temperature: 999,
            humidity: 666,
            soil: 333,
            PM: 2333,
            PIR1: '躲貓貓一號',
            PIR2: '躲貓貓二號',
            PIR3: '躲貓貓三號',
        };
    },

    componentWillMount: function () {
        this.getData();
    },

    isAnyOneAtHome: function (input) {
        if (input === '1') {
            return '有人在家';
        } else if (input === '0') {
            return '沒人在家';
        } else {
            return '工程師偷懶中';
        }
    },

    getData: function () {
        api.getTS('/feed/last.json?results=1&api_key=VCKEBIBCE87WR2NO', function (body, text) {
            this.setState({
                'temperature': body['field1'],
                'humidity': body['field2'],
            });
        }.bind(this));

        api.get('/', function (body, text) {
            this.setState({
                'PIR1': this.isAnyOneAtHome(body[0]['pir1']),
            });
        }.bind(this));
    },

    render: function () {

        const bgColor1 = (this.state.PIR1 === '有人在家') ? '#12FF34' : '#b92929';

        return (
            <div style={{padding: '20px'}}>
                <Components.DocTitle title="一般偵測"></Components.DocTitle>
                <hr/>
                <MDL.Grid>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardWithValue
                            title="溫度狀態"
                            text="目前溫度為："
                            value={this.state.temperature}
                            unit="度"
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardWithValue
                            title="濕度狀態"
                            text="目前濕度為："
                            value={this.state.humidity}
                            unit="%"
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardWithValue
                            title="房間一番"
                            text="有沒有人在家～"
                            value={this.state.PIR1}
                            style={{backgroundColor: bgColor1}}
                        />
                    </MDL.GridCell>
                </MDL.Grid>
            </div>
        );
    },

});