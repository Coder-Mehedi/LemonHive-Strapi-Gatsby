import React from 'react';
import { graphql, Link } from 'gatsby';
import logo from '../../assets/images/logo.png';
import * as styles from './styles.module.scss';
import { useStaticQuery } from 'gatsby';
import { IMenuItem } from '../../utils/interfaces';
import { getFullImageUrl } from '../../utils/getFullImageUrl';

const Nav = () => {
  const data = useStaticQuery(query);

  return (
    <nav className={styles.nav}>
      {/* <Link to='/' activeClassName={styles.active}>
        <img src={getFullImageUrl(data.strapiGlobal.logo.url)} alt='logo' />
      </Link> */}

      <div className={styles.navItem}>
        {data.allStrapiMenu.edges[0].node.menu_item.map(
          (menuItem: IMenuItem) => (
            <Link to={menuItem.url} activeClassName={styles.active}>
              {menuItem.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

const query = graphql`
  query {
    allStrapiMenu {
      edges {
        node {
          id
          menu_item
        }
      }
    }
    # strapiGlobal {
    #   id
    #   logo {
    #     url
    #   }
    # }
  }
`;

export default Nav;
