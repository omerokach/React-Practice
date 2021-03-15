import IssueComponent from "./components/IssueComponent";
import "./issue.css"
const issuesArray = [
  {
    title: "there is and issue",
    id: "#1234",
    timeCreated: new Date("2020-02-06"),
    userName: "omer",
    Tags: ["issue: bug report", "needs triage"],
    numOfComments: 1,
  },
  {
    title: "you have got huge problem mate",
    id: "#1234",
    timeCreated: new Date("2020-07-06"),
    userName: "theWolf",
    Tags: [],
    numOfComments: 2,
  },
  {
    title: "there is and issue",
    id: "#1234",
    timeCreated: new Date("2020-12-06"),
    userName: "omer",
    Tags: ["issue: bug report", "needs triage"],
    numOfComments: 3,
  },
  {
    title: "there is and issue",
    id: "#1234",
    timeCreated: new Date("2020-12-06"),
    userName: "T-bag",
    Tags: ["issue: proposal", "needs triage"],
    numOfComments: 7,
  },
  {
    title: "you have got huge problem mate",
    id: "#1234",
    timeCreated: new Date("2021-01-06"),
    userName: "omer",
    Tags: ["issue: proposal", "needs triage"],
    numOfComments: 3,
  },
  {
    title: "you have got huge problem mate",
    id: "#1234",
    timeCreated: new Date("2021-01-06"),
    userName: "buros",
    Tags: [],
    numOfComments: 0,
  },
  {
    title: "there is and issue",
    id: "#1234",
    timeCreated: new Date("2021-01-06"),
    userName: "willey",
    Tags: ["issue: bug report", "needs invastigation"],
    numOfComments: 8,
  },
  {
    title: "you have got huge problem mate",
    id: "#1234",
    timeCreated: new Date("2021-02-06"),
    userName: "jones",
    Tags: ["issue: bug report", "needs triage"],
    numOfComments: 0,
  },
];

function App() {
  return (
    <div className="App">
      {issuesArray.map((issue, i) => (
        <IssueComponent
          title={issue.title}
          id={issue.id}
          timeCreated={issue.timeCreated}
          userName={issue.userName}
          Tags={issue.Tags}
          numOfComments={issue.numOfComments}
          key ={`isuueKey-${i}`}
        />
      ))}
    </div>
  );
}

export default App;
