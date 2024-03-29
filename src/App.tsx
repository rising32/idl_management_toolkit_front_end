import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogInPage from './pages/auth/LogInPage';
import AuthenticatedRoute from './AuthenticatedRoute';
import MainLayout from './container/MainLayout';
import MainTasks from './pages/tasks/MainTasks';
import PrioritiesPage from './pages/priorities/PrioritiesPage';
import DeliverablesPage from './pages/deliverables/DeliverablesPage';
import StatisticsPage from './pages/statistics/StatisticsPage';
import AccountPage from './pages/account/AccountPage';
import UserProfilePage from './pages/account/UserProfilePage';
import Core from './container/base/Core';
import WorkSettingPage from './pages/account/WorkSettingPage';
import ClientManagePage from './pages/account/ClientManagePage';
import ProjectManagePage from './pages/account/ProjectManagePage';
import TaskManagePage from './pages/account/TaskManagePage';
import TeamManagePage from './pages/team/TeamManagePage';
import AgendaPage from './pages/agenda/AgendaPage';
import FileManagerPage from './pages/file/FileManagerPage';
import SignUpPage from './pages/auth/SignUpPage';
import TermsPage from './pages/other/TermsPage';
import TaskListPage from './pages/tasks/TaskListPage';
import PriorityListPage from './pages/priorities/PriorityListPage';
import CameraPage from './pages/deliverables/CameraPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LogInPage />} />
        <Route path='login' element={<LogInPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route element={<MainLayout />}>
          <Route
            path='tasks'
            element={
              <AuthenticatedRoute>
                <MainTasks />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='tasks/taskList'
            element={
              <AuthenticatedRoute>
                <TaskListPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='priorities'
            element={
              <AuthenticatedRoute>
                <PrioritiesPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='priorities/priorityList'
            element={
              <AuthenticatedRoute>
                <PriorityListPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='priorities/agenda-:wp_id'
            element={
              <AuthenticatedRoute>
                <AgendaPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='deliverables'
            element={
              <AuthenticatedRoute>
                <DeliverablesPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='deliverables/file'
            element={
              <AuthenticatedRoute>
                <FileManagerPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='deliverables/camera:client_id'
            element={
              <AuthenticatedRoute>
                <CameraPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='statistics'
            element={
              <AuthenticatedRoute>
                <StatisticsPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account'
            element={
              <AuthenticatedRoute>
                <AccountPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account/user'
            element={
              <AuthenticatedRoute>
                <UserProfilePage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account/work-setting'
            element={
              <AuthenticatedRoute>
                <WorkSettingPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account/clients'
            element={
              <AuthenticatedRoute>
                <ClientManagePage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account/projects'
            element={
              <AuthenticatedRoute>
                <ProjectManagePage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account/tasks'
            element={
              <AuthenticatedRoute>
                <TaskManagePage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account/teams'
            element={
              <AuthenticatedRoute>
                <TeamManagePage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='account/terms'
            element={
              <AuthenticatedRoute>
                <TermsPage />
              </AuthenticatedRoute>
            }
          />
        </Route>
      </Routes>
      <Core />
    </>
  );
}

export default App;
