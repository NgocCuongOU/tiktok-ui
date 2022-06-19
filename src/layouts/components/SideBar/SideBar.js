import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  HomeActiveIcon,
  LiveIcon,
  LiveActiveIcon,
  FollowingIcon,
  FollowingActiveIcon,
} from '~/components/Icons';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
        <MenuItem
          title="Following"
          icon={<FollowingIcon />}
          activeIcon={<FollowingActiveIcon />}
          to={config.routes.following}
        />
        <MenuItem title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
      </Menu>
    </aside>
  );
}

export default SideBar;
