import React from 'react';
import classes from './HomeContainer.module.css';
import Header from '@/components/typography/Header';
import ButtonLink from '@/components/nav/ButtonLink';
import Spacer from '@/components/layout/Spacer';
import HomeOr from "@/sections/home/HomeOr";

const HomeContainer = props => {
  return (
    <section className={classes.root}>
      <Header>Reach your goals</Header>
      <Spacer value={100}/>
      <ButtonLink href={'/login'} fullWidth>Login</ButtonLink>
      <Spacer value={10}/>
        <HomeOr/>
        <Spacer value={10}/>
      <ButtonLink href={'/register'} fullWidth>Create an account</ButtonLink>
    </section>
  );
};

export default HomeContainer;