import React, { useState, useEffect } from 'react';
import { Card, Container, Typography } from '@material-ui/core';

const isMyBirthday = birthdayThisYear => {
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  return currentMonth === 0 && currentDate === 25;
};

const calculateTimeLeft = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const birthdayThisYear = new Date(currentYear, 0, 25);

  if (isMyBirthday(birthdayThisYear)) {
    return null;
  }

  const isBirthdayPassed = now.getTime() - birthdayThisYear.getTime() > 0;
  const yearToUse = isBirthdayPassed ? currentYear + 1 : currentYear;
  const myNextBirthday = new Date(yearToUse, 0, 25);
  const difference = myNextBirthday.getTime() - now.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const App = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  if (!timeLeft) {
    return (
      <div>
        <p>Happy birthday to me!</p>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <Container>
        <Card
          raised
          style={{
            margin: '100px',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" style={{ padding: '20px' }}>
            When is my birthday?
          </Typography>
          <Typography variant="h4">
            {days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds
          </Typography>
        </Card>
      </Container>
    </div>
  );
};

export default App;
