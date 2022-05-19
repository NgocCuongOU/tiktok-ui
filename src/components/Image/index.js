import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, fallback: customFallback = images.noImage, className, ...passProps }, ref) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...passProps}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
