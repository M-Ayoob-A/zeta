import logo from './logo.svg';
import './App.css';


const About = () => {
  return <>
    <div style={{backgroundColor: 'orange', height: '30vh'}}>
      image over here

    </div>
    <div style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '40px'}}>
      Our name spells it out - we make high-quality examination papers and questions for high schools
      <br />
      We currently only produce Mathematics papers, but we do plan to extend our services to other subjects, primarily English and the Sciences
      <br />
      If you would like to see our order form and proce list for the next batch of exams, you'll find it here
      <br />
      If you've bought some of our resources and would like to provide feedback, or if you simply have any specific questions, please contact us here
      <br />
      <br />

      About the writer
    </div>
  
  </>
}


function App() {
  return (
    <div style={{height: '100vh'}}>
      <div className="header" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100px', width: '100%'}}>
        <div style={{float: 'left'}}>
          <img src={logo} style={{width: '100px', height: '100px'}}/>
        </div>

        <div style={{display: 'flex', float: 'right'}}>
          <div style={{textAlign: 'center', width: '75px'}}>
            About
          </div>
          <div style={{textAlign: 'center', width: '75px'}}>
            Contact
          </div>
          <div style={{textAlign: 'center', width: '120px'}}>
            Order papers
          </div>
        </div>
      </div>

      <div className="cover-image" style={{width: '100%', height: '50vh', backgroundColor: 'orange'}}>
        Cover image
      </div>

      <div className="text-segment" style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: '40px'}}>
        Hello from Zeta Examination Materials! We've started off in 2023 with our first set of HSC Mathematics trial papers for the Advanced and Extension 1 syllabi.
      </div>

      <div className="footer" style={{position: 'fixed', width: '100%', bottom: '0', backgroundColor: '#dddddd'}}>
        Copyright © 2023 Zeta Examination Materials
      </div>
    </div>
  );
}

export default App;
