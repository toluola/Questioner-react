import React from "react";

const SideBarQuestion = () => {
  return (
    <div className='sidebar-meetup'>
      <h3 className="meetup-heading">Top Questions</h3>
      <hr />
      <div className="meetup-side-card">
        <div>
          <i className="fa fa-arrow-up meetup-arrow" aria-hidden="true">23</i>
          <i className="fa fa-arrow-down meetup-arrow" aria-hidden="true">23</i>
          <i className="fa fa-comments meetup-arrow" aria-hidden="true">23</i>
        </div>
        <div>
          <p className='meetup-side-content'>When is the Meetup Starting</p> 
        </div>
      </div>
    </div>
  );
};

export default SideBarQuestion;
