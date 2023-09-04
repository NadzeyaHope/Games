import React from 'react';
import classes from './HomeContainer.module.css';
import Header from '@/components/typography/Header';
import ButtonLink from '@/components/nav/ButtonLink';
import Spacer from '@/components/layout/Spacer';

const HomeContainer = props => {
  return (
    <section className={classes.root}>
      <Header>Reach your goals</Header>
      <Spacer value={20}/>
      <ButtonLink href={'/login'} fullWidth>Login</ButtonLink>
      <Spacer value={20}/>
      <ButtonLink href={'/register'} fullWidth>Create an account</ButtonLink>
    </section>
  );
};

export default HomeContainer;