import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeadLineInput from "../components/taskAddOrEdit/DeadLineInput";
import MemberInput from "../components/taskAddOrEdit/MemberInput";
import ProjectInput from "../components/taskAddOrEdit/ProjectInput";
import TaskNameInput from "../components/taskAddOrEdit/TaskNameInput";
import { useAddTaskMutation } from "../features/tasks/tasksApi";

const TaskAdd = () => {
    const navigate = useNavigate();

    const [taskName, setTaskName] = useState("");
    const [deadline, setDeadline] = useState("");

    const [projectId, setProjectId] = useState("");
    const [teamMemberId, setTeamMemberId] = useState("");

    const [projects, setProjects] = useState(null);
    const [team, setTeam] = useState(null);

    const [addTask, { isSuccess }] = useAddTaskMutation();

    const handleSubmit = e => {
        e.preventDefault();

        const project = projects?.find(p => p.id == projectId);
        const teamMember = team?.find(t => t.id == teamMemberId);

        console.log(project, teamMember);

        addTask({
            taskName,
            deadline,
            status: "pending",
            projectName: project,
            project: project,
            teamMember: teamMember,
        });
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        }
    }, [isSuccess]);

    return (
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                Create Task for Your Team
            </h1>
            <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <TaskNameInput
                        taskName={taskName}
                        setTaskName={setTaskName}
                    />
                    <MemberInput
                        teamMemberId={teamMemberId}
                        setTeamMemberId={setTeamMemberId}
                        setTeam={setTeam}
                    />
                    <ProjectInput
                        projectId={projectId}
                        setProjectId={setProjectId}
                        setProjects={setProjects}
                    />
                    <DeadLineInput
                        deadline={deadline}
                        setDeadline={setDeadline}
                    />
                    <div className="text-right">
                        <button type="submit" className="lws-submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default TaskAdd;
