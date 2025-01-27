import React from "react";
import NoPrint from "./components/no_print/NoPrint";
import Profile from "./profiles/Profile";

export function ResumeCanvas({ theme }) {
  const [title, setTitle] = React.useState(Profile.i().getActiveProfile().name);
  const [isEditMode, setEditMode] = React.useState(Profile.i().isEditMode);
  const [resumeVersion, setResumeVersion] = React.useState(0);

  Profile.i().subscribe(() => {
    setTitle(Profile.i().getActiveProfile().name);
    setEditMode(Profile.i().isEditMode);
    setResumeVersion(resumeVersion + 1);
  });

  return <div>
    <NoPrint>
      <h1 name={resumeVersion}>{title} {isEditMode && "(Editando)"}</h1>
    </NoPrint>
    {theme.render()}
  </div>;
}
