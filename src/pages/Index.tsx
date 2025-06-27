import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * The main login page for the application.
 * It utilizes a centered layout (`MainAppLayout`) to display the `LoginCard` component.
 * This page serves as the primary entry point for users to authenticate.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
