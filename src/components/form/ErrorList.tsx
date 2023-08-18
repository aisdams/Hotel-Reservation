type ErrorListProps = {
  errors: any;
};

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
  return (
    <ul className=''>
      {Object.entries(errors).map(([key, value]: any) => {
        return (
          <li key={key} className='text-sm text-red-600'>
            {value.message}
          </li>
        );
      })}
    </ul>
  );
};
export default ErrorList;
