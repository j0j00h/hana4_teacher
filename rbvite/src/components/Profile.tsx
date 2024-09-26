import { ForwardedRef, forwardRef } from 'react';
import { useSession } from '../hooks/session-context';
import { useFetch } from '../hooks/fetch-hook';
// import Button from './atoms/Button';

const Profile = forwardRef(
  ({ xxx }: { xxx: number }, ref: ForwardedRef<HTMLButtonElement>) => {
    const { session, logout } = useSession();
    // console.log('xxx>>>', xxx);

    const data = useFetch('/data/sample.json');
    console.log('🚀  Profile.data:', data);

    return (
      <div className='mb-3 border px-5 py-2'>
        <button
          onClick={logout}
          ref={ref}
          className='btn btn-primary normal-case'
        >
          {session.loginUser?.name} Sign Out {xxx}
        </button>

        {/* <Button onClick={logout} text='SignOut' /> */}
      </div>
    );
  }
);

Profile.displayName = 'Profile';

export default Profile;
