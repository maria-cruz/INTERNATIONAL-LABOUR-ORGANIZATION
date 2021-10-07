import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import isEqual from "lodash/isEqual";

interface Query {
  [key: string]: string;
}

interface ParamLinkProps {
  isDefault?: boolean;
  query: Query;
  children?: ReactNode;
  className?: string;
  props?: any;
}

const ParamLink = ({
  query,
  children,
  className = "",
  isDefault = false,
}: ParamLinkProps) => {
  const { pathname, query: currentQuery } = useRouter();

  const isActiveDefault =
    isEqual({}, currentQuery) || isEqual(query, currentQuery);
  const isActive = isDefault ? isActiveDefault : isEqual(query, currentQuery);

  return (
    <Link href={{ pathname: pathname, query: query }} scroll={false}>
      <a className={`${className} ${"param-link"} ${isActive ? "active" : ""}`}>
        {children}
      </a>
    </Link>
  );
};

export default ParamLink;
