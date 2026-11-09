import Card from './components/Card.jsx';



const App = () => {

  const listing = [
    {
      "id": 1,
      "brandLogo": "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      "companyName": "Amazon",
      "datePosted": "5 days ago",
      "jobPost": "Senior UI/UX Designer",
      "tag1": "Senior Level",
      "tag2": "Part Time",
      "pay": "$120/hr",
      "location": "California, USA"
    },
    {
      "id": 2,
      "brandLogo": "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
      "companyName": "Netflix",
      "datePosted": "1 week ago",
      "jobPost": "Product Designer",
      "tag1": "Mid Level",
      "tag2": "Full Time",
      "pay": "$95/hr",
      "location": "California, USA"
    },
    {
      "id": 3,
      "brandLogo": "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      "companyName": "Meta",
      "datePosted": "2 days ago",
      "jobPost": "Senior Frontend Developer",
      "tag1": "Senior Level",
      "tag2": "Remote",
      "pay": "$140/hr",
      "location": "California, USA"
    },
    {
      "id": 4,
      "brandLogo": "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      "companyName": "Google",
      "datePosted": "3 days ago",
      "jobPost": "Software Engineer",
      "tag1": "Mid Level",
      "tag2": "Full Time",
      "pay": "$110/hr",
      "location": "California, USA"
    },
    {
      "id": 5,
      "brandLogo": "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      "companyName": "Apple",
      "datePosted": "1 day ago",
      "jobPost": "Senior Visual Designer",
      "tag1": "Senior Level",
      "tag2": "Part Time",
      "pay": "$125/hr",
      "location": "California, USA"
    },
    {
      "id": 6,
      "brandLogo": "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      "companyName": "Microsoft",
      "datePosted": "6 days ago",
      "jobPost": "Cloud Solutions Architect",
      "tag1": "Senior Level",
      "tag2": "Full Time",
      "pay": "$135/hr",
      "location": "California, USA"
    },
    {
      "id": 7,
      "brandLogo": "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
      "companyName": "Tesla",
      "datePosted": "4 days ago",
      "jobPost": "Product Design Engineer",
      "tag1": "Mid Level",
      "tag2": "Contract",
      "pay": "$100/hr",
      "location": "California, USA"
    },
    {
      "id": 8,
      "brandLogo": "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      "companyName": "Adobe",
      "datePosted": "1 week ago",
      "jobPost": "Creative Director",
      "tag1": "Senior Level",
      "tag2": "Part Time",
      "pay": "$150/hr",
      "location": "California, USA"
    },
    {
      "id": 9,
      "brandLogo": "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
      "companyName": "NVIDIA",
      "datePosted": "2 days ago",
      "jobPost": "AI/ML Engineer",
      "tag1": "Senior Level",
      "tag2": "Full Time",
      "pay": "$160/hr",
      "location": "California, USA"
    },
    {
      "id": 10,
      "brandLogo": "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
      "companyName": "Uber",
      "datePosted": "3 hours ago",
      "jobPost": "Mobile App Developer",
      "tag1": "Mid Level",
      "tag2": "Remote",
      "pay": "$105/hr",
      "location": "California, USA"
    }
  ];

  return (
    <div className="parent">
      <div className="grid">
        {listing.map((el, idx) => {
          return (
            <div key={idx}> 
              <Card 
                brandLogo={el.brandLogo}
                companyName={el.companyName}
                datePosted={el.datePosted}
                jobPost={el.jobPost}
                tag1={el.tag1}
                tag2={el.tag2} 
                pay={el.pay}
                location={el.location} />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default App;