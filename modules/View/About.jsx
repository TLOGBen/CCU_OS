const React = require('react');
const MDL = require('mdl-react');
const Components = require('../Component/Card');

module.exports = React.createClass({
    render: function () {
        return (
            <div style={{padding: '20px'}}>
                <MDL.Grid>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardAbout
                            title='蔡秉辰'
                            text='Front-End'
                            github='https://github.com/TLOGBen'
                            avatar='https://avatars3.githubusercontent.com/u/16316583?v=3&s=460'
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardAbout
                            title='劉晉裕'
                            text='HardWare'
                            github='https://github.com/ChinnYu'
                            avatar='https://avatars2.githubusercontent.com/u/32726550?s=400&v=4'
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardAbout
                            title='吳光晉'
                            text='Back-End'
                            github='https://github.com/kuangching'
                            avatar='https://avatars3.githubusercontent.com/u/30891693?s=400&v=4'
                        />
                    </MDL.GridCell>
                    <MDL.GridCell col={3} colPhone={4} colTablet={4}>
                        <Components.CardAbout
                            title='許博智'
                            text='Test'
                            github='https://github.com/Bo6y'
                            avatar='https://avatars0.githubusercontent.com/u/28466852?s=400&v=4'
                        />
                    </MDL.GridCell>
                </MDL.Grid>
            </div>
        );
    }
});
