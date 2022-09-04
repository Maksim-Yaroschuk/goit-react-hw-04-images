import { Blocks } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
