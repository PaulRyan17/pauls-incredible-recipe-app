import React from 'react';
import Button from './button';
import RecipifyLogo from './recipify-logo';
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center flex flex-col items-center">
        <RecipifyLogo />
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Discover Delicious Recipes</h1>
        <p className="mb-12 text-lg text-gray-700">
          Cooking made easy! Find and create amazing dishes with ingredients you have at home.
        </p>
        <Link href="/recipe-form">
          <Button type="primary">
            Start Cooking
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;