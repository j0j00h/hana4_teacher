import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function Profile({ session, logout }: Props) {
  return (
    <div>
      <h3>{session.loginUser?.name} Logined</h3>
      <button onClick={logout} className='btn btn-primary'>
        Sign Out
      </button>
    </div>
  );
}
