import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0c396cd17fce7f07f81e8bcbcce313~c5_300x300.webp?x-expires=1652925600&x-signature=iKrGoZ6794WzRa4k9umCfdNyNwY%3D"
        alt="Hoaaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Cao Ngoc Cuong</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>ngoccuongaha</span>
      </div>
    </div>
  );
}

export default AccountItem;
