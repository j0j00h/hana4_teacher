import { Session } from '../App.tsx';

type Props = {
  session: Session;
  logout: () => void;
};

export default function My({ session, logout }: Props) {
  return (
    <>
      <h3>{session.loginUser?.name} Logined</h3>
      <button onClick={logout}>Log Out</button>

      <ul>
        {session.cart.map(({ id, name, price }) => (
          <li key={id}>
            {name} <small>({price.toLocaleString()})</small>
          </li>
        ))}
      </ul>
    </>
  );
}
