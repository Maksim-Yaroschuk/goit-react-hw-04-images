import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Blocks
      visible={true}
      height="180"
      width="180"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
};
