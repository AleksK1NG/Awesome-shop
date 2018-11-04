import Link from 'next/link';
import ResetPassword from '../components/ResetPassword';

const Reset = props => {
  return (
    <div>
      <p>Reset your password {props.query.resetToken}</p>
      <ResetPassword resetToken={props.query.resetToken}/>
    </div>
  );
};

export default Reset;
