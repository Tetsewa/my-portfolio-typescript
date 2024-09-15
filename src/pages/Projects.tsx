import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

// Define the structure of each event in the timeline
interface Event {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
  imageUrl: string;
  demoLink: string;
  sourceCodeLink: string;
}

// Array of events for the timeline
const events: Event[] = [
  {
    title: "Jul 2024",
    cardTitle: "BuurtHub",
    cardSubtitle: "All-inclusive Community Forum App",
    cardDetailedText:
      "A full-stack community forum app where users can stay updated on local events, make posts, and trade goods and services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Adaptable, Vercel, Supabase, Express, MongoDB.",
    imageUrl: "Buurthub.png",
    demoLink: "https://buurt-hub.vercel.app/",
    sourceCodeLink: "https://github.com/Sowjanyakambhampati/BuurtHub",
  },
  {
    title: "May 2024",
    cardTitle: "StyleSavvy",
    cardSubtitle: "Beauty Services Booking App",
    cardDetailedText:
      "A single-page application created with React and Node for booking beauty services. Technologies Used: React, Node JS, Figma, Tailwind CSS, Netlify.",
    imageUrl: "StyleSavvy.png",
    demoLink: "https://stylesavvyproject.netlify.app/",
    sourceCodeLink: "https://github.com/Tetsewa/StyleSavvy-Salon-Project",
  },
  {
    title: "Feb 2024",
    cardTitle: "Fix It Game",
    cardSubtitle: "Single-player Quiz Game",
    cardDetailedText:
      "A quiz game testing basic knowledge of computer hardware parts. Built with HTML, CSS, and JavaScript. Technologies Used: HTML, CSS, JavaScript, Canva.",
    imageUrl: "Fix-It-Game.png",
    demoLink: "https://tetsewa.github.io/Fix-it-Game/",
    sourceCodeLink: "https://github.com/username/fix-it-game",
  },
];

export default function ProjectTimeline(): JSX.Element {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Projects</h1>

      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <Card sx={{ mb: 4 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={event.imageUrl}
                  alt={event.cardTitle}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {event.cardTitle}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {event.cardSubtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {event.cardDetailedText}
                  </Typography>
                  <div className="mt-4 flex space-x-4">
                    <Button
                      component={Link}
                      href={event.demoLink}
                      target="_blank"
                      variant="contained"
                      color="primary"
                    >
                      App Demo
                    </Button>
                    <Button
                      component={Link}
                      href={event.sourceCodeLink}
                      target="_blank"
                      variant="contained"
                      color="secondary"
                    >
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
