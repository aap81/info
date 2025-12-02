import React, {lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  return (
    <Suspense fallback={renderLoader()}>
      <GithubProfileCard/>
    </Suspense>
  );
}
