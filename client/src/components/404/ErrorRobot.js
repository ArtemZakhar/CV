import img from './error.gif';

const ErrorRobot = () => {
  return (
    <img alt="error" style={{
      display:'block',
      width: '250px',
      height: '250px',
      objectFit: 'contain',
      margin: '0 auto',
      backgroundColor: "#EFECEC"
    }} src={img} />
  )
}

export default ErrorRobot;