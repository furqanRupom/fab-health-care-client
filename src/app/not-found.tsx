import * as React from 'react';

interface INotFoundPageProps {
}

const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = (props) => {
  return <h3 className="text-3xl text-red-400 font-bold">Page not found</h3>;
};

export default NotFoundPage;
