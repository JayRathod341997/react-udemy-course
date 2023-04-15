import { Fragment } from "react";
import Link from "next/link";
//  /root/news
function NewsPage() {
  return (
    <Fragment>
      <h1> News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-the-best">NextJs is best</Link>
        </li>
        <li>Something is best</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
