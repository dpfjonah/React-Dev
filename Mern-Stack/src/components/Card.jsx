import { Bookmark } from 'lucide-react';

const Card = (pull) => {
  return (
    <div className="card">
        <div>
        <div className="top">
          <img src={pull.brandLogo} alt="" />
          <button>Save <Bookmark size={15} /> </button>
        </div>
        <div className="center">
          <h3> {pull.companyName} <span> {pull.datePosted} </span> </h3>
          <h4>{pull.jobPost} </h4>
          <div className="tags">
            <h4>{pull.tag1} </h4>
            <h4>{pull.tag2} </h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h2>{pull.pay} </h2>
            <span>{pull.location} </span>
          </div>
          <button> Apply Now </button>
        </div>
      </div>
  )
}

export default Card;