import React from 'react';
import '../style/about.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <h2 style={{marginTop:"100px"}}>Meet the Team</h2>
      

      <div className="team">
      



        {
          teamMembers.map((member) => (
            <div className="member" key={member.id}>

              <>



                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={member.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.email}
                    </Typography>


                  </CardContent>
                  <CardActions>
                    <Button size="small"><a href={member.github} target="_blank" > Open Github</a></Button>
                  </CardActions>
                </Card>


              </>


            </div>
          ))}
      </div>
    </div>
  );
}

export default About;
