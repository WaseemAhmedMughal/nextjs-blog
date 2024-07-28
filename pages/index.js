import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[<b><i>GIAIC | Next.js Enthusiast</i></b> <br />
          <em>Hello!</em> <b><br></br>I'm Waseem Ahmed Mughal,</b> <br></br>a passionate web developer with 
          a keen interest in building modern and responsive web applications 
          using Next.js and React. HTML. Javascript. CSS. My journey in web development has equipped
           me with a solid understanding of both front-end and back-end 
           technologies, allowing me to create seamless and efficient web experiences.<br />

This is a sample website – you’ll be building a site like this on our
 Next.js tutorial. I've created this project to demonstrate my skills and 
 to help others learn how to build robust and scalable web applications 
 using the latest technologies. Feel free to explore the code and live demo of 
 this project.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
