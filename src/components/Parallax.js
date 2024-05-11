import React from 'react'
import './Parallax.css'
const Parallax = () => {
  return (
    <div>
        <section class="parallax-section">
  <div class="container parallax-content">
    <div class="row">
      <div class="col-md-6">
        <h2>Learn About Agency</h2>
        <p>We’re Reliable & Cost Efficiant Recruitment Agency</p>
        <a href="#" class="btn btn-dark">Discover More</a>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-end">
        <div>
          <h3>What We Provide to Recruiters</h3>
          <ul class="list-group list-group-flush">
            <li>
              <i class="fas fa-check-circle text-success"></i>
              Large Pool of Candidates.
            </li>
            <li >
              <i class="fas fa-check-circle text-success"></i>
              In depth analysis report of Candidates.
            </li>
            <li >
              <i class="fas fa-check-circle text-success"></i>
              Full Report.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row counter-row">
      <div class="col-md-3 text-center">
        <span class="counter">20+</span>
        <p>Brands who trusts us</p>
      </div>
      <div class="col-md-3 text-center">
        <span class="counter">96%</span>
        <p>Retention Rate </p>
      </div>
      <div class="col-md-3 text-center">
        <span class="counter">98%</span>
        <p>Client Satisfaction rate</p>
      </div>
      <div class="col-md-3 text-center">
        <span class="counter">7 days</span>
        <p>Time to fill</p>
      </div>
      <div class="col-md-3 text-center">
        <span class="counter">60+</span>
        <p>No. of Placements</p>
      </div>
      <div class="col-md-3 text-center">
        <span class="counter">99%</span>
        <p>Candidate Satisfaction Rate</p>
      </div>
      <div class="col-md-3 text-center">
        <span class="counter">5</span>
        <p>Submission to Placement Ratio</p>
      </div>
      <div class="col-md-3 text-center">
        <span class="counter">2</span>
        <p>No. of US firms for whom we built delivery centres in India</p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Parallax