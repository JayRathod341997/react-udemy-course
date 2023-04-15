//  /root/news/{detail}
import { useRouter } from "next/router";
function DetailPage() {

  const route = useRouter();
  console.log(route.query.newsId);  // print id of the url = queryparams

  return <h1> Detail Page</h1>;
}

export default DetailPage;
