import { Heading } from "../../components/heading";
import { Divider } from "../../components/divider";
import { Text } from "../../components/text.jsx";
import { Card } from "../../components/card.jsx";
import { VerticalSpacer } from "../../components/vertical-spacer";
import ProjectForm from "./project-form.jsx";

const ProjectPage = (props) => {
  const { result, projectInfo, onProjectInfoChange, onSubmit } = props;

  return (
    <div>
      <Heading type="h1">Prosjekt</Heading>
      <ProjectForm
        projectInfo={projectInfo}
        onProjectInfoChange={onProjectInfoChange}
        onSubmit={onSubmit}
      />
      <VerticalSpacer />
      <Divider width="full" />
      <Text size="lg">Prosjektinfo</Text>
      <ProjectResult result={result} />
    </div>
  );
};

const ProjectResult = (props) => {
  const { result } = props;

  const items = result.data.data;

  return (
    <>
      {items.map((item) => (
        <Card key={item.id}>
          <Text>{item.attributes.title}</Text>
          <Text>{item.attributes.description}</Text>
          <Text>{item.attributes.projectStart}</Text>
        </Card>
      ))}
    </>
  );
};

export default ProjectPage;
