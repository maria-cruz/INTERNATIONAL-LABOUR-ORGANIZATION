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
  scroll?: boolean;
  shallow?: boolean;
}

const ParamLink = ({
  query,
  children,
  className = "",
  isDefault = false,
  scroll = false,
  shallow = false,
}: ParamLinkProps) => {
  const { pathname, query: currentQuery } = useRouter();

  const isActiveDefault =
    isEqual({}, currentQuery) || isEqual(query, currentQuery);
  const isActive = isDefault ? isActiveDefault : isEqual(query, currentQuery);

  return (
    <Link
      href={{ pathname: pathname, query: { ...currentQuery, ...query } }}
      scroll={scroll}
      shallow={shallow}
    >
      <a className={`${className} ${"param-link"} ${isActive ? "active" : ""}`}>
        {children}
      </a>
    </Link>
  );
};

export default ParamLink;
