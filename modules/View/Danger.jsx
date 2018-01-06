const React = require('react');
const MDL = require('mdl-react');
const Components = require('../Component/Card');
const api = require('../js/api.js');

module.exports = React.createClass({

    getInitialState: function () {
        return {
            fire: 999,
            gas: 666,
            co: 333,
            zone: 233,
        };
    },

    componentWillMount: function () {
        this.getData();
    },

    getData: function () {
        api.getTS('/feed/last.json?results=1&api_key=VCKEBIBCE87WR2NO', function (body, text) {
            this.setState({
                'fire': body['fire'],
                'gas': body['gas'],
                'co': body['field3'],
                'zone': body['zone']
            });
        }.bind(this));
    },

    render: function () {
        return (
            <div style={{padding: '20px'}}>
                <Components.DocTitle title="危險偵測"></Components.DocTitle>
                <hr/>
                <MDL.Grid>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardWithValue
                            title="瓦斯"
                            text="讀取數值為："
                            value={this.state.gas}
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardWithValue
                            title="火災"
                            text="讀取數值為："
                            value={this.state.fire}
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardWithValue
                            title="一氧化碳"
                            text="讀取數值為："
                            value={this.state.co}
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardWithValue
                            title="限制區域"
                            text="讀取數值為："
                            value={this.state.zone}
                        />
                    </MDL.GridCell>
                </MDL.Grid>
            </div>
        );
    },

});
