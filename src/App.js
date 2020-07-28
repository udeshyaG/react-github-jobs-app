import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamsChange(e) {
    const param = e.target.name;
    const value = e.target.value;

    setPage(1);
    setParams((prevParams) => {
      return {
        ...prevParams,
        [param]: value,
      };
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Github Jobs 👔</h1>

      <SearchForm handleParamsChange={handleParamsChange} params={params} />

      {!loading && jobs.length > 0 && (
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      )}

      {loading && <h2>Loading... ⌚</h2>}
      {error && <h1>Error</h1>}

      {jobs.length > 0 || loading ? (
        jobs.map((job) => {
          return <Job job={job} key={job.id} />;
        })
      ) : (
        <h2>No Jobs Found 😟</h2>
      )}

      {!loading && jobs.length > 0 && (
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      )}
    </Container>
  );
}

export default App;
