import './styles.css';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className='c-button'>
      {children}
    </button>
  );
}
