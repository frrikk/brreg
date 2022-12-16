import * as React from "react";
import { Label } from "../../components/label.jsx";
import { Input } from "../../components/input.jsx";
import { Button } from "../../components/button.jsx";
import { VerticalSpacer } from "../../components/vertical-spacer";

const ProjectForm = (props) => {
  const { projectInfo, onProjectInfoChange, onSubmit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onProjectInfoChange({
      ...projectInfo,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        labelText="Tittel"
        name="title"
        value={projectInfo.title ?? ""}
        onChange={handleInputChange}
        type="text"
      />
      <VerticalSpacer />
      <FormInput
        labelText="Beskrivelse"
        name="description"
        value={projectInfo.description ?? ""}
        onChange={handleInputChange}
        type="text"
      />
      <VerticalSpacer />

      <FormInput
        labelText="Prosjektstart"
        name="projectStart"
        value={projectInfo.projectStart ?? ""}
        onChange={handleInputChange}
        type="date"
      />
      <VerticalSpacer />

      <Button text="Send" />
    </form>
  );
};

const FormInput = (props) => {
  const { labelText, name, onChange, value, type } = props;
  return (
    <div className="flex flex-col">
      <Label labelText={labelText} htmlFor={name} />
      <Input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
};

export default ProjectForm;
