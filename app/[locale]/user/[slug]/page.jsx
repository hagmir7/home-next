import Logout from '@/app/components/Logout';
import React from 'react';
import { notFound } from 'next/navigation';



export async function generateMetadata({ params, searchParams }, parent) {

  // fetch data
  const response = await fetch(`https://api.facepy.com/en/api/user/${params.slug}`);
   if (response.status === 404) {
     return notFound()
   }
  const data = await response.json();
  const user = data.user;

  

  return {
    title: `${user.first_name} ${user.last_name} (@${user.username})`,
    image: 'https://api.facepy.com' + data.profile.avatar,
    alternates: {
      canonical: '/user/' + user.username,
    },
    openGraph: {
      title: `${user.first_name} ${user.last_name} (@${user.username})`,
      images: ['https://api.facepy.com' + data.profile.avatar],
      url: '/user/' + user.username,
      type: 'website',
      image: {
        url: 'https://api.facepy.com' + data.profile.avatar,
        alt: `${user.first_name} ${user.last_name} (@${user.username})`,
        width: 600,
        height: 800,
      },
    },
  }
}

export default async function Profile(props) {

  const response = await fetch(`https://api.facepy.com/en/api/user/${props.params.slug}`);
   if (response.status === 404) {
     return notFound()
   }
  const data = await response.json()
  const user = data.user
  const profile = data.profile;



  return (
    <div className='container mt-3'>
      <div className='main-body'>
        <div className='row gutters-sm'>
          <div className='col-md-4 mb-3'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex flex-column align-items-center text-center'>
                  <img
                    src={`https://api.facepy.com${profile.avatar}`}
                    alt={`${user.first_name} ${user.last_name}`}
                    className='rounded-circle'
                    width='150'
                    height='150'
                    title={`${user.first_name} ${user.last_name}`}
                    loading='eager'
                  />
                  <div className='mt-3'>
                    <h1 className='h4'>
                      {user.first_name} {user.last_name}{' '}
                      <span className='d-none'>(@{user.username})</span>
                    </h1>
                    <p className='text-secondary mb-1'>@{user.username}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card mb-3'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <h2 className='h6 mb-0'>Full Name</h2>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    {user.first_name} {user.last_name}
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h2 className='h6 mb-0'>Username</h2>
                  </div>
                  <div className='col-sm-9 text-secondary'>{user.username}</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h2 className='h6 mb-0'>Email</h2>
                  </div>
                  <div className='col-sm-9 text-secondary'>{user.email}</div>
                </div>
                <hr />
                {profile.phone ? (
                  <>
                    <div className='row'>
                      <div className='col-sm-3'>
                        <h2 className='h6 mb-0'>Phone</h2>
                      </div>
                      <div className='col-sm-9 text-secondary'>
                        {profile.phone}
                      </div>
                    </div>
                    <hr />
                  </>
                ) : (
                  ''
                )}

                {profile.country ? (
                  <>
                    <div className='row'>
                      <div className='col-sm-3'>
                        <h2 className='h6 mb-0'>Address</h2>
                      </div>
                      <div className='col-sm-9 text-secondary'>
                        {profile.city}, {profile.country}
                      </div>
                    </div>
                    <hr />
                  </>
                ) : (
                  ''
                )}

                <div className='row'>
                  <div className='col-sm-12'>
                    <Logout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
