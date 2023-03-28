import { PropsWithChildren } from 'react';
import NavBar from '../NavBar';
import './page.css';
interface IPageProps {
  useAbsoluteCenter?: boolean;
  showNavBar?: boolean;
  pageTitle?: string;
}
const Page = ({
  children,
  useAbsoluteCenter = false,
  showNavBar = true,
  pageTitle = "...",
}:PropsWithChildren<IPageProps>) => {
  let className = ['page'];
  if (useAbsoluteCenter) {
    className.push('absoluteCenter');
  }
  if (showNavBar) {
    className.push('withNavBar');
  }


  return (
    <>
      {showNavBar && <NavBar title={pageTitle} />}
      <section className={className.join(' ')}>
        <section className="content">
          {children}
        </section>
      </section>
    </>
  );
}

export default Page;
