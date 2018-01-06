const React = require('react');
const MDL = require('mdl-react');
const Components = require('../Component/Card');
const api = require('../js/api.js');

module.exports = React.createClass({

    getInitialState: function () {
        return {
            clickTimes: 0,
            fanStatus: '風扇狀態',
        };
    },

    componentWillMount: function () {
        this.onClickFan();
    },

    onClickFan: function () {
        // control Fan
        const query = {
            'action': this.state.clickTimes,
        };
        const fanStatusAry = [
            '關',
            '開',
            '弱',
            '強',
        ];
        api.get('/phpMQTT/', query, function (body, text) {
            // 中心思想 this.state.clickTimes = (this.state.clickTimes == 3) ? 0 : this.state.clickTimes;
            if (this.state.clickTimes == 3) {
                this.setState({
                    clickTimes: 0,
                    fanStatus: fanStatusAry[3],
                });
            } else {
                this.setState({
                    clickTimes: ++this.state.clickTimes,
                    fanStatus: fanStatusAry[this.state.clickTimes - 1],
                });
            }
        }.bind(this));
    },

    onChangeAir: function (e) {
        // control air_conditioning when e = true:open||false:close
        const query = {
            'action': (e === true) ? 1 : 0,
        };
        api.get('/phpMQTT/', query, function (body, text) {

        });
    },

    onChangeDoor: function (e) {
        // control door when e = true:open||false:close
        const query = {
            'action': (e === true) ? 1 : 0,
        };
        api.get('/phpMQTT/door.php', query, function (body, text) {

        });
    },

    onChangeL0: function (e) {
        // control door when e = true:open||false:close
        const query = {
            'action': (e === true) ? 1 : 0,
            'id': 0,
        };
        api.get('/phpMQTT/', query, function (body, text) {

        });
    },

    onChangeL1: function (e) {
        // control door when e = true:open||false:close
        const query = {
            'action': (e === true) ? 1 : 0,
            'id': 1,
        };
        api.get('/phpMQTT/', query, function (body, text) {

        });
    },

    onChangeL2: function (e) {
        // control door when e = true:open||false:close
        const query = {
            'action': (e === true) ? 1 : 0,
            'id': 2,
        };
        api.get('/phpMQTT/', query, function (body, text) {

        });
    },

    render: function () {

        const btnStyle = {
            margin: '5px',
            display: 'inline-block',
        };

        const cardStyle = {
            margin: '0 auto',
            maxWidth: '300px',
            width: '100%',
            padding: '20px',
            // textAlign : 'center',
        };

        return (
            <div style={{padding: '20px'}}>
                <Components.DocTitle title="控制家電"></Components.DocTitle>
                <hr/>
                <MDL.Grid>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <MDL.Card shadow={4} style={cardStyle}>
                            <h3 style={{textAlign: 'center'}}>紅外線風扇({this.state.fanStatus})</h3>
                            <MDL.Button
                                type="RaisedButton"
                                style={btnStyle}
                            >
                                <button
                                    onClick={this.onClickFan}
                                >
                                    下一步
                                </button>
                            </MDL.Button>
                        </MDL.Card>
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <MDL.Card shadow={4} style={cardStyle}>
                            <h3 style={{textAlign: 'center'}}>冷氣</h3>
                            <MDL.Toggle
                                type="switch"
                                text="開關"
                                onChange={this.onChangeAir}
                            />
                        </MDL.Card>
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <MDL.Card shadow={4} style={cardStyle}>
                            <h3 style={{textAlign: 'center'}}>門</h3>
                            <MDL.Toggle
                                type="switch"
                                text="開關"
                                onChange={this.onChangeDoor}
                            />
                        </MDL.Card>
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <MDL.Card shadow={4} style={cardStyle}>
                            <h3 style={{textAlign: 'center'}}>燈零番</h3>
                            <MDL.Toggle
                                type="switch"
                                text="開關"
                                onChange={this.onChangeL0}
                            />
                        </MDL.Card>
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <MDL.Card shadow={4} style={cardStyle}>
                            <h3 style={{textAlign: 'center'}}>燈一番</h3>
                            <MDL.Toggle
                                type="switch"
                                text="開關"
                                onChange={this.onChangeL1}
                            />
                        </MDL.Card>
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <MDL.Card shadow={4} style={cardStyle}>
                            <h3 style={{textAlign: 'center'}}>燈二番</h3>
                            <MDL.Toggle
                                type="switch"
                                text="開關"
                                onChange={this.onChangeL2}
                            />
                        </MDL.Card>
                    </MDL.GridCell>
                </MDL.Grid>
            </div>
        );
    },

});
