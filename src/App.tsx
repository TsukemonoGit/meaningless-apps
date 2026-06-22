import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import EmptyButton from './components/apps/EmptyButton';
import FictionalPlaceMaker from './components/apps/FictionalPlaceMaker';
import MeaninglessTitleMaker from './components/apps/MeaninglessTitleMaker';
import IrrelevantChoice from './components/apps/IrrelevantChoice';
import DoNothingTimer from './components/apps/DoNothingTimer';
import TodayExistenceReport from './components/apps/TodayExistenceReport';
import NoRegretJournal from './components/apps/NoRegretJournal';
import UnsupportingCalendar from './components/apps/UnsupportingCalendar';
import MysteriousOracleGacha from './components/apps/MysteriousOracleGacha';
import ConceptConverter from './components/apps/ConceptConverter';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'empty-button', element: <EmptyButton /> },
      { path: 'place-maker', element: <FictionalPlaceMaker /> },
      { path: 'title-maker', element: <MeaninglessTitleMaker /> },
      { path: 'choice', element: <IrrelevantChoice /> },
      { path: 'timer', element: <DoNothingTimer /> },
      { path: 'existence-report', element: <TodayExistenceReport /> },
      { path: 'journal', element: <NoRegretJournal /> },
      { path: 'calendar', element: <UnsupportingCalendar /> },
      { path: 'gacha', element: <MysteriousOracleGacha /> },
      { path: 'converter', element: <ConceptConverter /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
