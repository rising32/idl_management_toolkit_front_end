import axios from 'axios';
import { ClientState } from '../../modules/client';
import { DeliverableState } from '../../modules/deliverable';
import { ClientProjectState, ProjectState } from '../../modules/project';
import { TaskState } from '../../modules/task';
import { UserInfoState } from '../../modules/user';
import { PriorityState } from '../../modules/weekPriority';
import { clientURL, deliverableURL, priorityURL, projectURL, taskURL, teamURL } from './URL';

const host = process.env.REACT_APP_API_HOST;
const apiClient = axios.create({
  baseURL: host,
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
});

export default apiClient;

interface UserClientListState {
  user_id: number;
  clients: ClientState[];
}
export const sendGetMyClients = (user_id: number) =>
  apiClient.post<{
    user_id: number;
    clients: ClientState[];
  }>(clientURL.getMyClients, { user_id });

export const sendProjectOfCreater = (creator_id: number) =>
  apiClient.post<{
    project: ProjectState[];
  }>(projectURL.getUserProject, { creator_id });

export const sendProjectWithClientId = (creator_id: number, client_id: number) =>
  apiClient.post<{
    project: ProjectState[];
  }>(projectURL.getProjectWithClientId, { creator_id, client_id });

export const sendTaskWithProjectId = (creator_id: number, project_id: number) =>
  apiClient.post<{ task: TaskState[] }>(taskURL.getTaskListWithProjectId, { creator_id, project_id });

export const sendTeamMembers = (owner_id: number) =>
  apiClient.post<{
    owner_id: number;
    member: UserInfoState[];
  }>(teamURL.getTeamMember, { owner_id });

export const sendSetClient = (client_id: number, project_id: number) =>
  apiClient.post<ClientProjectState>(projectURL.setClient, { client_id, project_id });

export const sendUpdateTask = (params: TaskState) => apiClient.post<TaskState>(taskURL.updateTask, params);

export const sendPriorityByWeek = (user_id: number, week: number) =>
  apiClient.post<{
    user_id: number;
    priority: PriorityState[];
  }>(priorityURL.getPriorityByWeek, { user_id, week });

export const sendCreatePriority = (params: PriorityState) => apiClient.post<PriorityState>(priorityURL.createPriority, params);
export const sendPastNotAchievedPriorities = (user_id: number, week: number) =>
  apiClient.post<{
    user_id: number;
    priority: PriorityState[];
  }>(priorityURL.getPastNotAchievedPriorities, { user_id, week });

export const sendDeliverablesWithPlanedDate = (user_id: number, planned_end_date: Date) =>
  apiClient.post<{
    user_id: number;
    deliverable: DeliverableState[];
  }>(deliverableURL.getDeliverablesWithPlanedDate, { user_id, planned_end_date });

export const sendMyBeforePriorities = (user_id: number, week: number) =>
  apiClient.post<{
    user_id: number;
    priority: PriorityState[];
  }>(priorityURL.getMyBeforePriorities, { user_id, week });

export const sendCreateDeliverable = (params: DeliverableState) =>
  apiClient.post<DeliverableState>(deliverableURL.createDeliverable, params);
