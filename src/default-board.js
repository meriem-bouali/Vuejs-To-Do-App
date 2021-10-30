import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "To do",
      tasks: [
        {
          description: "",
          name: "Data API",
          id: uuid(),
          userAssigned: null,
        },
        {
          description: "",
          name: "Plugin Architecture",
          id: uuid(),
          userAssigned: null,
        },
        {
          description: "",
          name: "Notebook Module",
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: "In-progress",
      tasks: [
        {
          description: "",
          name: "Configuration Editor",
          id: uuid(),
          userAssigned: null,
        },
        {
          description: "",
          name: "Install JIRA",
          id: uuid(),
          userAssigned: null,
        },
        {
          description: "",
          name: "Upgrade GitLab",
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: "done",
      tasks: [
        {
          description: "",
          name: "Clean Up Home Servers",
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
  ],
};
