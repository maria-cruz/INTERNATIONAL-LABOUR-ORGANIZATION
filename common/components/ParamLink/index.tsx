import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import isEqual from "lodash/isEqual";

interface Query {
  [key: string]: string;
}

interface ParamLinkProps {
  query: Query;
  exact?: boolean;
  children?: ReactNode;
  className?: string;
  props?: any;
}

const ParamLink = ({ query, children, className = "" }: ParamLinkProps) => {
  const { pathname, query: currentQuery } = useRouter();
  console.log("query: ", query);
  console.log("currentQuery: ", currentQuery);
  const isActive = isEqual(query, currentQuery);
  //const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={{ pathname: pathname, query: query }} scroll={false}>
      <a className={`${className} ${"param-link"} ${isActive ? "active" : ""}`}>
        {children}
      </a>
    </Link>
  );
};

export default ParamLink;
