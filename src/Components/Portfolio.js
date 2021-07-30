import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://icfrotterdamnoord.com" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/06.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://icfrotterdamnoord.nl/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                      </div>
                      
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://icfrotterdam.nl" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/08.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://icfrotterdam.nl/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        
                      </div>
                      
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://icfdelft.nl" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/07.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://icfdelft.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        
                      </div>
                      
                    </ul>
                  </div>
                </article>
              </div>
            
              
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
