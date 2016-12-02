import {Row, Col} from 'react-bootstrap';
import {init} from '../js/graph.js';
import thailandData from '../json/thailand';
import bangkokData from '../json/bangkok.js';
import centralData from '../json/central.js';
import northernData from '../json/northern.js';
import northeasternData from '../json/northeastern.js';
import southernData from '../json/southern.js';

export default class Wrapper extends React.Component {
  componentDidMount() {
    // require('../js/loader.js');
    init(['bar'], 'thailand-graph', thailandData, 'Figure 1: Thailand Unemployment Rate', 'Year 2006 - 2015');
    init(['bar'], 'bangkok-graph', bangkokData, 'Figure 2: Bangkok Unemployment Rate', 'Year 2006-2015');
    init(['bar'], 'central-graph', centralData, 'Figure 3: Central Region Unemployment Rate', 'Year 2006-2015');
    init(['bar'], 'northern-graph', northernData, 'Figure 4: Northern Region Unemployment Rate', 'Year 2006-2015');
    init(['bar'], 'northeastern-graph', northeasternData, 'Figure 5: Northeastern Region Unemployment Rate', 'Year 2006-2015');
    init(['bar'], 'southern-graph', southernData, 'Figure 6: Southern Region Unemployment Rate', 'Year 2006-2015');
    
  }
  render () {
    return (
      <div className="container-fluid">
      <h1 className="page-header">Unemployment Rate in Thailand</h1>
      <p>Unemployment rate is defined most basically as the percentage of the total labor force that is unemployed but actively 
      seeking employment and willing to work.</p>

      <p style={{marginBottom: "50px"}}>The Unemployment rate can be calculated by the follwing equation: </p>
      <img className="img-responsive center-block" style={{marginBottom: "50px"}} src="/assets/equation.gif" />

      <h1 className="page-header">Research</h1>
      <p style={{marginBottom: "50px"}}>The data and researches are based on the facts, reliable news and rumours about the situations where have ever occurred
      in Thailand. The references are included following the data analysis which catergorized by gender and region.</p>

        <Row>
          <Col sm={12} md={12} lg={12}>
            <div id="thailand-graph" style={{height: "500px", marginBottom: "30px"}} ></div>
          </Col>

          <p className="text-center" style={{marginBottom: "30px"}}><strong>Figure 1:</strong> The Unemployment Rate from all regions in Thailand.</p>
          
          <p className="text-center" style={{marginBottom: "20px"}}><h4><span className="label label-default">2006 - 2009</span></h4>The rate of both Male and Female are relatively high (1.6) compared to the following years due to the economic issues 
          (<a href="https://www.bot.or.th/Thai/MonetaryPolicy/EconomicConditions/AnnualReport/AnnualReport/econ_annual06.pdf">See More</a>).</p>

          <p className="text-center" style={{marginBottom: "20px"}}><h4><span className="label label-default">2010</span></h4>The government releases the <a href="http://www.pntc.ac.th/web2014/Download/KM58.pdf">policy</a> in order to resolve it 
          hence the rate decreases dramatically for all regions.</p>

          <p className="text-center" style={{marginBottom: "20px"}}><h4><span className="label label-default">2011</span></h4>There was the severe disaster in Thailand - 
          <a href="https://en.wikipedia.org/wiki/2011_Thailand_floods"> 2011 Thailand floods</a> but there was no impact this year.</p>
          
          <p className="text-center" style={{marginBottom: "100px"}}><h4><span className="label label-default">2012 - 2015</span></h4>
          The rate starts increasing much more since most of Thai families are willing to look for a job because the flooding made them need money to look after themselves
          (<a href="http://thaipublica.org/2011/12/world-bank-flood-damage/">See how much cost which Thailand had been lost due to flooding</a>).
          Furthermore, the Male and Female rate is relatively equal since Female needs to struggle to get a job as a reason above.
          </p>

          <Col sm={12} md={6} lg={6}>
            <h1 className="page-header text-center">Bangkok</h1>
            <div id="bangkok-graph" style={{height: "300px", padding: "10px", marginBottom: "50px"}} ></div>
          </Col>

          <Col sm={12} md={6} lg={6}>
          <h1 className="page-header text-center">Central</h1>
            <div id="central-graph" style={{height: "300px", padding: "10px", marginBottom: "50px"}}></div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <h1 className="page-header text-center">Northern</h1>
            <div id="northern-graph" style={{height: "300px", padding: "10px", marginBottom: "50px"}}></div>
          </Col>

          <Col sm={12} md={6} lg={6}>
          <h1 className="page-header text-center">Northeastern</h1>
            <div id="northeastern-graph" style={{height: "300px", padding: "10px", marginBottom: "50px"}}></div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <h1 className="page-header text-center">Southern</h1>
            <div id="southern-graph" style={{height: "300px", padding: "10px", marginBottom: "50px"}}></div>
          </Col>
        </Row>

         <p className="text-center" style={{marginBottom: "30px"}}><strong>Figure 2-6:</strong> The Unemployment Rate categorized by region in Thailand.</p>

         <p className="text-center" style={{marginBottom: "30px"}}>Most of their patterns is similar to the <strong>Figure 1</strong> but there are slight
         differences between each of them depending on the flooding impacts and casualties.</p>
        <Row>
          <Col sm={12} md={12} lg={12}>
          <b>References</b>
          <ul>
            <li>The Labor Force Survey,  National Statistical Office, Ministry of Information and Communication Technology <a href="http://service.nso.go.th/nso/web/statseries/statseries04.html">http://service.nso.go.th/nso/web/statseries/statseries04.html</a></li>
            <li>รายงานเศรษฐกิจและการเงิน ปี 2549 <a href="https://www.bot.or.th/Thai/MonetaryPolicy/EconomicConditions/AnnualReport/AnnualReport/econ_annual06.pdf">https://www.bot.or.th/Thai/MonetaryPolicy/EconomicConditions/AnnualReport/AnnualReport/econ_annual06.pdf</a></li>
            <li>2011 Thailand floods <a href="https://en.wikipedia.org/wiki/2011_Thailand_floods">https://en.wikipedia.org/wiki/2011_Thailand_floods</a></li>
            <li>ธนาคารโลกประเมินน้ำท่วมเสียหาย 1.356 ล้านล้านบาท และใช้เงินฟื้นฟูอีกกว่า 7 แสนล้าน <a href="http://thaipublica.org/2011/12/world-bank-flood-damage/">http://thaipublica.org/2011/12/world-bank-flood-damage/</a></li>
          </ul>
          </Col>
          <Col sm={12} md={12} lg={12}>
            <b>Members</b>
            <ul>
              <li>
                Taweerat Chaiman 5710546259
              </li>
              <li>
                Raksit Mantanacharu 5710546402
              </li>
              <li>
                Natanon Poowanakul 5710546208
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
ReactDOM.render(<Wrapper />, document.getElementById('app'));