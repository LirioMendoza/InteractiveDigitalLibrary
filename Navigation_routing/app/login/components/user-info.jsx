'use client';
import React from 'react';

import Signin from './Signin';
import { useSession, signIn, signOut } from 'next-auth/react';
import BasicAppGrid from '@/components/navbar/basic-app-grid';


export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === 'authenticated') {
         return (

            <BasicAppGrid>

            </BasicAppGrid>


          );
     } else {
          return <Signin/>;
     } 
}