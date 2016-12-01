export default class Wrapper extends React.Component {
  componentDidMount() {
    // require('../js/loader.js');
    require('../js/column-graph.js');
  }
  render () {
    return (
      <div className="flex flex-center full-height-vh flex-middle">
        <div>
          <div id='column-graph'></div>
          <b>Source</b>
          <p style={{marginTop: 0}}>The Labor Force Survey,  National Statistical Office, Ministry of Information and Communication Technology</p>
          <b>Note</b>
          <p style={{marginTop: 0}}>
            Unemployed Rate = Unemployed x 100 / Total Labor force
          </p>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Wrapper />, document.getElementById('app'));