import { Suspense } from "react";
import HomeComp from "./components/Home";

export default function Home() {

 return(
  <>
  <Suspense fallback={null}>
  <HomeComp/>
  </Suspense>
  </>
 )
}
