import { Hearts } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyle >
      <Hearts
        color="#00BFFF"
        height={80}
        width={80}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </LoaderStyle>
  );
};
