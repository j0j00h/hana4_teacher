import { ReactNode, useState } from 'react';

type TitleProps = {
  text: string;
  name: string;
};

const Title = ({ text, name }: TitleProps) => {
  console.log('Titttttttttttttt!!');
  return (
    <h1>
      {text} {name}
    </h1>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  console.log('bodddddddd!!!');
  return (
    <div className='red' style={{ color: 'blue' }}>
      {children}
    </div>
  );
};

export default function Hello() {
  const [myState, setMyState] = useState(0);
  let v = 1;
  console.log('********', v, myState);

  return (
    <>
      <Title text='Hi~' name='React' />
      <Body>
        This is Hello Body Component. {v} - {myState}
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState(myState + 1);
          // console.log('v/myState=', v, myState);
        }}
      >
        Click Here!
      </button>
    </>
  );
}
