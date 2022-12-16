import ProjectPage from "./project-page.jsx";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import * as React from "react";
import moment from "moment";
import { useEffect } from "react";

const initialState = {
  title: "",
  description: "",
  projectStart: moment().format("YYYY-MM-DD"),
};

const Project = () => {
  const [projectInfo, setProjectInfo] = React.useState(initialState);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: () => axios.get("http://localhost:1337/api/projects"),
  });

  const mutation = useMutation({
    mutationFn: (project) => {
      return axios.post("http://localhost:1337/api/projects", project);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setTimeout(() => setProjectInfo(initialState), 1000);
    }
  }, [mutation.isSuccess]);

  if (!data) {
    return null;
  }

  const handleSubmit = () => {
    mutation.mutate({ data: projectInfo });
  };

  return (
    <ProjectPage
      result={data}
      projectInfo={projectInfo}
      onProjectInfoChange={setProjectInfo}
      onSubmit={handleSubmit}
    />
  );
};

export default Project;
