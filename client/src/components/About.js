import React from 'react';
import '../style/about.css';

function About() {
  const teamMembers = [
    {
      id: 0,
      name: "Pranay Kumar Nittu",
      email: "nittu@gamil.com",
      image: "https://avatars.githubusercontent.com/u/80027822?v=4", // Replace with actual image paths
      github: "https://github.com/Pranaykumar1729",
    },
    {
      id: 1,
      name: "Khaja Khadeerullah",
      email: "khadeer@gamil.com",
      image: "https://avatars.githubusercontent.com/u/85341844?v=4", 
      github: "https://github.com/khadeerthewizard",
    },
    {
      id: 2,
      name: "Sameer Shaik",
      email: "sameer.kattubadi@gamil.com",
      image: "https://avatars.githubusercontent.com/u/112153702?v=4", 
      github: "https://github.com/SSameer20",
    },
    {
      id: 3,
      name: "Shaik Sohail",
      email: "s.suhail9849@gmail.com",
      image: "https://avatars.githubusercontent.com/u/122728924?v=4", 
      github: "https://github.com/Sohail-9",
    },
  ];

  return (
    <div className="about">
      
      <div className="team">
      <h2>Meet the Team</h2>
        {teamMembers.map((member) => (
          <div className="member" key={member.id}>
            {member.id % 2 === 0 ? ( // Check if id is even
              <>
                <div className="image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="information">
                  <h2>{member.name}</h2>
                  <p>{member.email}</p>
                  <button>
                    <a href={member.github} target="_blank">
                      Profile
                    </a>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="information">
                  <h2>{member.name}</h2>
                  <p>{member.email}</p>
                  <button>
                    <a href={member.github} target="_blank">
                      Profile
                    </a>
                  </button>
                </div>
                <div className="image">
                  <img src={member.image} alt={member.name} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
