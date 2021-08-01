import React from 'react';
import Layout from '../../components/layout';
import SectionTitle from '../../components/section-title';
import Button from '../../components/_root/button';
import * as styles from './styles.module.scss';
import mapImage from '../../assets/images/contact-image.png';

const Contact = () => {
  return (
    <Layout>
      <section className={styles.pageTitle}>
        <div className='container'>
          <SectionTitle.Primary className={styles.pageTitle}>
            About Us
          </SectionTitle.Primary>
          <SectionTitle.Secondary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SectionTitle.Secondary>
        </div>
      </section>
      <section className={styles.yellowArea}>
        <div className='container'>
          <div className={styles.textArea}>
            <h3>Know What You Need?</h3>
            <p>Click here to fill up the for. We will get back to you.</p>
          </div>
          <div>
            <Button className={styles.sendUsButton}>Send Us</Button>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className={styles.content}>
          <div className={styles.mapImage}>
            <img src={mapImage} />
          </div>
          <div className={styles.formArea}>
            <h3>Let's Talk</h3>
            <p>We'd love to chat about what you.</p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type='text' placeholder='Enter your name' />
              <input type='email' placeholder='Enter your email address' />
              <input type='text' placeholder='Enter your phone no.' />
              <textarea
                className={styles.textMessageArea}
                placeholder='Write a message...'
              ></textarea>
              <Button className={styles.submitButton}>Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
